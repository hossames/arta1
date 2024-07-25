'use client'
import { Header } from "../header"
import {Footer} from "../footer"
import { Contacts } from "../contacts"
import './index.css'
import '../sideCatagories.css'
import React, { use, useState } from "react"
export default function Products(){
    let [copy,showCopy] = useState(false);
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "0cc71050-e982-4b94-a141-61f32b4d27cb");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
    };
    function show(){
        console.log(1);
        showCopy(true);
        navigator.clipboard.writeText('01098676589')
        setTimeout(()=>{
            showCopy(false);
        },1000);
    }
    const Copied = () => {
        return(
            <div className=" uppercase fixed bottom-2 px-5 py-2 text-xl rounded-3xl text-white left-1/2" style={{backgroundColor: 'rgb(255, 95, 9)'}}>
                copied
            </div>
        )
    }
    return(
        <>
        <Header />
        <section className='flex flex-col gap-4 items-center'style={{minHeight:"100vh"}}>
        <form onSubmit={onSubmit}>
            <div className="inputBox">
                <label>Name</label>
                <input type="text" className="field" placeholder="enter your name" name="name" required/>
            </div>
            <div className="inputBox">
                <label>Phone Number</label>
                <input type="text" className="field" placeholder="your phone number" name="phone" required/>
            </div>
            <div className="inputBox">
                <label>Email</label>
                <input type="text" className="field" placeholder="your email : handle@etc.com" name="email" required/>
            </div>
            <div className="inputBox">
                <label>Message</label>
                <textarea type="text" className="field" placeholder="message..." name="massage" required/>
            </div>
            <button type="submit">Submit</button>
        </form>
        <div className="text-3xl font-bold ">
            OR
        </div>
        <div className="m-10 font-semibold flex flex-col justify-center items-center gap-y-1 md:flex-row">
            contact with us phone or whatsapp <span className=" font-semibold inline-block p-2 mx-2 select-none text-white  cursor-pointer duration-500 hover:scale-110" onClick={()=>(show())} style={{backgroundColor: 'rgb(255, 95, 9)'}}> 01098676589</span>
        </div>
        </section>
        {copy?<Copied/>:''}
        <Footer />
        <Contacts />
        </>
    )
}