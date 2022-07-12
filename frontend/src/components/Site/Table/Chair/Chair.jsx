import React from 'react'
import styles from './Chair.module.css'
function Chair({ position }) {
    let styleChair

    if (position === "top") {
        styleChair = {
            top: "-44px",
            transform: "rotate(180deg)"
        }
    } else if (position === "bottom") {
        styleChair = {
            bottom: "-44px",
        }
    } else if (position === "left") {
        styleChair = {
            left: "-54px",
            top: "50%",
            transform: "rotate(90deg) translateX(-50%)"
        }
    } else if (position === "right") {
        styleChair = {
            right: "-54px",
            top:"50%",
            transform: "rotate(-90deg) translateX(47%)"
        }
    }
    return (
        <div className={styles.wrap} style={styleChair}>
            <div className={styles.bot}></div>
        </div>
    )
}

export default Chair