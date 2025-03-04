import PagesComp from '@/app/components/pagesComp/PagesComp'
import React from 'react'

export default function page() {
  return (
    <div>
        <PagesComp title="WishList" name="Wishlist"/>
            <div className='mb-20 text-sm sm:text-2xl text-gray-400 flex justify-center items-center'>
                <p>There are no products in wishlist
                </p>
            </div>
        </div>
  )
}
