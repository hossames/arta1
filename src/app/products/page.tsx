'use client'
import { Header } from "../components/header"
import {Footer} from "../components/footer"
import { ProductsData } from "../data"
import { Contacts } from "../components/contacts"
import { Product } from "./product"
import '@/app/components/sideCatagories.css'
import {Menu} from "../components/sideCatagories"
export default function Products(props:any){
    const ProductsCard=()=>{
        return ProductsData.map((item,index)=>(
            <Product key={index} item={item}/>
        ))
    }
    function s() {
        if(typeof window === 'object')
        {
            document.cookie ='lang=ar'
            console.log(document.cookie);
        }
    }
    return(
        <>
        <Header />
        <h1 className='text-2xl font-bold p-4 edit-text text-blue-300 mx-10 mt-2 text-center' style={{background: 'linear-gradient(180deg,#000,#2a2a2a)'}}><a href="/products">Products</a></h1>
        <section onClick={s} className='flex items-start'style={{minHeight:'95vh'}}>
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