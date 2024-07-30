'use client'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
export const Pages = (props) => {
    let currentPage= props.currentPage;
    console.log(props);
    return (
        <div className="w-full flex justify-center gap-5">
            {
                currentPage!==0?
                <a style={{
                    background: 'linear-gradient(90deg, rgba(147, 195, 243, 1) 0%, rgba(49, 97, 222, 1) 100%)'
                }} 
                className=
                'flex p-3 gap-3 text-2xl font-semibold text-white rounded-xl m-3 justify-center items-center duration-700 hover:scale-110' 
                href={ window.location.href.substring(0,window.location.href.length-1)+`${Math.max(0,currentPage-1)}`}><span>BACK</span><GrPrevious/></a>
                :
                <div style={{
                    background: 'gray'
                }} 
                className=
                'flex p-3 gap-3 text-2xl select-none font-semibold text-white rounded-xl m-3 justify-center items-center' 
                ><span>BACK</span><GrPrevious/></div>
            }
            {
                currentPage!==props.num?
                <a style={{
                    background: 'linear-gradient(90deg, rgba(147, 195, 243, 1) 0%, rgba(49, 97, 222, 1) 100%)'
                }} 
                className=
                'flex p-3 gap-3 text-2xl select-none font-semibold text-white rounded-xl m-3 justify-center items-center duration-700 hover:scale-110' 
                href={   window.location.href.substring(0,window.location.href.length-1)+`${Math.min(currentPage+1,props.num)}`}><span>NEXT</span><GrNext /></a>
                :
                <div style={{
                    background:"gray"
                }} 
                className=
                'flex p-3 gap-3 text-2xl select-none font-semibold text-white rounded-xl m-3 justify-center items-center' 
                ><span>NEXT</span><GrNext /></div>
            }
        </div>
    )
}