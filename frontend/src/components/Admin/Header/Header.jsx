import React from 'react'
import styles from './Header.module.css'
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
    return (
        <div className={`${styles.main}`}>
            <div className={`${styles.logo}`}>
                <img src="" alt="" />
            </div>
            <MenuIcon style={{fontSize:`40px`}} className={`${styles.hamburgerIcon}`} />
        </div>
    )
}

export default Header