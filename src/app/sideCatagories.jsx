'use client'
import { HeaderData , CurrentLang } from "./data";
import { FaArrowRightLong } from "react-icons/fa6";
export const Menu = () =>{
    let lang = CurrentLang.currentLang;
    return(
    <div className="drop flex flex-col gap-y-2 text-blue-300 mx-5 my-2 md:m-0">
        <a href="/products/single-disc-machines" className="menu-item"><span className="flex justify-between">{HeaderData[lang].single_disc_machines} <FaArrowRightLong/></span></a>
        <a href="/products/vacuum-cleaners" className="menu-item"><span className="flex justify-between">{HeaderData[lang].vacuum_cleaners} <FaArrowRightLong/></span></a>
        <a href="/products/scrubber-machines" className="menu-item"><span className="flex justify-between">{HeaderData[lang].scrubber_machines} <FaArrowRightLong/></span></a>
        <a href="/products/burnishers" className="menu-item"><span className="flex justify-between">{HeaderData[lang].burnishers} <FaArrowRightLong/></span></a>
        <a href="/products/sweepers" className="menu-item"><span className="flex justify-between">{HeaderData[lang].sweepers} <FaArrowRightLong/></span></a>
        <a href="/products/blowers" className="menu-item"><span className="flex justify-between">{HeaderData[lang].blowers} <FaArrowRightLong/></span></a>
        <a href="/products/cleaning-trolleys" className="menu-item"><span className="flex justify-between">{HeaderData[lang].cleaning_trolleys} <FaArrowRightLong/></span></a>
        <a href="/products/house-keeping-trolleys" className="menu-item"><span className="flex justify-between">{HeaderData[lang].house_keeping_trolleys} <FaArrowRightLong/></span></a>
        <a href="/products/laundry-trolleys" className="menu-item"><span className="flex justify-between">{HeaderData[lang].laundry_trolleys} <FaArrowRightLong/></span></a>
        <a href="/products/garbage-containers" className="menu-item"><span className="flex justify-between">{HeaderData[lang].garbage_containers} <FaArrowRightLong/></span></a>
        <a href="/products/cleaning-tools" className="menu-item"><span className="flex justify-between">{HeaderData[lang].cleaning_tools} <FaArrowRightLong/></span></a>
        <a href="/products/dryers" className="menu-item"><span className="flex justify-between">{HeaderData[lang].dryers} <FaArrowRightLong/></span></a>
        <a href="/products/bins" className="menu-item"><span className="flex justify-between">{HeaderData[lang].bins} <FaArrowRightLong/></span></a>
    </div>
    )
}