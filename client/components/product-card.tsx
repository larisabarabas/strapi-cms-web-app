'use client'
import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';


interface ProductCardProps {
  product: Product;

}

const ProductCard = ({product} : ProductCardProps) => {
  const {name, price, image, discount} = product
  const imageURL = `${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:1337'}${image.url}`
  const discountValue = discount && discount.type == 'percentage' ? price * (discount.value / 100) : discount?.value ?? 0
  const discountedPrice = (price - discountValue).toFixed(2)

  const router = useRouter()

  return (
    <div className='grid justify-center mt-4 mb-4 relative'>
      <div className='relative'>
        {discount && (   
          <div className='bg-green-800 p-2 w-fit rounded-br-md absolute top-0 left-0'>
            <p className='text-lg font-bold text-white'>{discount?.value}{discount?.type === 'percentage' ? '%' : ' USD'}</p>
          </div>
        ) 
        }
     
        <Image className='h-[380px]' src={imageURL} alt={name || 'Product name'} width={300} height={300}/> 
      </div>
    
      <p className='text-xl font-semibold mt-4 text-center'>{name}</p>
      <p className='text-center text-2xl text-green-800 font-semibold mt-4'>${discountedPrice} USD</p>
      {discount ? <p className='text-center text-md font-light line-through mt-2'>${price.toFixed(2)} USD</p> : <p className='mt-2 mb-4'></p>}
      <Button className='mt-4 bg-accent-orange hover:bg-orange-700 rounded-none' onClick={() => router.push(`/products/${product.id}`)}>See more</Button>
    </div>
  )
}

export default ProductCard