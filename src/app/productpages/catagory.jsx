'use client'
import {Header} from '@/app/components/header';
import {Footer}from'@/app/components/footer'
import { Contacts } from '@/app/components/contacts'
import {Product} from '@/app/products/product'
import {Menu} from "@/app/components/sideCatagories"
import { useEffect , useState} from "react";
import { Pages } from '../components/pages';
import '@/app/components/sideCatagories.css'
import { HeaderData } from "@/app/data";
export default function ProductCatagoriesPage(props){
    const ProductsData=props.data;
    const products = ProductsData.slice(props.current*12,Math.min(props.current*12+12,ProductsData.length))
    const ProductsCard=()=>{
        return products.filter(product=>product.catagory === props.params.catagory).map((item,index)=>(
            <Product key={index} item={item}/>
        ))
    }
    const [lang, setLang] = useState(1);
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
    const check=()=>{
    if(typeof window === 'object'){
        var links=document.querySelectorAll('.menu-item');
        links.forEach(lnk => {
            var urlString=lnk.getAttribute('href');
            if(urlString.includes(props.params.catagory)){
                lnk.style.transform="scale(1.1)" ;
                lnk.style.color= 'white'
            }
            else{
                lnk.style.transform="" ;
            }
        
        })
    }}
    useEffect(check);
    return(
        <>
        <Header />
        <h1 className='text-2xl font-bold p-4 edit-text text-blue-300 mx-10 mt-2 text-center' style={{background: 'linear-gradient(180deg,#000,#2a2a2a)'}}><a href="/products?currentPage=0">{HeaderData[lang].Products}</a></h1>
        <section className='flex items-start justify-center md:justify-normal 'style={{minHeight:'95vh'}}>
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