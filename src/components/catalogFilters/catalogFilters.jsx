import './catalogFilters.css';


const CatalogFilters = () => {
    const typeOptions = [
        { value: "type", label: "Any type" },
        { value: "type", label: "Computer Desk" },
        { value: "type", label: "Kitchen Table" },
        { value: "type", label: "Coffee Table" },
    ];

    const priceOptions = [
        { value: "price", label: "Any price" },
        { value: "price", label: "up to 1000$" },
        { value: "price", label: "up to 2000$" },
        { value: "price", label: "more than 2000$" },
    ];

    const materialOptions = [
        { value: "material", label: "Any material" },
        { value: "material", label: "Wood" },
        { value: "material", label: "Glass" },
    ];

    return (
        <section className="filters">
            <div className="filters__all">

                <div className='type'>
                    <label htmlFor="filters__by-type" className="filters__by-type">Filter by type:</label>
                    <select id="filters__by-type" className="filters__by-type" name="type">
                        {typeOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='price'>
                    <label htmlFor="filters__by-price" className="filters__by-price">Filter by price:</label>
                    <select id="filters__by-price" className="filters__by-price" name="price">
                        {priceOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='material'>
                    <label htmlFor="filters__by-material" className="filters__by-material">Filter by material:</label>
                    <select id="filters__by-material" className="filters__by-material" name="material">
                        {materialOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="button" className="apply-button" id="apply-button"><a>Apply</a></button>
            </div>
        </section>
    );
};

export default CatalogFilters;
