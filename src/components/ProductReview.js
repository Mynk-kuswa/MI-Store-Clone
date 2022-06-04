import React from 'react'
import ProductReviewCard from '../components/ProductReviewCard.js'
import '../styles/ProductRevie.css'

function ProductReview({ productReview }) {
  return (
    <div className='ProductReview'>
    {productReview.map((item, index) => (
        <ProductReviewCard 
            key={item.image}
            image={item.image}
            review={item.review}
            name={item.name}
            price={item.price}
        />
    ))}
    </div>
  )
}

export default ProductReview