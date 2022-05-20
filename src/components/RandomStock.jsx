import { useState, useEffect } from 'react';
import StockList from './StockList';
import { Symbols, Search } from '../services/Constants';
import { Box, Button, styled } from '@mui/material';

const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent:'center',
  marginTop:'9em'
})

export default function RandomStock(){
    const [stocks, setStocks] = useState([])
    const [symbols, setSymbols] = useState([])

    const fetchQuote = async (symbol) => {
        try {
          const response = await Search(symbol);
          setStocks(response);
          console.log(setStocks);
        } catch (error) {
          console.log(error);
        }
      }
    
    // calls fetchSymbols endpoint and stores the data in state
    const fetchSybmols = async () => {
      try {
        const response = await Symbols();
        setSymbols(response);
      } catch(error) {
        console.log(error);
      }
    }
    
    // useEffect() will get called on load
    useEffect( () => { 
      fetchSybmols() //when component loads is making a call to fetchSymbols
    }, []) // empty array as the 2nd useEffect argument runs the useEffect once on load

    let handleButton = function() {
      // when user clicks button, we are genenerating a randon integer to use that to call object index
      const index = Math.floor(Math.random() * symbols.length);
      // once we have the object index we pass the index.symbol value to the fetchQuote func as the arg
      fetchQuote(symbols[index].symbol)
    };
    

    return(
      
      <StyledContainer>
          <Box sx={{display: 'flex',justifyContent:'center',marginBottom:'40px'}}>
          <div className='random'>
            <h1>Generate a Random Ticker</h1>
          <br></br>
          <Button variant='outline' color='gray' sx={{marginLeft:'5em'}} onClick={handleButton}> 
          Generate Random Stock
          </Button>
          </div>
          </Box>
      
          <StockList stock={stocks}  />
        
        </StyledContainer>
      
    )
}










