import React, { useEffect, useState, useContext } from "react";
import styles from "../OrderManager/OrderManager.module.css";
import Breadcrumbs from "../../../components/Admin/BreadCrumb/Breadcrumb";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Table from "rsuite/Table";
import "rsuite-table/dist/css/rsuite-table.css";
import ExportReact from "../../../components/Admin/ExportReact/ExportReact";
import Pagination from "../../../extensions/Pagination/Pagination";
import { OrderContext } from "../../../contexts/OrderContext";

let PageSize = 10;

const OrderManager = () => {

  const { orders } = useContext(OrderContext);
  const [dataSliced, setdataSliced] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [sortPosition, setSortPosition] = useState("");
  const [sortStatus, setSortStatus] = useState("");


  useEffect(() => {
    if (orders) {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      setdataSliced(orders.slice(firstPageIndex, lastPageIndex));
    }
    if (searchValue !== "" || sortPosition !== "" || sortStatus !== "") {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      setdataSliced(
        orders
          .filter((e) => e.name.toLowerCase().indexOf(searchValue) !== -1)
          .filter((e) => e.address.indexOf(sortStatus) !== -1)
          .filter((e) => e.phoneNumber.indexOf(sortPosition) !== -1)
          .slice(firstPageIndex, lastPageIndex)
      );
    }
  }, [currentPage, searchValue, sortPosition, sortStatus]);
  const breadcrumItem = [
    {
      href: "/",
      title: "Quản lý",
      isActive: false,
    },
    {
      href: "/admin/quan-ly-don-hang",
      title: "Quản lý đơn hàng",
      isActive: true,
    },
  ];

  const PositionCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell
      {...props}
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      {rowData[dataKey] === true ? (
        <div className={`${styles.on}`}>Giao hàng thành công</div>
      ) : (
        <div className={`${styles.off}`}>Chưa giao hàng</div>
      )}
    </Table.Cell>
  );

  const ItemsCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell
      {...props}
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      {rowData[dataKey].length}
    </Table.Cell>
  );

  const EditCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell {...props}>
      <div className={styles.Celll}>
        <Link
          to={{
            pathname: `/admin/chi-tiet-don-hang`,
            search: `#${rowData[dataKey]}`,
          }}
          className={`${styles.btnEdit} `}
          role="button"
        >
          {" "}
          Chi tiết
        </Link>
      </div>
    </Table.Cell>
  );
  return (
    <>
      <div className={styles.Account}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className={`${styles.AccountMain} row`}>
          <div className={`${styles.leftSide} col-8`}>
            <p className={`${styles.title}`}>Quản lý đơn hàng</p>
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
              <ExportReact csvData={orders} />
            </div>
          </div>
        </div>
        <div className={styles.AccountPro}>
          <div className={styles.ManageTable}>
            <Table
              data={dataSliced.filter((e) =>
                e.name.toLowerCase().includes(searchValue)
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
              <Table.Column width={150} align="center" fixed>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Mã đơn hàng
                </Table.HeaderCell>
                <Table.Cell dataKey="id" />
              </Table.Column>
              <Table.Column align="center" width={180}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Tên
                </Table.HeaderCell>
                <Table.Cell dataKey="name" />
              </Table.Column>
              <Table.Column align="center" width={290}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Email
                </Table.HeaderCell>
                <Table.Cell dataKey="email" />
              </Table.Column>
              <Table.Column align="center" width={170}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Số điện thoại
                </Table.HeaderCell>
                <Table.Cell dataKey="phoneNumber" />
              </Table.Column>
              <Table.Column align="center" width={180}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Địa chỉ
                </Table.HeaderCell>
                <Table.Cell dataKey="address" />
              </Table.Column>
              <Table.Column align="center" width={190}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Tổng sản phẩm
                </Table.HeaderCell>
                <ItemsCell dataKey="items" />
              </Table.Column>
              <Table.Column align="center" width={150}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Trạng thái
                </Table.HeaderCell>
                <PositionCell dataKey="status" />
              </Table.Column>

              <Table.Column align="center" width={150}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Ngày đặt hàng
                </Table.HeaderCell>
                <Table.Cell dataKey="dateTimeStart" />
              </Table.Column>
              <Table.Column align="center" width={150}>
                <Table.HeaderCell className={styles.HeaderCell}>
                  Ngày hết hạn
                </Table.HeaderCell>
                <Table.Cell dataKey="dateTimeEnd" />
              </Table.Column>
              <Table.Column align="center" width={120} fixed="right">
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
                  ? orders.length
                  : orders.filter(
                      (e) => e.name.toLowerCase().indexOf(searchValue) !== -1
                    ).length}
              </span>{" "}
              bản ghi
            </span>
            {searchValue === "" && sortPosition === "" && sortStatus === "" ? (
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={orders && orders.length}
                pageSize={10}
                onPageChange={(page) => setCurrentPage(page)}
              />
            ) : (
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={
                  orders &&
                  orders.filter(
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

export default OrderManager;
