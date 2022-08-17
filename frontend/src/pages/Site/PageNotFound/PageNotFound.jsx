import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./PageNotFound.module.css"
import Svg404 from "./Svg404"
import logo from "../../../assets/img/logoSea.png"
function PageNotFound() {
    return (
        <div className={styles.bg_purple}>
            <div className={styles.stars}>
                <div className={styles.custom_navbar}>
                    <div className={styles.brand_logo}>
                        <img alt="img" src={logo} style={{ width: "180px" }} />
                    </div>
                    
                </div>
                <div className={styles.central_body}>
                    <div className={styles.image_404}>
                        <Svg404 />
                    </div>
                    <p className={styles.titleNotfound}>Không tìm thấy Website</p>
                    <Link to="/" className={styles.btn_go_home} target="_blank">Về trang chủ</Link>
                </div>
                <div className={styles.objects}>
                    <img className={styles.object_rocket} alt="img" src="http://salehriaz.com/404Page/img/rocket.svg" style={{ width: "100px" }} />
                    <div className={styles.earth_moon}>
                        <img className={styles.object_earth} alt="img" src="http://salehriaz.com/404Page/img/earth.svg" style={{ width: "120px" }} />
                        <img className={styles.object_moon} alt="img" src="http://salehriaz.com/404Page/img/moon.svg" style={{ width: "100px" }} />
                    </div>
                    <div className={styles.nabox_astronautme} >
                        <img className={styles.object_astronaut} alt="img" src="http://salehriaz.com/404Page/img/astronaut.svg" style={{ width: "180px" }} />
                    </div >
                </div >
                <div className={styles.glowing_stars} >
                    <div className={styles.star} ></div >
                    <div className={styles.star} ></div >
                    <div className={styles.star} ></div >
                    <div className={styles.star} ></div >
                    <div className={styles.star} ></div >
                </div >
            </div >
        </div >
    )
}

export default PageNotFound