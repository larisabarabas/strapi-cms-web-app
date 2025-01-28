import React from 'react'
import { getProducts } from '@/app/api/strapi'
import ProductCard from '@/components/product-card';

const Products = async () => {
  const products = await getProducts()
  console.log("PRODUCTS:", products)
  if (!products) return <p>No products found.</p>;
  return (
    <div className='bg-white container mx-auto w-full overflow-hidden rounded-md py-7 px-8'>
      <p className='text-2xl font-semibold mb-4 px-5'>PRODUCTS</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {products.map((product: Product) => (
         <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Products