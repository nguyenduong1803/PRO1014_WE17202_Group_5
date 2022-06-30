import React, { useEffect, useState } from "react";
import styles from "./AddProducts.module.css";
import Breadcrumbs from "../../../components/Admin/BreadCrumb/Breadcrumb";
import axios from "axios";
import Switch from "@mui/material/Switch";
import Header from "../../../components/Admin/Header/Header";
import { useHistory } from "react-router-dom";

function AddProducts() {
  const history = useHistory();
  const [status, setStatus] = useState(true);
  const [warnDate, setWarnDate] = useState("");
  const [saleDateStart, setSaleDateStart] = useState();
  const [saleDateEnd, setSaleDateEnd] = useState();
  const [imgUrls, setImgUrls] = useState("");
  const [imgBase64, setImgBase64] = useState("");

  const [registerForm, setRegisterForm] = useState({
    name: "",
    describe: "",
    price: "",
    discount: 0,
    quantity: 0,
    categories: "Hoa quả",
    comment: [],
    status: [],
    unit: "Kg",
    timeDiscount: [{ start: "", end: "" }],
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


  const breadcrumItem = [
    {
      href: "/",
      title: "Quản lý",
      isActive: false,
    },
    {
      href: "/quan-ly-san-pham",
      title: "Quản lý sản phẩm",
      isActive: true,
    },
  ];

  const onChangeRegisterForm = (event) => {

    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };


  function getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      return cb(reader.result);
    };
  }

  function getImg(e) {
    for (let i = 0; i < e.target.files.length; i++) {
      setImgUrls((prev) => [...prev, URL.createObjectURL(e.target.files[i])]);

      getBase64(e.target.files[i], (result) => {
        setImgBase64((prev) => [...prev, result]);
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", registerForm.name);
    formData.append("describe", registerForm.describe);
    formData.append("price", registerForm.price);
    formData.append("discount", registerForm.discount);
    formData.append("quantity", registerForm.quantity);
    formData.append("categories", registerForm.categories);
    for (var i = 0; i < imgBase64.length; i++) {
      formData.append("images", imgBase64[i]);
    }
    formData.append("status", registerForm.status);
    formData.append("unit", registerForm.unit);

    axios
      .post("http://localhost:5000/api/products", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFhZTI1MzQwOWQ0YThiYjRlMWU1ZTYiLCJpYXQiOjE2NTU0MzkzMTl9.bT6VXoBJW-paxKB_CUjsLfi3scyjk5dvuvEb7uTnu-s",
        },
      })
      .then((res) => {
        console.log(res.data);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {window.innerWidth <= 425 && <Header />}
      <div className={`${styles.main}`}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <h2 style={{ fontSize: `30px`, fontWeight: `bold`, color: `#1A358F` }}>
          Thêm sản phẩm mới
        </h2>
        <div style={!status ? { filter: `brightness(80%)` } : {}}>
          <form
            onSubmit={handleSubmit}
            onChange={(e) => onChangeRegisterForm(e)}
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
                  <p>Tải lên 3 ảnh</p>
                </label>

                <input
                  id="upLoadImg"
                  type="file"
                  className={`${styles.importImg}`}
                  onChange={getImg}
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
                    <input
                      type="text"
                      name="name"
                      defaultValue={registerForm.name}
                    />
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
                      defaultValue={registerForm.describe}
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
                      defaultValue={registerForm.price}
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
                      defaultValue={registerForm.discount}
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
                      defaultValue={registerForm.quantity}
                    />
                  </div>
                </div>
                <div className={`${styles.formRight} `}>
                  <div className={`${styles.wrapRight}`}>
                    <label htmlFor="">
                      Đơn vị <span>*</span>
                    </label>
                    <select name="unit" defaultValue={registerForm.unit}>
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
                      Nhãn <span>*</span>
                    </label>
                    <input type="text" />
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
                      Bắt đầu
                    </p>
                    <input
                      type="date"
                      className={`${styles.saleStart}`}
                      onChange={(e) => setSaleDateStart(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.formRow} `}>
              <div className={`${styles.formLeft} `}>
                <div className={`${styles.wrapDate}`}>
                  <p
                    style={{
                      fontStyle: `italic  `,
                      marginRight: `20px`,
                      display: `inline`,
                    }}
                  >
                    Kết thúc
                  </p>
                  <input
                    type="date"
                    className={`${styles.saleEnd}`}
                    onChange={(e) => setSaleDateEnd(e.target.value)}
                  />
                </div>
              </div>

              <div className={`${styles.formRight} `}>
                <div className={`${styles.buttonSection}`}>
                  <button type="submit" className={`${styles.btnAdd}`}>
                    Thêm tài sản
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

export default AddProducts;
