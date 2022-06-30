import React, { useContext, useEffect, useState } from "react";
import styles from "./ManagePosts.module.css";
import Breadcrumbs from "../../../components/Admin/BreadCrumb/Breadcrumb";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import Table from "rsuite/Table";
import "rsuite-table/dist/css/rsuite-table.css";
import ExportReact from "../../../components/Admin/ExportReact/ExportReact";
import Pagination from "../../../extensions/Pagination/Pagination";
import { BlogContext } from "../../../contexts/BlogContext";
import axios from "axios";

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

  const CommentCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell {...props} style={{ padding: 0 }}>
      <div>{rowData[dataKey].length}</div>
    </Table.Cell>
  );
  const [isBlog, setIsBlog] = useState();
  console.log(isBlog);
  const EditCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell {...props}>
      <div className={styles.Celll}>
        <Link
          to={{
            pathname: `/admin/thong-tin-bai-viet`,
            search: `#${rowData[dataKey]}`,
          }}
          className={`${styles.btnEdit} `}
          role="button"
        >
          Xem chi tiết
        </Link>
        <button
          className={`${styles.btnDelete}`}
          onClick={() => setIsBlog(rowData[dataKey])}
          role="button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Xóa
        </button>
      </div>
    </Table.Cell>
  );
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
              Bạn chắc chắn muốn xóa bài viết này không ?
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
                onClick={() => handleDeleteProduct(isBlog)}
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
      <div className={styles.ManagePosts}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className={`${styles.ManageMain} row`}>
          <div className={`${styles.leftSide} col-8`}>
            <p className={`${styles.title}`}>
              <ArrowBackIcon />
              Quản lý bài viết
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
          <div className={styles.ManageTable}>
            <Table
              data={dataSliced.filter((e) =>
                e?.title.toLowerCase().includes(searchValue)
              )}
              rowHeight={55}
              height={590}
            >
              <Table.Column width={60} align="center" fixed>
                <Table.HeaderCell className={styles.HeaderCell}>
                  STT
                </Table.HeaderCell>
                <Table.Cell dataKey="id" />
              </Table.Column>
              <Table.Column align="center" width={190}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Tiêu đề
                </Table.HeaderCell>
                <Table.Cell dataKey="title" />
              </Table.Column>
              <Table.Column align="center" width={190}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Chủ đề
                </Table.HeaderCell>
                <Table.Cell dataKey="subTitle" />
              </Table.Column>

              <Table.Column width={450}>
                <Table.HeaderCell align="center" className={styles.HeaderCell}>
                  Nội dung
                </Table.HeaderCell>
                <Table.Cell dataKey="content" />
              </Table.Column>

              <Table.Column align="center" width={190}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Tác giả
                </Table.HeaderCell>
                <Table.Cell dataKey="author" />
              </Table.Column>

              <Table.Column align="center" width={190}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Thể loại
                </Table.HeaderCell>
                <Table.Cell dataKey="category" />
              </Table.Column>

              <Table.Column align="center" width={150}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Bình luận
                </Table.HeaderCell>
                <CommentCell dataKey="comments" />
              </Table.Column>

              <Table.Column align="center" width={210} fixed="right">
                <Table.HeaderCell className={styles.HeaderCell}>
                  Quản lý
                </Table.HeaderCell>
                <EditCell dataKey="_id" />
              </Table.Column>
            </Table>
          </div>
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
