import React from 'react'
import styles from "./LayoutSite.module.css"
import WidgetsIcon from '@mui/icons-material/Widgets';
import { listMenu } from "../../../config/listConfig"
import Header from "../../../components/Site/Header/Header"
import { Link } from "react-router-dom"
import Line from "../../../assets/svg/Line"

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
                            ><WidgetsIcon fontSize={`large`}className={styles.barIcon} /></span>
                            <span className={styles.title}>Menu</span>
                        </a>
                    </li>
                    {listMenu.map((menu, index) => (
                        <li key={index}>
                            <Link className={styles.navLink} to={menu.to}>
                                <span className={styles.icon}><img className={styles.imgIcon} src={menu.icon} alt="" /></span>
                                <span className={styles.title}>{menu.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
                <Header />
            <main className={styles.main}>
                <div className={styles.line}>
                <Line />
                </div>
                {children}
            </main>
        </>

    )
}

export default LayoutSite