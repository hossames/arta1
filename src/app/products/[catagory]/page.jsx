'use client'
import ProductCatagoriesPage from "../../productpages/catagory";
import axios from 'axios';
import {useEffect,useState} from 'react'
const fetching = () =>{
    const data = axios.get("https://server-1kfi.vercel.app/product").then((response) =>response.data);
    return data;
}

export default function Home(props) {
    let [d,setdata] = useState(['empty']);
    useEffect(() => {
        fetching().then(data => setdata(data));
    }, [])
    if(d[0]!=='empty')
    return <ProductCatagoriesPage params={props.params} data ={d} current={parseInt(props.searchParams.currentPage)} num = {parseInt(d.length/13)}/>;
    else{
        return <img src="/assets/03-42-11-849_512.webp" width={'200px'} height={'200px'} style={{
            position: 'absolute',
            left:'calc(50% - 100px)',
            top:'calc(50% - 100px)'
        }} alt="" />
    }
}