import {Header} from '../components/header';
import {Footer}from'../components/footer'
import Image from 'next/image';
import { Contacts } from '../components/contacts';
import '@/app/components/sideCatagories.css'
export default function Home() {
  return(
    <section>
    <Header />
    <div className='relative flex justify-center items-center'>
      <img className='' alt='ادوات نظافة و توريدات'  style={{width:'100%' ,height:'95vh'}} src='/image/HomeBackGround.jpg'/>
      <span className='block absolute w-full top-0 left-0 bg-black opacity-80 layer' style={{height:'95vh'}} ></span>
      <p className=' absolute text-9xl text-white font-thin select-none'>ARTA</p>
    </div>
    <Footer />
    <Contacts/>
    </section>
  );
}
