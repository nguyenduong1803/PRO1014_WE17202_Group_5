import React from 'react'
import CheckOutProducts from './CheckOutProducts/CheckOutProducts';
import CheckOutCard from './CheckOutCard/CheckOutCard';
function CheckOut() {
  return (
    <div className='row' style={{backgroundColor: '#FFFFFF',padding:'50px 20px ',margin:'20px',borderRadius:'20px'}}>
        <div className="col-lg-7"><CheckOutProducts/></div>
        <div className="col-lg-5"><CheckOutCard/></div>
    </div>
  )
}

export default CheckOut