


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
      <div className="stock-info"> 
        <div className="name">
              <h1>{ stock.companyName} {stock.symbol}</h1>
        </div>

        <div className="price">
              <h3>Opening Price: { stock.open }</h3>
              <h3>Closing Price: { stock.close}</h3>
              <div className='open-price' style={{backgroundColor:backGroundColor(stock.open)}}>
              <p>Last Price($): { stock.latestPrice }</p>
              </div>
              <br></br>
              <div className='up-down' style={{backgroundColor:backGroundColor(stock.changePercent)}}>
              <p>Change Percentage(%): { stock.changePercent }</p>
              </div>
        </div>

      </div>
    )
  }