import React from 'react'
import SelectMui from "../../Admin/SelectMui/SelectMui"
import MenuContentOptions from './MenuContentOptions/MenuContentOpTions';
import LayoutSite from '../LayoutSite/LayoutSite';
import product1 from '../../../assets/img/seafood-1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoadingProduct, selectProducts } from '../../../redux/selector';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';
import { getProducts } from '../../../redux/SliceReducer/Admin/ManagerProductSlice';

const product = [
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",


  },
];

function MenuContent() {
  const dispatch = useDispatch()
  const listProduct = useSelector(selectProducts)
  const loadingProduct = useSelector(selectLoadingProduct)
  const category = [
    { name: "category" },
    { name: "category" },
    { name: "category" },
  ]

  return (
    <LayoutSite>
      {/* <ButtonCart /> */}
      <div className="container-fluid">
        <div className="row position-relative">
          <div className="col-lg-3">
           
            <MenuContentOptions />
          </div>

          <div className='col-lg-9'>
            <div className="d-flex justify-content-between align-items-center pb-2 mb-2" style={{borderBottom:"2px solid #fff"}}>
              <p>Có 4 sản phẩm</p>
              <SelectMui
                name="Lọc sản phẩm"
                list={category}
              />
            </div>
            {loadingProduct === "loading" ? <Loading /> : <div className="row" style={{ transition: "0.3s" }}>
              {
                listProduct && listProduct.map((products, index) => {
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
  );
}

export default MenuContent;
