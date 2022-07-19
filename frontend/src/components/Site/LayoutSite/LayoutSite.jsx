import React from 'react'
import styles from "./LayoutSite.module.css"
import { listMenu } from "../../../config/listConfig"
import Header from "../../../components/Site/Header/Header"
import { Link } from "react-router-dom"
import BarIcon from "../../../assets/svg/BarIcon"
import Line from "../../../assets/svg/Line"
import { selectLoading, selectLoadingProduct, selectProducts } from "../../../redux/selector"
import Loadings from "../../../components/Site/Loadings/Loadings"
import { useDispatch, useSelector } from 'react-redux'

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Footer from '../../../components/Site/FooterContent/Footer';

import BarArrow from '../../../assets/svg/BarArrow'
import { getProducts } from '../../../redux/SliceReducer/Admin/ManagerProductSlice'


function LayoutSite({ children }) {
    const load = useSelector(selectLoading)
  
    return (
        <>
            {load === "loading" ? <Loadings /> : ""}
            <Navbar />
            <Header />
            <main className={styles.main}>
                <div className={styles.line}>
                    {/* <div className={styles.shapeCircle}></div> */}
                    <img className={styles.overlayImg} src="https://iqonic.design/wp-content/themes/iqonic/assets/images/bg-02.webp" alt="" />
                    {/* <div className={styles.overlayQ}><img  src="https://iqonic.design/wp-content/themes/iqonic/assets/images/bg-01.webp" alt="" /></div> */}
                    <div className={styles.bgrLine}> <Line /></div>
                </div>
                <div className="position-relative" style={{ zIndex: 2 }}>{children}</div>
            </main>
            <Footer />

        </>

    )
}
const Navbar = () => {
    const refBar = React.useRef();

    return (
        <nav
            className={styles.navbar}
            ref={refBar}
        >
            <ul>
                <li>
                    <a className={`${styles.toggle} ${styles.navLink}`}
                        onClick={() => { refBar.current.classList.toggle(`${styles.active}`) }}
                    >
                        <span className={styles.icon}
                        ><BarArrow width="25px" className={styles.barIcon} /></span>
                        <span className={styles.title}>Menu</span>
                    </a>
                </li>
                {listMenu.map((menu, index) => (
                    <li key={index}   >
                        <Link className={styles.navLink} to={menu.to}>
                            <span className={styles.icon}>{menu.icon}</span>
                            <span className={styles.title}>{menu.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default LayoutSite
