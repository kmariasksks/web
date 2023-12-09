import React from "react";
import success from "../success/success.svg"
import "./success.css"
import { NavLink } from "react-router-dom";

function Success() {
    return (
        <section>
            <div className="success__page">
                <img className="success__img" src={success} alt="success"></img>
                <h4 className="success__title">Success!</h4>
                <text className="success__description1">Your order was sent to processing!</text>
                <text className="success__description2">Check your email box for further information.</text>
                <NavLink className="go-back__button4" exact to={`/Catalog`}>
                    Go Back to Catalog
                </NavLink>
            </div>
        </section>
    )
}

export default Success;