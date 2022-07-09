import React, { useContext, useEffect, useState } from "react";
import styles from "./ManagePosts.module.css";
import Breadcrumbs from "../../../components/Admin/BreadCrumb/Breadcrumb";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";

import ExportReact from "../../../components/Admin/ExportReact/ExportReact";
import Pagination from "../../../extensions/Pagination/Pagination";
import { BlogContext } from "../../../contexts/BlogContext";
import axios from "axios";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar"
import ModalDelete from "../../../components/Admin/ModalDelete/ModalDelete"
import { tablePost } from "../../../config/tables"
import Tablecustom from "../../../components/Admin/TableCustom/Tablecustom"
import InputSearch from "../../../components/Admin/InputSearch/InputSearch";
let PageSize = 10;
const ManagePosts = () => {
  let history = useHistory();
  const { blogs } = useContext(BlogContext);
  console.log(blogs);
  const [dataSliced, setdataSliced] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [sortPosition, setSortPosition] = useState("");
  const [sortStatus, setSortStatus] = useState("");

  useEffect(() => {
    if (blogs) {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      setdataSliced(blogs.slice(firstPageIndex, lastPageIndex));
    }
    if (searchValue !== "" || sortPosition !== "" || sortStatus !== "") {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      setdataSliced(
        blogs
          .filter((e) => e?.title.toLowerCase().indexOf(searchValue) !== -1)
          // .filter((e) => e.topic.indexOf(sortStatus) !== -1)
          // .filter((e) => e.date.indexOf(sortPosition) !== -1)
          .slice(firstPageIndex, lastPageIndex)
      );
    }
  }, [history, currentPage, searchValue, sortPosition, sortStatus, blogs]);
  const breadcrumItem = [
    {
      href: "/",
      title: "Quản lý",
      isActive: false,
    },
    {
      href: "/quan-ly-bai-viet",
      title: "Quản lý bài viết",
      isActive: true,
    },
  ];

  const handleDeleteProduct = (e) => {
    axios
      .delete("http://localhost:5000/api/blogs/" + e, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFhZGI4YWU2MjE1NGNhNWM1NGJjYTEiLCJpYXQiOjE2NTUzNjUwNjh9.uSL4SGxTjG7i22Y7xIhTXrrETXq3Gfhob4fKcQbkoDA",
        },
      })
      .then((res) => {
        console.log(res.data.success);
        window.location.href = '/admin/quan-ly-bai-viet';
      })
      .catch((err) => console.log(err));
  };

  
  const [isBlog, setIsBlog] = useState();
  return (
    <>
      <Sidebar />
      <ModalDelete
        handleDeleteProduct={handleDeleteProduct}
        idProduct={isBlog}
      />
      <div className={styles.ManagePosts}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className={`${styles.ManageMain} row`}>
          <div className={`${styles.leftSide} col-8`}>
            <p className={`${styles.title}`}>
              <ArrowBackIcon />
              Quản lý bài viết
            </p>
            <InputSearch setSearchValue={setSearchValue}/>

          </div>
          <div className={`${styles.rightSide} col-4`}>
            <div className={`${styles.rightSideBtn}`}>
              <Link to="/admin/them-bai-viet">
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#1a358f",
                    color: "#fff",
                    height: "38px",
                    textDecoration: `none`,
                  }}
                >
                  <AddIcon />
                  Thêm bài viết
                </button>
              </Link>
              <ExportReact csvData={blogs} />
            </div>
          </div>
        </div>
        <div className={styles.ManagePro}>
          <Tablecustom
          path="thong-tin-bai-viet"
           data={dataSliced.filter((e) =>
            e?.title.toLowerCase().includes(searchValue)
          )}
            // data={dataSliced && dataSliced.filter((e) =>
            //   e?.title.toLowerCase().includes(searchValue)
            // )}
            tables={tablePost}
            setIdProduct={setIsBlog}

          />
          <div className={`${styles.pagination} `}>
            <span style={{ marginRight: `25px` }}>
              có{" "}
              <span style={{ fontWeight: `bold`, color: `#1A358F` }}>
                {searchValue === "" && sortPosition === "" && sortStatus === ""
                  ? blogs.length
                  : blogs.filter(
                    (e) => e.name.toLowerCase().indexOf(searchValue) !== -1
                  ).length}
              </span>{" "}
              bản ghi
            </span>
            {searchValue === "" && sortPosition === "" && sortStatus === "" ? (
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={blogs && blogs.length}
                pageSize={10}
                onPageChange={(page) => setCurrentPage(page)}
              />
            ) : (
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={
                  blogs &&
                  blogs.filter(
                    (e) => e.name.toLowerCase().indexOf(searchValue) !== -1
                  ).length
                }
                pageSize={10}
                onPageChange={(page) => setCurrentPage(page)}
              />
            )}
          </div>
        </div>
      </div>

    </>
  );
};

export default ManagePosts;
