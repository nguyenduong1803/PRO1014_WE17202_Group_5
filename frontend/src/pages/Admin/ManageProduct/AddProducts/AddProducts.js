import React, { useEffect, useState } from "react";
import styles from "./AddProducts.module.css";
import Breadcrumbs from "../../../../components/Admin/BreadCrumb/Breadcrumb";
import Switch from "@mui/material/Switch";
import Header from "../../../../components/Admin/Header/Header";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar"
import { selectCategory } from "../../../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../../redux/SliceReducer/ManagerProductSlice";

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
function AddProducts() {
  const dispatch = useDispatch()
  const [status, setStatus] = useState(true);
  const [imgUrls, setImgUrls] = useState("");
  const [img, setImg] = useState([]);
  const [showWarn, setShowWarn] = useState("")
  const categories = useSelector(selectCategory)
  const [registerForm, setRegisterForm] = useState({
    name: "",
    short_description: "",
    full_description: "",
    price: "",
    // discount: 0,
    // quantity: 0,
    category: categories[0]?.id,
    status: [],
  });
  const onChangeRegisterForm = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };
  function getImg(e) {
    setImg(e.target.files)
    for (let i = 0; i < e.target.files.length; i++) {
      setImgUrls((prev) => [...prev, URL.createObjectURL(e.target.files[i])]);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < img.length; i++) {
      formData.append(`img[${i}]`, img[i])
  }
    formData.append("name", registerForm.name);
    formData.append("short_description", registerForm.short_description);
    formData.append("price", registerForm.price);
    formData.append("id_directory",Number(registerForm.category));
    formData.append("id_code_sale", 1);
    formData.append("is_status_product", status ? 1 : 2);
    formData.append("id_cart", 1);
    formData.append("full_description", registerForm.full_description);
    // formData.append("discount", registerForm.discount);
    // formData.append("quantity", registerForm.quantity);
    formData.append("time_complete", "");
    dispatch(addProduct(formData))
  };

  return (
    <>
      <Sidebar />
      <div className={`modal fade ${showWarn && `show`}`}
        id="exampleModalCenter"
        tabIndex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        style={showWarn ? { display: `block`, paddingRight: `0px` } : {}}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Thông báo</h5>

            </div>
            <div className="modal-body">
              chỉ được chọn 3 ảnh
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setShowWarn(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
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
                      Danh mục <span>*</span>
                    </label>
                    <select name="category" defaultValue={registerForm.category}>
                      {
                        categories && categories.map(cate => (
                          <option key={cate.id} value={cate.id}>{cate.name}</option>
                        ))
                      }
                    </select>
                  </div>


                </div>
              </div>
              <div className={`${styles.formRow} `}>
                <div className={`${styles.formLeft} `}>
                  <div className={`${styles.wrapLeft}`}>
                    <label htmlFor="">
                      Giá gốc <span>*</span>
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
                      Mô tả ngắn <span>*</span>
                    </label>
                    <textarea
                      className={styles.textfull}
                      type="text"
                      name="short_description"
                      defaultValue={registerForm.describe}
                    />
                  </div>
                </div>
                <div className={`${styles.formRight} `}>
                  <div className={`${styles.wrapRight}`}>
                    <label htmlFor="">
                      Mô tả <span>*</span>
                    </label>
                    <textarea
                      className={styles.textfull}
                      type="text"
                      name="full_description"
                      defaultValue={registerForm.full_description}
                    />
                  </div>
                </div>

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
          </form>
        </div>

      </div>
    </>
  );
}

export default AddProducts;
