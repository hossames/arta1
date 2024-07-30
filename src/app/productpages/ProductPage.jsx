'use client'
import { Header } from "../components/header"
import {Footer} from "../components/footer"
import {HeaderData,P} from "../data"
import { Contacts } from "../components/contacts"
import { Product } from "../products/product"
import '@/app/components/sideCatagories.css'
import {Pages} from '@/app/components/pages'
import {useState,useEffect} from 'react'
import {Menu} from "../components/sideCatagories"
export default function Products(props){
    const ProductsData=props.data;
    const products = ProductsData.slice(props.current*12,Math.min(props.current*12+12,ProductsData.length));
    const [lang, setLang] = useState(1);
    const ProductsCard=()=>{
        return products.map((item,index)=>(
            <Product key={index} item={item}/>
        ))
    }
    const checkLang= () => {
        if(typeof window === 'object'){
            if(document.cookie.includes('lang')&&document.cookie.includes('0')){
                setLang(0);
                document.querySelector('header').dir='rtl'
            }else if(document.cookie.includes('lang')){
                setLang(1);
                document.querySelector('header').dir='ltr'
            }else{
                document.cookie='lang=1'
            }
            console.log(document.cookie);
        }
    }
    useEffect(() => {
        checkLang()
    }, []);
    return(
        <>
        <Header />
        <h1 className='text-2xl font-bold p-4 edit-text text-blue-300 mx-10 mt-2 text-center' style={{background: 'linear-gradient(180deg,#000,#2a2a2a)'}}><a href="/products?currentPage=0">{HeaderData[lang].Products}</a></h1>
        <section className='relative flex items-start justify-center md:justify-normal'style={{minHeight:'95vh'}}>
            <div className="flex-col items-center hidden md:flex my-2 mr-2 ml-10">
            <Menu />
            </div>
            <div className="flex flex-wrap items-start justify-center">
            <ProductsCard/>
            </div>
        </section>
        <Pages currentPage={props.current} num={props.num}/>
        <Footer />
        <Contacts />
        </>
    )
}