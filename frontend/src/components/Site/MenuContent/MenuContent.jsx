import React from 'react'
import MenuContentOptions from './MenuContentOptions/MenuContentOpTions';
import LayoutSite from '../LayoutSite/LayoutSite';
import MenuContentDetail from './MenuContentDetail/MenuContentDetail';
import product1 from '../../../assets/img/seafood-1.jpg';
import ButtonCart from "../../../components/Site/ContentHome/ButtonCart/ButtonCart"
import { useDispatch, useSelector } from 'react-redux';

import { selectLoadingProduct, selectProducts } from '../../../redux/selector';
import Loading from '../Loading/Loading';
import CategoryItem from './ProductMenu/ProductMenu';
import Product from '../Product/Product';
const product = [
  {
    img: product1,
    title: 'overlay',
    content: 'Copyright 2022. Made with love by Iqonic Design',
    price:6800000

  },
  {
    img: product1,
    title: 'overlay',
    content: 'Copyright 2022. Made with love by Iqonic Design',
    price:6800000

  },
  {
    img: product1,
    title: 'overlay',
    content: 'Copyright 2022. Made with love by Iqonic Design',
    price:6800000

  },
  {
    img: product1,
    title: 'overlay',
    content: 'Copyright 2022. Made with love by Iqonic Design',
    price:6800000

  },
  {
    img: product1,
    title: 'overlay',
    content: 'Copyright 2022. Made with love by Iqonic Design',
    price:6800000

  },
  {
    img: product1,
    title: 'overlay',
    content: 'Copyright 2022. Made with love by Iqonic Design',
    price:6800000

  },
  {
    img: product1,
    title: 'overlay',
    content: 'Copyright 2022. Made with love by Iqonic Design',
    price:6800000

  },
  {
    img: product1,
    title: 'overlay',
    content: 'Copyright 2022. Made with love by Iqonic Design',
    price:6800000

  },
  {
    img: product1,
    title: 'overlay',
    content: 'Copyright 2022. Made with love by Iqonic Design',
    price:6800000

  },
  {
    img: product1,
    title: 'overlay',
    content: 'Copyright 2022. Made with love by Iqonic Design',
    price:6800000

  },
  {
    img: product1,
    title: 'overlay',
    content: 'Copyright 2022. Made with love by Iqonic Design',
    price:6800000
  },
];
function MenuContent() {
  const dispatch = useDispatch()
  const listProduct = useSelector(selectProducts)
  const loadingProduct = useSelector(selectLoadingProduct)

  return (
    <LayoutSite>
      <ButtonCart />
      <div className="container-fluid">
        <div className='row position-relative' >
          <div className='col-lg-3'>
            <MenuContentOptions />
          </div>
          <div className='col-lg-9'>
            {loadingProduct==="loading" ? <Loading /> : <div className="row" style={{transition:"0.3s"}}>
              {
                product && product.map((products, index) => {
                  return (
                    <Product
                      key={index}
                      img={product1}
                      title={products.name}
                      price={products.price}
                    />
                  )
                })
              }
            </div>}

          </div>
        </div>
      </div>
    </LayoutSite>
  )
}

export default MenuContent