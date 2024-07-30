'use client'
import { HeaderData , CurrentLang } from "../data";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState , useEffect} from "react";
export const Menu = () =>{
    const [lang, setLang] = useState(1);
    const checkLang= () => {
        if(typeof window === 'object'){
            if(document.cookie.includes('lang')&&document.cookie.includes('0')){
                setLang(0);
                document.querySelector('header').dir='rtl'
            }else{
                setLang(1);
                document.querySelector('header').dir='ltr'
            }
        }
    }
    useEffect(checkLang);
    return(
    <div className="drop flex flex-col gap-y-2 text-blue-300 mx-5 my-2 md:m-0">
        <a href="/products/single-disc-machines?currentPage=0" className="menu-item"><span className="flex justify-between">{HeaderData[lang].single_disc_machines} <FaArrowRightLong/></span></a>
        <a href="/products/vaccum-cleaners?currentPage=0" className="menu-item"><span className="flex justify-between">{HeaderData[lang].vaccum_cleaners} <FaArrowRightLong/></span></a>
        <a href="/products/scrubber-machines?currentPage=0" className="menu-item"><span className="flex justify-between">{HeaderData[lang].scrubber_machines} <FaArrowRightLong/></span></a>
        <a href="/products/burnishers?currentPage=0" className="menu-item"><span className="flex justify-between">{HeaderData[lang].burnishers} <FaArrowRightLong/></span></a>
        <a href="/products/sweepers?currentPage=0" className="menu-item"><span className="flex justify-between">{HeaderData[lang].sweepers} <FaArrowRightLong/></span></a>
        <a href="/products/blowers?currentPage=0" className="menu-item"><span className="flex justify-between">{HeaderData[lang].blowers} <FaArrowRightLong/></span></a>
        <a href="/products/cleaning-trolleys?currentPage=0" className="menu-item"><span className="flex justify-between">{HeaderData[lang].cleaning_trolleys} <FaArrowRightLong/></span></a>
        <a href="/products/house-keeping-trolleys?currentPage=0" className="menu-item"><span className="flex justify-between">{HeaderData[lang].house_keeping_trolleys} <FaArrowRightLong/></span></a>
        <a href="/products/laundry-trolleys?currentPage=0" className="menu-item"><span className="flex justify-between">{HeaderData[lang].laundry_trolleys} <FaArrowRightLong/></span></a>
        <a href="/products/garbage-containers?currentPage=0" className="menu-item"><span className="flex justify-between">{HeaderData[lang].garbage_containers} <FaArrowRightLong/></span></a>
        <a href="/products/cleaning-tools?currentPage=0" className="menu-item"><span className="flex justify-between">{HeaderData[lang].cleaning_tools} <FaArrowRightLong/></span></a>
        <a href="/products/dryers?currentPage=0" className="menu-item"><span className="flex justify-between">{HeaderData[lang].dryers} <FaArrowRightLong/></span></a>
        <a href="/products/bins?currentPage=0" className="menu-item"><span className="flex justify-between">{HeaderData[lang].bins} <FaArrowRightLong/></span></a>
    </div>
    )
}