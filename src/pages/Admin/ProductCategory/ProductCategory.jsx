import React from "react";
import styles from "../ProductCategory/ProductCategory.module.css"
import Table from "rsuite/Table";
import { Link, NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import Breadcrumbs from "../../../components/Admin/BreadCrumb/Breadcrumb";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExportReact from "../../../components/Admin/ExportReact/ExportReact";

const ProductCategory = () => {

    const EditCell = ({ rowData, dataKey, ...props }) => (
        <Table.Cell {...props}>
          <div className={styles.Celll}>
            <Link
              to={{
                // pathname: `/admin/sua-san-pham`,
                // search: `#${rowData[dataKey]}`,
              }}
              className={`${styles.btnEdit} `}
              role="button"
            >
              Sửa
            </Link>
            <button
              className={`${styles.btnDelete}`}
            //   onClick={() => setIdProduct(rowData[dataKey])}
              role="button"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Xóa
            </button>
          </div>
        </Table.Cell>
      );

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
  return (
    <>
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
                // onClick={(e) => handleDeleteProduct(idProduct)}
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
              Danh sách phân loại danh mục
            </p>
            <div className={`${styles.search}`}>
              <input
                type="text"
                placeholder="Tìm kiếm "
                // onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
              />
              <div className={`${styles.searchIcon}`}>
                <SearchIcon />
              </div>
            </div>
          </div>
          <div className={`${styles.rightSide} col-4`}>
            <div className={`${styles.rightSideBtn}`}>
              <NavLink to={`them-dang-muc`}>
                <button
                  style={{
                    backgroundColor: "#1a358f",
                    color: "#fff",
                    height: "38px",
                  }}
                >
                  <AddIcon />
                  Thêm danh mục
                </button>
              </NavLink>
              {/* <ExportReact csvData={data} fileName="Danh sách danh mục" /> */}
            </div>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={`${styles.Profiletable} mt-4`}>
            <Table
            //   data={dataSliced.filter((e) =>
            //     e.name.toLowerCase().includes(searchValue)
            //   )}
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
                  Mã danh mục
                </Table.HeaderCell>
                <Table.Cell dataKey="_id" />
              </Table.Column> 

              <Table.Column align="center" width={250}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Tên danh mục
                </Table.HeaderCell>
                <Table.Cell dataKey="_id" />
              </Table.Column> 
              <Table.Column align="center" width={250}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Loại danh mục
                </Table.HeaderCell>
                <Table.Cell dataKey="_id" />
              </Table.Column>                    
              <Table.Column align="center" width={150} fixed="right">
                <Table.HeaderCell className={styles.HeaderCell}>
                  Quản lý
                </Table.HeaderCell>
                <EditCell  />
              </Table.Column>
            </Table>
          </div>
          {/* <div className={`${styles.pagination} mt-5 `}>
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
