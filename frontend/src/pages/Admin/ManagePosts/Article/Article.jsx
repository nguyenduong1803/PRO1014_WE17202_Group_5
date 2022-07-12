import React, { useContext, useState } from "react";
import styles from "../Article/Article.module.css";
import Breadcrumbs from "../../../../components/Admin/BreadCrumb/Breadcrumb";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BlogContext } from "../../../../contexts/BlogContext";
import axios from "axios";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar"
const Article = () => {
  const [img, setImg] = useState("");
  const [status, setStatus] = useState(true);
  const { blogs } = useContext(BlogContext);
  const idBlogs = window.location.hash.split("#")[1];
  const BlogDetail = blogs.find((e) => e?._id === idBlogs);
  console.log(BlogDetail);

  const [registerForm, setRegisterForm] = useState({
    author: BlogDetail?.author,
    category: BlogDetail?.category,
    comments: [],
    content: BlogDetail?.content,
    desc: BlogDetail?.desc,
    status:  BlogDetail?.status,
    subTitle: BlogDetail?.subTitle,
    title: BlogDetail?.title,
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
      href: "/quan-ly-bai-viet",
      title: "Sửa bài viết",
      isActive: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("subTitle", registerForm.subTitle);
    formData.append("author", registerForm.author);
    formData.append("category", registerForm.category);
    formData.append("content", registerForm.content);
    formData.append("title", registerForm.title);

    axios.put("http://localhost:5000/api/blogs/" + idBlogs,formData, {
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
            onSubmit={handleSubmit}
            onChange={(e) => onChangeRegisterForm(e)}
            encType="multipart/form-data"
            >
            <div className={`${styles.from} row gx-5`}>
              <div className={`${styles.formRow} col-6`}>
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
                  <label htmlFor="User" className={styles.formlabel}>
                    Tiêu đề
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={registerForm.title}
                    className={styles.formcontrol}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="UserName" className={styles.formlabel}>
                    Tác giả
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={registerForm.author}
                    className={styles.formcontrol}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="Email" className={styles.formlabel}>
                    Nội dung
                  </label>
                  <textarea
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
              <div className="col-6">
                <div className={styles.Describe}>
                  {/* <h2>Mô tả chi tiết đơn hàng</h2> */}
                  <div className={styles.DescribText}>
                    <div
                      className={`${styles.blogRow} row d-flex border-bottom`}
                    >
                      <div className={`${styles.DescribeOder} col-md-6 `}>
                        <ul>
                          <li>
                            Mã bài viết: <p>ffff</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={`${styles.blogDetail} p-4`}>
                      <div className={styles.DescribeImg}>
                        <img src="" alt="" />
                      </div>
                      <div className={`${styles.blogNamm}`}>
                        <ul>
                          <li>
                            Nội dung:
                            <p>
                              Vivamus in felis eu sapien cursus vestibulum.
                              Proin eu mi. Nulla ac enim. In tempor, turpis nec
                              {" "}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.profile}>
                <div className="row">
                  <div className="col-6">
                    {/* <button className={styles.ProfiLRBtn}>Xóa tài khoản</button> */}
                  </div>
                  <div className="col-6">
                    <div className={styles.right}>
                      <button
                      type="submit"
                        className={styles.ProfiLRBtn1}
                      >
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

export default Article;
