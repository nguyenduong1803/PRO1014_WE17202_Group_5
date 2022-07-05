import React, { useEffect, useState, useContext } from "react";
import styles from "../OrderManager/OrderManager.module.css";
import Breadcrumbs from "../../../components/Admin/BreadCrumb/Breadcrumb";
import SearchIcon from "@mui/icons-material/Search";
import "rsuite-table/dist/css/rsuite-table.css";
import ExportReact from "../../../components/Admin/ExportReact/ExportReact";
import Pagination from "../../../extensions/Pagination/Pagination";
import { OrderContext } from "../../../contexts/OrderContext";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar"
import Tablecustom from "../../../components/Admin/TableCustom/Tablecustom"
import {tableOrder} from "../../../config/tables"
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
        orders &&  orders
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
  return (
    <>
    <Sidebar/>
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
            <Tablecustom
              data={dataSliced.filter((e) =>
                e.name.toLowerCase().includes(searchValue)
              )}
              tables={tableOrder}
            />
        
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
