import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  /*
     useEffect se api call kiya hai.
     not optimized way to fetch data from api.
     */

//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/raheelhparekh")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

    const data = useLoaderData();
  return (
    <div className='bg-black text-white p-7 m-6 text-center text-3xl'>
    <h2 className="mb-4">GitHub Stats: {data.login}</h2>
    <div className='flex items-center justify-center'>
        <img className="mr-4" src={data.avatar_url} alt="Git Profile Pic" />
        <div>
            <p className="mb-2 font-semibold text-white-500">Name: {data.name}</p>
            <p className="mb-2 font-light text-white-500">Location: {data.location}</p>
            <p className="mb-2 font-bold text-green-500">Followers: {data.followers}</p>
            <p className="mb-2 font-medium text-red-500">Following: {data.following}</p>
        </div>
    </div>
</div>
  );
}
export default Github;

/*
    loader function ka use kiya api fetch karne ke liye. 
    optimized way to fetch data from api.
*/

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/raheelhparekh");
  const data = await response.json();
  return data;
}
