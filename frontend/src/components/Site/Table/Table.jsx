import React from 'react'
import styles from './Table.module.css'
import Chair from "./Chair/Chair"
function Table({colors,name,status}) {
    const {color,colorblur}=colors;
    console.log(color)
    const rootColor={"--colorPrimary":`${color}`,"--colorBlur":`${colorblur}`}
    // color: {
    //     "--clr": "#b145e9"
    // },
    return (
        <>
            <div className={styles.wrap} style={rootColor} >
                <div className={styles.pulse}></div>
                <div className={styles.button}>
                    <span></span>
                </div>
                <h4 className={styles.tableName}>{name}</h4>
                <Chair position="bottom" />
                <Chair position="left" />
                <Chair position="right" />
                <Chair position="top" />
            </div>
        </>
    )
}

export default Table