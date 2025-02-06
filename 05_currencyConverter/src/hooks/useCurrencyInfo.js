//custom hooks
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [date, setDate] = useState('');
  const today = new Date().toISOString().split('T')[0]; // get today's date

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${today}/v1/currencies/${currency}.json`)
      .then((res) => res.json()) // converts string to json
      .then((res) => {
        setData(res[currency]);
        setDate(res.date);
      });
  }, [currency, today]);
  console.log(data);

  return { data, date };
}

export default useCurrencyInfo;