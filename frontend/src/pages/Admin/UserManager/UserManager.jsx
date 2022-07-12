import React, { useEffect, useState, useContext } from 'react'
import styles from './UserManager.module.css'
import Breadcrumbs from '../../../components/Admin/BreadCrumb/Breadcrumb';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import "rsuite-table/dist/css/rsuite-table.css";
import Pagination from "../../../extensions/Pagination/Pagination"
import ExportReact from '../../../components/Admin/ExportReact/ExportReact';
import { searchData } from '../../../extensions/searchData';
import { UserContext } from '../../../contexts/UserContext';
import Sidebar from "../../../components/Admin/Sidebar/Sidebar"
import Tablecustom from '../../../components/Admin/TableCustom/Tablecustom';
import { customerTable } from '../../../config/tables';
import InputSearch from '../../../components/Admin/InputSearch/InputSearch';
const breadcrumItem = [
    {
        href: "/",
        title: "Quản lý",
        isActive: false,
    },
    {
        href: "/quan-ly-nguoi-dung",
        title: "Quản lý người dùng",
        isActive: true,
    },
];

function UserManager() {
    const { user } = useContext(UserContext)
    const [PageSize, setPageSize] = useState(10)
    const [dataSliced, setdataSliced] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (user || (user && !search)) {
            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;
            setdataSliced(
                searchData(user, ['email', `name`], search).slice(firstPageIndex, lastPageIndex)
            )
        }

    }, [PageSize, currentPage, search, user]);
    return (
        <>
            <Sidebar />
            <div className={`${styles.main}`}>
                <Breadcrumbs breadItem={breadcrumItem} />
                <div className={`${styles.control} d-flex`}>
                    <div className={`${styles.leftSide} col-8 p-0`}>
                        <p className={`${styles.title}`}>
                            Danh sách người dùng
                        </p>
                        <InputSearch setSearchValue={()=>{}}/>

                    </div>
                    <div className={`${styles.rightSide} col-4`}>
                        <div className={`${styles.rightSideBtn}`}>
                            <button className={`${styles.btnAdd}`} onClick={(e) => { test(e) }}><AddIcon />Thêm tài khoản</button>
                            <ExportReact csvData={user} />
                        </div>

                    </div>
                </div>
                <div className={`${styles.table} `}>
                    <Tablecustom
                        data={dataSliced}
                        PageSize={PageSize}
                        tables={customerTable}
                        path="chi-tiet-nguoi-dung"
                    />
                    
                </div>
                <div className={`${styles.pagination} `}>
                    <span style={{ marginRight: `25px` }}>có <span style={{ fontWeight: `bold`, color: `#1A358F` }}>
                        {
                            searchData(user, ['email', `name`], search).length
                        }
                    </span> bản ghi</span>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={
                            searchData(user, ['email', `name`], search).length
                        }
                        pageSize={PageSize}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div >
        </>
    )
}

export default UserManager