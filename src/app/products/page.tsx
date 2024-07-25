'use client'
import { Header } from "../header"
import {Footer} from "../footer"
import { ProductsData } from "../data"
import { Contacts } from "../contacts"
import { Product } from "./product"
import '../sideCatagories.css'
import {Menu} from "../sideCatagories"
export default function Products(){
    const ProductsCard=()=>{
        return ProductsData.map((item,index)=>(
            <Product key={item.id} id={index} item={item}/>
        ))
    }
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