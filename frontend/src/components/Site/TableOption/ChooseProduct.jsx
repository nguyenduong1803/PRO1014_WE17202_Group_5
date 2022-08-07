import React from 'react'
import { selectCategory, selectLoadingProduct, selectProducts } from '../../../redux/selector'
import styles from "./TableOption.module.css"
import AddIcon from "@mui/icons-material/Add";
import { formatMoney } from '../../../extensions/formatMoney';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, deleteCart } from '../../../redux/SliceReducer/OrderTableSlice';
import Search from '../../../assets/svg/Search';
import { Button } from '@mui/material';
import useDebounce from '../../../hooks/useDebounce';
import { getProducts } from '../../../redux/SliceReducer/ManagerProductSlice';
import LoadingSearch from '../Loading/LoadingSearch';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ChooseProduct({ className }) {
    const [keySearch, setKeySearch] = React.useState("");
    const debounce = useDebounce(keySearch, 500)
    const dispatch = useDispatch()
    const loadingProduct = useSelector(selectLoadingProduct)
    const categories = useSelector(selectCategory)
    console.log(categories)
    const itemCategory = categories.map((cate, index) => (
        <CategoryItem name={"name"} key={index}/>
      ))
    const handleSearch = (e) => {
        setKeySearch(e.target.value);
    }
    const products = useSelector(selectProducts)
    React.useEffect(() => {
        dispatch(getProducts({ keySearch: debounce, limit: 30 }))
    }, [debounce])
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
                {/* <AliceCarousel
                    items={itemCategory}
                    responsive={responsive}
                    // controlsStrategy="alternate"
                    autoPlay
                    autoPlayInterval={2000}
                    animationDuration={1000}
                    animationType="fadeout"
                    infinite
                    renderPrevButton={renderPrevButton}
                    renderNextButton={renderNextButton}
                /> */}
            </div>
            <div className="content__cart-box row">
                {loadingProduct === "loading" ? <LoadingSearch /> :
                    products && products.length > 0 ? products.map((product, index) => {
                        return (
                            <div className={" col-lg-6"} key={index}>
                                <ProductChoose name={product.name} price={product.price} id={product.id} img={product.listsImg[0]} />
                            </div>
                        )
                    }) : <h2 className={styles.emptyTitle}>Không tìm thấy sản phẩm nào</h2>
                }
            </div>
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
const renderNextButton = ({ isDisabled }) => {
    return (
        <ArrowForwardIosIcon
            style={{ position: "absolute", right: "-2rem", top: "40%" }}
        />
    );
};

const renderPrevButton = ({ isDisabled }) => {
    return (
        <ArrowBackIosIcon
            style={{ position: "absolute", left: "-2rem", top: "40%" }}
        />
    );
};

const CategoryItem = (name) => <div className={styles.wrapbutton}><Button variant="outlined" color="success" margin="2">{name}</Button></div>


export default ChooseProduct