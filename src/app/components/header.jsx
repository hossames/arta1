'use client';
import { MdKeyboardArrowDown   } from "react-icons/md";
import { RiMenu3Line , RiCloseLine } from "react-icons/ri";
import { HeaderData  } from "../data";
import { useState } from "react";
import { Menu } from "./sideCatagories";
import { useEffect } from "react";
import './Header.css'
const Nav =(props)=>{
    let {lang}=props;
    return(
    <>
    <nav className='links-Continer flex gap-1 text-xl font-medium text-blue-300'>
            <a href="/" id ='home' className="p-3 nav-item nav-underline">{HeaderData[lang].Home}</a>
            <a href='/products?currentPage=0' id='products' className="p-3 nav-item nav-underline">
                {HeaderData[lang].Products}
            </a>
            <a href="/contact" id = 'contact' className="p-3 nav-item nav-underline">{HeaderData[lang].Contact}</a>
    </nav>
    </>
    )
}
const SideBar = (props) => {
    const [current,change]=useState(false);
    const {lang} = props;
    return(
        <>
        <div dir='ltr' className=' side flex gap-1 text-xl font-medium text-blue-300'>
                <a href="/" id ='home' className="p-3 nav-item nav-underline">{HeaderData[lang].Home}</a>
                <div href="/products?currentPage=0"  className="">
                    <span className="nav-underline p-3 flex items-center gap-1">
                        <a href="/products?currentPage=0" id ='products'>{HeaderData[lang].Products}</a>
                        <MdKeyboardArrowDown onClick={()=>change(!current)}  className=" text-2xl"/>
                    </span>
                    {current?<Menu/>:''}
                </div>
                <a href="/contact" id ='contact' className="p-3 nav-item nav-underline">{HeaderData[lang].Contact}</a>
        </div>
        </>
    )
}
export const Header = ()=>{
    const [lang, setLang] = useState(1);
    const [showMenu,setShowMenu]=useState(false);
    function deleteAllCookies() {
        var allCookies = document.cookie.split(';'); 
        for (var i = 0; i < allCookies.length; i++) 
            document.cookie = allCookies[i] + "=;expires=" 
            + new Date(0).toUTCString(); 
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
    const check=()=>{
        if(typeof window === 'object'){
            if(window.location.href.includes('products')){
                document.getElementById('products').style.color = 'white';
                document.getElementById('home').style.color = 'rgb(147,197,253)';
                document.getElementById('contact').style.color = 'rgb(147,197,253)';
            }
            else if(window.location.href.includes('contact')){
                document.getElementById('contact').style.color = 'white';
                document.getElementById('home').style.color = 'rgb(147,197,253)';
                document.getElementById('products').style.color = 'rgb(147,197,253)';
            }
            else{
                document.getElementById('home').style.color = 'white';
                document.getElementById('products').style.color = 'rgb(147,197,253)';
                document.getElementById('contact').style.color = 'rgb(147,197,253)';
            }
        }
    }
    useEffect(checkLang);
    useEffect(check);
    return(
        <>
        <header id="header" className=" flex justify-between py-4 px-10 box-border items-center" style={{background: 'linear-gradient(360deg,#000,#2a2a2a)'}}>
            <a href="/" className="p-3 logo text-2xl uppercase font-semibold text-blue-300">Arta</a>
            <Nav lang={lang}/>
            <nav className="language-select text-xl font-medium text-blue-300 list-none flex gap-3">
                <li  onClick={()=>{deleteAllCookies();document.cookie='lang=1';location.reload()}}>en</li>
                <li onClick={()=>{deleteAllCookies();document.cookie='lang=0';location.reload()}}>ar</li>
            </nav>
            {
                showMenu?
                <>
            <RiCloseLine className='text-blue-50 icon close' style={{fontSize:'1.5rem'}} onClick={()=>{
                setShowMenu(!showMenu);
                document.body.classList.remove('overflow-hidden');
                
            }}/>
            <SideBar lang={lang}/>
            </>
            :
            <RiMenu3Line className='text-blue-50 icon close' style={{fontSize:'1.5rem'}} onClick={()=>{
                setShowMenu(!showMenu);
                if(window.innerWidth<=768)
                {
                    console.log(window.innerWidth);
                    document.body.classList.add('overflow-hidden');
                }
                else{
                    document.body.classList.remove('overflow-hidden');
                }
            }}/>
        }
        </header>
        </>
    )
}