import React, { memo, useCallback } from "react";
import styles from "../Alert/alert.module.css";
import img from "../../../../assets/img/alert2.jpg";
import Radar from "../Radar/Radar"
import Menu from "../Menu/Menu"


// import maximize from "../../assets/img/maximize.svg"
// import minimize from "../../assets/img/minimize.svg"
const click = () => {
  const alert = document.getElementById("alertimg");
  const zoom = document.getElementById("zoom").style.display = "none";
  alert.style.transform = "translateX(600px) scale(3) translateY(-80px)";
  alert.style.width = "25%";
  alert.style.height = "25%";
  alert.style.bottom = "100px";

  const btn = document.getElementById('button');
  const miniMap = document.getElementById("Mappp");
  miniMap.style.transform = "translateX(508px) scale(3.5) translateY(-79px)";
  miniMap.style.width = "18%";
  miniMap.style.height = "22%";
  miniMap.style.bottom = "100px";
  miniMap.style.transition = "0.3s";
  btn.style.display = "block";
};

const prew = () => {
  const c = document.getElementById('button').style.display = "none";
  const zoom = document.getElementById("zoom").style.display = "flex";
  const alert = document.getElementById("alertimg");
  alert.style.transform = "translateX(0) scale(1) translateY(0)";
  alert.style.width = "20%";
  alert.style.height = "20%";
  alert.style.bottom = "0";

  const Map = document.getElementById("Mappp");;
  Map.style.transform = "translateX(0) scale(1) translateY(0)";
  Map.style.width = "16%";
  Map.style.height = "21%";
  Map.style.bottom = "0";
};


const Alert = ({ imageActive, onHandleClick, setOption, option }) => {
  const [point, setPoint] = React.useState();
  const listPoint = [
    {
      bottom: "39%",
      left: "59%",

    },
    {
      bottom: "39%",
      left: "43%",  

    },
    {
      bottom: '15%',
      left: '42%',

    },
    {
      bottom: '17%',
      left: '63%',

    },
    {
      bottom: '14%',
      left: '81%',

    },
    {
      bottom: '27%',
      left: '93%',

    },
    {
      bottom: '58%',
      left: '95%',

    },
    {
      bottom: '58%',
      left: '85%',

    },
    {
      bottom: '64%',
      left: '70%',

    },
    {
      bottom: '58%',
      left: '34%',
    },
  ]

  return (
    <>

      <div className={styles.Alert}>
        <img 
        style={{}}
        id="alertimg" className={styles.alert_img} src={img} />
        <div
          className={styles.demo} id="Mappp"
          style={{
            // display: 'none',
            position: "fixed",
            bottom: "0",
            width: "16%",
            height: "21%",
          }}
        >
          {listPoint.map((point, index) => {
            return (
              <div key={index}>
                <div
                  style={imageActive === index ? { ...point, transform: "scale(1.3)", transition: "0.3s" } : { ...point }}
                  onClick={() => onHandleClick(index)}
                  className={`${styles.dots} ${styles.canvas}`}

                >
                </div>
                <div>
                  {imageActive === index ? <Radar point={point} scale={{ transform: "scale(1.3)" }} /> : ""}
                </div>
              </div>
            )
          })}

          <div
            id="zoom"
            className={styles.wrapZoom}>
            <img

              className={styles.zoom}
              src={""} alt=""
              onClick={click}
            />
          </div>
          <div className={styles.btn} id="button" onClick={prew}>
            <img
              className={styles.minimize}
              src={""} alt="mini" />
          </div>
        </div>
        <Menu
          option={option}
          onPrev={prew}
          onSetMap={click}
          setOption={setOption}
        />
      </div>
    </>
  );
};

export default React.memo(Alert);
