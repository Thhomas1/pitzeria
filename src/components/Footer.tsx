import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:px-20 xl:x-2 text-red-500 flex items-center justify-between'>
      <Link href="/" className='font-bold text-xl '>Pizzeli</Link>
      <p>Todos los derechos reservados</p>
      <p>Thomas Romero</p>

    </div>
  )
}

export default Footer