import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import './contacts.css'
export const Contacts= ()=>{
    return (
        <>
        <a className="whatsapp fixed left-3 bottom-10 p-1 bg-green-500 flex justify-center items-center gap-3 font-bold text-white rounded-full" target="_blank" href='https://wa.me/+201098676589'><FaWhatsapp size={30} fill="white"/><p className=" hidden p-1">contact Us</p></a>
        <a className="facebook fixed left-3 bottom-24 p-1 bg-blue-800 flex justify-center items-center gap-3 font-bold text-white rounded-full" target="_blank" href='https://wa.me/+201098676589'><FaFacebook size={30} fill="white"/><p className=" hidden p-1">visit our Page</p></a>
        </>
    )
}