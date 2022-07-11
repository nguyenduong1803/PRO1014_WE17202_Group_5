import React from 'react'
import styles from "./LayoutSite.module.css"
import { styled } from '@mui/material/styles';
import { listMenu } from "../../../config/listConfig"
import Header from "../../../components/Site/Header/Header"
import { Link } from "react-router-dom"
import Line from "../../../assets/svg/Line"
import BarIcon from "../../../assets/svg/BarIcon"
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
function LayoutSite({ children }) {
    const refBar = React.useRef();
    return (
        <>
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
            <Header />
            <main className={styles.main}>
                <div className={styles.line}>
                    <div className={styles.shapeCircle}></div>
                    <img className={styles.overlayImg} src="https://iqonic.design/wp-content/themes/iqonic/assets/images/bg-02.webp" alt="" />
                    {/* <Line /> */}
                </div>
                {children}
            </main>
            
        </>

    )
}
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: "rgba(38, 38, 38,0.5)",
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "rgba(38, 38, 38,0.6)",
        lineHeight: "24px",
        fontSize: "15px",
        textShadow: "0 1px 2px #000",
        borderRadius: "1px"
    },
}));
export default LayoutSite