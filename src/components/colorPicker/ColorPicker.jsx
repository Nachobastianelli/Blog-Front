import React, { useState } from "react";

const ColorPickerDropdown = ({ value, onChange }) => {
  const colors = [
    { name: "Lavanda", hex: "#B187E0" },
    { name: "Azul Cobalto", hex: "#486BDB" },
    { name: "Verde Lima", hex: "#78DB48" },
    { name: "Rojo Fuego", hex: "#DB3A37" },
    { name: "Beige Claro", hex: "#E1BAA9" },
    { name: "Durazno", hex: "#DEC1B8" },
    { name: "Azul Cielo", hex: "#5BC8E3" },
    { name: "Rosa Pálido", hex: "#E5B7D6" },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm h-10 w-10 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        <span
          className="w-6 h-6 rounded-full"
          style={{ backgroundColor: value }}
        ></span>
      </button>

      {dropdownOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => {
                  onChange(color.hex);
                  setDropdownOpen(false);
                }}
                className={`flex items-center w-full px-4 py-2 text-sm ${
                  value === color.hex ? "bg-gray-100" : "hover:bg-gray-100"
                } focus:outline-none`}
                role="menuitem"
              >
                <span
                  className="inline-block w-5 h-5 mr-2 rounded-full"
                  style={{ backgroundColor: color.hex }}
                ></span>
                {color.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPickerDropdown;
