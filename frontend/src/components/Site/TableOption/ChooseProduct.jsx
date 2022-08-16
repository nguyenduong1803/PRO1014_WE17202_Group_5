import React from 'react'
import { selectCategory, selectLoadingProduct, selectProducts } from '../../../redux/selector'
import styles from "./TableOption.module.css"
import AddIcon from "@mui/icons-material/Add";
import { formatMoney } from '../../../extensions/formatMoney';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../../../redux/SliceReducer/OrderTableSlice';
import Search from '../../../assets/svg/Search';
import { Button } from '@mui/material';
import useDebounce from '../../../hooks/useDebounce';
import { getProducts } from '../../../redux/SliceReducer/ManagerProductSlice';
import LoadingSearch from '../Loading/LoadingSearch';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PaginationMui from '../../Admin/PaginationMui/PaginationMui';

function ChooseProduct({ className }) {
    const [keySearch, setKeySearch] = React.useState("");
    const [activeCate, setActiveCate] = React.useState("")
    const debounceSearch = useDebounce(keySearch, 500)
    const handleActiveCate = (idCate) => {
        setActiveCate(idCate)
        dispatch(getProducts({ keySearch: debounceSearch, limit: 30, category: idCate }))
    }
    const dispatch = useDispatch()
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
        // autoplay: true,
        // speed: 2000,
        // slickNext: true,
        // slickPrev: true,
    };
    React.useEffect(() => {
        dispatch(getProducts({ keySearch: debounceSearch, limit: 30, category: activeCate }))
    }, [debounceSearch])
    return (
        <div className={`TableOption__wrapCart ${className}`} >
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
                        let indexImg=0
                        if(product.listsImg.length>1){
                          indexImg =product.listsImg.length-1
                        }
                        return (
                            <div className={" col-lg-6"} key={index}>
                                <ProductChoose name={product.name} price={product.price} id={product.id} img={product.listsImg[indexImg]} />
                            </div>
                        )
                    }) : <h2 className={styles.emptyTitle}>Không tìm thấy sản phẩm nào</h2>
                }
            </div>
                <div className="d-flex justify-content-end m-3"><PaginationMui /></div>
        </div>
    )
}

function ProductChoose({ img, name, price, id }) {
    const dispatch = useDispatch()
    const handleAddOrder = () => {
        dispatch(addOrder({ id, quantity: 1 }))
    }
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
            <div className={styles.detail}>
                <div className={styles.icon} onClick={handleAddOrder}>
                    <AddIcon />
                </div>
            </div>
        </div>
    )
}





export default ChooseProduct