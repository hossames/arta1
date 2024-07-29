'use client'
import ProductCatagoriesPage from "../../productpages/catagory";
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
    return <ProductCatagoriesPage data={d} params={props.params}/>
}