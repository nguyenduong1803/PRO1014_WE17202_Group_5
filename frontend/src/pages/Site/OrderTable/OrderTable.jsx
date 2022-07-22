import React from 'react'
import TableOption from '../../../components/Site/TableOption/TableOption'
import LayoutSite from '../../../components/Site/LayoutSite/LayoutSite'
import CategoryTable from '../../../components/Site/Table/CategoryTable'
import styles from "./OrderTable.module.css"
import { useDispatch, useSelector } from "react-redux"
import { getListTable } from '../../../redux/SliceReducer/OrderTableSlice'
import { selectListTable } from '../../../redux/selector'

const possitionTable = [
    { index: 0, possition: 0 ,id:"id1"},
    { index: 1, possition: 1 ,id:"id2"},
    { index: -1, possition: 1 ,id:"id3"},
    { index: -1, possition: 1 ,id:"id4"},

    { index: 2, possition: 4 ,id:"id5"},
    { index: 3, possition: 5 ,id:"id6"},
    { index: 4, possition: 6 ,id:"id7"},
    { index: 5, possition: 7 ,id:"id8"},
    { index: -1, possition: 1 ,id:"id9"},
    { index: -1, possition: 1 ,id:"id10"},

    { index: 6, possition: 10 ,id:"id11"},
    { index: 7, possition: 11 ,id:"id12"},
    { index: 8, possition: 12 ,id:"id13"},
    { index: -1, possition: 1 ,id:"id14"},
    { index: -1, possition: 1 ,id:"id15"},
    { index: -1, possition: 1 ,id:"id16"},
    { index: -1, possition: 1 ,id:"id17"},
    // { index: -1, possition: 1 ,id:"id"},

    { index: -1, possition: 1 ,id:"id18"},
    { index: 9, possition: 18 ,id:"id19"},
    { index: 10, possition: 19 ,id:"id20"},
    { index: -1, possition: 1 ,id:"id21"},

    { index: 11, possition: 20 ,id:"id22"},
    { index: 12, possition: 21 ,id:"id23"},
    { index: 13, possition: 22 ,id:"id24"},
    { index: 14, possition: 23 ,id:"id25"},
    { index: 15, possition: 24 ,id:"id26"},
    { index: -1, possition: 1 ,id:"id27"},

    { index: 16, possition: 25 ,id:"id28"},
    { index: 17, possition: 26 ,id:"id29"},
    { index: 18, possition: 27 ,id:"id30"},
]
function OrderTable() {
    // const dispatch = useDispatch()
    const tables = useSelector(selectListTable)
  
    // for (let item in possitionTable) {
    //     tables.map((table, index) => {
    //         if (possitionTable[item].index === index) {
    //             return (<div className={`${styles.backgroundWrap} ${styles.topLeft} col-2`}>
    //                 <TableOption
    //                     type="circle"
    //                     id={table?.index_table}
    //                     status={table?.status}
    //                 />
    //             </div>)
    //         } else {
    //             return (
    //                 <div className="col-lg-2"></div>
    //             )
    //         }
    //     })
    // }
    return (
        <div>
            <LayoutSite>
                <div className="container-fluid">
                    <CategoryTable />
                    <h2 className={styles.alacart_title}>Sảnh tầng 1 AlaCarte</h2>
                    <div className={styles.wrapSquare}>
                        <div className={styles.square_green}></div>
                        <h4>Bàn chưa đặt</h4>
                    </div>
                    <div className={styles.wrapSquare}>
                        <div className={styles.square_yellow}></div>
                        <h4>Bàn đã đặt</h4>
                    </div>
                    <div className={styles.wrapSquare}>
                        <div className={styles.square_red}></div>
                        <h4>Bàn đang ăn</h4>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            {
                                possitionTable.map((ele, index) => {
                                    if (ele.index !== -1) {
                                        return (
                                            <div key={ele.id} className={`${styles.backgroundWrap}  col-lg-2`}>
                                                <TableOption
                                                    type="circle"
                                                    id={tables && tables[ele.index]?.index_table}
                                                    status={tables && tables[ele.index]?.status}
                                                />
                                            </div>)
                                    } else {
                                        return (
                                            <div key={ele.id} className="col-lg-2"></div>
                                        )
                                    }
                                })
                            }

                        </div>
                    </div>
                    {/* <div className="container-fluid">
                        <div className="row">

                            <div className={`${styles.backgroundWrap} ${styles.topLeft} col-2`}>
                                <TableOption
                                    type="circle"
                                    id={tables[0]?.index_table}
                                    status={tables[0]?.status}
                                />
                            </div>
                            <div className={`${styles.backgroundWrap} ${styles.topRight} col-2`} >
                            <TableOption
                                    type="circle"
                                    id={tables[1]?.index_table}
                                    status={tables[1]?.status}
                                />
                            </div>
                            <div className="col-4" >

                            </div>
                            <div className={`${styles.backgroundWrap} ${styles.topLeft} col-2`}>
                            <TableOption
                                    id={tables[2]?.index_table}
                                    status={tables[2]?.status}
                                />
                            </div>
                            <div className={`${styles.backgroundWrap} ${styles.topRight} col-2`}>
                            <TableOption
                                    id={tables[3]?.index_table}
                                    status={tables[3]?.status}
                                />
                            </div>
                        </div>


                        <div className="row">
                            <div className={`${styles.backgroundWrap} ${styles.botLeft} col-2`}>
                                <TableOption
                                    type="circle"
                                    id="A-3"
                                    status={3}
                                />
                            </div>
                            <div className={`${styles.backgroundWrap} ${styles.botRight} col-2`}>
                                <TableOption
                                    type="circle"
                                    id="A-4"
                                    status="1"
                                />
                            </div>
                            <div className="col-4">

                            </div>
                            <div className={`${styles.backgroundWrap} ${styles.botLeft} col-2`}>
                                <TableOption
                                    id="A-1"
                                    status="2"
                                />
                            </div>
                            <div className={`${styles.backgroundWrap} ${styles.botRight} col-2`}>
                                <TableOption
                                    id="A-1"
                                    status="3"
                                />
                            </div>
                        </div>
                        <div className="row" style={{ height: "170px", margin: "12px 0" }}>
                            <div className="col-lg-2">
                             
                            </div>
                        </div>
                        <div className="row">

                            <div className={`${styles.backgroundWrap} ${styles.topLeft} col-2`}>
                                <TableOption
                                    id="A-1"
                                    status="1"
                                />
                            </div>
                            <div className={`${styles.backgroundWrap} ${styles.topRight}   col-2`} >
                                <TableOption
                                    id="A-1"
                                    status="1"
                                />
                            </div>
                            <div className={` col-2`} >
                            </div>
                            <div className={`${styles.backgroundWrap}  ${styles.topLeft}  col-2`}>
                                <TableOption
                                    type="circle"
                                    id="A-1"
                                    status="1"
                                />
                            </div>
                            <div className={`${styles.backgroundWrap}  ${styles.top} col-2`}>
                                <TableOption
                                    type="circle"
                                    id="A-1"
                                    status="1"
                                />
                            </div>
                            <div className={`${styles.backgroundWrap}  ${styles.topRight} col-2`}>
                                <TableOption
                                    type="circle"
                                    id="A-1"
                                    status="1"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className={`${styles.backgroundWrap} ${styles.botLeft}  col-2`}>
                                <TableOption
                                    id="A-1"
                                    status="1"
                                />


                            </div>
                            <div className={`${styles.backgroundWrap} ${styles.botRight} col-2`}>
                                <TableOption
                                    id="A-1"
                                    status="1"
                                />

                            </div>
                            <div className={` col-2`}>

                            </div>
                            <div className={`${styles.backgroundWrap}  ${styles.botLeft} col-2`}>
                                <TableOption
                                    id="A-1"
                                    status="1"
                                    type="circle"
                                />
                            </div>
                            <div className={`${styles.backgroundWrap}  col-2`}>
                                <TableOption
                                    id="A-1"
                                    status="1"
                                    type="circle"
                                />
                            </div>
                            <div className={`${styles.backgroundWrap} ${styles.botRight} col-2`}>
                                <TableOption
                                    id="A-1"
                                    status="1"
                                    type="circle"
                                />
                            </div>
                        </div>
                    </div> */}
                </div>
            </LayoutSite >
        </div >
    )
}

export default OrderTable