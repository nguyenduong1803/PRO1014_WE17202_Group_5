import React, { useEffect} from 'react'
import styles from './UserManager.module.css'
import Breadcrumbs from '../../../components/Admin/BreadCrumb/Breadcrumb';
import AddIcon from '@mui/icons-material/Add';
import "rsuite-table/dist/css/rsuite-table.css";
import ExportReact from '../../../components/Admin/ExportReact/ExportReact';
import Sidebar from "../../../components/Admin/Sidebar/Sidebar"
import Tablecustom from '../../../components/Admin/TableCustom/Tablecustom';
import { customerTable } from '../../../config/tables';
import InputSearch from '../../../components/Admin/InputSearch/InputSearch';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUser } from '../../../redux/selector';
import { getAllUser } from '../../../redux/SliceReducer/AuthSlice';
import { getToken } from '../../../utils/Common';
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
    const dispatch = useDispatch()
    const listUser = useSelector(selectAllUser)
    useEffect(() => {
        if(getToken()&&getToken() !== undefined){
            dispatch(getAllUser())
        }    
    }, []);
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
                        <InputSearch setSearchValue={() => { }} />

                    </div>
                    <div className={`${styles.rightSide} col-4`}>
                        <div className={`${styles.rightSideBtn}`}>
                            <button className={`${styles.btnAdd}`} onClick={(e) => { test(e) }}><AddIcon />Thêm tài khoản</button>
                            <ExportReact csvData={listUser} />
                        </div>
                    </div>
                </div>
                <div className={`${styles.table} `}>
                    <Tablecustom
                        data={listUser}
                        PageSize={10}
                        tables={customerTable}
                        path="chi-tiet-nguoi-dung"
                    />
                </div>
                <div className={`${styles.pagination} `}>
                    <span style={{ marginRight: `25px` }}>có <span style={{ fontWeight: `bold`, color: `#1A358F` }}>

                    </span> bản ghi</span>

                </div>
            </div >
        </>
    )
}

export default UserManager