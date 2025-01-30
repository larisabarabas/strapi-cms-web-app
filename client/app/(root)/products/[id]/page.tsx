import React from 'react'

const Product = async ({ params }: {params: Promise<{ id: string }> }) => {
    const id = (await params).id
  return (
    <div>Product {id}</div>
  )
}

export default Product