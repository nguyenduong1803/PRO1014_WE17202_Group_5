import React, { useContext, useEffect, useState } from "react";
import styles from "./ManageProduct.module.css";
import Breadcrumbs from "../../../components/Admin/BreadCrumb/Breadcrumb";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tablecustom from "../../../components/Admin/TableCustom/Tablecustom";
import ExportReact from "../../../components/Admin/ExportReact/ExportReact";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar"
import ModalDelete from "../../../components/Admin/ModalDelete/ModalDelete"
import { tableProduct } from "../../../config/tables"
import { listPagination } from "../../../config/listConfig"
import SelectMui from "../../../components/Admin/SelectMui/SelectMui";
import InputSearch from "../../../components/Admin/InputSearch/InputSearch";
import ButtonAdd from "../../../components/Admin/ButtonAdd/ButtonAdd";
import { selectCategory, selectLoadingProduct, selectProducts } from "../../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Site/Loading/Loading";
import { deleteProductById, getProducts } from "../../../redux/SliceReducer/ManagerProductSlice";
import PaginationMui from "../../../components/Admin/PaginationMui/PaginationMui";
import useDebounce from "../../../hooks/useDebounce";

const ManageProduct = (id) => {
  const dispatch = useDispatch()
  const listProduct = useSelector(selectProducts)
  const loadingProduct = useSelector(selectLoadingProduct)
  const [PageSize, setPageSize] = useState(10)

  const [idProduct, setIdProduct] = useState();
  const handleDeleteProduct = (e) => {
    console.log(idProduct)
    dispatch(deleteProductById(idProduct))
  };
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
const handleChangePage =(value)=>{
  console.log(value)
}

const listCategory = useSelector(selectCategory)

const [keySearch, setKeySearch] = React.useState("");
const debounce = useDebounce(keySearch, 500)


const handleSearch = (e) => {
  setKeySearch(e);
}
React.useEffect(() => {
  dispatch(getProducts({ keySearch: debounce, limit: 30 }))
}, [debounce])
  return (
    <>
      <Sidebar />
      <ModalDelete
        idProduct={idProduct}
        handleDeleteProduct={handleDeleteProduct}
      />
      <div className={`${styles.Equipment}`}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className={`${styles.EquipmentMain} d-flex`}>
          <div className={`${styles.leftSide} col-8`}>
            <p className={`${styles.title}`}>
              <ArrowBackIcon />
              Danh sách sản phẩm
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <InputSearch setSearchValue={handleSearch} />
              <SelectMui
                list={listCategory}
                name="Danh mục"
              />
            </div>
          </div>
          <div className={`${styles.rightSide} col-4`}>
            <div className={`${styles.rightSideBtn}`}>
              <ButtonAdd name="Thêm sản phẩm" path="them-san-pham" />
              <ExportReact csvData={listProduct||[]} fileName="Danh sách sản phẩm" />
            </div>
          </div>
        </div>
        <div className={styles.profile}>
          {loadingProduct === "loading" ? <Loading /> :
            <Tablecustom
              data={listProduct ||[]}
              PageSize={PageSize}
              tables={tableProduct}
              setIdProduct={setIdProduct}
            />
          }
          <div className={`${styles.pagination} justify-content-between`}>
            <SelectMui
              list={listPagination}
              name="Số bản ghi"
              setPageSize={setPageSize}
            />
            <div className="d-flex align-items-center">
              <span style={{ marginRight: `25px` }}>
                có{" "}
                <span style={{ fontWeight: `bold`, color: `#1A358F` }}>
                  {listProduct && listProduct.length}
                </span>{" "}
                bản ghi
              </span>
              <PaginationMui 
               count={10}
               onPageChange={value=>handleChangePage(value)}
              />
              {/* {searchValue === "" ? (
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
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProduct;
