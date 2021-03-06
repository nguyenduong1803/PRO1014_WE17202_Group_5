import React,{ useContext }  from 'react'
import SelectMui from "../../Admin/SelectMui/SelectMui"
import MenuContentOptions from './MenuContentOptions/MenuContentOpTions';
import LayoutSite from '../LayoutSite/LayoutSite';
import product1 from '../../../assets/img/seafood-1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { isSuccess, selectLoadingProduct, selectProducts } from '../../../redux/selector';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';
import { getProducts } from '../../../redux/SliceReducer/Admin/ManagerProductSlice';
import { AuthContext } from '../../../contexts/AuthenContext';
import StepperMui from '../TableOption/StepperMui';
import { ModalLogin } from '../TableOption/OrderItem';

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
  const isLogin = useSelector(isSuccess);
  const [modalShow, setModalShow] = React.useState(false)
  const infoUser = useContext(AuthContext)
  const handleClick = (e) => {
    e.stopPropagation()
  }

  return (
    <LayoutSite>
      {/* <ButtonCart /> */}
      {modalShow ? <div className="wrap_modal-content" >
        <div className={`modal-content ${!isLogin && 'modal_mini'}`} onClick={e => handleClick(e)}>
          {
            isLogin ? <StepperMui setModalShow={setModalShow} idTable={2} user={infoUser} /> : <ModalLogin />
          }

        </div>
      </div> : ""}
      <div className="container-fluid">
        <div className="row position-relative" style={{ zIndex: "4" }}>
          <div className="col-lg-3">

            <MenuContentOptions modalShow={modalShow} setModalShow={setModalShow} />
          </div>

          <div className='col-lg-9'>
            <div className="d-flex justify-content-between align-items-center pb-2 mb-2" style={{ borderBottom: "2px solid #fff" }}>
              <p>C?? 4 s???n ph???m</p>
              <SelectMui
                name="L???c s???n ph???m"
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
