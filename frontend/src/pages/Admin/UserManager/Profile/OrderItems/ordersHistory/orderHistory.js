import React from 'react'
import styles from "./orderHistory.module.css"
function orderHistory(props) {

    return (
        <>
            {props.orders.map((e, index) =>
                <div
                    className={styles.orders}
                    key={index}
                >
                    <div className={`${styles.header} `}>
                        <div className='d-flex flex-column justify-content-between' style={{ height: `70%` }}>
                            <p>Mã đơn hàng: <span>{e._id}</span></p>
                            <p >Địa chỉ: <span>{e.address}</span></p>
                        </div>
                        <span>
                            {
                                e.status
                                    ? "Giao hàng thành công "
                                    : "Đang giao hàng ..."
                            }
                        </span>
                    </div>
                    {e.items.map((ele, i) =>
                        <div
                            className={`${styles.content} row`}
                            key={i}
                        >
                            <div
                                className={`${styles.img} col-3 `}
                            >
                                <img style={{ height: `100%` }} src={ele.image} alt="" />
                            </div>
                            <div className={`${styles.desc} col-5 `}>
                                <p>Tên sản phẩm: <span>{ele.name}</span></p>
                                <p>Loại hàng: <span>{ele.type}</span></p>
                                <p>Số lượng : <span>{ele.amount}</span></p>
                            </div>
                            <div className={`${styles.price} col-4`}>



                                <p>Giá tiền:
                                    <span style={{ color: `red` }}>

                                        {`  ` + ele.price + `  VNĐ`}
                                    </span>
                                </p>

                            </div>
                        </div>

                    )}
                    <h2 style={{ textAlign: `center` }}>Tổng số tiền:
                        <span style={{ color: `red`, fontWeight: `600`, marginLeft: `10px` }}>
                            {e.items.reduce((init, value) => init + (value.price * value.amount), 0) + "  VNĐ"}
                        </span>
                    </h2>

                </div>
            )}
        </>

    )
}

export default orderHistory