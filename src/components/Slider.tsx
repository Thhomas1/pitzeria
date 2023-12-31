"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'


const data = [
  {
    id: 1,
    title: "Mas crujiente imposible",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "Entregas a todo zona sur",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: " La mejor pizza que puede existir para compartir en familia",
    image: "/slide3.jpg",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

   
  /* Para la animacion la usamos luego 
  useEffect(()=>{
    const interval = setInterval(
      ()=>setCurrentSlide(prev=>(prev === data.length -1 ? 0 : prev+1))
    ,2000)
    return ()=> clearInterval(interval);
  }, [])
  */
// eso es para setear el slider en segundos
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-6rem)] lg:flex-row bg-fuchsia-50'>

      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-3 px-6 rounded-md	">Comprar</button>
      </div>
      <div className="w-full flex-1 relative">
        <Image src={data[currentSlide].image} alt='' fill className='object-cover' />
      </div>
    </div>
  )
}
// 45:45
export default Slider