import React from 'react'
import MenuContentOptions from './MenuContentOptions/MenuContentOpTions';
import LayoutSite from '../LayoutSite/LayoutSite';
import MenuContentDetail from './MenuContentDetail/MenuContentDetail';
import product1 from '../../../assets/img/seafood-1.jpg';
const product=[
  {
    img:product1,
    title:'overlay',
    content:'Copyright 2022. Made with love by Iqonic Design',

  },
  {
    img:product1,
    title:'overlay',
    content:'Copyright 2022. Made with love by Iqonic Design',

  },
  {
    img:product1,
    title:'overlay',
    content:'Copyright 2022. Made with love by Iqonic Design',

  },
  {
    img:product1,
    title:'overlay',
    content:'Copyright 2022. Made with love by Iqonic Design',

  },
  {
    img:product1,
    title:'overlay',
    content:'Copyright 2022. Made with love by Iqonic Design',

  },
  {
    img:product1,
    title:'overlay',
    content:'Copyright 2022. Made with love by Iqonic Design',

  },
];
function MenuContent() {
  return (
    <LayoutSite>
        <div className='row position-relative' style={{zIndex:20}}>
        <div className='col-lg-3'>
            <MenuContentOptions/>
        </div>
        <div className='col-lg-9'>
          <div className="row">
          {
            product.map((products, index)=>{
              return (
                <MenuContentDetail
                  key ={index}
                  img ={products.img}
                  title={products.title}
                  content={products.content}
                />
              )
            })
          }
            </div>
        </div>
    </div>
    </LayoutSite>
  )
}

export default MenuContent