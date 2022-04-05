



export default function MostActiveList(props){
    const stocks = props.activeStocks;

    const backGroundColor = (num) => {
        if(num < 0){
           return 'red'
        }else if (num > 0){
            return 'green'
        }
    }



    return(
        <div className="stock-info">
            <div className="price">
            { stocks.map((stock) => {
                return (
                    <div>
                        <div className="name">
                            <h1>{ stock.companyName} {stock.symbol} </h1>
                        </div>
                        <h3>Opening Price: { stock.open}</h3>
                        <h3>Calculation Price: { stock.calculationPrice } </h3>
                        {/* <br></br> */}
                        <div className="open-price" style={{backGroundColor:backGroundColor(stock.open)}}>
                            <p>Last Price($): { stock.latestPrice }</p>
                        </div>
                        <br></br>
                        <div className="up-down" style={{backGroundColor:backGroundColor(stock.changePercent)}}>
                            <p>Change Percentage(%): { stock.changePercent } </p>
                        </div>
                    </div>
                );
            })}
            </div>
        </div>
    )
}