'use client'
import { ProductsData } from "@/app/data"
import {Header} from '@/app/header';
import {Footer}from'@/app/footer'
import { Contacts } from '@/app/contacts'
import {Product} from '@/app/products/product'
import {Menu} from "../../sideCatagories"
import { useEffect } from "react";
import '../../sideCatagories.css'
export default function ProductCatagoriesPage(props){
    const ProductsCard=()=>{
        return ProductsData.filter(product=>product.catagory === props.params.catagory).map((item,index)=>(
            <Product key={item.id} id={index} item={item}/>
        ))
    }
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
        <h1 className='text-2xl font-bold p-4 edit-text text-blue-300 mx-10 mt-2 text-center' style={{background: 'linear-gradient(180deg,#000,#2a2a2a)'}}><a href="/products">Products</a></h1>
        <section className='flex items-start'style={{minHeight:'95vh'}}>
            <div className="flex-col items-center hidden md:flex my-2 mr-2 ml-10">
            <Menu />
            </div>
            <div className="flex flex-wrap items-start justify-center">
            <ProductsCard/>
            </div>
        </section>
        <Footer />
        <Contacts />
        </>
    )
}