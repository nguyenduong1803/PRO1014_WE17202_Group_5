import React, { useContext, useEffect, useState } from "react";
import styles from "../EditProduct/EditProduct.module.css";
import Breadcrumbs from "../../../../components/Admin/BreadCrumb/Breadcrumb";
import Switch from "@mui/material/Switch";
import axios from "axios";
import {useHistory } from "react-router-dom";
import Header from "../../../../components/Admin/Header/Header";
import { DataContext } from "../../../../contexts/DataContext";

function EditProduct() {
  const { data } = useContext(DataContext);
  const [status, setStatus] = useState(true);
  const [warnDate, setWarnDate] = useState("");
  const [saleDateStart, setSaleDateStart] = useState();
  const [saleDateEnd, setSaleDateEnd] = useState();
  const [img, setImg] = useState("");
  const History = useHistory();
  const [imgs, setImgs] = useState([]);


  const idProduct = window.location.hash.split("#")[1];
  const productDetailt = data && data.find((e) => e?._id === idProduct);
 // console.log(productDetailt.timeCreate);
  const abc = productDetailt?.timeCreate;
  const acb = abc.split(",");
 const cvf = acb[0]
  const [registerForm, setRegisterForm] = useState({
    name: productDetailt?.name,
    _id: productDetailt?._id,
    describe: productDetailt?.describe,
    price: productDetailt?.price,
    discount: 0,
    timeCreate: productDetailt?.updatedAt,
    quantity: productDetailt?.quantity,
    categories: "Hoa quả",
    comment: [],
    status: productDetailt?.status,
    unit: "Kg",
   // timeDiscount: [{ start: productDetailt?.timeCreate, end: productDetailt?.timeCreate }],
  });

  useEffect(() => {
    if (saleDateStart && saleDateEnd) {
      const start = new Date(saleDateStart);
      const end = new Date(saleDateEnd);
      setWarnDate((end - start) / (1000 * 3600 * 24));
    } else {
      setWarnDate("");
    }
  }, [saleDateEnd, saleDateStart]);
  useEffect(() => {
    return () => {
      img && URL.revokeObjectURL(img);
    };
  }, [img]);
  const breadcrumItem = [
    {
      href: "/",
      title: "Quản lý",
      isActive: false,
    },
    {
      href: "/admin/quan-ly-san-pham",
      title: "Quản lý sản phẩm",
      isActive: false,
    },
    {
      href: "/sua-san-pham",
      title: "Sửa sản phẩm",
      isActive: true,
    },
  ];

  const onChangeRegisterForm = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
      
    });
  };

  function getImg(e) {
    const urlImg = URL.createObjectURL(e.target.files[0]);
    setImg(urlImg);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("name", registerForm.name);
    formData.append("describe", registerForm.describe);
    formData.append("price", registerForm.price);
    formData.append("discount", registerForm.discount);
    formData.append("quantity", registerForm.quantity);
    formData.append("categories", registerForm.categories);
    formData.append("status", registerForm.status);
    formData.append("unit", registerForm.unit);
    formData.append("timeCreate", registerForm.timeCreate);
     formData.append("images", imgs);
    axios.put("http://localhost:5000/api/products/" + idProduct,formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFhZTI1MzQwOWQ0YThiYjRlMWU1ZTYiLCJpYXQiOjE2NTU3OTkyMjJ9.gpm8o8864y8Y79qwoi5z4jBMIdrl8nvEcOPm44l8CEA",
      },
    })
    .then((res) => {
      console.log(res.data);
     // History.push("/admin/quan-ly-san-pham");
    })
    .catch((err) => console.log(err));
   
  };

  return (
    <>
      {window.innerWidth <= 425 && <Header />}
      <div className={`${styles.main}`}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <h2 style={{ fontSize: `30px`, fontWeight: `bold`, color: `#1A358F` }}>
          Sửa sản phẩm
        </h2>
        <div style={!status ? { filter: `brightness(80%)` } : {}}>
          <form
            onSubmit={handleSubmit}
            onChange={(e) => onChangeRegisterForm(e)}
            encType="multipart/form-data"
          >
            <div className={`${styles.formRow} `}>
              <div className={`${styles.uploadImg}`}>
                <div className={`${styles.imgWrapper}`}>
                  { <img src={productDetailt?.images[0]} alt="img" />}
                  {/* <input
                    id="upLoadImg"
                    type="file"
                    className={`${styles.importImg}`}
                    onChange={getImg}
                    accept="image/png, image/png, image/jpeg"
                    multiple
                  />
                  <label
                    htmlFor="upLoadImg"
                    style={
                      img
                        ? { transform: `translateY(-100%)`, opacity: `0` }
                        : {}
                    }
                  >
                    <p>+</p>
                    <p>Tải ảnh lên </p>
                  </label> */}
                </div>

                <p style={{ marginLeft: `31px`, color: `#1A358F` }}>
                  Ảnh sản phẩm
                </p>
              </div>
              <div className={`${styles.showHideProducts} `}>
                <label
                  htmlFor=""
                  style={{ display: `flex`, justifyContent: `end` }}
                >
                  Trạng thái <span> *</span>
                </label>
                <Switch
                  defaultChecked
                  style={{ color: `#1a358f` }}
                  onClick={() => setStatus(!status)}
                />
                {status ? (
                  <p
                    style={{
                      color: `#1a358f`,
                      fontWeight: `bold`,
                      width: `30px`,
                      display: `inline-block`,
                      textAlign: `end`,
                    }}
                  >
                    Hiện
                  </p>
                ) : (
                  <p
                    style={{
                      color: `#000`,
                      fontWeight: `bold`,
                      width: `30px`,
                      display: `inline-block`,
                      textAlign: `end`,
                    }}
                  >
                    Ẩn
                  </p>
                )}
              </div>
            </div>
            <div className={`${styles.form}`}>
              <div className={`${styles.formRow} `}>
                <div className={`${styles.formLeft} `}>
                  <div className={`${styles.wrapLeft}`}>
                    <label htmlFor="">
                      Tên sản phẩm <span>*</span>
                    </label>
                    <input type="text" name="name" value={registerForm.name} />
                  </div>
                </div>
                <div className={`${styles.formRight} `}>
                  <div className={`${styles.wrapRight}`}>
                    <label htmlFor="">
                      Mô tả <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="describe"
                      value={registerForm.describe}
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.formRow} `}>
                <div className={`${styles.formLeft} `}>
                  <div className={`${styles.wrapLeft}`}>
                    <label htmlFor="">
                      Giá gốc<span>*</span>
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={registerForm.price}
                    />
                  </div>
                </div>
                <div className={`${styles.formRight} `}>
                  <div className={`${styles.wrapRight}`}>
                    <label htmlFor="">
                      Giảm giá <span>*</span>
                    </label>
                    <input
                      type="number"
                      name="discount"
                      value={registerForm.discount}
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.formRow} `}>
                <div className={`${styles.formLeft} `}>
                  <div className={`${styles.wrapLeft}`}>
                    <label htmlFor="">
                      Số lượng <span>*</span>
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={registerForm.quantity}
                    />
                  </div>
                </div>
                <div className={`${styles.formRight} `}>
                  <div className={`${styles.wrapRight}`}>
                    <label htmlFor="">
                      Đơn vị <span>*</span>
                    </label>
                    <select name="unit" value={registerForm.unit}>
                      <option value="kg">Kg</option>
                      <option value="box">Hộp</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={`${styles.formRow} `}>
                <div className={`${styles.formLeft} `}>
                  <div className={`${styles.wrapLeft}`}>
                    <label htmlFor="">
                      Mã sản phẩm <span>*</span>
                    </label>
                    <input type="text" value={registerForm._id} disabled/>
                  </div>
                </div>
                <div className={`${styles.formRight} `}>
                  <div className={`${styles.wrapRight}`}>
                    <label htmlFor="">
                      Trạng thái <span>*</span>
                    </label>
                    <select name="status" value={registerForm.status}>
                      <option value="true">Còn hàng</option>
                      <option value="false">Hết hàng</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={`${styles.formRow} `}>
                <div className={`${styles.formLeft} `}>
                  <label htmlFor="">
                    Thời gian giảm giá <span>*</span>
                  </label>
                  <div className={`${styles.wrapDate}`}>
                    <p
                      style={{
                        fontStyle: `italic  `,
                        marginRight: `20px`,
                        display: `inline`,
                      }}
                    >
                      Thời gian
                    </p>
                    <input
                      type="date"
                     // name="timeCreate"
                      className={`${styles.saleStart}`}
                      // onChange={(e) => setSaleDateStart(e.target.value)}
                      value="25/7/2022"
                     
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.formRow} `}>
              <div className={`${styles.formLeft} `}>
                {/* <div className={`${styles.wrapDate}`}>
                  <p
                    style={{
                      fontStyle: `italic  `,
                      marginRight: `20px`,
                      display: `inline`,
                    }}
                  >
                    Thời gian
                  </p>
                  <input
                    type="date"
                    className={`${styles.saleEnd}`}
                    onChange={(e) => setSaleDateEnd(e.target.value)}
                  />
                </div> */}
              </div>

              <div className={`${styles.formRight} `}>
                <div className={`${styles.buttonSection}`}>
                  <button type="submit" className={`${styles.btnAdd}`}>
                   Cập nhật
                  </button>
                  <button className={`${styles.btnCancel}`}>Huỷ</button>
                </div>
              </div>
            </div>
          </form>
          {warnDate < 0 ? (
            <p style={{ color: `red` }}>
              Ngày kết thúc không được lớn hơn ngày bắt đầu
            </p>
          ) : warnDate === "" ? (
            ""
          ) : (
            <p>
              Số ngày giảm giá{" "}
              <span style={{ color: `red` }}>{warnDate + 1}</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default EditProduct;
