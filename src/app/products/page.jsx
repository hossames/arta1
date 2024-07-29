'use client'
import Products from '../productpages/ProductPage';
import axios from 'axios';
const fetching = async() =>{
    const data = await axios.get("https://server-1kfi.vercel.app/product");
    return data.data;
}

export default async function Home() {
    const data = await fetching();
    return (
        <Products data={data}/>
    )
}