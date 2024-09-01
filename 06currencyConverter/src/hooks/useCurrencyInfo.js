import { useEffect,useState } from "react";


function useCurrencyInfo(currency){

  const [data, setData] = useState({})

        useEffect(() => {
          // Define an async function inside useEffect
          const fetchCurrencyData = async () => {
              try {
                  const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
                  const jsonData = await response.json(); // Convert response to JSON
                  setData(jsonData[currency]); // Access the currency field and update the state
                  console.log(jsonData[currency]); // Log the data to the console
              } catch (error) {
                  console.error('Error fetching currency data:', error);
              }
          };

          fetchCurrencyData(); // Call the async function

      }, [currency]);
    console.log(data);  
    return data;
}


export default useCurrencyInfo;