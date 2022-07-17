import React from 'react'
import styles from './Table.module.css'
import Chair from "./Chair/Chair"
function RectangleTable({ colors, name, status }) {
    const { color, colorblur } = colors;
    console.log(color)
    const rootColor = { "--colorPrimary": `${color}`, "--colorBlur": `${colorblur}` }
    return (
        <div className={styles.wrapRectangle} style={rootColor} >
            <div className={styles.pulse}></div>
            <div className={styles.rectangle}>
                <span></span>
            </div>
            <h4 className={styles.tableName}>{name}</h4>
            <Chair position="bottom" cordinate="35px" left={true} />
            <Chair position="bottom" cordinate="35px" right={true}/>
            <Chair position="left" cordinate="-8px" />
            <Chair position="right" cordinate="-8px" />
            <Chair position="top" cordinate="35px" left={true} />
            <Chair position="top" cordinate="35px" right={true} />

        </div>
    )
}

export default RectangleTable