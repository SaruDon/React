import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router';

const Github = () => {

  // const [data, setdata] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.github.com/users/SaruDon')
  //   .then(res => res.json())
  //   .then(data =>{
  //     console.log(data);
  //     setdata(data)
  //   })
  // }, []);


  const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>Github Followers; {data?.followers}
    <img src={data.avatar_url} alt="Git picture" width="300px" />
    </div>
  )
}

export default Github
export const githubInfoLoader = async () =>{
  const res = await fetch('https://api.github.com/users/SaruDon')
  return res.json();
}