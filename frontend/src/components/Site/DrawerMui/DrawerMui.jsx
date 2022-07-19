import React from 'react'
import Table from '../Table/Table'
import styles from "./ModalRigh.scss"
function DrawerMui() {
    return (
        <div><div className="modal-container">
            <input id="modal-toggle" type="checkbox" />
            <label  htmlFor="modal-toggle"> <Table
                    colors={{ color: "#A0522D", colorblur: "#FE4F7B" }}
                    name="A-2"
                /></label>
            
            <label className="modal-backdrop" for="modal-toggle"></label>
            <div className="modal-content">
                <label className="modal-close" for="modal-toggle">&#x2715;</label>
               
                <p>Hello from inside the modal!</p>
                <label className="modal-content-btn" for="modal-toggle">OK</label>
            </div>
        </div>  </div>
    )
}

export default DrawerMui