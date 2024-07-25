import {Header} from './header';
import {Footer}from'./footer'
import Image from 'next/image';
import { Contacts } from './contacts';
import backGround from './HomeBackGround.jpg'
import './sideCatagories.css'
export default function Home() {
  return(
    <section>
    <Header />
    <div className='relative flex justify-center items-center'>
      <Image className='' alt='ادوات نظافة و توريدات'  style={{width:'100%' ,height:'95vh'}} src={backGround}></Image>
      <span className='block absolute w-full top-0 left-0 bg-black opacity-80 layer' style={{height:'95vh'}} ></span>
      <p className=' absolute text-9xl text-white font-thin select-none'>ARTA</p>
    </div>
    <Footer />
    <Contacts/>
    </section>
  );
}
