import React from "react";
import { Search, Plus, Printer, Settings } from "lucide-react";
import DashboardTable from "./DashboardTable";
import "./DashboardContent.css";

const DashboardContent = ({ pricelistData, editingRow, onRowEdit, onSaveEdit }) => {
  return (
    <main className="dashboard-content">
      <div className="content-header">
        <div className="header-controls">
          <div className="search-section">
            <div className="search-row">
              <div className="search-field">
                <input type="text" placeholder="Search Article No..." className="search-input" />
                <Search className="search-icon" />
              </div>
              <div className="search-field">
                <input type="text" placeholder="Search Product..." className="search-input" />
                <Search className="search-icon" />
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="action-btn new-product">
              <span className="btn-text">New Product</span>
              <Plus className="btn-icon" />
            </button>
            <button className="action-btn print-list">
              <span className="btn-text">Print List</span>
              <Printer className="btn-icon" />
            </button>
            <button className="action-btn advanced-mode">
              <span className="btn-text">Advanced mode</span>
              <Settings className="btn-icon" />
            </button>
          </div>
        </div>
      </div>

      <DashboardTable data={pricelistData} editingRow={editingRow} onRowEdit={onRowEdit} onSaveEdit={onSaveEdit} />
    </main>
  );
};

export default DashboardContent;
