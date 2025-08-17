import React from "react";
import { User, Menu } from "lucide-react";
import "./DashboardHeader.css";

const DashboardHeader = ({ language }) => {
  return (
    <header className="dashboard-header">
      <div className="header-content">
        <div className="header-left">
          <button className="hamburger-menu">
            <Menu className="hamburger-icon" />
          </button>
          <div className="user-info">
            <div className="avatar">
              <User className="avatar-icon" />
            </div>
            <div className="user-details">
              <div className="user-name">John Andre</div>
              <div className="company-name">Storfjord AS</div>
            </div>
          </div>
        </div>

        <div className="header-right">
          <div className="language-selector">
            <span className="language-text">Svenska</span>
            <img
              src={
                language === "en"
                  ? "https://storage.123fakturere.no/public/flags/GB.png"
                  : "https://storage.123fakturere.no/public/flags/SE.png"
              }
              alt={language === "en" ? "English" : "Swedish"}
              className="flag-icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
