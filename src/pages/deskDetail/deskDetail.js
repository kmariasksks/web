import React from 'react';
import { useParams } from 'react-router-dom';
import deskData from '../catalog/catalogData';
import "./deskDetail.css"
import { LabelCount, LabelColor } from "./deskDetail.styled.jsx";
import { NavLink } from 'react-router-dom';

const DeskDetail = () => {
  console.log(deskData);
  const { id } = useParams();
  const selectedItem = deskData.find(item => item.id === parseInt(id, 10));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const { imageSrc, type, description, material, price } = selectedItem;

  return (
    <>
      <section className='detail__all'>
        <div className='detail__part1'>
          <div className='img__border'><img src={imageSrc} alt={type} className='detail__img' /></div>
          <div>
            <div className='characteristic'>
            <p className='detail__characteristic1'>comfortable</p>
            <p className='detail__characteristic2'>cheap</p>
            </div>
            <h2 className='detail__type'>{type}</h2>
            <p className='detail__description'>{description}</p>
            <p className='detail__material'>Material: {material}</p>
            <span className='color__select-text'>Select Color:</span>
            <div className='detail__filters'>
              <LabelCount>
                Amount:
                <input
                  type="number"
                  name="countInput"
                // value={countInput}
                // onChange={(e) => setCountInput(e.target.value)}
                />
              </LabelCount>
              <LabelColor>
                <select
                  // value={selectedPriceRange}
                  // onChange={(e) => setSelectedPriceRange(e.target.value)} 
                  className='color__select'
                >
                  <option value="White">White</option>
                  <option value="Black">Black</option>
                  <option value="Grey">Grey</option>
                  <option value="Brown">Brown</option>
                </select>
              </LabelColor>
            </div>
          </div>
        </div>
        <div className='detail__part2'>
          <p className='detail__price'>Price: <span className='detail__price-color'>{price}  $</span> </p>
          <NavLink className="go-back__button" exact to={`/Catalog`}>
          Go Back
        </NavLink>
        <NavLink className="add-to-cart__button" exact to={`/Cart`}>
          Add to Cart
        </NavLink>
        </div>
      </section>
    </>
  );
};

export default DeskDetail;
