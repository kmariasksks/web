import React from "react";
import { useNavigate } from "react-router-dom";
import exit from "./exit.svg";
import "./signOut.css";

function SignOut({ setLoggedUser }) {
    const navigate = useNavigate();

    const loggedInUserIndex = localStorage.getItem("loggedInUserIndex");

    const handleSignOut = () => {
        if (loggedInUserIndex !== null) {
            localStorage.removeItem("loggedInUserIndex");
            setLoggedUser(null);
            navigate("/");
        }
    };

    return (
        <section className="signout">
            <div className="signout__page">
                <div className="img">
            <img src={exit} alt="exit" className="signout__img"></img>
            </div>
            <div className="signout__title"> See you later! </div>
            <div className="button">
            <button onClick={handleSignOut} className="signout__button">Sign out</button>
            </div>
            </div>
        </section>
    );
}

export default SignOut;