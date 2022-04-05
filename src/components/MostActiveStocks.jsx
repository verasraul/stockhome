import { useState, useEffect } from 'react';
import { MostActiveStocks } from '../services/Constants';



export default function MostActiveStocks() {
    const [mostActivStocks, setMostActiveStocks] = useState([]);


    // call MostActiveStock endpoint and store data in state.
    const fetchMostActiveStocks = async () => {
        try {
            const response = await MostActiveStocks();
            setMostActiveStocks(response);
            console.log(setMostActiveStocks);
        } catch (error){
            console.log(error);
        }
    }




    return(
        <div className='most-active-stocks'>
        </div>
    )
}