import { useState, useEffect } from 'react';
import StockList from './StockList';
import { FB } from '../services/Constants';


export default function RandomStock(){
    const [stocks, setStocks] = useState([])

    const fetchData = async () => {
        try {
          const response = await FB();
          setStocks(response);
          console.log(setStocks);
        } catch (error) {
          console.log(error);
        }
      }
    console.log(fetchData);

    useEffect( () => {
      fetchData()
    }, [])

    let handleButton = function() {
      return(
          <StockList stock={stocks} /> 
      )
    };
    

    return(
          <div className='random'>
          <br></br>
          <button onClick={handleButton}
          >
            Generate Stock
          </button>
          {/* <StockList stock={stocks} /> */}
        </div>
    )
}










