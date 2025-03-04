import ProductComp from '@/app/components/productComp/ProductComp'
import Title from '@/app/components/title/Title'
import React from 'react'

export default function page() {
  return (
    <div>
        <Title title="Products" component={<ProductComp/>}/>
    </div>
  )
}
