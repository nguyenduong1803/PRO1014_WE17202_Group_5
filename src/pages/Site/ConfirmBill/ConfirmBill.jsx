import React from 'react'
import Header from "../../../components/Site/Header/Header"
import Footer from "../../../components/Site/Footer/Footer"
import BillDetail from "../../../components/Site/BillDetail/BillDetail"
import { DataContext } from "../../../contexts/DataContext"

function ConfirmBill() {
  const { bill, carts, data } = React.useContext(DataContext)
  return (
    <div>
      <Header />
      <BillDetail
        carts={carts}
        bill={bill}
        data={data}
      />
      <Footer />
    </div>
  )
}

export default ConfirmBill