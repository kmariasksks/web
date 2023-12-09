import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDeskInfo } from '../../api'; 
import { LabelCount } from "./deskDetail.styled.jsx";
import { NavLink } from 'react-router-dom';
import './deskDetail.css'
import Loader from '../../loader/loader.jsx';
import compDesk1 from '../catalog/desksImages/compDesk1.jpg';
import kitDesk1 from '../catalog/desksImages/kitDesk1.jpg';
import cofDesk1 from '../catalog/desksImages/cofDesk1.jpg';
import compDesk2 from '../catalog/desksImages/compDesk2.jpg';
import kitDesk2 from '../catalog/desksImages/kitDesk2.jpg';
import cofDesk2 from '../catalog/desksImages/cofDesk2.jpg';
import compDesk3 from '../catalog/desksImages/compDesk3.jpg';
import kitDesk3 from '../catalog/desksImages/kitDesk3.jpg';
import cofDesk3 from '../catalog/desksImages/cofDesk3.jpg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions'

export const deskImages = {
  1: compDesk1,
  2: kitDesk1,
  3: cofDesk1,
  4: compDesk2,
  5: kitDesk2,
  6: cofDesk2,
  7: compDesk3,
  8: kitDesk3,
  9: cofDesk3,
};

const DeskDetail = () => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getDeskInfo(id)
      .then((response) => {
        setSelectedItem(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Помилка під час отримання даних про стіл:", error);
      });
  }, [id]);

  const inputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  const handleAddToCart = () => {
        let amount = 1;
        if (parseInt(inputValue) > 1) {
          amount = parseInt(inputValue);
        }
        dispatch(addToCart(selectedItem, amount));
        // alert("Your object added to cart")
    };

  if (loading) {
    return <section className="catalog">
    {loading && <Loader />}
    </section>;;
  }

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const { type, description, material, price } = selectedItem;
  const imageSrc = deskImages[id];


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
            {/* <span className='color__select-text'>Select Color:</span> */}
            <div className='detail__filters'>
              <LabelCount>
                Amount:
                <input
                  type="number"
                  name="countInput"
                  onChange={inputChange}
                  id="fname" 
                  placeholder="1" 
                  min={1}
                // value={countInput}
                // onChange={(e) => setCountInput(e.target.value)}
                />
              </LabelCount>
              {/* <LabelColor>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)} 
                  className='color__select'
                >
                  <option value="White">White</option>
                  <option value="Black">Black</option>
                  <option value="Grey">Grey</option>
                  <option value="Brown">Brown</option>
                </select>
              </LabelColor> */}
            </div>
          </div>
        </div>
        <div className='detail__part2'>
          <p className='detail__price'>Price: <span className='detail__price-color'>{price}  $</span> </p>
          <NavLink className="go-back__button" exact to={`/Catalog`}>
          Go Back
        </NavLink>
        <NavLink 
        //  exact to={`/Cart`}
         >
          <button className="add-to-cart__button" onClick={handleAddToCart}>
          Add to Cart
          </button>
        </NavLink>
        </div>
      </section>
    </>
  );
};

export default DeskDetail;
