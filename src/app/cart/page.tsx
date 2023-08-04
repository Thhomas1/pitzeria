import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500">
      <div className="h-1/2 p-4">
        <div className="">
          <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
          <div className="">
            <h1>Siciliana</h1>
            <span>Large</span>
          </div>
          <h2>$100.00</h2>
          <span>X</span>
        </div>
      </div>
      <div className="h-1/2 p-4 bg-fuchsia-100">
        <div className="">
          <span className="">Subtotal (3 item)</span>
          <span className="">$80.00</span>
        </div>
        <hr className='' />
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2">Paga</button>
      </div>
    </div>
  )
}

// 1:47:00
export default CartPage