import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from "../../../assets/img/logo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import "./Header.css";
import { DataContext } from "../../../contexts/DataContext"
import { Link } from "react-router-dom"
import {menu } from "../../../config/listConfig"

Array.prototype.renderProduct = function ({ type, payload }) {

    switch (type) {
        case "sortPrice":
            return this.sort((a, b) => a.price - b.price);
            break;
        case "sortDescend":
            return this.sort((a, b) => b.price - a.price);
            break;
        case "search":
            return this.filter((ele) => (
                ele.name.toString()
                    .toLowerCase()
                    .indexOf(payload.trim().toString().toLowerCase()) > -1
            ))
            break;
        case "category":
            return this.filter((ele) => ele.category === payload)
            break;
        case "price":
            return this.filter((ele) => ele.price > payload[0] && ele.price <= payload[1])
            break;
        case "findId":
            return this.find((ele) => ele._id === payload)
            break;
        case "":
            return this
            break;

        default: return this
            break;
    }
}


function Header({ position }) {
    const { action, carts } = React.useContext(DataContext)
    const [toggle, setToggle] = React.useState(false)
    const { setRenderProduct } = action

    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header__top__left">
                                <ul>
                                    <li><EmailIcon /> organicfood@gmail.com</li>
                                    <li>Miễn phí giao hàng từ 500.000 đ</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="header__top__right">
                                <div className="header__top__right__social">
                                    <a href="#"><FacebookIcon /></a>
                                    <a href="#"><LinkedInIcon /></a>
                                    <a href="#"><TwitterIcon /></a>
                                </div>
                                {/* <div className="header__top__right__language">
                                    <img src={language} alt="" />
                                    <div>English</div>
                                    <span className="arrow_carrot-down"></span>
                                    <ul>
                                        <li><a className="text-decoration-none" href="#">Tiếng việt</a></li>
                                        <li><a className="text-decoration-none" href="#">Tiếng anh</a></li>
                                    </ul>
                                </div> */}
                                <div className="header__top__right__auth">
                                    <Link to="/dang-nhap" className="text-decoration-none"><PersonIcon /> Đăng nhập</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <a href="/"><img src={logo} alt="" /></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav
                            className={toggle ? "header__menu " : "header__menu header__menu_active"}
                        >
                            <ul >
                                {menu.map((ele, index) => (
                                    <li
                                        className={ele.name === position ? "active" : ""}
                                        key={index}
                                    >
                                        <Link
                                            onClick={() => setRenderProduct({ type: "", payload: "" })}
                                            className="header__menu-link" to={ele.path}>{ele.name}</Link>
                                    </li>
                                ))}
                                <li><Link className="header__menu-link" to="/">Trang</Link>
                                    <ul className="header__menu__dropdown">
                                        <li><Link className="header__menu-link" to="/">Trang chủ</Link></li>
                                        <li><Link className="header__menu-link" to="/gio-hang">Giỏ hàng</Link></li>
                                        <li><Link className="header__menu-link" to="/thanh-toan">Thanh toán</Link></li>
                                        <li><Link className="header__menu-link" to="/blogs">blog</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <ul>
                                {/* <li><a href="#" className="header__menu-link"><FavoriteIcon /> <span>1</span></a></li> */}
                                <li
                                    className={position === "Giỏ hàng" ? "active" : ""}
                                ><Link className="icon_active header__menu-link" to="/gio-hang"><ShoppingCartIcon fontSize='medium' /> <span>{carts.length || 0}</span></Link></li>
                            </ul>
                            {/* <div className="header__cart__price">item: <span>$150.00</span></div> */}
                        </div>
                    </div>
                </div>
                <div className="humberger__open">
                    <ListIcon
                        onClick={() => setToggle(!toggle)}
                        className="humberfer_open_icon" />
                </div>
            </div>
        </header >
    )
}

export default Header