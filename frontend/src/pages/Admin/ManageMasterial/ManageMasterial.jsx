import React, { useContext, useEffect, useState } from "react";
import styles from "./ManageMasterial.module.css";
import Breadcrumbs from "../../../components/Admin/BreadCrumb/Breadcrumb";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExportReact from "../../../components/Admin/ExportReact/ExportReact";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar"
import ModalDelete from "../../../components/Admin/ModalDelete/ModalDelete"
import SelectMui from "../../../components/Admin/SelectMui/SelectMui";
import InputSearch from "../../../components/Admin/InputSearch/InputSearch";
import ButtonAdd from "../../../components/Admin/ButtonAdd/ButtonAdd";
const ManageProduct = (id) => {
  const [PageSize, setPageSize] = useState(10)
  const [idProduct, setIdProduct] = useState();
 
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

  const listPagination = [{
    name: 10
  },
  {
    name: 20
  },
  {
    name: 40
  },
  {
    name: 50
  },
  {
    name: 60
  }
  ]
  return (
    <>
      <Sidebar />
      <ModalDelete
        idProduct={idProduct}
        // handleDeleteProduct={handleDeleteProduct}
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
            <InputSearch setSearchValue={()=>{}}/>
              <SelectMui
                list={list}
                name="Danh mục"
              />
            </div>

          </div>
          <div className={`${styles.rightSide} col-4`}>
            <div className={`${styles.rightSideBtn}`}>
              <ButtonAdd name="Thêm sản phẩm" path="them-san-pham"/>
              <ExportReact csvData={{}} fileName="Danh sách sản phẩm" />
            </div>
          </div>
        </div>
        <div className={styles.profile}>
          {/* <Tablecustom
          PageSize={PageSize}
            data={dataSliced.filter((e) =>
              e.name.toLowerCase().includes(searchValue)
            )}
            tables={tableProduct}
            setIdProduct={setIdProduct}
          /> */}

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
                  
                </span>{" "}
                bản ghi
              </span>

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProduct;
