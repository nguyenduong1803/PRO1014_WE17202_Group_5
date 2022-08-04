import React from 'react'
import styles from "./LayoutSite.module.css"
import { listMenu } from "../../../config/listConfig"
import Header from "../../../components/Site/Header/Header"
import { Link, NavLink } from "react-router-dom"
import Line from "../../../assets/svg/Line"
import { selectLoading } from "../../../redux/selector"
import Loadings from "../../../components/Site/Loadings/Loadings"
import { useSelector } from 'react-redux'
import Footer from '../../../components/Site/FooterContent/Footer';
import BarArrow from '../../../assets/svg/BarArrow'


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
    const [isActive, setIsActive] = React.useState(3);
    let activeStyle = {
        backgroundColor: "#000"
    };

    let activeClassName = "underline";

    return (
        <nav
            className={styles.navbar}
            ref={refBar}
        >
            <ul
            // onMouseOut={() => { refBar.current.classList.remove(`${styles.active}`) }}
            //     onMouseOver={() => { refBar.current.classList.add(`${styles.active}`) }}
            >
                <li>
                    <p className={`${styles.toggle} ${styles.navLink}`}
                        onClick={() => { refBar.current.classList.toggle(`${styles.activeHead}`) }}
                    >
                        <span className={styles.icon}
                        ><BarArrow width="25px" className={styles.barIcon} /></span>
                        <span className={styles.title}>Menu</span>
                    </p>
                </li>
                {listMenu.map((menu, index) => (
                    <li key={index}  >
                        <NavLink
                            className={(isActive) => `${styles.navLink} ${isActive && styles.active}`} to={menu.to}
                            exact 
                        >
                            <span className={styles.icon}>{menu.icon}</span>
                            <span className={styles.title}>{menu.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default LayoutSite
