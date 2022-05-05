import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RandomStock from './components/RandomStock';
import SearchPage from './components/SearchPage';
import { Search } from './services/Constants';
import SearchInput from './components/SearchInput';
import StockList from './components/StockList';
import Footer from './components/Footer';
import MostActiveStocks from './components/MostActiveStocks';
import MostActiveList from './components/MostActiveList';
import { AppBar, ButtonGroup, ListItemButton, ListItemText, styled, Toolbar } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
   backgroundColor:'#1C52A3',
   display: 'flex',
   justifyContent:'center',
  
})

function App() {
  return (
    <>
    <AppBar position='sticky'>
      <StyledToolbar>
        {/* 'NavLink' links your pages. */}
        <nav>
        <ButtonGroup >
          <NavLink to={"/"} style={{ textDecoration: "none" }}>
            <ListItemButton>
             <ListItemText> Home </ListItemText>
            </ListItemButton>
          </NavLink>
          <NavLink to={"/search"} style={{ textDecoration: "none" }}>
              <ListItemButton>
             <ListItemText> search for stocks </ListItemText>
            </ListItemButton>
          </NavLink>
          <NavLink to={"/random"} style={{ textDecoration: "none" }}> 
          <ListItemButton>
             <ListItemText> show random stock </ListItemText>
            </ListItemButton>
          </NavLink>
          <NavLink to={"/mostactive"} style={{ textDecoration: "none" }}>
            <ListItemButton>
             <ListItemText> most active stock </ListItemText>
            </ListItemButton>
          </NavLink>
          </ButtonGroup>
        </nav>  
        </StyledToolbar>
     </AppBar>

      <div>
      {/* // 'Routes' renders your pages. */}
      <Routes>
      // 'Route' in singular form is a self-closing tag.
        <Route path='/' element={<Home /> } />
        <Route path='search' element={<SearchPage /> } />
        <Route path='random' element={<RandomStock /> } />
        <Route path='mostactive' element={<MostActiveStocks /> } />
      </Routes>
      </div>
    
      {/* <div className='Footer'> */}
        <Footer />
      {/* </div> */}
      
      </>
    
  );
}

export default App;
