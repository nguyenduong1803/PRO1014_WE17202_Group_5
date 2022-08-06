import React, { useContext, useState } from "react";
import styles from "../Article/Article.module.css";
import Breadcrumbs from "../../../../components/Admin/BreadCrumb/Breadcrumb";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar"
const AddPostDetail = () => {
  const [img, setImg] = useState("");
  const idBlogs = window.location.hash.split("#")[1];


  const [registerForm, setRegisterForm] = useState({
    author: "",
    category: "",
    comments: [],
    content: "",
    desc: "",
    status: "",
    subTitle: "",
    title: "",
    _id: "62b27f70a4d739979c0c0405",
  });
  const onChangeRegisterForm = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };
  const breadcrumItem = [
    {
      href: "/admin",
      title: "Quản lý",
      isActive: false,
    },
    {
      href: "/admin/quan-ly-bai-viet",
      title: "Quản lý bài viết",
      isActive: false,
    },
    {
      href: "/them-bai-viet",
      title: "Thêm bài viết",
      isActive: true,
    },
  ];

  function getImg(e) {
    const urlImg = URL.createObjectURL(e.target.files[0]);
    setImg(urlImg);
  }
  return (
    <>
    <Sidebar/>
      <div className={styles.Article}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div>
          <div className="mt-2">
            <div className={styles.main}>
              <div className={styles.Arrow}>
                <h2
                  style={{
                    fontSize: `30px`,
                    fontWeight: `bold`,
                    color: `#1A358F`,
                  }}
                >
                  <ArrowBackIcon /> Sửa bài viết mới
                </h2>
              </div>
              <div className={`${styles.formRow}`}></div>
            </div>
            <form
              // onSubmit={handleSubmit}
              onChange={(e) => onChangeRegisterForm(e)}
              encType="multipart/form-data"
            >
              <div className={`${styles.from} row gx-5`}>
                <div className={`${styles.formRow}`}>
                  <div className={`${styles.uploadImg}`}>
                    <div className={`${styles.imgWrapper}`}>
                      {img && <img src={img} alt="img" />}
                      <input
                        id="upLoadImg"
                        type="file"
                        className={`${styles.importImg}`}
                        onChange={getImg}
                        accept="image/png, image/png, image/jpeg"
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
                      </label>
                    </div>

                    <p style={{ marginLeft: `31px`, color: `#1A358F` }}>
                      Ảnh sản phẩm
                    </p>
                  </div>

                  
                </div>
                <div className="col-6">
                    <div className="mb-3 mt-3">
                      <label htmlFor="phone" className={styles.formlabel}>
                        Chủ đề
                      </label>
                      <input
                        type="text"
                        name="subTitle"
                        value={registerForm.subTitle}
                        className={styles.formcontrol}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="title" className={styles.formlabel}>
                        Tiêu đề
                      </label>
                      <input
                        htmlFor="title"
                        type="text"
                        name="title"
                        value={registerForm.title}
                        className={styles.formcontrol}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className={styles.formlabel}>
                        Tác giả
                      </label>
                      <input
                      htmlFor=""
                        type="text"
                        name="author"
                        value={registerForm.author}
                        className={styles.formcontrol}
                      />
                    </div>
                  </div>
                <div className="col-6 mt-3">
                  <div className="mb-3">
                    <label htmlFor="" className={styles.formlabel}>
                      Nội dung
                    </label>
                    <textarea
                    htmlFor=""
                      type="text"
                      name="content"
                      value={registerForm.content}
                      className={styles.formcontrol}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Email" className={styles.formlabel}>
                      Thể loại
                    </label>
                    <input
                      type="text"
                      name="category"
                      value={registerForm.category}
                      className={styles.formcontrol}
                    />
                  </div>
                </div>
                <div className={styles.profile}>
                  <div className="row">
                    <div className="col-6">
                      {/* <button className={styles.ProfiLRBtn}>Xóa tài khoản</button> */}
                    </div>
                    <div className="col-6">
                      <div className={styles.right}>
                        <button type="submit" className={styles.ProfiLRBtn1}>
                          Cập nhật
                        </button>
                        <button className={styles.ProfiLRBtn2}>Đóng</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPostDetail;
