import { useState, useEffect } from 'react';
import StockList from './StockList';
import { Symbols, Search } from '../services/Constants';



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
          <div className='random'>
            <h1>Generate a Random Ticker</h1>
          <br></br>
          <button onClick={handleButton}
          > Generate Random Stock
          </button>
          <StockList stock={stocks} />
        </div>
    )
}










