import { useState, useLayoutEffect, useCallback } from 'react'
import left from "../../../assets/img/chevron-left.svg"
import right from "../../../assets/img/chevron-right.svg"
import styles from "./Carousel.module.css"
import Panolens from "../Panolens/Panolens"


const arrImage = [
    {
        src: "https://res.cloudinary.com/dlvtzpxce/image/upload/v1660770223/product/wbbiyqxbmlxthkb81syd.jpg",
    },
    {
        src:"https://res.cloudinary.com/dlvtzpxce/image/upload/v1660770402/product/lfprefvyjsvthk5koqa9.jpg"
     

    },
    {
        src: "https://res.cloudinary.com/dlvtzpxce/image/upload/v1660770351/product/soqfpwxt7utvm21zmrun.jpg",

    },
    {
        src:"https://res.cloudinary.com/dlvtzpxce/image/upload/v1660770487/product/thhcmj4zn9ymbpdmdacw.jpg",
    },
    {
        src: "https://res.cloudinary.com/dlvtzpxce/image/upload/v1660770530/product/iygmz9uwtkeqtjxph8vg.jpg",
    },
    {
        src: "https://res.cloudinary.com/dlvtzpxce/image/upload/v1660770563/product/chqhbwyju2sl4ebomzcf.jpg",
    },
    {
        src: "https://res.cloudinary.com/dlvtzpxce/image/upload/v1660770626/product/or6vcou735vgubbyp22x.jpg",
    },
    {
        src: "https://res.cloudinary.com/dlvtzpxce/image/upload/v1660770602/product/j4vaoqjwq7kjevouupbf.jpg",
    },
    {
        src: "https://res.cloudinary.com/dlvtzpxce/image/upload/v1660770626/product/or6vcou735vgubbyp22x.jpg",
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