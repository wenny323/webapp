const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3500;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Storage file path
const STORAGE_FILE = path.join(__dirname, 'search-history.json');

// Initialize storage file if it doesn't exist
if (!fs.existsSync(STORAGE_FILE)) {
  fs.writeFileSync(STORAGE_FILE, JSON.stringify({ searches: [] }));
}

// Helper function to read storage
function readStorage() {
  try {
    const data = fs.readFileSync(STORAGE_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading storage:', error);
    return { searches: [] };
  }
}

// Helper function to write storage
function writeStorage(data) {
  try {
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing storage:', error);
    return false;
  }
}

// Helper function to format time ago
function timeAgo(timestamp) {
  const now = new Date();
  const date = new Date(timestamp);
  const diff = now - date;
  
  if (diff < 60000) return 'Just now';
  if (diff < 3600000) {
    const minutes = Math.floor(diff / 60000);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }
  if (diff < 86400000) {
    const hours = Math.floor(diff / 3600000);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
  return date.toLocaleString();
}

// Routes

// GET - Home page
app.get('/', (req, res) => {
  const storage = readStorage();
  const history = storage.searches.map(item => ({
    ...item,
    timeAgo: timeAgo(item.timestamp)
  }));
  
  res.render('index', {
    weatherData: null,
    searchedCity: null,
    history: history,
    error: null
  });
});

// POST - Search weather
app.post('/search', async (req, res) => {
  const city = req.body.city;
  
  if (!city || city.trim() === '') {
    const storage = readStorage();
    const history = storage.searches.map(item => ({
      ...item,
      timeAgo: timeAgo(item.timestamp)
    }));
    
    return res.render('index', {
      weatherData: null,
      searchedCity: null,
      history: history,
      error: 'Please enter a city name'
    });
  }

  try {
    // Fetch weather data from wttr.in
    const apiUrl = `https://wttr.in/${city}?format=%t+%w+%h`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const weatherData = await response.text();

    // Save search to history
    const storage = readStorage();
    const searchEntry = {
      id: Date.now(),
      city: city,
      weatherData: weatherData,
      timestamp: new Date().toISOString()
    };

    storage.searches.unshift(searchEntry);
    
    // Keep only last 10 searches
    if (storage.searches.length > 10) {
      storage.searches = storage.searches.slice(0, 10);
    }

    writeStorage(storage);

    // Render with updated data
    const history = storage.searches.map(item => ({
      ...item,
      timeAgo: timeAgo(item.timestamp)
    }));

    res.render('index', {
      weatherData: weatherData,
      searchedCity: city,
      history: history,
      error: null
    });

  } catch (error) {
    console.error('Error fetching weather:', error);
    
    const storage = readStorage();
    const history = storage.searches.map(item => ({
      ...item,
      timeAgo: timeAgo(item.timestamp)
    }));
    
    res.render('index', {
      weatherData: null,
      searchedCity: city,
      history: history,
      error: 'Failed to fetch weather data. Please try again later.'
    });
  }
});

// POST - Clear history
app.post('/clear-history', (req, res) => {
  writeStorage({ searches: [] });
  res.redirect('/');
});

// POST - Delete specific search
app.post('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const storage = readStorage();
  
  storage.searches = storage.searches.filter(search => search.id !== id);
  writeStorage(storage);
  
  res.redirect('/');
});

// GET - Health check (for debugging)
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    port: PORT,
    mode: 'Server-Side Rendering'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Weather App (Backend Rendering) is running on http://localhost:${PORT}`);
  console.log(`📊 Mode: Server-Side Rendering with EJS`);
  console.log(`🔗 Open http://localhost:${PORT} in your browser`);
});
