import React, { useState } from 'react';
import styles from "../AddCategory/AddCategory.module.css";
import Header from "../../../../components/Admin/Header/Header";
import Breadcrumbs from "../../../../components/Admin/BreadCrumb/Breadcrumb";
import Switch from "@mui/material/Switch";
import Loadings from "../../../../components/Site/Loadings/Loadings";

const AddCategory = () => {
    const [status, setStatus] = useState(true);
    const [loading, setLoading] = useState(false);
    const [imgUrls, setImgUrls] = useState("");
    const [imgBase64, setImgBase64] = useState("");
    const breadcrumItem = [
        {
          href: "/",
          title: "Quản lý",
          isActive: false,
        },
        {
          href: "/them-dang-muc",
          title: "Thêm loại danh mục",
          isActive: true,
        },
      ];
  return (
    <>
     {window.innerWidth <= 425 && <Header />}
      <div className={`${styles.main}`}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <h2 style={{ fontSize: `30px`, fontWeight: `bold`, color: `#1A358F` }}>
          Thêm loại danh mục mới
        </h2>
        {loading ? (
          <Loadings style={{display: "flex"}}/>
        ) : (
          <div style={!status ? { filter: `brightness(80%)` } : {}}>
            <form
            //   onSubmit={handleSubmit}
            //   onChange={(e) => onChangeRegisterForm(e)}
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
                      </>
                    )}
                  </div>
                  <label htmlFor="upLoadImg">
                    <p>Tải lên 1 ảnh</p>
                  </label>

                  <input
                    id="upLoadImg"
                    type="file"
                    className={`${styles.importImg}`}
                    // onChange={getImg}
                    accept="image/jpeg,image/jpg"
                    multiple
                  />
                </div>
              </div>
              <div className={`${styles.form}`}>
                <div className={`${styles.formRow} `}>
                  <div className={`${styles.formLeft} `}>
                    <div className={`${styles.wrapLeft}`}>
                      <label htmlFor="">
                        Mã danh mục 
                      </label>
                      <input
                        type="text"
                        name="name"
                        //defaultValue={registerForm.name}
                      />
                    </div>
                  </div>
                  <div className={`${styles.formRight} `}>
                    <div className={`${styles.wrapRight}`}>
                      <label htmlFor="">
                        Tên danh mục 
                      </label>
                      <input
                        type="text"
                        name="describe"
                        //defaultValue={registerForm.describe}
                      />
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
                      Thêm loại danh mục
                    </button>
                    <button className={`${styles.btnCancel}`}>Huỷ</button>
                  </div>
                </div>
              </div>
            </form>
            {/* {warnDate < 0 ? (
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
            )} */}
          </div>
        )}
      </div>
    </>
  )
}

export default AddCategory