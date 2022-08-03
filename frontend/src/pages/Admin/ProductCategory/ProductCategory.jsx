import React, { useEffect, useState } from "react";
import styles from "../ProductCategory/ProductCategory.module.css";
import Breadcrumbs from "../../../components/Admin/BreadCrumb/Breadcrumb";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ModalDelete from "../../../components/Admin/ModalDelete/ModalDelete";
import { categoryTable } from "../../../config/tables";
import SelectMui from "../../../components/Admin/SelectMui/SelectMui";
import { listPagination } from "../../../config/listConfig";
import Tablecustom from "../../../components/Admin/TableCustom/Tablecustom";
import InputSearch from "../../../components/Admin/InputSearch/InputSearch";
import ButtonAdd from "../../../components/Admin/ButtonAdd/ButtonAdd";
import { selectCategory } from "../../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategoryById } from "../../../redux/SliceReducer/CategorySlice";
import { api } from '../../../redux/SliceReducer/AuthSlice';
import axios from 'axios';
import { getToken } from '../../../utils/Common';
import { useHistory } from 'react-router-dom'
const ProductCategory = () => {
  const [idProduct, setIdProduct]= React.useState("");
  const categories = useSelector(selectCategory)
  const dispatch = useDispatch()
  const breadcrumItem = [
    {
      href: "/",
      title: "Quản lý",
      isActive: false,
    },
    {
      href: "/phan-loai-danh-muc",
      title: "Quản lý phân loại danh mục",
      isActive: true,
    },
  ];

  const handleDeleteProduct = (idCate) => {
    console.log("delete");
    console.log(idCate)
    dispatch(deleteCategoryById(idCate))
  };
 
  return (
    <>
      <Sidebar />
      <ModalDelete
        idProduct={idProduct}
        handleDeleteProduct={handleDeleteProduct}
      />

      <div className={`${styles.Equipment}`}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className={`${styles.EquipmentMain} row`}>
          <div className={`${styles.leftSide} col-8`}>
            <p className={`${styles.title}`}>
              <ArrowBackIcon />
              Danh sách phân loại danh mục
            </p>
            <InputSearch setSearchValue={() => { }} />

          </div>
          <div className={`${styles.rightSide} col-4`}>
            <div className={`${styles.rightSideBtn}`}>
              <ButtonAdd name="Thêm danh mục" path="them-danh-muc" />
              {/* <ExportReact csvData={data} fileName="Danh sách danh mục" /> */}
            </div>
          </div>
        </div>
        <div className={styles.profile}>
          <Tablecustom
            data={categories}
            PageSize={10}
            tables={categoryTable}
            setIdProduct={setIdProduct}
            path="sua-danh-muc/"
          />

          <div className={`${styles.pagination} justify-content-between`}>
            <SelectMui
              list={listPagination}
              name="Số bản ghi"
            // setPageSize={setPageSize}
            />
            {/* <div className="d-flex align-items-center">
              <span style={{ marginRight: `25px` }}>
                có{" "}
                <span style={{ fontWeight: `bold`, color: `#1A358F` }}>
                  {searchValue === ""
                    ? data.length
                    : data.filter(
                      (e) => e.name.toLowerCase().indexOf(searchValue) !== -1
                    ).length}
                </span>{" "}
                bản ghi
              </span>

              {searchValue === "" ? (
                <Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={data && data.length}
                  pageSize={PageSize}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              ) : (
                <Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={
                    data &&
                    data.filter(
                      (e) => e.name.toLowerCase().indexOf(searchValue) !== -1
                    ).length
                  }
                  pageSize={PageSize}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              )}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
