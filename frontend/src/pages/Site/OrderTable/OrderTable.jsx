import React from 'react'
import DrawerMui from '../../../components/Site/DrawerMui/DrawerMui'
import LayoutSite from '../../../components/Site/LayoutSite/LayoutSite'
import RectangleTable from '../../../components/Site/Table/RectangleTable'
import Table from "../../../components/Site/Table/Table"
import styles from "./OrderTable.module.css"
function OrderTable() {

    return (
        <div>
            <LayoutSite>
                <div className="row">

                    <div className="col-2">
                        <DrawerMui
                        />
                    </div>
                    <div className="col-2" >
                        <Table
                            colors={{ color: "#A0522D", colorblur: "#FE4F7B" }}
                            name="A-2"
                        />
                    </div>
                    <div className="col-4" >
                       <div className={`${styles.borderLeftRight} `}></div>
                    </div>
                    <div className="col-2">
                        <RectangleTable
                            colors={{ color: "#A0522D", colorblur: "#228B22" }}
                            name="A-6"
                        />
                    </div>
                    <div className="col-2">
                        <RectangleTable
                            colors={{ color: "#A0522D", colorblur: "#228B22" }}
                            name="A-5"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <Table
                            colors={{ color: "#A0522D", colorblur: "#FE4F7B" }}
                            name="A-13"
                        />
                    </div>
                    <div className="col-2">
                        <Table
                            colors={{ color: "#A0522D", colorblur: "#FE4F7B" }}
                            name="A-13"
                        />
                    </div>
                    <div className="col-4">
                        <div className={`${styles.borderLeftRight} `}>
                        </div>
                    </div>
                    <div className="col-2">
                        <RectangleTable
                            colors={{ color: "#A0522D", colorblur: "#228B22" }}
                            name="A-4"
                        />
                    </div>
                    <div className="col-2">
                        <RectangleTable
                            colors={{ color: "#A0522D", colorblur: "#228B22" }}
                            name="A-3"
                        />
                    </div>
                </div>

                <div className="row" style={{ height: "170px" }}><div className={styles.borderTopBot}></div></div>
                <div className="row">

                    <div className="col-2">
                        <RectangleTable
                            colors={{ color: "#A0522D", colorblur: "#228B22" }}
                            name="A-1"
                        />
                    </div>
                    <div className="col-2" >
                        <RectangleTable
                            colors={{ color: "#A0522D", colorblur: "#228B22" }}
                            name="A-2"
                        />
                    </div>
                    <div className="col-2" >
                        <div className={styles.borderLeftRight}>
                        </div>
                    </div>
                    <div className="col-2">
                        <Table
                            colors={{ color: "#A0522D", colorblur: "#FE4F7B" }}
                            name="A-5"
                        />
                    </div>
                    <div className="col-2">
                        <Table
                            colors={{ color: "#A0522D", colorblur: "#FE4F7B" }}
                            name="A-6"
                        />
                    </div>
                    <div className="col-2">
                        <Table
                            colors={{ color: "#A0522D", colorblur: "#FE4F7B" }}
                            name="A-13"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <RectangleTable
                            colors={{ color: "#A0522D", colorblur: "#228B22" }}
                            name="A-3"
                        />
                        <div className={styles.borderBottom}></div>

                    </div>
                    <div className="col-2">
                        <RectangleTable
                            colors={{ color: "#A0522D", colorblur: "#228B22" }}
                            name="A-4"
                        />
                        <div className={styles.borderBottom}>

                        </div>
                    </div>
                    <div className="col-2">
                        <div className={styles.borderLeftRight}>
                        </div>
                    </div>
                    <div className="col-2">
                        <Table
                            colors={{ color: "#A0522D", colorblur: "#FE4F7B" }}
                            name="A-13"
                        />
                    </div>
                    <div className="col-2">
                        <Table
                            colors={{ color: "#A0522D", colorblur: "#FE4F7B" }}
                            name="A-13"
                        />
                    </div>
                    <div className="col-2">
                        <Table
                            colors={{ color: "#A0522D", colorblur: "#FE4F7B" }}
                            name="A-13"
                        />
                    </div>
                </div>
            </LayoutSite >
        </div >
    )
}

export default OrderTable