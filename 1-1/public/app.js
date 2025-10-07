// API Base URL - automatically detects the correct URL for both local and CodeSandbox
const API_BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:2200/api'
  : `${window.location.protocol}//${window.location.host}/api`;

// DOM Elements
const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const loadingElement = document.getElementById('loading');
const weatherInfo = document.getElementById('weather-info');
const errorMessage = document.getElementById('error-message');
const historyList = document.getElementById('history-list');
const clearHistoryButton = document.getElementById('clear-history');

// State
let isLoading = false;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  loadHistory();
  
  // Event listeners
  searchButton.addEventListener('click', handleSearch);
  cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });
  clearHistoryButton.addEventListener('click', handleClearHistory);
});

// Handle search
async function handleSearch() {
  const city = cityInput.value.trim();

  if (!city) {
    showError('Please enter a city name.');
    return;
  }

  if (isLoading) return;

  try {
    setLoading(true);
    hideError();
    hideWeatherInfo();

    const response = await fetch(`${API_BASE_URL}/weather/${encodeURIComponent(city)}`);
    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || 'Failed to fetch weather data');
    }

    showWeatherInfo(data);
    loadHistory(); // Refresh history after new search

  } catch (error) {
    console.error('Error:', error);
    showError(error.message || 'Failed to fetch weather data. Please try again later.');
  } finally {
    setLoading(false);
  }
}

// Load search history
async function loadHistory() {
  try {
    const response = await fetch(`${API_BASE_URL}/history`);
    const data = await response.json();

    if (!data.success) {
      throw new Error('Failed to load history');
    }

    displayHistory(data.history);

  } catch (error) {
    console.error('Error loading history:', error);
  }
}

// Display history
function displayHistory(history) {
  if (!history || history.length === 0) {
    historyList.innerHTML = '<p class="no-history">No search history yet</p>';
    return;
  }

  historyList.innerHTML = history.map(item => `
    <div class="history-item">
      <div class="history-content">
        <div class="history-city">📍 ${escapeHtml(item.city)}</div>
        <div class="history-weather">${escapeHtml(item.weatherData)}</div>
        <div class="history-time">🕒 ${formatDate(item.timestamp)}</div>
      </div>
      <div class="history-actions">
        <button class="btn btn-delete" onclick="deleteHistoryItem(${item.id})">
          Delete
        </button>
      </div>
    </div>
  `).join('');
}

// Delete history item
async function deleteHistoryItem(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/history/${id}`, {
      method: 'DELETE'
    });
    const data = await response.json();

    if (!data.success) {
      throw new Error('Failed to delete item');
    }

    loadHistory(); // Refresh history

  } catch (error) {
    console.error('Error deleting item:', error);
    alert('Failed to delete item. Please try again.');
  }
}

// Clear all history
async function handleClearHistory() {
  if (!confirm('Are you sure you want to clear all search history?')) {
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/history`, {
      method: 'DELETE'
    });
    const data = await response.json();

    if (!data.success) {
      throw new Error('Failed to clear history');
    }

    loadHistory(); // Refresh history

  } catch (error) {
    console.error('Error clearing history:', error);
    alert('Failed to clear history. Please try again.');
  }
}

// UI Helper Functions
function setLoading(loading) {
  isLoading = loading;
  searchButton.disabled = loading;
  
  if (loading) {
    loadingElement.classList.remove('hidden');
    searchButton.textContent = 'Searching...';
  } else {
    loadingElement.classList.add('hidden');
    searchButton.textContent = 'Search';
  }
}

function showWeatherInfo(data) {
  weatherInfo.innerHTML = `
    <div>
      <strong>${escapeHtml(data.city)}</strong><br>
      ${escapeHtml(data.weatherData)}
    </div>
  `;
  weatherInfo.classList.remove('hidden');
}

function hideWeatherInfo() {
  weatherInfo.classList.add('hidden');
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove('hidden');
}

function hideError() {
  errorMessage.classList.add('hidden');
}

// Utility Functions
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now - date;
  
  // Less than 1 minute
  if (diff < 60000) {
    return 'Just now';
  }
  
  // Less than 1 hour
  if (diff < 3600000) {
    const minutes = Math.floor(diff / 60000);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }
  
  // Less than 24 hours
  if (diff < 86400000) {
    const hours = Math.floor(diff / 3600000);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
  
  // More than 24 hours
  return date.toLocaleString();
}
