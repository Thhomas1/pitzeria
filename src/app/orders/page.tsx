import React from 'react'

const OrdersPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
     <table className="w-full border-separate border-spacing">
      <thead>
        <tr className='text-left'>
          <th className='hidden md:block'>Orden</th>
          <th>Dia</th>
          <th>Precio</th>
          <th className='hidden md:block'>Producto</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-sm md:text-base odd:bg-red-50'>
        <td className='hidden md:block py-6 px-1'>12312415132</td>
        <td className='py-6 px-1'>31/03/2023</td>
        <td className='py-6 px-1'>90.00</td>
        <td className='hidden md:block'>Big burger Menu (2), Veggie Pizza, Coca Cola 1L (2)</td>
        <td className='py-6 px-1 text-red-500'>On the way (10')</td>
        </tr>
        <tr className='text-sm md:text-base odd:bg-gray-100'>
        <td className='hidden md:block py-6 px-1'>12312415132</td>
        <td className='py-6 px-1'>31/03/2023</td>
        <td className='py-6 px-1'>90.00</td>
        <td className='hidden md:block'>Big burger Menu (2), Veggie Pizza, Coca Cola 1L (2)</td>
        <td className='py-6 px-1'>On the way (10')</td>
        </tr>
        <tr className='text-sm md:text-base odd:bg-gray-100'>
        <td className='hidden md:block py-6 px-1'>12312415132</td>
        <td className='py-6 px-1'>31/03/2023</td>
        <td className='py-6 px-1'>90.00</td>
        <td className='hidden md:block'>Big burger Menu (2), Veggie Pizza, Coca Cola 1L (2)</td>
        <td className='py-6 px-1'>On the way (10')</td>
        </tr>
      </tbody>
      </table> 
    </div>
  )
}

export default OrdersPage