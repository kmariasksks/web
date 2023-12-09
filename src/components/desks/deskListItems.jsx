import React, { useState, useEffect } from "react";
import DeskList from "./deskList";
import '../desks/deskListItems.css';
import Loader from "../../loader/loader";


const DeskListItems = ({ itemsData }) => {
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        // setTimeout(() => {
            setFilteredData(itemsData);
            setLoading(false);
        // }, 1500);
    }, [itemsData]);

    return (
        <section className="catalog">
            {loading && <Loader />}
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
