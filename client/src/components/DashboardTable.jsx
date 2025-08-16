import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight, MoreHorizontal, MoreVertical } from "lucide-react";
import "./DashboardTable.css";

const DashboardTable = ({ data, editingRow, onRowEdit, onSaveEdit }) => {
  const [editingField, setEditingField] = useState(null);
  const [editValues, setEditValues] = useState({});

  const tableRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tableRef.current && !tableRef.current.contains(event.target)) {
        // Click is outside the table, unfocus everything
        if (editingRow !== null) {
          onRowEdit(null); // Unfocus the row
        }
        setEditingField(null);
        setEditValues({});
      }
    };

    // Only add listener if we're in editing mode
    if (editingRow !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editingRow, onRowEdit]);

  const handleFieldClick = (rowId, fieldName, currentValue) => {
    // First, enable editing for the row if not already enabled
    if (editingRow !== rowId) {
      onRowEdit(rowId);
    }

    // Then set the specific field for editing
    setEditingField(fieldName);
    setEditValues((prev) => ({ ...prev, [fieldName]: currentValue }));
  };

  const handleFieldChange = (fieldName, value) => {
    setEditValues((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleFieldSave = (rowId, fieldName) => {
    const newValue = editValues[fieldName];
    const originalValue = data.find((row) => row.id === rowId)?.[fieldName];

    // Check if the value has actually changed
    if (newValue === originalValue) {
      // No change, just exit editing mode without API call
      setEditingField(null);
      setEditValues({});
      return;
    }

    // Value has changed, proceed with API call
    const updatedData = { [fieldName]: newValue };
    onSaveEdit(rowId, updatedData);
    setEditingField(null);
    setEditValues({});
  };

  const handleFieldCancel = () => {
    setEditingField(null);
    setEditValues({});
  };

  const handleKeyPress = (e, rowId, fieldName) => {
    if (e.key === "Enter") {
      handleFieldSave(rowId, fieldName);
      onRowEdit(null);
    } else if (e.key === "Escape") {
      handleFieldCancel();
      onRowEdit(null);
    }
  };

  const renderField = (row, fieldName, value) => {
    const isEditing = editingRow === row.id && editingField === fieldName;

    if (isEditing) {
      return (
        <input
          type="text"
          value={editValues[fieldName] || value}
          onChange={(e) => handleFieldChange(fieldName, e.target.value)}
          onBlur={() => handleFieldSave(row.id, fieldName)}
          onKeyDown={(e) => handleKeyPress(e, row.id, fieldName)}
          className="edit-input"
        />
      );
    }

    return (
      <div
        className={`field-value ${editingRow === row.id ? "editable" : ""}`}
        onClick={() => handleFieldClick(row.id, fieldName, value)}
      >
        {value}
      </div>
    );
  };

  return (
    <div className="dashboard-table-container" ref={tableRef}>
      {/* Desktop/Tablet Table */}
      <table className="dashboard-table desktop-table">
        <thead>
          <tr>
            <th className="sortable">
              Article No.
              <ChevronDown className="sort-icon-a" />
            </th>
            <th className="sortable">
              Product/Service
              <ChevronDown className="sort-icon-p" />
            </th>
            <th>In Price</th>
            <th>Price</th>
            <th>Unit</th>
            <th>In Stock</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className={editingRow === row.id ? "editing" : ""}>
              <td>
                <div className="cell-content">
                  {editingRow === row.id && <ChevronRight className="edit-indicator" />}
                  {renderField(row, "articleNo", row.articleNo)}
                </div>
              </td>
              <td>{renderField(row, "productService", row.productService)}</td>
              <td>{renderField(row, "inPrice", row.inPrice)}</td>
              <td>{renderField(row, "price", row.price)}</td>
              <td>{renderField(row, "unit", row.unit)}</td>
              <td>{renderField(row, "inStock", row.inStock)}</td>
              <td>
                <div className="description-cell">{renderField(row, "description", row.description)}</div>
              </td>
              <td>
                <MoreHorizontal className="more-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Table */}
      <div className="mobile-table">
        <div className="mobile-table-header">
          <div className="mobile-header-cell">Product/Service</div>
          <div className="mobile-header-cell">Price</div>
        </div>
        <div className="mobile-table-body">
          {data.map((row) => (
            <div key={row.id} className={`mobile-table-row ${editingRow === row.id ? "editing" : ""}`}>
              <div className="mobile-cell">
                {editingRow === row.id && <ChevronRight className="edit-indicator" />}
                {renderField(row, "productService", row.productService)}
              </div>
              <div className="mobile-cell">
                {renderField(row, "price", row.price)}
                <MoreVertical className="more-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
