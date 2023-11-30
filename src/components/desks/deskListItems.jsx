// deskListItems.jsx
import React, { useState, useEffect } from "react";
// import { getDesks } from "../../api";
import DeskList from "./deskList";
import '../desks/deskListItems.css';
import Loader from "../../loader/loader";

const DeskListItems = ({ itemsData }) => {
    const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setFilteredData(itemsData);
      setLoading(false);
    }, 1500);
  }, [itemsData]);

  const applyFilters = ({ minPrice, maxPrice, sortBy, searchInput, type, material, priceRange }) => {
    console.log('Applying filters:', { minPrice, maxPrice, sortBy, searchInput, type, material, priceRange });

    const filteredResults = itemsData.filter(item => (
      (!minPrice || item.price >= parseInt(minPrice, 10)) &&
      (!maxPrice || item.price <= parseInt(maxPrice, 10)) &&
      (!type || item.type === type || type === 'Any') &&
      (!material || item.material === material || material === 'Any') &&
      (!searchInput || item.description.toLowerCase().includes(searchInput.toLowerCase()))
    ));

    if (priceRange === '0-1000') {
      setFilteredData(filteredResults.filter(item => item.price <= 1000));
    } else if (priceRange === '1000-2000') {
      setFilteredData(filteredResults.filter(item => item.price > 1000 && item.price <= 2000));
    } else if (priceRange === '2000') {
      setFilteredData(filteredResults.filter(item => item.price > 2000));
    } else {
      setFilteredData(filteredResults);
    }
  };

  console.log('DeskListItems - Current state:', filteredData);

  return (
    <section className="catalog">
      {loading && <Loader />} {/* Показує Loader, якщо loading === true */}
      <div>
        {filteredData && filteredData.length > 0 ? (
          <section className="list2">
            <div className="list2__items">
              {filteredData.map(({ id, imageSrc, type, description, material, price }, idx) => (
                <DeskList
                  key={id}
                  id={id}
                  imageSrc={imageSrc}
                  type={type}
                  description={description}
                  material={material}
                  price={price}
                />
              ))}
            </div>
          </section>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </section>
  );
};

export default DeskListItems;
