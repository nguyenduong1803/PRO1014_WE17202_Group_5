import React, { useContext, useEffect, useState } from "react";
import styles from "./ManagePosts.module.css";
import Breadcrumbs from "../../../components/Admin/BreadCrumb/Breadcrumb";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";

import ExportReact from "../../../components/Admin/ExportReact/ExportReact";
import Pagination from "../../../extensions/Pagination/Pagination";
import axios from "axios";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar"
import ModalDelete from "../../../components/Admin/ModalDelete/ModalDelete"
import { tablePost } from "../../../config/tables"
import Tablecustom from "../../../components/Admin/TableCustom/Tablecustom"
import InputSearch from "../../../components/Admin/InputSearch/InputSearch";
let PageSize = 10;
const ManagePosts = () => {
  let history = useHistory();

  const [dataSliced, setdataSliced] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [sortPosition, setSortPosition] = useState("");
  const [sortStatus, setSortStatus] = useState("");

 
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


  
  const [isBlog, setIsBlog] = useState();
  return (
    <>
      <Sidebar />
      <ModalDelete
        // handleDeleteProduct={handleDeleteProduct}
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
              {/* <ExportReact csvData={blogs} /> */}
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
           
         
          </div>
        </div>
      </div>

    </>
  );
};

export default ManagePosts;
