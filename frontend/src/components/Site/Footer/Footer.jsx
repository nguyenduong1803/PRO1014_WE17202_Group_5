import React from 'react'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FavoriteIcon from '@mui/icons-material/Favorite';

// import logo from "../../assets/img/blog"
const useLink = [
    {
        name: "Về chúng tôi",
        href: "#"
    },
    {
        name: "Cửa hàng",
        href: "#"
    },
    {
        name: "Mua sắm bảo mật",
        href: "#"
    },
    {
        name: "Bảo mật",
        href: "#"
    },
    {
        name: "Thông tin giao hàng",
        href: "#"
    },

]
const serviceLink = [
    {
        name: "Dự án",
        href: "#"
    },
    {
        name: "Về chúng tôi",
        href: "#"
    },
    {
        name: "Liên hệ",
        href: "#"
    },
    {
        name: "Sự đổi mới",
        href: "#"
    },
    {
        name: "Chứng thực",
        href: "#"
    },

]
const contacts = [
    {
        name: "Địa chỉ: Tầng 2, Tòa nhà N03T5, khu Đoàn ngoại giao, phường Xuân Tảo.",
    },
    {
        name: "Số điện thoại: +65 11.188.888",
    },
    {
        name: "Email: hello@colorlib.com",
    },
]
function Footer() {
    return (
        <footer className="footer spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__about__logo">
                                <a href="/"><img src="img/logo.png" alt="" /></a>
                            </div>
                            <ul>
                                {contacts.map((ele, index) => (
                                    <li key={index}>{ele.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                        <div className="footer__widget">
                            <h6>Liên kết hữu ích</h6>
                            <ul>
                                {useLink.map((ele, index) => (
                                    <li key={index}><a href={ele.href} className="text-decoration-none">{ele.name}</a></li>
                                ))}
                            </ul>
                            <ul>
                                {serviceLink.map((ele, index) => (
                                    <li key={index}><a href={ele.href} className="text-decoration-none">{ele.name}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="footer__widget">
                            <h6>Tham gia với chúng tôi</h6>
                            <p>Nhập thông tin cập nhật e-mail và các ưu đãi đặc biệt của chúng tôi.</p>
                            <form action="#">
                                <input  type="text" placeholder="Nhập Email..." />
                                <button className="foot__form__search-btn site-btn" type="submit">Gửi Email</button>
                            </form>
                            <div className="footer__widget__social">
                                <a href="#"><FacebookIcon /></a>
                                <a href="#"><LinkedInIcon /></a>
                                <a href="#"><TwitterIcon /></a>
                                <a href="#"><PinterestIcon /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer__copyright">
                            <div className="footer__copyright__text"><p>
                                Copyright ©2022 by Diligo Holdings. All Right Reserved. <FavoriteIcon /> by <a href="https://diligo.vn/" target="_blank">Diligo</a>
                            </p></div>
                            <div className="footer__copyright__payment"><img src="" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer