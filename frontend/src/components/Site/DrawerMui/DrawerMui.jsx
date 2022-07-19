import React from 'react'
import Table from '../Table/Table'
import styles from "./ModalRigh.scss"
function DrawerMui() {
    return (
        <div><div class="modal-container">
            <input id="modal-toggle" type="checkbox" />
            <label  for="modal-toggle"> <Table
                    colors={{ color: "#A0522D", colorblur: "#FE4F7B" }}
                    name="A-2"
                /></label>
            
            <label class="modal-backdrop" for="modal-toggle"></label>
            <div class="modal-content">
                <label class="modal-close" for="modal-toggle">&#x2715;</label>
               
                <p>Hello from inside the modal!</p>
                <label class="modal-content-btn" for="modal-toggle">OK</label>
            </div>
        </div>  </div>
    )
}

export default DrawerMui