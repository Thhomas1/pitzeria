import Featured from '@/components/Featured'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Slider />
      <Featured />
      <Offer />
    </main>
  )
}


// 17:47