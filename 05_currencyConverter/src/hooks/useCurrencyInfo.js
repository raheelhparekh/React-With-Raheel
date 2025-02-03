//custom hooks
import { useEffect,useState } from "react";


function useCurrencyInfo(currency){
    const[data,setData]=useState({})
    const[date,setDate]=useState('')
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-01-31/v1/currencies/${currency}.json`)
        .then((res)=>res.json()) // converts string to json
        .then(
            (res)=>{
                setData(res[currency])
                setDate(res.date)           
            }
        )    
    },[currency])
    return {data,date}

}
export default useCurrencyInfo;