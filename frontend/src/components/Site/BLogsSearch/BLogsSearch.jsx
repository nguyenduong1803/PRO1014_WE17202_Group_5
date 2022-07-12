import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./BlogsSearch.css"
import { Link } from "react-router-dom"
import { DataContext } from "../../../contexts/DataContext"
import uniqueArray from "../../../extensions/uniqueArray"
import {listCategory} from "../../../config/listConfig"
// import {Link }
function BLogsSearch() {
    const [drop, setDrop] = React.useState(false);
    const stylesDrop = drop ? {
        height: "200px",
        // paddingBottom:"0px",
        visibility: "visible",
        paddingTop: "20px",
        marginTop: "0",
        opacity: "1",
        transition: " 0.4s ease",
        overflowY: "auto"
    } : {
        height: "0",
        paddingTop: "0",
        visibility: "hidden",
        opacity: "0",
        transition: " 0.5s ease"

    };
    const { data, action } = React.useContext(DataContext);
    const { setRenderProduct } = action
    const [keySearch, setKeySearch] = React.useState("");
    const category = [];

    data.forEach(element => {
        if (element.category!=="") {
            category.push(element.category)
          } else {
            category.push("Update")
          }
    });
    const newCate = [];
    uniqueArray(category).forEach(ele => {
        listCategory.forEach((cate) => {
            if (ele === cate.item) {
                newCate.push(cate)
            }

        })
    })
    // listCategory.filter((cate)=>{
    //     cate.item===
    // })
    const handleSearch = () => {
        setRenderProduct({ type: "search", payload: keySearch })
    }
    return (
        <section className="hero hero-normal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="hero__categories">
                            <div
                                onClick={() => setDrop(!drop)}
                                className="hero__categories__all d-flex justify-content-between">
                                <MenuIcon className="hero__bar blog__icon-while" />
                                <span>Loại Sản Phẩm</span>
                                <ExpandMoreIcon className="blog__icon-while" />
                            </div>
                            <ul style={stylesDrop} className="ul_list_categorys">
                                {
                                    newCate.map((cate, index) => (
                                        <li
                                            onClick={() => setRenderProduct({ type: "category", payload: cate.item })}
                                            key={index}><a className="text-decoration-none" href="#">{cate.change}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form >
                                    <div className="hero__search__categories">
                                        Tất cả danh mục
                                        <span className="arrow_carrot-down"></span>
                                    </div>
                                    <input
                                        value={keySearch}
                                        onChange={(e) => setKeySearch(e.target.value)}
                                        type="text" placeholder="Bạn đang cần gì?" />
                                    <Link
                                        to="/cua-hang"
                                        onClick={handleSearch}
                                        className="btn__custom-search">Tìm Kiếm</Link>
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <LocalPhoneIcon />
                                </div>
                                <div className="hero__search__phone__text">
                                    <h5>+84 987.654.321</h5>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BLogsSearch