import React from 'react'
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import style from "../../TableOption/TableOption.scss"
import styles from "../../TableOption/TableOption.module.css"
import CloseIcon from '@mui/icons-material/Close';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useDebounce from '../../../../hooks/useDebounce';
import { selectCategory, selectLoadingProduct, selectProducts } from '../../../../redux/selector';
import { getProducts } from '../../../../redux/SliceReducer/ManagerProductSlice';
import Search from '../../../../assets/svg/Search';
import LoadingSearch from '../../Loading/LoadingSearch';
import { addDetailOrder, addOrder, getDetailOrder } from '../../../../redux/SliceReducer/OrderTableSlice';
import { formatMoney } from '../../../../extensions/formatMoney';
import ToastMess from '../../ToastMess/ToastMess';

function ChooseProduct({ setShowModal }) {
    const [keySearch, setKeySearch] = React.useState("");
    const [activeCate, setActiveCate] = React.useState("")
    const dispatch = useDispatch()
    const debounceSearch = useDebounce(keySearch, 500)
    const handleActiveCate = (idCate) => {
        setActiveCate(idCate)
        dispatch(getProducts({ keySearch: debounceSearch, limit: 30, category: idCate }))
    }
    const loadingProduct = useSelector(selectLoadingProduct)
    const categories = useSelector(selectCategory)
    const handleSearch = (e) => {
        setKeySearch(e.target.value);
    }
    const products = useSelector(selectProducts)
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 1,
        dots: false,
    };
    React.useEffect(() => {
        dispatch(getProducts({ keySearch: debounceSearch, limit: 30, category: activeCate }))
    }, [debounceSearch])
    return (
        <div className={styles.wrapUpdateProduct}>
            <div className={`TableOption__wrapCart activeUpdate`} >
                <div onClick={() => setShowModal(false)} className={styles.closeUpdate}> <CloseIcon fontSize="large" /></div>
                <div className={styles.search}>
                    <div style={{ display: 'flex', width: '100%' }} className={styles.warpInput}>
                        <input
                            onChange={e => handleSearch(e)}
                            type="search" placeholder="Tìm kiếm..." className={styles.searchInput} />
                        <div className={`icon position-absolute ${styles.searchIcon}`} ><Search /></div>
                    </div>
                </div>
                <div className={styles.wrapCategory}>
                    <Slider {...settings}>
                        <div className={styles.wrapbutton} >
                            <div onClick={() => handleActiveCate("")} className={activeCate === "" ? `${styles.category_btn} ${styles.cate_active}` : styles.category_btn}>Tất cả</div>
                        </div>
                        {categories.map(cate => {
                            return (
                                <div className={`${styles.wrapbutton} `} key={cate.id}>
                                    <div onClick={() => handleActiveCate(cate.id)} className={activeCate === cate.id ? `${styles.category_btn} ${styles.cate_active}` : styles.category_btn}>{cate.name}</div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <div className="content__cart-box row">
                    {loadingProduct === "loading" ? <LoadingSearch /> :
                        products && products.length > 0 ? products.map((product, index) => {
                            return (
                                <div className={" col-lg-6"} key={product.id}>
                                    <ProductChoose name={product.name} price={product.price} id={product.id} img={product.listsImg[0]}  />
                                </div>
                            )
                        }) : <h2 className={styles.emptyTitle}>Không tìm thấy sản phẩm nào</h2>
                    }
                </div>
            </div>
           
        </div>
    )
}

function ProductChoose({ img, name, price, id }) {
    const [quantity, setQuantity] = React.useState(1)
    const [state, setState] = React.useState(false)

    const dispatch = useDispatch()
    const idInvoice = window.location.pathname.split('/')[2]
    const handleAddOrder = async () => {
        await dispatch(addDetailOrder({ idInvoice, idProduct: id, quantity }))
        await dispatch(getDetailOrder(idInvoice))
        await setState(true)
    }
    const handleChange = (e) => {
        setQuantity(e.target.value)
    }
    React.useEffect(()=>{

    },[])
    return (
        <div className={styles.wrapchoose}>
            <div className={styles.info_choose}>
                <div className={styles.img_choose}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.name}>
                    <h4 className={styles.nameProducts}>{name}</h4>
                    <div className={styles.price}>{price && formatMoney(price)} đ</div>
                </div>

            </div>
            <div className={styles.wrapInputNumber}><input onChange={e => handleChange(e)} value={quantity} type="number" className={styles.inputNumber} placeholder="Số lượng" /></div>
            <div className={styles.detail}>
                <div className={styles.icon} onClick={handleAddOrder}>
                    <AddIcon />
                </div>
            </div>
            <ToastMess
                notify={`Đã thêm ${name} vào sản phẩm`}
                setState={setState}
                state={state}
            />
        </div>
    )
}





export default ChooseProduct