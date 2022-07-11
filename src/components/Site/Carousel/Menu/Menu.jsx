import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom"
import Home from "../../../../assets/svg/HomeSvg"
import SlideIcon from "../../../../assets/svg/SlideIcon"
import ArrowUp from "../../../../assets/svg/ArrowUp"
import MapIcon from "../../../../assets/svg/MapIcon"
import styles from "./Menu.module.css"

function Menu({ setOption, onSetMap, onPrev, option }) {
    const menu = [
        {
            icon: <SlideIcon width="28px" />,
            title: "Slide Ảnh",
            color: {
                "--clr": "#2196f3"
            },
            isActive: false,
            to: ""
        },

        {
            icon: <MapIcon width="28px" />,
            title: "Bản đồ",
            color: {
                "--clr": "#ffa117"
            },
            isActive: false,
            to: ""

        },
        {
            icon: <ArrowUp width="28px" style={option === "down" ? { transition: "0.3s",transform: "translateY(-12px)"}:  { transform: "rotate(180deg) ", transition: "0.3s" }}/>,
            title: "Ẩn Menu",
            color: {
                "--clr": "#f44336"
            },
            isActive: true,
            to: ""

        },

        {
            icon: <MapIcon width="28px" />,
            title: "Coming soon",
            color: {
                "--clr": "#b145e9"
            },
            isActive: false,
            to: ""

        },
        {
            icon: <Home width="28px" height="28px" />,
            title: "Trang chủ",
            color: {
                "--clr": "#b145e9"
            },
            isActive: false,
            to: "/"

        },
    ]
    return (
        <>
            <div className={styles.container}
                style={option === "down" ? { bottom: "-40px" } : { bottom: "40px" }}

            >
                <nav className={styles.navigation}>
                    <ul className={styles.ulList}>
                        {menu.map((m, index) => (
                            <NavItem
                                onPrev={onPrev}
                                onSetMap={onSetMap}
                                setOption={setOption}
                                option={option}
                                index={index}
                                key={index}
                                icon={m.icon}
                                color={m.color}
                                actives={m}
                                linkTo={m.to}
                                title={m.title}
                            />

                        ))}
                        <div className={styles.indicator}></div>
                    </ul>
                </nav>
            </div>
        </>
    )
}
const NavItem = ({ icon, color, index, linkTo, setOption, onSetMap, onPrev, title, option }) => {
    const refLi = useRef();
    const [active, setActive] = useState(2)
    const handleToggle = (index) => {
        const arr = document.querySelectorAll(".Menu_active1__NidsR")
        console.log(option)

        if (index === 0) {
            onPrev()
            setOption("slide")
        } else if (index === 1) {
            setOption("")
            onSetMap("map")
            console.log(option)
        } else if (index === 2) {
            if (option === "down") {
                setOption("up")
            } else {
                setOption("down")
            }
            onPrev()
        }
        else {
            onPrev()
            setOption("")
        }

        for (let item of arr) {
            item.classList.remove(`Menu_active1__NidsR`)
        }
        refLi.current.classList.add(`Menu_active1__NidsR`)
    }
    return (
        <li ref={refLi}
            id="title"
            data-title={option === "down" ? "Hiện Menu" : title}
            className={index === active ? `${styles.list_items} ${styles.active1}` : `${styles.list_items}`}
            style={color}
            onClick={() => handleToggle(index)}
        >
            {linkTo !== "" ? <Link to={linkTo} className={`${styles.listLink} ${styles.linkRouter}`}><span >{icon}</span> </Link>
                :
                <div className={styles.listLink}>
                    <span className={styles.icon}>{icon}
                    </span>
                </div>}
        </li>

    )
}

export default Menu