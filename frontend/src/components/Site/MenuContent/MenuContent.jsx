import React, { useContext } from 'react'
import MenuContentOptions from './MenuContentOptions/MenuContentOpTions';
import LayoutSite from '../LayoutSite/LayoutSite';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoadingProduct, selectProducts } from '../../../redux/selector';
import Product from '../Product/Product';
import { AuthContext } from '../../../contexts/AuthenContext';
import StepperMui from '../TableOption/StepperMui';
import { ModalLogin } from '../TableOption/OrderItem';
import { getToken } from '../../../utils/Common';
import LoadingProduct from '../Loading/LoadingProduct';
import ChooseProduct from '../TableOption/ChooseProduct';
import PaginationMui from "../../../components/Admin/PaginationMui/PaginationMui"
import { getProducts } from '../../../redux/SliceReducer/ManagerProductSlice';

function MenuContent() {
  const listProduct = useSelector(selectProducts)
  const loadingProduct = useSelector(selectLoadingProduct)


  const [modalShow, setModalShow] = React.useState(false)
  const infoUser = useContext(AuthContext)
  const dispatch = useDispatch()
  const handleClick = (e) => {
    e.stopPropagation()
  }
  const handleChange = (e) => {
    dispatch(getProducts({ sort:e.target.value}))

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
          <ChooseProduct />
        </div>
      </div>}
      <div className="container-fluid">
        <div className="row position-relative" style={{ zIndex: "4" }}>
          <div className="col-lg-3">
            <MenuContentOptions  />
          </div>

          <div className='col-lg-9'>
            <div className="d-flex justify-content-between align-items-center pb-2 mb-2" style={{ borderBottom: "2px solid #fff" }}>
              <p>Có {listProduct && listProduct.length} sản phẩm</p>
              <select onChange={e => handleChange(e)} className="form-select" style={{ width: "150px" }} aria-label="Default select example">
                <option selected>Sắp xếp</option>
                <option value="desc">Mới nhất</option>
                <option value="asc">Cũ nhất</option>
              </select>
            </div>
            {loadingProduct === "loading" ? <LoadingProduct /> : <div className="row" style={{ transition: "0.3s" }}>
              {
                listProduct && listProduct.map((products, index) => {
                  return (
                    <Product
                      key={index}
                      img={products.listsImg[0]}
                      title={products.name}
                      price={products.price}
                      id={products.id}
                    />
                  )
                })
              }
            </div>}
            <div className="d-flex justify-content-end mt-4"><PaginationMui /></div>
          </div>
        </div>
      </div>
    </LayoutSite>
  );
}

export default MenuContent;
