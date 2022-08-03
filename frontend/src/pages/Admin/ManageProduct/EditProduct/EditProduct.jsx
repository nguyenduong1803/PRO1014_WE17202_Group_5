import React, {  useEffect, useState } from "react";
import styles from "../EditProduct/EditProduct.module.css";
import Breadcrumbs from "../../../../components/Admin/BreadCrumb/Breadcrumb";
import Switch from "@mui/material/Switch";
import Header from "../../../../components/Admin/Header/Header";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar"
import {  useSelector } from "react-redux";
import { selectProductById } from "../../../../redux/selector";
function EditProduct() {
  
  
  const product = useSelector(selectProductById)



  const [status, setStatus] = useState(true);
  const [warnDate, setWarnDate] = useState("");
  const [saleDateStart, setSaleDateStart] = useState();
  const [saleDateEnd, setSaleDateEnd] = useState();
  const [img, setImg] = useState("");
  const [imgUrls, setImgUrls] = useState("");

  const [imgs, setImgs] = useState([]);
  const idProduct = window.location.hash.split("#")[1];
  const [registerForm, setRegisterForm] = useState({
    name: product?.name,
    id: product?.id,
    short_desscription: product?.short_desscription,
    price: product?.price,
    discount: 0,
    timeCreate: product?.updatedAt,
    quantity: product?.quantity,
    categories: "Hoa quả",
    comment: [],
    status: product?.status,
    unit: "Kg",
  });

  useEffect( () => {
    // if (saleDateStart && saleDateEnd) {
    //   const start = new Date(saleDateStart);
    //   const end = new Date(saleDateEnd);
    //   setWarnDate((end - start) / (1000 * 3600 * 24));
    // } else {
    //   setWarnDate("");
    // }
    console.log(idProduct)
    console.log(product)
     setRegisterForm({
      name: product?.name,
      id: product?.id,
      short_desscription: product?.short_desscription,
      price: product?.price,
      discount: 0,
      timeCreate: product?.updatedAt,
      quantity: product?.quantity,
      categories: "Hoa quả",
      comment: [],
      status: product?.status,
      unit: "Kg",
    },[])

    return () => {
      img && URL.revokeObjectURL(img);
    };
  }, [saleDateEnd, saleDateStart, img]);

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


  const handleSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("name", registerForm.name);
    formData.append("short_desscription", registerForm.short_desscription);
    formData.append("price", registerForm.price);
    formData.append("discount", registerForm.discount);
    formData.append("quantity", registerForm.quantity);
    formData.append("categories", registerForm.categories);
    formData.append("status", registerForm.status);
    formData.append("unit", registerForm.unit);
    formData.append("timeCreate", registerForm.timeCreate);
    imgs.forEach(img => {
      formData.append("images", img);
    })
    // axios.put("http://localhost:5000/api/products/" + idProduct, formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFhZTI1MzQwOWQ0YThiYjRlMWU1ZTYiLCJpYXQiOjE2NTU3OTkyMjJ9.gpm8o8864y8Y79qwoi5z4jBMIdrl8nvEcOPm44l8CEA",
    //   },
    // })
    //   .then((res) => {
    //     console.log(res.data);
    //     // History.push("/admin/quan-ly-san-pham");
    //   })
    //   .catch((err) => console.log(err));

  };

  return (
    <>
      <Sidebar />
      {window.innerWidth <= 425 && <Header />}
      <div className={`${styles.main}`}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <h2 style={{ fontSize: `30px`, fontWeight: `bold`, color: `#1A358F` }}>
          Sửa sản phẩm
        </h2>
        <div style={!status ? { filter: `brightness(80%)` } : {}}>
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className={`${styles.formRow} `}>
              <div className={`${styles.uploadImg}`}>
                <div className={`${styles.imgsWrapper}`}>
                  {imgUrls ? (
                    imgUrls.map((e, index) => (
                      <img src={e} alt="" key={index} />
                    ))
                  ) : (
                    <>
                      <div>Chưa có ảnh</div>
                      <div>Chưa có ảnh</div>
                      <div>Chưa có ảnh</div>
                    </>
                  )}
                </div>


                <label htmlFor="upLoadImg">
                  <p>Tải ảnh lên</p>

                </label>
                <input
                  id="upLoadImg"
                  type="file"
                  className={`${styles.importImg}`}
                  onChange={() => { }}
                  accept="image/jpeg,image/jpg"
                  multiple
                />

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
                      name="short_desscription"
                      value={registerForm.short_desscription}
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
                    <input type="text" value={registerForm.id} disabled />
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
                <div className={`${styles.formRight} `}>
                  <div className={`${styles.wrapRight}`}>
                    <label htmlFor="">
                      Danh mục <span>*</span>
                    </label>
                    <select name="status" value={registerForm.status}>
                      <option value="true">Còn hàng</option>
                      <option value="false">Hết hàng</option>
                    </select>

                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.formRow} `}>
              <div className={`${styles.formLeft} `}>
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
