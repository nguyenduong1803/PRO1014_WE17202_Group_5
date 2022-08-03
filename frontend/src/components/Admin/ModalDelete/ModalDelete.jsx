import React from 'react'
import styles from "./ModalDelete.module.css"
function ModalDelete({ idProduct, handleDeleteProduct }) {
    return (
        <div
            className={ `modal `}
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className={`modal-content ${styles.modalCustom}`}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Xóa sản phẩm
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className={`${styles.modelbody} modal-body text-center`}>
                        Bạn chắc chắn muốn xóa sản phẩm ?
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className={styles.ModelBtn}
                            data-dismiss="modal"
                        >
                            Quay lại
                        </button>
                        <button
                            data-dismiss="modal"
                            onClick={(e) => handleDeleteProduct(idProduct)}
                            type="button"
                            className={styles.ModelBtnDelete}
                            role="button"
                        >
                            Xóa
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete