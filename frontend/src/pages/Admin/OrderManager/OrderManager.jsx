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
import { selectOrder } from "../../../redux/selector";
import { getAllOrder } from "../../../redux/SliceReducer/OrderTableSlice";
const OrderManager = () => {
const listorders = useSelector(selectOrder);
  const dispatch = useDispatch();
  const [PageSize, setPageSize] = useState(10)
  console.log(listorders)
  
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
 React.useEffect(()=>{
  dispatch(getAllOrder())
 },[])
  return (
    <>
      <Sidebar />
      <div className={styles.Account}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className={`${styles.AccountMain} d-flex`}>
          <div className={`${styles.leftSide} col-8`}>
            <p className={`${styles.title}`}>Quản lý đơn hàng</p>
            <InputSearch setSearchValue={()=>{}}/>
          </div>
          <div className={`${styles.rightSide} col-4`}>
            <div className={`${styles.rightSideBtn}`}>
              {/* <ExportReact csvData={listorders} /> */}
            </div>
          </div>
        </div>
        <div className={styles.AccountPro}>
          <div className={styles.ManageTable}>
            <Tablecustom
              data={listorders}
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
            <div className="d-flex align-items-center">
              <span style={{ marginRight: `25px` }}>
                có{" "}
                <span style={{ fontWeight: `bold`, color: `#1A358F` }}>
                {listorders.length}
                </span>
                bản ghi
              </span>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderManager;
