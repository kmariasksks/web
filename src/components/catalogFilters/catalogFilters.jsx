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
    console.log('Applying filters:', {
      minPrice,
      maxPrice,
      sortBy,
      searchInput,
      type: selectedType,
      material: selectedMaterial,
      priceRange: selectedPriceRange,
    });

  applyFilter({
    minPrice: minPrice !== "Any" ? minPrice : undefined,
    maxPrice: maxPrice !== "Any" ? maxPrice : undefined,
    sortBy: sortBy !== "Any" ? sortBy : undefined,
    searchInput: searchInput !== "Any" ? searchInput : undefined,
    type: selectedType !== "Any" ? selectedType : undefined,
    material: selectedMaterial !== "Any" ? selectedMaterial : undefined,
    priceRange: selectedPriceRange !== "Any" ? selectedPriceRange : undefined,
  });
};  
  

  const priceOptions = [
    { value: 'Any', label: 'Any Price' },
    { value: '0-1000', label: 'Up to $1000' },
    { value: '1000-2000', label: '$1000 - $2000' },
    { value: '2000', label: 'Above $2000' },
  ];

  const typeOptions = [
    { value: 'Any', label: 'Any Type' },
    { value: 'Computer Desk', label: 'Computer Desk' },
    { value: 'Kitchen Table', label: 'Kitchen Table' },
    { value: 'Coffee Table', label: 'Coffee Table' },
  ];

  const materialOptions = [
    { value: 'Any', label: 'Any Material' },
    { value: 'Wood', label: 'Wood' },
    { value: 'Glass', label: 'Glass' },
  ];

  return (
    <div>
      <FiltersAll>
        <LabelPrice>
          Price:
          <select
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
            className='price__select'
          >
            {priceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </LabelPrice>

        <LabelType>
          Type:
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className='type__select'
          >
            {typeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </LabelType>

        <LabelMaterial>
          Material:
          <select
            value={selectedMaterial}
            onChange={(e) => setSelectedMaterial(e.target.value)}
            className='material__select'
          >
            {materialOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
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
