import axios from "axios";
import API_CONFIG, { getEndpoint } from "../config/api.js";

// Create axios instance with default configuration
const apiClient = axios.create({
  baseURL: API_CONFIG.baseURL,
  timeout: API_CONFIG.timeout,
  headers: API_CONFIG.headers,
});

// Request interceptor for logging (optional)
apiClient.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Terms API
export const termsAPI = {
  // Get all terms
  getAll: () => apiClient.get(getEndpoint("terms")),

  // Get terms by language
  getByLanguage: (language) => apiClient.get(`${getEndpoint("terms")}/${language}`),

  // Update terms
  update: (id, data) => apiClient.put(`${getEndpoint("terms")}/${id}`, data),
};

// Pricelist API
export const pricelistAPI = {
  // Get all pricelist items with optional search
  getAll: (search = "") => {
    const params = search ? { search } : {};
    return apiClient.get(getEndpoint("pricelist"), { params });
  },

  // Get single pricelist item
  getById: (id) => apiClient.get(`${getEndpoint("pricelist")}/${id}`),

  // Create new pricelist item
  create: (data) => apiClient.post(getEndpoint("pricelist"), data),

  // Update pricelist item
  update: (id, data) => apiClient.put(`${getEndpoint("pricelist")}/${id}`, data),

  // Delete pricelist item (soft delete)
  delete: (id) => apiClient.delete(`${getEndpoint("pricelist")}/${id}`),
};

// Export the configured axios instance
export default apiClient;
