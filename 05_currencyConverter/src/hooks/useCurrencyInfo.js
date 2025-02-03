//custom hooks
import { useEffect,useState } from "react";


function useCurrencyInfo(currency){
    const[data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-01-31/v1/currencies/${currency}.json`)
        .then((res)=>res.json()) // converts string to json
        .then((res)=>setData(res[currency]))
        
    },[currency])
    // console.log(data)
    return data

}
export default useCurrencyInfo;