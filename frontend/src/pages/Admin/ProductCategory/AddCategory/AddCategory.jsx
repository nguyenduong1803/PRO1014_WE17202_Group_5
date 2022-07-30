import React, { useState } from 'react';
import styles from "./AddCategory.module.css";
import Header from "../../../../components/Admin/Header/Header";
import Breadcrumbs from "../../../../components/Admin/BreadCrumb/Breadcrumb";
import Loadings from "../../../../components/Site/Loadings/Loadings";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar"
import { api } from '../../../../redux/SliceReducer/AuthSlice';
import axios from 'axios';
import { getToken } from '../../../../utils/Common';
import { useHistory } from 'react-router-dom'

const AddCategory = () => {
    const [status, setStatus] = useState(true);
    const [loading, setLoading] = useState(false);
    const [imgUrls, setImgUrls] = useState("");
    const history = useHistory()

    const breadcrumItem = [
        {
          href: "/",
          title: "Quản lý",
          isActive: false,
        },
        {
          href: "/them-danh-muc",
          title: "Thêm loại danh mục",
          isActive: true,
        },
      ];
    const [nameCategory,setNameCategory]= useState('')
    const handleSubmit = async e => {
      e.preventDefault();
      const res = await axios
       .post(api + "directory/create",
           {
               name: nameCategory,
           },
           {
               headers: { "Authorization": `Bearer ${getToken()}` },
           })
           if(res.data.status){
              alert("Them thanh cong");
              history.push('/admin/quan-ly-danh-muc')
           }
           console.log(res)
    }


  return (
    <>
      <Sidebar />
      {window.innerWidth <= 425 && <Header />}
      <div className={`${styles.main}`}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <h2 style={{ fontSize: `30px`, fontWeight: `bold`, color: `#1A358F` }}>
          Thêm loại danh mục mới
        </h2>
        {loading ? (
          <Loadings style={{ display: "flex" }} />
        ) : (
          <div style={!status ? { filter: `brightness(80%)` } : {}}>
            <form
              onSubmit={e => handleSubmit(e)}
            //   onChange={(e) => onChangeRegisterForm(e)}
            >
              {/* <div className={`${styles.formRow} `}>
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
              </div> */}
              <div className={`${styles.form}`}>
                <div className={`${styles.formRow} `}>
                  {/* <div className={`${styles.formLeft} `}>
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
                  </div> */}
                  <div className={`${styles.formRight} `}>
                    <div className={`${styles.wrapRight}`}>
                      <label htmlFor="">
                        Tên danh mục
                      </label>
                      <input
                        type="text"
                        name="name"
                        onChange={(event, newValue) => {
                          setNameCategory(event.target.value);
                        }}
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
                    <button   type="submit" className={`${styles.btnAdd}`}>
                      Thêm loại danh mục
                    </button>
                    <button className={`${styles.btnCancel}`} path="quan-ly-danh-muc">Huỷ</button>
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