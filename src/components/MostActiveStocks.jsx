import { useState, useEffect } from 'react';
import { MostActive } from '../services/Constants';
import MostActiveList from './MostActiveList';



export default function MostActiveStocks() {
    const [mostActiveStocks, setMostActiveStocks] = useState([]);


    // call MostActiveStock endpoint and store data in state.
    const fetchMostActiveStocks = async () => {
        try {
            const response = await MostActive();
            setMostActiveStocks(response);
            console.log(setMostActiveStocks);
        } catch (error){
            console.log(error);
        }
    }
    useEffect( () => {
        fetchMostActiveStocks();
    }, [])



    return(
        <div>
            <MostActiveList activeStocks={mostActiveStocks} />
        </div>
    )
}