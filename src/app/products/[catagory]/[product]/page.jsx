'use client'
import ProductPage from '@/app/productpages/product'
import axios from 'axios';
const fetching = async() =>{
    const data = await axios.get("https://server-1kfi.vercel.app/product");
    return data.data;
}

export default async function Home(props) {
    const data = await fetching();
    return (
        <ProductPage data={data} params={props.params}/>
    )
}