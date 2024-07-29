'use client'
import ProductPage from '@/app/productpages/product'
import axios from 'axios';
import {useEffect,useState} from 'react'
const fetching = () =>{
    const data = axios.get("https://server-1kfi.vercel.app/product").then((response) =>response.data);
    return data;
}

export default function Home(props) {
    let [d,setdata] = useState([]);
    useEffect(() => {
        fetching().then(data => setdata(data));
    }, [])
    if(d.length)
    return (
        <ProductPage data={d} params={props.params}/>
    )
}