'use client'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useState } from "react";
export const Pages = (props) => {
    const [currentPage, setCurrentPage] = useState(props.currentPage);
    const prev = () =>{
        currentPage > 0 && setCurrentPage(currentPage - 1)
    }
    const next = () =>{
        currentPage <(props.num/12)  && setCurrentPage(currentPage + 1)
    }
    return (
        <div className="w-1/4 flex justify-between">
            <a onClick={prev()} href={ `./?${currentPage}`}><GrPrevious/></a>
            <GrNext onClick={next()} />
        </div>
    )
}