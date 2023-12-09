import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './pages/homePage/homePage';
import Catalog from './pages/catalog/catalog';
import DeskDetail from './pages/deskDetail/deskDetail';
import { getDeskInfo } from './api';
import Cart from "./pages/cart/cart.jsx"
import Checkout from './pages/checkout/checkout.jsx';
import Success from './pages/success/seccess.jsx';

function App() {

  const [selectedItem, setSelectedItem] = useState("");

      useEffect(() => {
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

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Catalog/:id" element={<DeskDetail />} /> 
        <Route
            path="/Catalog/:id"
            element={<DeskDetail objectsData={selectedItem} />}
        />
        <Route path="/Cart" element={<Cart />} />
        <Route path='/Checkout' element={<Checkout/>}/>
        <Route path='/Success' element={<Success/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
