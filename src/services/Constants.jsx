import axios from "axios";


// https://cloud.iexapis.com/stable/ref-data/symbols?token=${process.env.REACT_APP_STOCKAPI_KEY}`
export async function Symbols(){
    const Result = await axios.get(`https://cloud.iexapis.com/stable/ref-data/symbols?token=${process.env.REACT_APP_STOCKAPI_KEY}`)
    .then(({ data }) => {
        return data;
      });
      return Result;
}



// `https://cloud.iexapis.com/stable/stock/${searchterm}/quote?token=${process.env.REACT_APP_STOCKAPI_KEY}`
export async function Search(searchterm){
    const SearchResult = await axios.get(`https://cloud.iexapis.com/stable/stock/${searchterm}/quote?token=${process.env.REACT_APP_STOCKAPI_KEY}`)
    .then(({ data }) => {
        return data;
      });
      return SearchResult;
}


export async function MostActiveStocks(){
  const Result = await axios.get(`https://cloud.iexapis.com/stable/stock/market/collection/list?collectionName=mostactive&token=${process.env.REACT_APP_STOCKAPI_KEY}`)
  .then(({data}) => {
    return data;
  });
  return Result;
}