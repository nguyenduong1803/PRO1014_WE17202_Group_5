import React, { useContext, useEffect, useState } from "react";
import styles from "./ManageMasterial.module.css";
import Breadcrumbs from "../../../components/Admin/BreadCrumb/Breadcrumb";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import Tablecustom from "../../../components/Admin/TableCustom/Tablecustom";
import "rsuite-table/dist/css/rsuite-table.css";
import Pagination from "../../../extensions/Pagination/Pagination";
import { NavLink } from "react-router-dom";
import ExportReact from "../../../components/Admin/ExportReact/ExportReact";
import { DataContext } from "../../../contexts/DataContext";
import axios from "axios";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar"
import SelectPagination from "../../../components/Admin/SelectPagination/SelectPagination"
import ModalDelete from "../../../components/Admin/ModalDelete/ModalDelete"
const ManageMasterial = (id) => {
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
  const tables = [
    {
      name: "STT",
      width: 60,
      dataKey: "id",
      isFixed: true,
      type: "cell"
    },
    {
      name: "Ảnh",
      width: 130,
      dataKey: "images",
      isFixed: true,
      type: "img"
    },
    {
      name: "Mã sản phẩm",
      width: 250,
      dataKey: "_id",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Tên sản phẩm",
      width: 200,
      dataKey: "name",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Số lượng",
      width: 130,
      dataKey: "quantity",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Mô tả",
      width: 150,
      dataKey: "describe",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Mã giảm giá",
      width: 150,
      dataKey: "discount",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Giá sản phẩm",
      width: 150,
      dataKey: "price",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Thời gian tạo",
      width: 250,
      dataKey: "timeCreate",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Trạng thái",
      width: 150,
      dataKey: "status",
      isFixed: false,
      type: "status"
    },
    {
      name: "Quản lý",
      width: 150,
      dataKey: "_id",
      isFixed: "right",
      type: "edit"
    },

  ]
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
            <div className={`${styles.search}`}>
              <input
                type="text"
                placeholder="Tìm kiếm "
                onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
              />
              <div className={`${styles.searchIcon}`}>
                <SearchIcon />
              </div>
            </div>
          </div>
          <div className={`${styles.rightSide} col-4`}>
            <div className={`${styles.rightSideBtn}`}>
              <NavLink to={`them-san-pham`}>
                <button
                  style={{
                    backgroundColor: "#1a358f",
                    color: "#fff",
                    height: "38px",
                  }}
                >
                  <AddIcon />
                  Thêm sản phẩm
                </button>
              </NavLink>
              <ExportReact csvData={data} fileName="Danh sách sản phẩm" />
            </div>
          </div>
        </div>
        <div className={styles.profile}>
          <Tablecustom
            data={dataSliced.filter((e) =>
              e.name.toLowerCase().includes(searchValue)
            )}
            tables={tables}
            setIdProduct={setIdProduct}
          />
          <SelectPagination setPageSize={setPageSize} />
          <div className={`${styles.pagination} `}>
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
    </>
  );
};

export default ManageMasterial;
