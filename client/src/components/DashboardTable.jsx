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
    let newValue = editValues[fieldName] || "";
    const originalValue = data.find((row) => row.id === rowId)?.[fieldName] || "";

    if (newValue === originalValue) {
      setEditingField(null);
      setEditValues({});
      return;
    }

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

  const handleInputBlur = () => {
    handleFieldCancel();
    onRowEdit(null);
  };

  const renderField = (row, fieldName, value) => {
    const isEditing = editingRow === row.id && editingField === fieldName;

    // Handle display value properly (don't treat 0 as falsy)
    const displayValue = value !== null && value !== undefined ? value : "";

    if (isEditing) {
      return (
        <input
          type="text"
          value={editValues[fieldName] !== undefined ? editValues[fieldName] : displayValue}
          onChange={(e) => handleFieldChange(fieldName, e.target.value)}
          onBlur={() => handleInputBlur(row.id, fieldName)}
          onKeyDown={(e) => handleKeyPress(e, row.id, fieldName)}
          className="edit-input"
        />
      );
    }

    return (
      <div
        className={`field-value ${editingRow === row.id ? "editable" : ""}`}
        onClick={() => handleFieldClick(row.id, fieldName, displayValue)}
      >
        {displayValue}
      </div>
    );
  };

  return (
    <div className="dashboard-table-container" ref={tableRef}>
      {/* Desktop Table */}
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
                {editingRow === row.id && <ChevronRight className="edit-indicator" />}
                {renderField(row, "articleNo", row.articleNo)}
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

      {/* Tablet Table */}
      <table className="dashboard-table tablet-table">
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
            <th>Price</th>
            <th>In Stock</th>
            <th>Unit</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className={editingRow === row.id ? "editing" : ""}>
              <td>
                {editingRow === row.id && <ChevronRight className="edit-indicator" />}
                {renderField(row, "articleNo", row.articleNo)}
              </td>
              <td>{renderField(row, "productService", row.productService)}</td>
              <td>{renderField(row, "price", row.price)}</td>
              <td>{renderField(row, "inStock", row.inStock)}</td>
              <td>{renderField(row, "unit", row.unit)}</td>
              <td>
                <MoreHorizontal className="more-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Table */}
      <table className="dashboard-table mobile-table">
        <thead>
          <tr>
            <th className="sortable">
              Product/Service
              <ChevronDown className="sort-icon-p" />
            </th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className={editingRow === row.id ? "editing" : ""}>
              <td>
                {editingRow === row.id && <ChevronRight className="edit-indicator" />}
                {renderField(row, "productService", row.productService)}
              </td>
              <td>{renderField(row, "price", row.price)}</td>
              <td>
                <MoreHorizontal className="more-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
