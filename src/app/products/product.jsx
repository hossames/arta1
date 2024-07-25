'use client'
import Image from 'next/image'
import './product.css'
import Link from 'next/link'
export const Product = (props)=>{
    const {id,item} = props;
    return(
        <div className="  product flex flex-col p-4 my-4 items-center mx-2">
            <Image  className='' alt='ادوات نظافة و توريدات' src={item.image}></Image>
            <h2 className='text-center text-xs flex items-center justify-between font-semibold text-black'>
                {item.name}
                <Link className='btn  py-2 px-4 ml-3 rounded-xl duration-700 hover:scale-110 text-white' href={`/products/${item.catagory}/${item.id}`}>
                    View
                </Link>
            </h2>
        </div>
    )
}