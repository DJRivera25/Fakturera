import React from "react";
import {
  FileText,
  Users,
  Building2,
  BookOpen,
  Package,
  FileSpreadsheet,
  AlertCircle,
  FileCheck,
  Package2,
  UserCheck,
  Download,
  LogOut,
} from "lucide-react";
import "./DashboardSidebar.css";

const DashboardSidebar = () => {
  const menuItems = [
    { id: "invoices", label: "Invoices", icon: FileText },
    { id: "customers", label: "Customers", icon: Users },
    { id: "business", label: "My Business", icon: Building2 },
    { id: "journal", label: "Invoice Journal", icon: BookOpen },
    { id: "pricelist", label: "Price List", icon: Package, active: true },
    { id: "multiple", label: "Multiple Invoicing", icon: FileSpreadsheet },
    { id: "unpaid", label: "Unpaid Invoices", icon: AlertCircle },
    { id: "offer", label: "Offer", icon: FileCheck },
    { id: "inventory", label: "Inventory Control", icon: Package2 },
    { id: "member", label: "Member Invoicing", icon: UserCheck },
    { id: "import", label: "Import/Export", icon: Download },
    { id: "logout", label: "Log out", icon: LogOut },
  ];

  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-header">
        <h2>Menu</h2>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id} className={`nav-item ${item.active ? "active" : ""}`} data-id={item.id}>
                <a href="#" className="nav-link">
                  <IconComponent className="nav-icon" />
                  <span className="nav-text">{item.label}</span>
                  {item.active && <div className="active-indicator"></div>}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
