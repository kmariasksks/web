import CatalogFilters from "../../components/catalogFilters/catalogFilters";
import DeskListItems from "../../components/desks/deskListItems";
import deskData from "./catalogData";
import { useState, useEffect } from "react";


function Catalog() {
    const [filteredData, setFilteredData] = useState(deskData);
    const [searchActive, setSearchActive] = useState(false);

  
    useEffect(() => {
      setSearchActive(true);
    }, []);
    const applyFilter = ({ minPrice, maxPrice, sortBy, searchInput, type, material, priceRange }) => {
        let result = deskData.filter((item) => {
          return (
            (minPrice === "" || item.price >= parseInt(minPrice, 10)) &&
            (maxPrice === "" || item.price <= parseInt(maxPrice, 10)) &&
            (type === "Any" || item.type === type) &&
            (material === "Any" || item.material === material) &&
            (searchInput === "" || item.description.toLowerCase().includes(searchInput.toLowerCase()))
          );
        });
      
        if (priceRange === "0-1000") {
          result = result.filter((item) => item.price <= 1000);
        } else if (priceRange === "1000-2000") {
          result = result.filter((item) => item.price > 1000 && item.price <= 2000);
        } else if (priceRange === "2000") {
          result = result.filter((item) => item.price > 2000);
        }
      
        if (sortBy === "price") {
          result.sort((a, b) => a.price - b.price);
        } else if (sortBy === "name") {
          result.sort((a, b) => a.type.localeCompare(b.type));
        }
      
        setFilteredData(result);
      };
      
    return (
      <div className="Catalog">
        <CatalogFilters applyFilter={applyFilter} />
        <DeskListItems data={filteredData} />
      </div>
    );
  }
  
  export default Catalog;