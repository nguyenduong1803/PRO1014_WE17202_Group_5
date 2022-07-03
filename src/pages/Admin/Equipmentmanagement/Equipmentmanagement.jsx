import React, { useContext, useEffect, useState } from "react";
import styles from "./Equipmentmanagement.module.css";
import Breadcrumbs from "../../../components/Admin/BreadCrumb/Breadcrumb";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import Table from "rsuite/Table";
import "rsuite-table/dist/css/rsuite-table.css";
import Pagination from "../../../extensions/Pagination/Pagination";
import { Link, NavLink } from "react-router-dom";
import ExportReact from "../../../components/Admin/ExportReact/ExportReact";
import { DataContext } from "../../../contexts/DataContext";
import axios from "axios";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar"
let PageSize = 10;
const Equipmentmanagement = (id) => {
  const { data, setData } = useContext(DataContext);

  console.log(data);
  // const newProduct = data.find((item) => item._id );
  // console.log(newProduct._id);
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
  }, [currentPage, searchValue, sortPosition, sortStatus, data]);

  const [idProduct, setIdProduct] = useState();
  console.log(idProduct);
 

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

  const ImageCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell {...props} style={{ padding: 0 }}>
      <div
        style={{
          width: 40,
          height: 40,
          background: "#f5f5f5",
          borderRadius: 20,
          marginTop: 2,
          overflow: "hidden",
          display: "inline-block",
        }}
      >
        <img src={rowData[dataKey] && Object.values(rowData[dataKey]).join('')} alt="" width="100%" />
      </div>
    </Table.Cell>
  );

  const PositionCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell
      {...props}
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      {rowData[dataKey] === "true" ? (
        <div className={`${styles.on}`}>Còn hàng</div>
      ) : (
        <div className={`${styles.off}`}>Hết hàng</div>
      )}
    </Table.Cell>
  );

  const EditCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell {...props}>
      <div className={styles.Celll}>
        <Link
          to={{
            pathname: `/admin/sua-san-pham`,
            search: `#${rowData[dataKey]}`,
          }}
          className={`${styles.btnEdit} `}
          role="button"
        >
          Sửa
        </Link>
        <button
          className={`${styles.btnDelete}`}
          onClick={() => setIdProduct(rowData[dataKey])}
          role="button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Xóa
        </button>
      </div>
    </Table.Cell>
  );

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
  return (
    <>
    <Sidebar/>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Xóa sản phẩm
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className={`${styles.modelbody} modal-body text-center`}>
              Bạn chắc chắn muốn xóa sản phẩm ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className={styles.ModelBtn}
                data-dismiss="modal"
              >
                Quay lại
              </button>
              <button
                data-dismiss="modal"
                onClick={(e) => handleDeleteProduct(idProduct)}
                type="button"
                className={styles.ModelBtnDelete}
                role="button"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.Equipment}`}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className={`${styles.EquipmentMain} row`}>
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
          <div className={`${styles.Profiletable} mt-4`}>
            <Table
              data={dataSliced.filter((e) =>
                e.name.toLowerCase().includes(searchValue)
              )}
              rowHeight={55}
              height={600}
            >
              <Table.Column width={60} align="center" fixed>
                <Table.HeaderCell className={styles.HeaderCell}>
                  STT
                </Table.HeaderCell>
                <Table.Cell dataKey="id" />
              </Table.Column>

              <Table.Column align="center" width={130} fixed>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Ảnh
                </Table.HeaderCell>

                <ImageCell dataKey="images" />
              </Table.Column>

              <Table.Column align="center" width={250}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Mã sản phẩm
                </Table.HeaderCell>
                <Table.Cell dataKey="_id" />
              </Table.Column>

              <Table.Column align="center" width={200}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Tên sản phẩm
                </Table.HeaderCell>
                <Table.Cell dataKey="name" />
              </Table.Column>
              <Table.Column align="center" width={130}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Số lượng
                </Table.HeaderCell>
                <Table.Cell dataKey="quantity" />
              </Table.Column>
              <Table.Column align="center" width={150}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Mô tả
                </Table.HeaderCell>
                <Table.Cell dataKey="describe" />
              </Table.Column>
              <Table.Column align="center" width={150}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Mã giảm giá
                </Table.HeaderCell>
                <Table.Cell dataKey="discount" />
              </Table.Column>
              <Table.Column align="center" width={150}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Giá sản phẩm
                </Table.HeaderCell>
                <Table.Cell dataKey="price" />
              </Table.Column>
              <Table.Column align="center" width={250}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Thời gian
                </Table.HeaderCell>
                <Table.Cell dataKey="timeCreate" />
              </Table.Column>
              <Table.Column align="center" width={150}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Trạng thái
                </Table.HeaderCell>
                <PositionCell dataKey="status" />
              </Table.Column>
              <Table.Column align="center" width={150} fixed="right">
                <Table.HeaderCell className={styles.HeaderCell}>
                  Quản lý
                </Table.HeaderCell>
                <EditCell dataKey="_id" />
              </Table.Column>
            </Table>
          </div>
          <div className={`${styles.pagination} mt-5 `}>
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
                pageSize={10}
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

export default Equipmentmanagement;
