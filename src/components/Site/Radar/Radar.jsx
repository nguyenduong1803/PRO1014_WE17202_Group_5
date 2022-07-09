import React from 'react'
import styles from "./Radar.module.css"
// import { Contexts } from "../Contexts/Contexts"
function Rada({ point, scale }) {

  // const { deg, setDeg, refRange } = React.useContext(Contexts)
  // const aroundCircle = {
  //   transform: `rotate(${deg}deg)`
  // }

  // ${deg}
  // const handleRange = () => {
  //   setDeg(() => {
  //     let range = refRange.current.value
  //     return range
  //   })
  // }
 

  React.useEffect(() => {
  //  if (deg < 178) {
  //    refRange.current.value = -178
  //  } else if (deg < -178) {
  //    refRange.current.value = 178
  //  } else {

  //  }
  //  refRange.current.value = deg
  })

  return (
    <>
      <div className={styles.wrapRada}>
        <div className={styles.circle} style={{ ...point, ...scale }} >
          <div className={styles.line} style={{}}></div>
        </div>
        <input
          // onChange={() => handleRange()}
          // ref={refRange}
          className={`${styles.range} `}
          step="1"
          start="45"
          min="-180"
          max="360"
          type="range"
        />

      </div>
    </>
  )
}

export default Rada