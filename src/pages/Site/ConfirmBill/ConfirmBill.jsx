import React from 'react'
import LayoutSite from "../../../components/Site/LayoutSite/LayoutSite"
import BillDetail from "../../../components/Site/BillDetail/BillDetail"
import { DataContext } from "../../../contexts/DataContext"

function ConfirmBill() {
  const { bill, carts, data } = React.useContext(DataContext)
  return (
    <LayoutSite>
      <BillDetail
        carts={carts}
        bill={bill}
        data={data}
      />
    </LayoutSite>

  )
}

export default ConfirmBill