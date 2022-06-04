import React from 'react'
import "../styles/ExpandNavbar.css"


const ExpandNavbar = ({ category }) => {
  console.log(category)


  return (
    <div className='ExpandNavbar'>

      {category.map((item, index) => (
        <div>
          <img src={item.image} alt={`${item.name} image`} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      ))}
      <div>
        <img src={`https://i02.appmifile.com/58_updatepdf_in/20/06/2020/2d67be14d15177a36440872a9166a5ae.png?width=140&height=140`} alt="View More" />
        <p>View More</p>
      </div>

    </div>


  )
}

export default ExpandNavbar