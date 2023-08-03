import React from 'react'

type Props = {
    price:number;
    id:number;
    options?: {title: string; additionalPrice: number}[]
}
const Price = ({price,id,options}: Props) => {
  return (
    <div>
        <h2></h2>
    </div>
  )
}
// 1:28
export default Price