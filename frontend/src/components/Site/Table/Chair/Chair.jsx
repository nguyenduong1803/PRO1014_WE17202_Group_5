import React from 'react'
import styles from './Chair.module.css'
function Chair({ position, cordinate, left, right = false }) {
    let styleChair

    if (position === "top") {
        styleChair = {
            top: cordinate,
            transform: `rotate(180deg) ${right? "translateX(130%)":""} ${left? "translateX(-135%)":""}`
        }
    } else if (position === "bottom") {
        styleChair = {
            bottom: cordinate,
            transform: `${right? "translateX(130%)":""} ${left? "translateX(-135%)":""}`
        }
    } else if (position === "left") {
        styleChair = {
            left: cordinate,
            top: "50%",
            transform: "rotate(90deg) translateX(-60%)"
        }
    } else if (position === "right") {
        styleChair = {
            right: cordinate,
            top: "50%",
            transform: "rotate(-90deg) translateX(60%)"
        }
    }
    return (
        <div className={styles.wrap} style={styleChair}>
            <div className={styles.bot}></div>
        </div>
    )
}

export default Chair