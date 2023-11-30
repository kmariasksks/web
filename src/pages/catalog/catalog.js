import React, { useState, useEffect } from 'react';
import CatalogFilters from '../../components/catalogFilters/catalogFilters';
import DeskListItems from '../../components/desks/deskListItems';
import { getDeskFiltered } from '../../api';

function Catalog() {
  const [filteredData, setFilteredData] = useState([]);

  const applyFilter = ({ minPrice, maxPrice, sortBy, searchInput, type, material, priceRange }) => {
    console.log('Applying filters:', { minPrice, maxPrice, sortBy, searchInput, type, material, priceRange });

    getDeskFiltered({ minPrice, maxPrice, sortBy, searchInput, type, material, priceRange })
      .then(response => {
        console.log("Filtered data from server:", response.data);
        setFilteredData(response.data);
      })
      .catch(error => console.error("Error fetching filtered data:", error));
  };

  useEffect(() => {
    applyFilter({});
  }, []);

  return (
    <div className="Catalog">
      <CatalogFilters applyFilter={applyFilter} />
      <DeskListItems itemsData={filteredData} applyFilters={applyFilter} />
    </div>
  );
}

export default Catalog;
