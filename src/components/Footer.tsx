import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='text-sm h-12 md:h-12 p-3 lg:px-2 xl:px-2 text-red-500 flex items-center justify-between'>
      <Link href="/" className='font-bold text-md '>Pizzeli</Link>
      <p>Todos los derechos reservados</p>
      <p>Thomas Romero</p>
    </div>
  )
}

export default Footer