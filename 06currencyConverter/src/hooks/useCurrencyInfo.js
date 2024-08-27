import { useEffect,useState } from "react";


function useCurrencyInfo(currency){

  const [data, setData] = useState({})

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
    .then((res)=> res.json()) // changing res to json object
    .then((res)=>setData(res[currency])) // then accesssing the currency field
    console.log(data);
    
  }, [currency]); // i want to run this function when currency changes
  console.log(data);  
  return data;
}


export default useCurrencyInfo;