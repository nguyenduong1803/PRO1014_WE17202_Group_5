import React, { useState } from "react";
import styles from "../OrderManager/OrderManager.module.css";
import Breadcrumbs from "../../../components/Admin/BreadCrumb/Breadcrumb";
import "rsuite-table/dist/css/rsuite-table.css";
import ExportReact from "../../../components/Admin/ExportReact/ExportReact";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar"
import Tablecustom from "../../../components/Admin/TableCustom/Tablecustom"
import { tableOrder } from "../../../config/tables"
import SelectMui from "../../../components/Admin/SelectMui/SelectMui";
import { listPagination } from "../../../config/listConfig"
import InputSearch from "../../../components/Admin/InputSearch/InputSearch";
import { useDispatch, useSelector } from "react-redux";
import { selectOrder, selectOrderPage } from "../../../redux/selector";
import { getAllOrder } from "../../../redux/SliceReducer/OrderTableSlice";
import PaginationMui from "../../../components/Admin/PaginationMui/PaginationMui";
import { Pagination, Stack } from "@mui/material";
import useDebounce from "../../../hooks/useDebounce";
const OrderManager = () => {
  const listorders = useSelector(selectOrder);
  const lastPage = useSelector(selectOrderPage);
  const dispatch = useDispatch();
  const [PageSize, setPageSize] = useState(8)
  const [page, setPage] = useState(1)
  const [keySearch, setKeySearch] = useState("")
  const debounce = useDebounce(keySearch, 500)
  const [status, setStatus] = useState("")
  const handerChange = (e) => {
    setPage(e.target.innerText)
  }
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
  React.useEffect(() => {
    dispatch(getAllOrder({ limit: PageSize, page, status, keySearch: debounce }))
  }, [PageSize, page, status, debounce])
  return (
    <>
      <Sidebar />
      <div className={styles.Account}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className={`${styles.AccountMain} d-flex`}>
          <div className={`${styles.leftSide} col-7`}>
            <p className={`${styles.title}`}>Quản lý đơn hàng</p>
            <InputSearch setSearchValue={setKeySearch} />

          </div>
          <div className="col-lg-2">
          </div>
          <div className={`${styles.rightSide} col-3`}>
            <div className={`${styles.rightSideBtn}`}>
              <select onChange={e => setStatus(e.target.value)} class="form-select" aria-label="Default select example">
                <option value="" selected>Sắp xếp</option>
                <option value="1">Chưa thanh toán</option>
                <option value="2">Đã thanh toán</option>
                <option value="3"></option>
              </select>
              <div style={{ width: "140px" }}><ExportReact csvData={listorders.data || []} /></div>
            </div>
          </div>
        </div>
        <div className={styles.AccountPro}>
          <div className={styles.ManageTable}>
            <Tablecustom
              data={listorders?.data}
              PageSize={PageSize}
              tables={tableOrder}
              path="chi-tiet-don-hang"
            />
          </div>
          <div className={`${styles.pagination} justify-content-between`}>
            <SelectMui
              list={listPagination}
              name="Số bản ghi"
              setPageSize={setPageSize}
            />
            <Stack spacing={2} >
              <Pagination count={lastPage} color="primary" onChange={e => handerChange(e)} />
            </Stack>
          </div>

        </div>
      </div>
    </>
  );
};

export default OrderManager;
