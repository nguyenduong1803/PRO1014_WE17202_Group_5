import React from 'react'
import styles from "./LayoutSite.module.css"
import { listMenu } from "../../../config/listConfig"
import Header from "../../../components/Site/Header/Header"
import { Link } from "react-router-dom"
import BarIcon from "../../../assets/svg/BarIcon"
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Footer from '../../../components/Site/FooterContent/Footer';
function LayoutSite({ children }) {
  
    return (
        <>
            <Navbar />
            <Header />
            <main className={styles.main}>
                <div className={styles.line}>
                    <div className={styles.shapeCircle}></div>
                    <img className={styles.overlayImg} src="https://iqonic.design/wp-content/themes/iqonic/assets/images/bg-02.webp" alt="" />
                    {/* <Line /> */}
                </div>
                {children}
            </main>
            <Footer/>
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
                        ><BarIcon width="25px" className={styles.barIcon} /></span>
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