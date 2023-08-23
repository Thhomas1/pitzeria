import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {
  const user = false
  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 lx:px-40'>
        {/* Izq MENU */}
        <div className="hidden md:flex gap-4 flex-1">
          <Link href="/" >Inicio</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/" >Contacto</Link>
        </div>
        {/* LOGO */}
        <div className='text-4xl md:font-bold flex-1 md:text-center'>
            <Link href="/">
                PizzEli
            </Link> 
        </div>
        {/* MOBILE MENU */}
        <div className="md:hidden">
            <Menu/>
        </div>
        {/* Der MENU */}
        <div className="hidden md:flex  gap-4 items-center justify-end flex-1">
          <div className=" md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-200 px-1 rounded-md">
            <Image src="/phone.png" alt="" width={20} height={20}/>
            <span>123 456 </span>
          </div>
          {!user ? (
          <Link href="/login">Ingresar</Link>
           ) : (
          <Link href="/orders">Ordenes</Link>
          )}
          <CartIcon />
        </div>
    </div>

    
  )
}
// Utilizamos el navbar para justamente implementar el menu y el link en responsivo.... lo complementamos todo con el Menu.tsx



export default Navbar