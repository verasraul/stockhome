import { Box } from "@mui/material"

export default function StockList(props){
  console.log('StockListprops=', props)

  const backGroundColor = (num) => {
    if(num < 0){
       return 'red'
    }else if (num > 0){
        return 'green'
    }
}

  const stock = props.stock

    return (
      <Box sx={{display:"flex",justifyContent:'center'}}>
      <div className="stock-info" style={{width:'40%'}}> 
    

        <div className="price">
          <div className="name">
                <h1>{ stock.companyName} {stock.symbol}</h1>
          </div>
                <h3>Opening Price: { stock.open }</h3>
                <h3>Calculation Price: { stock.calculationPrice}</h3>
                <div className='open-price' style={{backgroundColor:backGroundColor(stock.latestPrice)}}>
                  <p>Last Price($): { stock.latestPrice }</p>
                </div>
                <br></br>
                <div className='up-down' style={{backgroundColor:backGroundColor(stock.changePercent)}}>
                  <p>Change Percentage(%): { stock.changePercent }</p>
                </div>
        </div>
      </div>
      </Box>
    )
  } 