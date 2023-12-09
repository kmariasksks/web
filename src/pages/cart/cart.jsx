import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { decrementAmount, incrementAmount, removeFromCart } from '../../redux/actions';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import compDesk1 from "../catalog/desksImages/compDesk1.jpg";
import kitDesk1 from "../catalog/desksImages/kitDesk1.jpg";
import cofDesk1 from "../catalog/desksImages/cofDesk1.jpg";
import compDesk2 from "../catalog/desksImages/compDesk2.jpg";
import kitDesk2 from "../catalog/desksImages/kitDesk2.jpg";
import cofDesk2 from "../catalog/desksImages/cofDesk2.jpg";
import compDesk3 from "../catalog/desksImages/compDesk3.jpg";
import kitDesk3 from "../catalog/desksImages/kitDesk3.jpg";
import cofDesk3 from "../catalog/desksImages/cofDesk3.jpg";

import './cart.css'

const Cart = ({
    id,
}) => {

    const getImageSrc = (id) => {
        switch (id) {
            case 1:
                return compDesk1;
            case 2:
                return kitDesk1;
            case 3:
                return cofDesk1;
            case 4:
                return compDesk2;
            case 5:
                return kitDesk2;
            case 6:
                return cofDesk2;
            case 7:
                return compDesk3;
            case 8:
                return kitDesk3;
            case 9:
                return cofDesk3;


            default:
                return "";
        }
    };

    const objectsData = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveFromCart = (deskDataId) => {
        dispatch(removeFromCart(deskDataId));
    };

    const handleIncrementAmount = (deskDataId) => {
        dispatch(incrementAmount(deskDataId));
    };

    const handleDecrementAmount = (deskDataId) => {
        dispatch(decrementAmount(deskDataId));
    };

    const calculateTotalAmount = (price, amount) => {
        return price * amount;
    };

    const handleContinue = () => {
        if (objectsData.length > 0) {
            navigate('/Checkout');
        } else {
            alert("Your cart is empty!");
        }
    };


    return (
        <section className="cart">
            <div className="cart__all">
                {objectsData.map((object) => (
                    <div className="cart__main" key={object.deskData.id}>
                        <NavLink to={`/Catalog/${object.deskData.id}`} className="cart__main-img-link">
                            <img
                                className="cart__main-img"
                                src={getImageSrc(object.deskData.id)}
                                alt={object.deskData.title}
                            />
                        </NavLink>
                        <div className='cart__main-description'>
                            <div className='cart__desk-type'>
                                {object.deskData.type}
                            </div>
                            {/* <div className='cart__desk-price'>
                                Price: {object.deskData.price} $
                            </div> */}
                        </div>
                        <div className='cart__main-sum'>
                            <button className='cart__desk-plus' onClick={() => handleIncrementAmount(object.deskData.id)}>
                                +
                            </button>
                            <div className='cart__desk-amount'>
                                {object.amount}
                            </div>
                            <button className='cart__desk-minus' onClick={() => handleDecrementAmount(object.deskData.id)}>
                                -
                            </button>
                            <div className='cart__total-price'>
                                {calculateTotalAmount(object.deskData.price, object.amount)} $
                            </div>
                            <button className='cart__remove-button' onClick={() => handleRemoveFromCart(object.deskData.id)}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
                <div className="nav">
                    <NavLink className="go-back__button2" exact to={`/Catalog`}>
                        Go Back
                    </NavLink>
                    <div className="cart__total-price-all">
                        Total: <span className="cart__total-price-all2"> {objectsData.reduce((total, item) => total + calculateTotalAmount(item.deskData.price, item.amount), 0)} $ </span>
                    </div>
                    <div className="checkout__button" onClick={handleContinue}>
                        Continue
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;