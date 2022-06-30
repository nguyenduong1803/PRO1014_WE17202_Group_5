import React from "react";
import breadcrumb from "../../../assets/img/breadcrumb.jpg";
import Header from "../../../components/Site/Header/Header";
import BreadCrumbs from "../../../components/Site/BreadCrumbs/BreadCrumbs";
import Footer from "../../../components/Site/Footer/Footer";
import MiniBill from "../../../components/Site/MiniBill/MiniBill"
import FormCheckout from "../../../components/Site/MiniBill/FormCheckout"
import { DataContext } from "../../../contexts/DataContext"

const breadcrumbs = [
  {
    title: "Trang Chủ",
    to: "/",
    active: false
  }, {
    title: "Giỏ hàng",
    to: "/gio-hang",
    active: false
  },
  {
    title: "Thanh toán",
    to: "/gio-hang/thanh-toan",
    active: true
  }
]
function Checkout() {
  const { data, carts, bill, setBill } = React.useContext(DataContext)
  return (
    <>
      <Header />
      <BreadCrumbs list={breadcrumbs} img={breadcrumb} />
      <div className={`container`}>
        <div className="row mt-5">
          <h3 className="col-12 fw-bold">Thông tin thanh toán</h3>
          <FormCheckout
            bill={bill}
            setBill={setBill}
          />
          <MiniBill
            carts={carts}
            data={data}
            bill={bill}
            setBill={setBill}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
