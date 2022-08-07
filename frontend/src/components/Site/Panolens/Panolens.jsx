
import React from 'react'
import * as PANOLENS from "panolens";
import * as THREE from "three"
import Alert from '../Carousel/Alert/Alert'
import styles from "./Panolens.css";
import { Contexts } from "../Carousel/Contexts/Contexts"
import Cursor from './Cursor/Cursor';
import CloseIcon from '@mui/icons-material/Close';
import { moveBase64, videoBase64 } from '../../../assets/images';
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
        //  === page 0 ===
        {
            from: 0,
            to: 3,
            x: -100,
            y: -2100,
            z: -5000,
            name: "vị trí 3",
            modal: "info",
            img: moveBase64
        },
        {
            from: 0,
            to: 2,
            x: 5000,
            y: 100,
            z: -3000,
            name: "vị trí 2",
            modal: "info",
            img: moveBase64
        },
        {
            from: 0,
            to: 1,
            x: 3000,
            y: 400,
            z: -2000,
            name: "vị trí 1",
            modal: "",
            img: moveBase64
        },
        {
            from: 0,
            to: 1,
            x: -1000,
            y: 400,
            z: -4000,
            name: "vị trí 1",
            modal: "",
            img: moveBase64
        },
        // === page 1 ===
        {
            from: 1,
            to: 0,
            x: -2800,
            y: -400,
            z: -1400,
            name: "vị trí 0",
            modal: "move",
            img: moveBase64
        },
        {
            from: 1,
            modalId: 1,
            to: 0,
            x: 2050,
            y: 395,
            z: -3007,
            name: "Video Restaurant",
            modal: "product",
            img: videoBase64
        },
        {
            from: 1,
            modalId: 0,
            to: 0,
            x: 2800,
            y: 305,
            z: -3007,
            name: "Video Product",
            modal: "product",
            img: videoBase64
        },
        //   === page 2 ===
        {
            imgProduct: "https://maltco.asia/wp-content/uploads/2019/04/MACALLAN-GOLD-LIMITED-UK-H%E1%BB%98P-QU%C3%80-maltco.jpg",
            infoProduct: "Rượu Macallan Gold Double Cask",
            from: 2,
            modalId: 1,
            to: 1,
            x: 1400,
            y: 400,
            z: -7550,
            name: "",
            modal: "info",
            img: ""
        },
        {
            imgProduct: "https://ruoungoaichinhhang.net/wp-content/uploads/2018/01/ruou-hennessy-vs.jpg",
            infoProduct: "Rượu Hennessy",
            from: 2,
            modalId: 1,
            to: 1,
            x: 1800,
            y: 400,
            z: -7550,
            name: "",
            modal: "info",
            img: ""
        },
        {
            imgProduct: "https://ruoungoaithanhnien.com/wp-content/uploads/image/1_2019/Dollars-Henri-IV-Dudognon-Heritage-Cognac-Grande-Champagne.jpg",
            infoProduct: "Rượu Dollars Henri IV Dudognon Heritage",
            from: 2,
            modalId: 1,
            to: 1,
            x: 2200,
            y: 400,
            z: -7550,
            name: "",
            modal: "info",
            img: ""
        },
        {
            imgProduct: "https://st.hzcdn.com/simgs/8521db1a038618a8_4-1378/home-design.jpg",
            infoProduct: "Đèn Light Crystal Chandeliers",
            from: 2,
            modalId: 1,
            to: 1,
            x: -3100,
            y: 1000,
            z: -4750,
            name: "",
            modal: "info",
            img: ""
        },
        {
            from: 2,
            modalId: 0,
            to: 1,
            x: -4000,
            y: 100,
            z: -1350,
            name: "video product",
            modal: "product",
            img: videoBase64
        },
        {
            from: 2,
            modalId: 1,
            to: 0,
            x: 4363,
            y: 505,
            z: -1507,
            name: "Video restaurant",
            modal: "product",
            img: videoBase64
        },
        {
            from: 2,
            to: 1,
            x: 2100,
            y: -1400,
            z: -2500,
            name: "Tới vị trí 1",
            modal: "",
            img: moveBase64
        },
        {
            from: 2,
            to: 3,
            x: 800,
            y: -1000,
            z: 2800,
            name: "Tới vị trí 3",
            modal: "",
            img: moveBase64
        },
        // === page 4 ===
        {
            from: 4,
            to: 2,
            x: 4000,
            y: 400,
            z: -3000,
            name: "vị trí 2",
            modal: "",
            img: moveBase64
        },
        {
            from: 3,
            to: 5,
            x: 500,
            y: 100,
            z: -4000,
            name: "vị trí 5",
            modal: "",
            img: moveBase64,
        }
    ]
    const listModal = [
        {
            src: <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ewrEFtiM_7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            title: "Maxi hamburger with flying ingredients.",
            type: "video"
        },
        {
            src: <iframe width="100%" height="100%" src="https://www.youtube.com/embed/sWF-JfC4GnI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            title: "Maxi hamburger with flying ingredients.",
            type: "video"
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
                    infospot.addHoverText(infos.name);

                    if (infos.modal === "product") {
                        infospot.addEventListener("click", function () {
                            setModal(infos.modalId)
                            this.focus();
                        });
                        panorama.add(infospot)

                    }
                    else if (infos.modal === "info") {
                        panorama.add(infospot)
                        const overlay = document.createElement("div");
                        // infospot.element.outerHTML=`<h2>Hello</h2>`
                        // console.log(infospot.translateElement(1,2));
                        infospot.element.classList.add("infospot_custom");

                        infospot.element.appendChild(overlay);
                        overlay.classList.add("overlay")
                        overlay.style.transition = "0.5s"

                        overlay.innerHTML = `<div>
                    <img class="modal_product-img" src="${infos.imgProduct}" alt="img"/>
                    <p class="modal_product-name">${infos.infoProduct}</p>
                    </div>`
                    }
                    else {
                        infospot.addEventListener("click", () => onClickImgs(infos.to));
                        panorama.add(infospot)

                    }

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
                <div className="modal_content modal_animation" style={{ transition: '1s' }} >
                    <div className="modal_item modal_image">
                        {Src}
                    </div>
                    <div className="modal_item modal_info">
                        <h2 className="modal_title">{title}</h2>
                        <p>{info}</p>
                    </div>
                    <CloseIcon
                        onClick={() => handleChange()}
                        className="modal_close"
                    />
                </div>
            </section>
        )
    } else {
        return (
            <section id="wrap_modal">
                <div className="modal--video modal_animation" >
                    {Src}
                    <CloseIcon
                        onClick={() => handleChange()}
                        className="modal_close"
                    />
                </div>


            </section>)
    }
}
export default Panolens
