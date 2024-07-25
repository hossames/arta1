import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
export const Footer =()=>{
    return (
        <footer className="text-blue-300 select-none flex flex-col items-center" style={{background: 'linear-gradient(360deg,#000,#2a2a2a)'}}>
            <a href="/" className="p-1 logo text-2xl uppercase font-semibold">Arta</a>
            <div className="flex justify-between gap-4 items-center pb-1 w-full">
            <p className="text-center">2024 Arta. All rights reserved.</p>
            <div className="contact flex gap-3 justify-center items-center">
                <a className=" p-1 bg-green-500 flex justify-center items-center gap-3 font-bold text-white text-xl rounded-full" target="_blank" href='https://wa.me/+201098676589'><FaWhatsapp size={30} fill="white"/></a>
                <a className=" p-1 bg-blue-800 flex justify-center items-center gap-3 font-bold text-white text-xl rounded-full" target="_blank" href='https://wa.me/+201098676589'><FaFacebook size={30} fill="white"/></a>
            </div>
            </div>
        </footer>
    )
};