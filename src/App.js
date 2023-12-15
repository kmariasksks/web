import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/homePage/homePage";
import Catalog from "./pages/catalog/catalog";
import DeskDetail from "./pages/deskDetail/deskDetail";
import { getDeskInfo } from "./api";
import Cart from "./pages/cart/cart.jsx";
import Checkout from "./pages/checkout/checkout.jsx";
import Success from "./pages/success/seccess.jsx";
import { RegistrationForm } from "./pages/RegistrationForm/RedistrationForm.jsx";
import Login from "./pages/login/login.jsx";
import SignOut from "./pages/signOut/signOut.jsx";

function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    const loggedInUserIndex = localStorage.getItem("loggedInUserIndex");
    if (loggedInUserIndex) {
      setLoggedUser((loggedInUserIndex));

    }
      getDeskInfo()
        .then(response => {
            console.log(response)
            setSelectedItem(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
    console.log(selectedItem)

  if (loggedUser) {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/Catalog/:id" element={<DeskDetail />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Success" element={<Success />} />
          <Route
            path="/Signout"
            element={<SignOut setLoggedUser={setLoggedUser} />}
          />
        </Routes>
        <Footer />
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Login setLoggedUser={setLoggedUser} />}
          />
          <Route path="/" element={<RegistrationForm />} />
        </Routes>
      </Router>
    );
  }
}

export default App;