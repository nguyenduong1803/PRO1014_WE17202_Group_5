import React, { useContext, useEffect, useState } from "react";
import styles from "./ManageProduct.module.css";
import Breadcrumbs from "../../../components/Admin/BreadCrumb/Breadcrumb";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import Tablecustom from "../../../components/Admin/TableCustom/Tablecustom";
import Pagination from "../../../extensions/Pagination/Pagination";
import { NavLink } from "react-router-dom";
import ExportReact from "../../../components/Admin/ExportReact/ExportReact";
import { DataContext } from "../../../contexts/DataContext";
import axios from "axios";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar"
import ModalDelete from "../../../components/Admin/ModalDelete/ModalDelete"
import { tableProduct } from "../../../config/tables"
import { listPagination } from "../../../config/listConfig"
import SelectMui from "../../../components/Admin/SelectMui/SelectMui";
import InputSearch from "../../../components/Admin/InputSearch/InputSearch";
import ButtonAdd from "../../../components/Admin/ButtonAdd/ButtonAdd";
const ManageProduct = (id) => {
  const { data, setData } = useContext(DataContext);
  const [PageSize, setPageSize] = useState(10)

  const [dataSliced, setdataSliced] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [sortPosition, setSortPosition] = useState("");
  const [sortStatus, setSortStatus] = useState("");

  useEffect(() => {
    if (data) {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      setdataSliced(data.slice(firstPageIndex, lastPageIndex));
    }
    if (searchValue !== "" || sortPosition !== "" || sortStatus !== "") {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      setdataSliced(
        data
          .filter((e) => e.name.toLowerCase().indexOf(searchValue) !== -1)
          // .filter((e) => e.address.indexOf(sortStatus) !== -1)
          // .filter((e) => e.phoneNumber.indexOf(sortPosition) !== -1)
          .slice(firstPageIndex, lastPageIndex)
      );
    }
  }, [currentPage, searchValue, sortPosition, sortStatus, data, PageSize]);

  const [idProduct, setIdProduct] = useState();
  const handleDeleteProduct = (e) => {
    axios
      .delete("http://localhost:5000/api/products/" + e, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFhZTI1MzQwOWQ0YThiYjRlMWU1ZTYiLCJpYXQiOjE2NTU2OTU4NzZ9.fC3rv-pUyNxMEx0K12E-XWsUm8GSTK6RefKGhdFaV8o",
        },
      })
      .then((res) => {

        setData(data.filter((e) => e._id !== idProduct));
      });

  };

  const headers = [
    // { label: / * Nhãn để hiển thị ở đầu CSV * / , khóa: / * Khóa dữ liệu * / }
    { label: "Ảnh sản phẩm", key: "images" },
    { label: "Mã sản phẩm", key: "id" },
    { label: "Tên sản phẩm", key: "name" },
    { label: "Mô tả", key: "describe" },
    { label: "Mã giảm giá", key: "discount" },
    { label: "Số lượng", key: "category" },
    { label: "Gía sản phẩm", key: "price" },
    { label: "Thanh toán", key: "payment" },
    { label: "Trạng thái", key: "status" },
  ];
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
  const list = [{
    name: "meat",
  }, {
    name: "fish",
  }, {
    name: "vegetables"
  }]

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
              <InputSearch setSearchValue={setSearchValue} />
              <SelectMui
                list={list}
                name="Danh mục"
              />
            </div>

          </div>
          <div className={`${styles.rightSide} col-4`}>
            <div className={`${styles.rightSideBtn}`}>
              <ButtonAdd name="Thêm sản phẩm" path="them-san-pham" />
              <ExportReact csvData={data} fileName="Danh sách sản phẩm" />
            </div>
          </div>
        </div>
        <div className={styles.profile}>
          <Tablecustom
            data={dataSliced.filter((e) =>
              e.name.toLowerCase().includes(searchValue)
            )}
            PageSize={PageSize}
            tables={tableProduct}
            setIdProduct={setIdProduct}
          />

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProduct;
