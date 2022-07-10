
import React from 'react'
import * as PANOLENS from "panolens";
import * as THREE from "three"
import Alert from '../Alert/Alert'
import ThreeSixty from "react-360-view";
import styles from "./Panolens.css";
import moveIcon from "../../../assets/img/moveIcon.png"
import { Contexts } from "../Contexts/Contexts"
import Cursor from './Cursor/Cursor';
// import Radar from "../../../assets/img/radar.svg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faXmark } from '@fortawesome/free-solid-svg-icons'
// import img1 from "../../assets/product/ghibli_01.jpg"
// import img2 from "../../assets/product/ghibli_02.jpg"
// import img3 from "../../assets/product/ghibli_03.jpg"
// import img4 from "../../assets/product/ghibli_04.jpg"
// import img5 from "../../assets/product/ghibli_05.jpg"
// import img6 from "../../assets/product/ghibli_06.jpg"
// import play from "../../assets/img/play.png"
// import next from "../../assets/img/arrowNext.gif"
// import vr from "../../assets/img/VR.png"
// import video from "../../assets/video/video2.mp4"

function Panolens({ img, onClickImgs, index, setOption, imageActive, onHandleClick, option }) {
    // const { deg, setDeg, refRange } = React.useContext(Contexts)
    // const [range, setRange] = React.useState(10);
    const [modal, setModal] = React.useState(-1);
    const listInfospot = [
        {
            from: 1,
            to: 0,
            x: -2800,
            y: -400,
            z: -1400,
            name: "vị trí 0",
            modal: "",
            img: moveIcon
        },
        {
            from: 1,
            to: 0,
            x: -2163,
            y: -2065,
            z: 5007,
            name: "vị trí 0",
            modal: "product",
            img: moveIcon
        },
        {
            from: 0,
            to: 3,
            x: -100,
            y: -2100,
            z: -5000,
            name: "vị trí 3",
            modal: "",
            img: moveIcon
        },
        {
            from: 0,
            to: 2,
            x: 5000,
            y: 100,
            z: -3000,
            name: "vị trí 2",
            modal: "",
            img: moveIcon
        },
        {
            from: 0,
            to: 1,
            x: 3000,
            y: 400,
            z: -2000,
            name: "vị trí 1",
            modal: "",
            img: moveIcon
        },
        {
            from: 0,
            to: 1,
            x: -1000,
            y: 400,
            z: -4000,
            name: "vị trí 1",
            modal: "",
            img: moveIcon
        },
        {
            modalId: 1,
            from: 2,
            to: 1,
            x: 1000,
            y: 400,
            z: -3000,
            name: "vị trí 1",
            modal: "product",
            img: moveIcon
        },
        {
            modalId: 0,
            from: 2,
            to: 1,
            x: 2100,
            y: 400,
            z: -3050,
            name: "video product",
            modal: "product",
            img: moveIcon
        },
        {
            from: 4,
            to: 2,
            x: 4000,
            y: 400,
            z: -3000,
            name: "vị trí 2",
            modal: "",
            img: moveIcon
        },
        {
            from: 3,
            to: 5,
            x: 500,
            y: 100,
            z: -4000,
            name: "vị trí 5",
            modal: "",
            img: moveIcon,
        }
    ]
    const listModal = [
        {
            src: <video controls with="500px" style={{ width: "100%", borderRadius: "5px", height: "100%" }} src={""} ></video>,
            info: "Enriched Flour (Wheat Flour, Malted Barley Flour, Niacin, Iron, Thiamine Mononitrate,Riboflavin, Folic Acid), Water, Sugar, Yeast, Soybean Oil, Contains 2% or Less: Salt,  Wheat Gluten, Potato Flour, May Contain One or More Dough Conditioners (DATEM, AscorbicAcid, Mono and Diglycerides, Enzymes).",
            title: "Maxi hamburger with flying ingredients.",
            type: "video"
        },
        {
            src: <ThreeSixty
                amount={75}
                imagePath="https://fastly-production.24c.in/webin/360"
                fileName="output_{index}.jpeg"
                spinReverse
            />,
            type: "360",
            info: "Enriched Flour (Wheat Flour, Malted Barley Flour, Niacin, Iron, Thiamine Mononitrate,Riboflavin, Folic Acid), Water, Sugar, Yeast, Soybean Oil, Contains 2% or Less: Salt,  Wheat Gluten, Potato Flour, May Contain One or More Dough Conditioners (DATEM, AscorbicAcid, Mono and Diglycerides, Enzymes).",
            title: "Maxi hamburger with flying ingredients."
        }
    ]

    React.useEffect(() => {
        const app = document.querySelector('#app');

        const viewer = new PANOLENS.Viewer({
            container: app,
            autoHideInfospot: false,
            horizontalView: false,
            cameraFov: 80,
            reverseDragging: false,
            enableReticle: false,
            dwellTime: 1600,
            viewIndicator: true,
            indicatorSize: 50,
            // autoRotate: true,
            // autoRotateSpeed: 0.4,
            output: 'overlay',
        });

        const panorama = new PANOLENS.ImagePanorama(img);
        function possitionInfospot(listInfospot) {
            listInfospot.forEach((infos, i) => {
                if (infos.from === index) {
                    const infospot = new PANOLENS.Infospot(
                        500, infos.img, false
                    );

                    infospot.material.rotation = 0 * Math.PI / 180;
                    infospot.position.set(infos.x, infos.y, infos.z);
                    infospot.addHoverText("");
                    if (infos.modal === "product") {
                        infospot.addEventListener("click", function () {
                            setModal(infos.modalId)
                            this.focus();
                        });
                    } else {
                        infospot.addEventListener("click", () => onClickImgs(infos.to));
                    }
                    panorama.add(infospot)
                    const overlay = document.createElement("div");
                    // infospot.element.outerHTML=`<h2>Hello</h2>`
                    // console.log(infospot.translateElement(1,2));
                    infospot.element.classList.add("infospot_custom");

                    infospot.element.appendChild(overlay);
                    overlay.classList.add("overlay")
                    overlay.style.transition = "0.5s"

                    overlay.innerHTML = `<div>
                    <h2>tiitle</h2>
                    <p>content</p>
                    </div>`
                }

            })
        }
        possitionInfospot(listInfospot);

        viewer.add(panorama);
        const radar = document.getElementById("indicator")
        if (radar) {
            radar.remove()
        }
        return () => {
            const canvas = document.querySelector(".panolens-canvas")
            const radar = document.getElementById("indicator")
            if (canvas) {
                canvas.remove()
                viewer.dispose()
            }
            if (radar) {
                radar.remove()
            }
        }
    }, [img, index])

    return (
        <>
            <Cursor />
            <div style={styles.name} id="app">
            </div>
            {modal !== -1 ?
                listModal.map((m, index) => {
                    if (modal === index)
                        return (
                            <Modal
                                key={index}
                                Src={m.src}
                                title={m.title}
                                info={m.info}
                                type={m.type}
                                modal={modal}
                                setModal={setModal}
                            />)
                }
                )
                : ""}
            <div className={styles.onTop}>
                <Alert
                    option={option}
                    setOption={setOption}
                    imageActive={imageActive}
                    onHandleClick={onHandleClick}
                />

            </div>
        </>
    )
}
function Modal({ setModal, modal, Src, title, info, type }) {
    const handleChange = () => {
        setModal(false)
        console.log(modal)
    }
    if (type === "360") {
        return (
            <section id="wrap_modal">
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" type="text/css"></link>
                <div className="modal_content modal_animation" style={{ transition: '1s' }} >
                    <div className="modal_item modal_image">
                        {Src}
                    </div>
                    <div className="modal_item modal_info">
                        <h2 className="modal_title">{title}</h2>
                        <p>{info}</p>
                    </div>
                    {/* <FontAwesomeIcon
                        onClick={() => handleChange()}
                        className="modal_close"
                        icon={faXmark} /> */}
                </div>
            </section>
        )
    } else {
        return (
            <section id="wrap_modal">
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" type="text/css"></link>
                <div className="modal--video modal_animation" >
                    {Src}
                    {/* <FontAwesomeIcon
                        onClick={() => handleChange()}
                        className="modal_close"
                        icon={faXmark} /> */}
                </div>


            </section>)
    }
}
export default Panolens
