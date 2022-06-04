import React from 'react'
import "../styles/StartProduct.css"
const StartProduct = ({startProduct}) => {
  return (
    <div className='startProduct'>
    <div>
        <a href={startProduct[0].url}><img src={startProduct[0].image} alt="" /></a>
    </div>
    <div>
        <a href={startProduct[1].url}><img src={startProduct[1].image} alt="" /></a>
        <a href={startProduct[2].url}><img src={startProduct[2].image} alt="" /></a>
        <a href={startProduct[3].url}><img src={startProduct[3].image} alt="" /></a>

    </div>
    </div>
  )
}

export default StartProduct