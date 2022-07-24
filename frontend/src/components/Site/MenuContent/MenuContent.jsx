import React, { useContext } from 'react'
import SelectMui from "../../Admin/SelectMui/SelectMui"
import MenuContentOptions from './MenuContentOptions/MenuContentOpTions';
import LayoutSite from '../LayoutSite/LayoutSite';
import product1 from '../../../assets/img/seafood-1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { isSuccess, selectCart, selectLoadingProduct, selectProducts } from '../../../redux/selector';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';
import { AuthContext } from '../../../contexts/AuthenContext';
import StepperMui from '../TableOption/StepperMui';
import { ModalLogin } from '../TableOption/OrderItem';
import { getToken } from '../../../utils/Common';
import ProductCartTable from '../TableOption/ProductCartTable';
import InfomationCart from '../TableOption/InfomationCart';
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
  const listProduct = useSelector(selectProducts)
  const loadingProduct = useSelector(selectLoadingProduct)
  const category = [
    { name: "category" },
    { name: "category" },
    { name: "category" },
  ]
  const [modalShow, setModalShow] = React.useState(false)
  const infoUser = useContext(AuthContext)
  const handleClick = (e) => {
    e.stopPropagation()
  }

  return (
    <LayoutSite>
      {/* <ButtonCart /> */}
      {modalShow && <div className="wrap_modal-content" >
        <div className="modal_content--item" onClick={e => handleClick(e)} >
          <div className={`modal-content ${!getToken() && 'modal_mini'}`} >
            {
              getToken() ? <StepperMui setModalShow={setModalShow} idTable={""} user={infoUser} /> : <ModalLogin />
            }
          </div>
          <InfomationCart/>
        </div>
      </div>}
      <div className="container-fluid">
        <div className="row position-relative" style={{ zIndex: "4" }}>
          <div className="col-lg-3">

            <MenuContentOptions modalShow={modalShow} setModalShow={setModalShow} />
          </div>

          <div className='col-lg-9'>
            <div className="d-flex justify-content-between align-items-center pb-2 mb-2" style={{ borderBottom: "2px solid #fff" }}>
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
                      id={products.id}
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
