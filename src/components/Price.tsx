"use client"

import React, { useState } from 'react'

type Props = {
    price:number;
    id:number;
    options?: {title: string; additionalPrice: number}[]
}
const Price = ({price,id,options}: Props) => {
  const [total,setTotal] = useState(price);
  const [quantity,setQuantity] = useState(1);
  const [selected,setSelected] = useState(0);
  
  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>${total.toFixed(2)}</h2>
        <div className="flex gap-4">
          {options?.map((option,index)=>(
            <button 
            key={option.title} 
            className='min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md'
            style={{
              background: selected === index ? "rgb(255,183,3)" : "white",
              color: selected === index ? "white" : "red"
            }}
            onClick={()=>setSelected(index)}
            >{option.title}</button>
          ))}
        </div>
        <div className="flex justify-between items-center">

          <div className=" flex justify-between w-full p-3 ring-1 ring-red-400">
            <span>Cantidad</span>
            <div className='flex gap-4 items-center'>
              <button>{'<'}</button>
              <span>{quantity}</span>
              <button>{'>'}</button>
            </div>
          </div>
          <button className='uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500 rounded-sm'>Agregar</button>
        </div>
    </div>
  )
}
// 1:37:55
export default Price