import './App.css';
import Header from './components/header/header'
import './components/header/header.css'
import Info from './components/info/info'
import './components/info/info.css'
import Button from './components/button/button'
import './components/button/button.css'
import Footer from './components/footer/footer'
import './components/footer/footer.css'

function App() {
  return (
    <div className="Site">
      <Header/>
      <Info/>
      <Button/>
      <Footer/>
      </div>
  );
}

export default App;
