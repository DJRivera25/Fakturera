import React, { useState, useEffect } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardContent from "../components/DashboardContent";
import { pricelistAPI } from "../services/api";
import "./DashboardPage.css";

const DashboardPage = () => {
  const [pricelistData, setPricelistData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingRow, setEditingRow] = useState(null);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    fetchPricelistData();
  }, []);

  const fetchPricelistData = async () => {
    try {
      const response = await pricelistAPI.getAll();
      setPricelistData(response.data);
    } catch (error) {
      console.error("Error fetching pricelist data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRowEdit = (rowId) => {
    setEditingRow(editingRow === rowId ? null : rowId);
  };

  const handleSaveEdit = async (rowId, updatedData) => {
    try {
      const response = await pricelistAPI.update(rowId, updatedData);

      if (response.status === 200) {
        // Update local state
        setPricelistData((prevData) =>
          prevData.map((item) => (item.id === rowId ? { ...item, ...updatedData } : item))
        );
        setEditingRow(null);
      } else {
        console.error("Failed to update item");
      }
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  if (loading) {
    return (
      <div className="dashboard-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <DashboardHeader language={language} />
      <div className="dashboard-main">
        <DashboardSidebar />
        <DashboardContent
          pricelistData={pricelistData}
          editingRow={editingRow}
          onRowEdit={handleRowEdit}
          onSaveEdit={handleSaveEdit}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
