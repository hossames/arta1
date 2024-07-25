'use client'
import { ProductsData } from "@/app/data"
import {Header} from '@/app/header';
import {Footer}from'@/app/footer'
import { Contacts } from '@/app/contacts'
import {Product} from '@/app/products/product'
import '../../../sideCatagories.css'
export default function ProductPage(props){
    let productOfThatPage = ProductsData.filter(product=>product.id === props.params.product);
    const ProductCard=()=>{
        return productOfThatPage.map((item,index)=>(
            <Product key={item.id} id={index} item={item}/>
        ))
    }
    return(
        <>
        <Header />
        <section className='flex items-start'style={{minHeight:'95vh'}}>
            <ProductCard/>
        </section>
        <Footer />
        <Contacts />
        </>
    )
}