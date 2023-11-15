import React, { useState } from 'react';
import { ApplyButton, LabelPrice, LabelType, LabelMaterial, Labels, FiltersAll } from "./CatalogFilters.styled.jsx";
import "./catalogFilters.css"

const CatalogFilter = ({ applyFilter }) => {
  const [minPrice] = useState("");
  const [maxPrice] = useState("");
  const [sortBy] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedType, setSelectedType] = useState("Any");
  const [selectedMaterial, setSelectedMaterial] = useState("Any");
  const [selectedPriceRange, setSelectedPriceRange] = useState("Any");

  const handleApplyClick = () => {
    applyFilter({
      minPrice,
      maxPrice,
      sortBy,
      searchInput,
      type: selectedType,
      material: selectedMaterial,
      priceRange: selectedPriceRange, 
    });
  };

  return (
    <div>
      <FiltersAll>
      <LabelPrice>
        Price:
        <select
          value={selectedPriceRange}
          onChange={(e) => setSelectedPriceRange(e.target.value)} className='price__select'
        >
          <option value="Any">Any Price</option>
          <option value="0-1000">Up to $1000</option>
          <option value="1000-2000">$1000 - $2000</option>
          <option value="2000">Above $2000</option>
        </select>
      </LabelPrice>

      <LabelType>
        Type:
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)} className='type__select'
        >
          <option value="Any">Any Type</option>
          <option value="Computer Desk">Computer Desk</option>
          <option value="Kitchen Table">Kitchen Table</option>
          <option value="Coffee Table">Coffee Table</option>
        </select>
      </LabelType>

      <LabelMaterial>
        Material:
        <select
          value={selectedMaterial}
          onChange={(e) => setSelectedMaterial(e.target.value)} className='material__select'
        >
          <option value="Any">Any Material</option>
          <option value="Wood">Wood</option>
          <option value="Glass">Glass</option>
        </select>
      </LabelMaterial>

      <Labels>
        Search:
        <input
          type="text"
          name="searchInput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </Labels>

      <ApplyButton onClick={handleApplyClick}>
        <p>Apply</p>
      </ApplyButton>
      </FiltersAll>
    </div>
  );
};

export default CatalogFilter;
