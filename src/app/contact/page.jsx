'use client'
import { Header } from "../components/header"
import {Footer} from "../components/footer"
import { Contacts } from "../components/contacts"
import './index.css'
import '@/app/components/sideCatagories.css'
import React, { useEffect, useState } from "react"
export default function Products(){
    let [copy,showCopy] = useState(false);
    const [result, setResult] = useState("");
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
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "0cc71050-e982-4b94-a141-61f32b4d27cb");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
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
            <div className=" uppercase fixed bottom-2 px-5 py-2 text-xl rounded-3xl text-white " style={{background: 'linear-gradient(90deg, rgba(147, 195, 243, 1) 0%, rgba(49, 97, 222, 1) 100%)', left:'calc(50%)'}}>
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
            contact with us phone or whatsapp <span className=" font-semibold inline-block p-2 mx-2 select-none text-white  cursor-pointer duration-500 hover:scale-110" onClick={()=>(show())} style={{background: ' linear-gradient(90deg, rgba(147, 195, 243, 1) 0%, rgba(49, 97, 222, 1) 100%)'}}> 01098676589</span>
        </div>
        </section>
        {copy?<Copied/>:''}
        <Footer />
        <Contacts />
        </>
    )
}