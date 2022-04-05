import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import StockList from "./StockList";
import { Search } from "../services/Constants";


export default function SearchPage(){
    // inittialize the ticker list to the full list passed in props
    const [stockSearch, setStockSearch] = useState([])
    const [stockName, setStockName] = useState('')
    console.log('stockName =', stockName)

    const fetchData = async (event) => {
      // event.preventDefault();
        try {
          const response = await Search(event);
          setStockSearch(response);
          console.log('setStockSearch=', setStockSearch);
        } catch (error) {
          console.log(error);
        }
      }


    const handleStockChange = (event) => {
    //     console.log("This is EVENT=", event)
    //     const tickerClick = event; 
        setStockName(event)

    //  grab value from event
    //  const stockName = event.target.value;
    //  console.log(tickerClick)

        // return (
        //   <div>
        // <StockList stock={stockSearch} />
        // </div>
        // )
  
    }
    
    const handleOnClick = (event) => {
      // event.preventDefault();

      return (
        <div>
          <StockList stock={stockSearch} />
        </div>
      )
    }


    useEffect( () => {
      fetchData(stockName)
  }, [stockName])
  console.log(stockSearch)
    


    
    return (
        <div className="search-page">
          <h1>Find Your Favorite $tock</h1>
        <br></br>
        <div className="search-section">
        <div>
            {/* <label htmlFor="search-stock">Search by Ticker Name: </label> */}
            <br></br>
            <br></br>
              <form>
              <input type="text" value={stockName} onChange={event => handleStockChange(event.target.value)} id="search-pane-input" placeholder="Ticker name (fb, ibm, etc.)"/>
            {/* <div className="button-div">
              <button type="submit" >Search Ticker</button>
            </div> */}
            </form>
        </div>
    </div>
        <StockList stock={stockSearch} />
        </div>

   )
    //All of the data is hoisted to the top of the tree in the container
    // and it is passed to the child components 
}