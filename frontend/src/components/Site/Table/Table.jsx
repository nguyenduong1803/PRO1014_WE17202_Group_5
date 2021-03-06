import React from 'react'
import styles from './Table.module.css'
import Chair from "./Chair/Chair"
function Table({ colors, name, status, ...props }) {
    const { color, colorblur } = colors;
    const rootColor = { "--colorPrimary": `${color}`, "--colorBlur": `${colorblur}` }
    // color: {
    //     "--clr": "#b145e9"
    // },
  
    return (
        <div className={styles.wrap} {...props} style={rootColor} >
            <div className={styles.pulse}></div>
            <div className={styles.button}>
                <span></span>
            </div>
            <h4 className={styles.tableName}>{name}</h4>
            <Chair position="bottom" cordinate="-32px" />
            <Chair position="left" cordinate="-40px" />
            <Chair position="right" cordinate="-40px" />
            <Chair position="top" cordinate="-32px" />
        </div>
    )
}

export default Table