import { useState, useLayoutEffect, useCallback } from 'react'
import left from "../../../assets/img/chevron-left.svg"
import right from "../../../assets/img/chevron-right.svg"
import styles from "./Carousel.module.css"
import Panolens from "../Panolens/Panolens"
import vr_1 from "../../../assets/images/vr1.png"
import vr_2 from "../../../assets/images/vr2.jpg"
import vr_3 from "../../../assets/images/vr3.jpg"
import vr_4 from "../../../assets/images/vr4.jpg"
import vr_5 from "../../../assets/images/vr5.jpg"
import vr_6 from "../../../assets/images/vr6.jpg"
import vr_7 from "../../../assets/images/vr7.jpg"
import vr_8 from "../../../assets/images/vr8.jpg"
import vr_9 from "../../../assets/images/vr9.jpg"


const arrImage = [
    {
        src: vr_1,
    },
    {
        src: vr_2,
    },
    {
        src: vr_3,
    },
    {
        src: vr_4,
    },
    {
        src: vr_5,
    },
    {
        src: vr_6,
    },
    {
        src: vr_7,
    },
    {
        src: vr_8,
    },
    {
        src: vr_9,
    }


]
function Carousel() {
    const [x] = useState(21)
    const [option, setOption] = useState("up");
    const imgStyle = (index) => {
        return {
            "--x": `${Number(x) * Number(index)}%`
        }
    }
    const [range, setRange] = useState({ start: 0, end: 4 })
    const [imageActive, setImageActive] = useState(2);

    const handleNext = (x) => {
        setImageActive(() => {
            if (arrImage.length - 1 === imageActive) {
                return 0
            } else {
                return imageActive + 1
            }
        })
        setRange(() => {
            if (imageActive < 2) {
                return { start: 0, end: 4 }
            }
            else if (range.start === arrImage.length - 5 && range.end === arrImage.length - 1) {
                return { start: arrImage.length - 5, end: arrImage.length - 1 }
            }
            else {
                return { start: range.start++, end: range.end++ }
            }
        })
    }
    const handlePrev = () => {
        setImageActive(() => {
            // if(caro>=arrImage.length-3){

            // }
            if (imageActive === 0) {
                return arrImage.length - 1
            }
            else {
                return imageActive - 1
            }
        })
        setRange(() => {
            if (imageActive >= arrImage.length - 2) {
                return { start: arrImage.length - 5, end: arrImage.length - 1 }
            }
            else if (range.start < 0 && range.end < 4) {
                return { start: 0, end: 4 }
            }
            else {
                return { start: range.start--, end: range.end-- }
            }
        })
    }
    const handleClickImg = (index) => {
        if (index !== 0 || index !== 1 || index !== arrImage.length - 1 || index !== arrImage.length - 2 || index !== arrImage.length - 3) {
            setRange(() => {
                return { start: index - 2, end: index + 2 }
            })
        }
        setImageActive(index)
    }
    useLayoutEffect(() => {
        if (imageActive === arrImage.length - 1 || imageActive === arrImage.length - 2) {
            setRange({ start: arrImage.length - 5, end: arrImage.length - 1 })
        }
        else if (imageActive === 0 || imageActive === 1) {
            setRange({ start: 0, end: 4 })
        }
    }, [imageActive])
    let count = 0;

    const handleClickImgs = useCallback((i) => {
        handleClickImg(i)
    }, [])

    return (
        <div>
            <Panolens
                option={option}
                setOption={setOption}
                imageActive={imageActive}
                onHandleClick={handleClickImgs}
                index={imageActive}
                onClickImgs={handleClickImgs}
                img={arrImage[imageActive].src}
            />
            <div
                className={`${styles.wrapCaroseul} `}
                style={option === "slide" ? { opacity: 1, visibility: "visible", transition: "0.5s" } : { opacity: 0, visibility: "hidden", transition: "0.5s" }}
            >
                <div className={styles.wrapImage}>
                    <span
                        className={styles.prev}
                        onClick={() => handlePrev()}
                    >
                        <img src={left} alt="" />
                    </span>
                    <div className={styles.hidden}>
                        {arrImage.map((img, index) => {
                            if (index >= range.start && index <= range.end) {
                                return (
                                    <img
                                        style={imgStyle(count++)}
                                        key={index}
                                        className={imageActive === index ? `${styles.caro_img} ${styles.caro_Active} ${styles[`slide${count}`]}` : `${styles.caro_img} ${styles[`slide${count}`]}`}
                                        src={img.src} alt="caro"
                                        onClick={(e) => handleClickImg(index)}
                                    />
                                )

                            } else return null
                        })
                        }
                    </div>
                    <span
                        className={styles.next}
                        onClick={() => handleNext()}
                    >
                        <img src={right} alt="" />
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Carousel