import { Box } from "@mui/material";
import StockList from "./StockList";




export default function MostActiveList(props){
    const stocks = props.activeStocks;

    const backGroundColor = (num) => {
        if(num < 0){
           return 'red'
        }else if (num > 0){
            return 'green'
        }
    }

    const stock = stocks.map((stock) => {
        return(
        <StockList stock={stock} />
        )
    }
    )



    return(

        <Box >
            {stock}
        {/* <div className="stock-info" style={{width:'40%'}}>
            <div className="price">
            { stocks.map((stock,index) => {
                return (
                    <Box key={index} >
                        <div className="name" >
                            <h1>{ stock.companyName} {stock.symbol} </h1>
                        </div>
                        
                        <h3>Opening Price: { stock.open}</h3>
                        <h3 style={{marginBottom:'10px'}}>Calculation Price: { stock.calculationPrice } </h3>
                        
                        <div className="open-price" style={{backgroundColor:backGroundColor(stock.open),marginBottom:'10px'}}>
                            <p>Last Price($): { stock.latestPrice }</p>
                        </div>
                        
                        <div className="up-down" style={{backgroundColor:backGroundColor(stock.changePercent)}}>
                            <p>Change Percentage(%): { stock.changePercent } </p>
                        </div>
                        <br></br> 
                    </Box>
                    
                );
            })}
            </div>
        </div> */}
        
        </Box>

    )
}