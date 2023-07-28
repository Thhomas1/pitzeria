"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartIcon from './CartIcon'

const links = [
    {id: 1, title: "Inicio", url: "/"},
    {id: 2, title: "Menu", url: "/menu"},
    {id: 3, title: "Horas", url: "/"},
    {id: 4, title: "Contacto", url: "/"},
    
]



const Menu = () => {
    const [open,setOpen] = useState(false)
    // Temporal para que no rompa el code
    const user = false
  return (
    <div>
        {!open ? (
        <Image src="/open.png" alt="" width={20} height={20} onClick={()=>setOpen(true)} />

        ) : (
        <Image src="/close.png" alt="" width={20} height={20} onClick={()=>setOpen(false)}  />

        )}
        {open && (
          
        <div className="bg-red-500 text-cyan-100 absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={()=>setOpen(false)} >
              {item.title}
            </Link>
          ))}

          {!user ? (
          
          <Link href="/login" onClick={()=>setOpen(false)}>Ingresar</Link>
          ) : ( 
          <Link href="/orders" onClick={()=>setOpen(false)}>Ordenes</Link>
          )}
          <Link href="/cart" onClick={()=>setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
         )}
    </div>
  );
};

export default Menu

// 23:00


// por este lado utilizamos las constantes open y setOpen para setear en caso de... cerrado que aparezca x imagen
// y en caso de abierto que aparezca x imagen.. ((boleano true o false ))
// esto nos brinda un desarrollo rapido y concreto. 


// mapeamos los links... para dicha hamburguesa responsive 