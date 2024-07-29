'use client'
import {Header} from '@/app/components/header';
import {Footer}from'@/app/components/footer'
import { Contacts } from '@/app/components/contacts'
import Image from "next/image";
import '@/app/components/sideCatagories.css'
import { Table } from '@/app/spec_table'
import './productPage.css'
import '@/app/products/product.css'
import { useState } from "react";
export default function ProductPage(props){
    let ProductsData = props.data;
    let item = ProductsData.filter(product=>product.id === props.params.product)[0];
    let [overview,setoverview] = useState(0);
    return(
        <>
        <Header />
        <section className='productPage flex justify-center items-center flex-col'style={{minHeight:'95vh'}}>
        <div className="productPageImage">
        <img  className='' alt='ادوات نظافة و توريدات' src={item.image}/>
        <h1>{item.name}</h1>
        </div>
        <div>
            <button onClick={()=>setoverview(0)} style={{width:112}}className="btn py-2 px-4 rounded-xl duration-700 hover:scale-110 text-white">discription</button>
            <button onClick={()=>setoverview(1)} style={{width:112}} className="btn py-2 px-4 ml-4 rounded-xl duration-700 hover:scale-110 text-white">specs</button>
        </div>
        {
            overview?<Table table={item.specs}></Table>:
            <p dir='rtl' className=" my-10 text-center p-4 text alexandria-600 text-x text-gray-400" style={{fontFamily:' sans-serif'}}>
            <span className="block text-gray-900 font-semibold my-4">{item.name}</span>
            {item.description}
            </p>
        }
        </section>
        <Footer />
        <Contacts />
        </>
    )
}