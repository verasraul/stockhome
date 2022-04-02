import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RandomStock from './components/RandomStock';
import SearchPage from './components/SearchPage';
import { Search } from './services/Constants';
import SearchStocks from './components/SearchStocks';
import StockList from './components/StockList';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div className='links'>
        {/* 'NavLink' links your pages. */}
        <nav>
          <NavLink to={"/"} >Home</NavLink>
          <NavLink to={"/search"} >Search for Stocks</NavLink>
          <NavLink to={"/random"} > Show Random Stock</NavLink>
        </nav>  
      </div>

      <div>
      {/* // 'Routes' renders your pages. */}
      <Routes>
      // 'Route' in singular form is a self-closing tag.
        <Route path='/' element={<Home /> } />
        <Route path='search' element={<SearchPage /> } />
        <Route path='random' element={<RandomStock /> } />
      </Routes>
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
