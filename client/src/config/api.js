// API Configuration
const API_CONFIG = {
  // Get base URL from environment variable, fallback to localhost for development
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",

  // API endpoints
  endpoints: {
    terms: "/api/terms",
    pricelist: "/api/pricelist",
  },

  // Timeout configuration
  timeout: 10000,

  // Headers
  headers: {
    "Content-Type": "application/json",
  },
};

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.baseURL}${endpoint}`;
};

// Helper function to get endpoint URL
export const getEndpoint = (name) => {
  return API_CONFIG.endpoints[name];
};

// Export configuration
export default API_CONFIG;

