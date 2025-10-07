const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 2200;

// Middleware
app.use(cors());
app.use(express.json());
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

// API Routes

// GET - Fetch weather data for a city
app.get('/api/weather/:city', async (req, res) => {
  const city = req.params.city;

  if (!city || city.trim() === '') {
    return res.status(400).json({ 
      success: false, 
      error: 'City name is required' 
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

    res.json({
      success: true,
      city: city,
      weatherData: weatherData,
      timestamp: searchEntry.timestamp
    });

  } catch (error) {
    console.error('Error fetching weather:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch weather data. Please try again later.'
    });
  }
});

// GET - Get search history
app.get('/api/history', (req, res) => {
  try {
    const storage = readStorage();
    res.json({
      success: true,
      history: storage.searches
    });
  } catch (error) {
    console.error('Error reading history:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to read history'
    });
  }
});

// DELETE - Clear search history
app.delete('/api/history', (req, res) => {
  try {
    writeStorage({ searches: [] });
    res.json({
      success: true,
      message: 'History cleared'
    });
  } catch (error) {
    console.error('Error clearing history:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to clear history'
    });
  }
});

// DELETE - Delete specific search from history
app.delete('/api/history/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const storage = readStorage();
    
    storage.searches = storage.searches.filter(search => search.id !== id);
    writeStorage(storage);

    res.json({
      success: true,
      message: 'Search deleted'
    });
  } catch (error) {
    console.error('Error deleting search:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete search'
    });
  }
});

// GET - Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    port: PORT
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Weather App server is running on http://localhost:${PORT}`);
  console.log(`📊 API endpoints:`);
  console.log(`   GET    http://localhost:${PORT}/api/weather/:city`);
  console.log(`   GET    http://localhost:${PORT}/api/history`);
  console.log(`   DELETE http://localhost:${PORT}/api/history`);
  console.log(`   DELETE http://localhost:${PORT}/api/history/:id`);
  console.log(`   GET    http://localhost:${PORT}/api/health`);
});
