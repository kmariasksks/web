import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/header';
import Info from './components/info/info';
import Info2 from './components/info2/info2';
import Button from './components/button/button';
import Footer from './components/footer/footer';
import HomePage from './pages/homePage/homePage';
import Catalog from './pages/catalog/catalog';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/HomePage" element={<HomePage/>} />
        <Route path="/Catalog" element ={<Catalog/>} /> 
        <Route path="/Cart" element ={<div class="cart">soon...</div>} />
      </Routes>
      {/* <Info />
      <Info2 />
      <Button /> */}
      <Footer />
    </Router>
  );
}

export default App;
