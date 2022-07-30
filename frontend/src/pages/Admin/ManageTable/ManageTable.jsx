import React from 'react'
import Sidebar from '../../../components/Admin/Sidebar/Sidebar'
import styles from "./ManageTable.module.css"
const possitionTable = [
    { index: 0, possition: 0, id: "id1" },
    { index: 1, possition: 1, id: "id2" },
    { index: -1, possition: 1, id: "id3" },
    { index: -1, possition: 1, id: "id4" },

    { index: 2, possition: 4, id: "id5" },
    { index: 3, possition: 5, id: "id6" },
    { index: 4, possition: 6, id: "id7" },
    { index: 5, possition: 7, id: "id8" },
    { index: -1, possition: 1, id: "id9" },
    { index: -1, possition: 1, id: "id10" },

    { index: 6, possition: 10, id: "id11" },
    { index: 7, possition: 11, id: "id12" },
    { index: 8, possition: 12, id: "id13" },
    { index: -1, possition: 1, id: "id14" },
    { index: -1, possition: 1, id: "id15" },
    { index: -1, possition: 1, id: "id16" },
    { index: -1, possition: 1, id: "id17" },
    // { index: -1, possition: 1 ,id:"id"},

    { index: -1, possition: 1, id: "id18" },
    { index: 9, possition: 18, id: "id19" },
    { index: 10, possition: 19, id: "id20" },
    { index: -1, possition: 1, id: "id21" },

    { index: 11, possition: 20, id: "id22" },
    { index: 12, possition: 21, id: "id23" },
    { index: 13, possition: 22, id: "id24" },
    { index: 14, possition: 23, id: "id25" },
    { index: 15, possition: 24, id: "id26" },
    { index: -1, possition: 1, id: "id27" },

    { index: 16, possition: 25, id: "id28" },
    { index: 17, possition: 26, id: "id29" },
    { index: 18, possition: 27, id: "id30" },
]
const listTable = [
    { index: 0 },
    { index: 1 },
    { index: 2 },
    { index: 3 },
    { index: 4},
    { index: 5 },
    { index: 6 },
    { index: 7 },
    { index: 8 },
    { index: 9 },
    { index: 10},
    { index: 11 },
    { index: 12},
    { index: -1 },
    { index: -1 },
    { index: -1 },
    { index: -1 },
    { index: 9 },
    { index: 10 },
    { index: -1 },
    { index: 11 },
    { index: 12 },
    { index: 13 },
    { index: 14 },
    { index: 15 },
    { index: -1 },
    { index: 16 },
    { index: 17 },
    { index: 18 },
]
function ManageTable() {
    return (
        <>  <Sidebar />
            <div className="container-fluid">
                <div className="row">
                    {
                        possitionTable.map((ele, index) => {
                            if (ele.index !== -1) {
                                return (
                                    <div key={ele.id} className={` col-lg-2`}>
                                        <div className={styles.table}>table</div>
                                    </div>)
                            } else {
                                return (
                                    <div key={ele.id} className="col-lg-2">
                                        <div className={styles.table}></div>
                                    </div>
                                )
                            }
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default ManageTable