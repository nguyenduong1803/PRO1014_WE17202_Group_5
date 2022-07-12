import React, { useEffect } from 'react'
import styles from "./OrderItems.module.css"
function OrderItems({ orderList, orderIds, data, orders }) {
    useEffect(() => {

    }, [])
    return (
        <>
            {orderList && orderList?.map(e =>
                <>
                    <div className={`${styles.header} d-flex justify-content-between`}>
                        <span>Mã đơn hàng: {e}</span>
                        <span>Đã giao hàng thành công</span>
                    </div>
                    <div className={`${styles.content}`}>
                        <div className='row' >
                            <div className='col-3' >

                            </div>
                            <div className='col-5' >

                            </div>
                            <div className='col-4' >

                            </div>

                        </div>
                        <div className='row' >
                            <h2>Tổng số tiền:
                                <span style={{ color: `red`, fontWeight: `600` }}>
                                    {
                                        orders
                                            .find(e => e._id === e).items
                                            .reducers((init, value) => init + value.price, 0)
                                    } VNĐ

                                </span>
                            </h2>
                        </div>
                    </div>
                </>

            )}
        </>
    )
}

export default OrderItems