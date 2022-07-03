import React, { useEffect, useState, useContext } from 'react'
import styles from './UserManager.module.css'
import Breadcrumbs from '../../../components/Admin/BreadCrumb/Breadcrumb';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Table from 'rsuite/Table';
import "rsuite-table/dist/css/rsuite-table.css";
import Pagination from "../../../extensions/Pagination/Pagination"
import ExportReact from '../../../components/Admin/ExportReact/ExportReact';
import { Link } from 'react-router-dom';
import { searchData } from '../../../extensions/searchData';
import { UserContext } from '../../../contexts/UserContext';
import avatardefault from "../../../assets/images/avatar_default.png"
import Sidebar from "../../../components/Admin/Sidebar/Sidebar"
function UserManager() {
    const { user } = useContext(UserContext)


    let PageSize = 10
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


    const ImageCell = ({ rowData, dataKey, ...props }) => (
        <Table.Cell {...props} className={styles.cellCenter} >
            <div
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: `50%`,
                    border: `1px solid #ddd`
                }}
            >
                <img src={rowData[dataKey] ? rowData[dataKey] : avatardefault} alt="asd" style={{ borderRadius: `50%`, }} />
            </div>
        </Table.Cell>
    );
    const LinkCell = ({ rowData, dataKey, ...props }) => (
        <Table.Cell  {...props} className={styles.cellCenter}  >
            <Link
                to={{
                    pathname: `/admin/chi-tiet-nguoi-dung`,
                    search: `#${rowData[dataKey]}`,
                }}
                style={{
                    padding: `4px 8px`,
                    borderRadius: 4,
                    border: ` 1px solid #198754`,
                    color: `#198754`,
                    fontWeight: 600,
                    textDecoration: `none`
                }}
            >
                Xem chi tiết
            </Link>
        </Table.Cell>
    );
    return (

        <>
        <Sidebar/>
            <div className={`${styles.main}`}>

                <Breadcrumbs breadItem={breadcrumItem} />
                <div className={`${styles.control} row`}>
                    <div className={`${styles.leftSide} col-8 p-0`}>
                        <p className={`${styles.title}`}>
                            Danh sách người dùng
                        </p>
                        <div className={`${styles.search}`}>
                            <input type="text" placeholder='Tìm kiếm ' onChange={(e) => setSearch(e.target.value)} />
                            <div className={`${styles.searchIcon}`}>
                                <SearchIcon />
                            </div>
                        </div>

                    </div>
                    <div className={`${styles.rightSide} col-4`}>
                        <div className={`${styles.rightSideBtn}`}>
                            <button className={`${styles.btnAdd}`} onClick={(e) => { test(e) }}><AddIcon />Thêm tài khoản</button>
                            <ExportReact csvData={user} />
                        </div>

                    </div>
                </div>
                <div className={`${styles.table} `}>
                    <Table
                        data={dataSliced}
                        rowHeight={55}
                        height={600}
                        affixHorizontalScrollbar
                    >
                        <Table.Column align="center" width={40} fixed>
                            <Table.HeaderCell className={styles.tableHeader} >
                                Id
                            </Table.HeaderCell>
                            <Table.Cell dataKey="id" className={styles.cellCenter} />
                        </Table.Column>

                        <Table.Column align="center" width={80} >
                            <Table.HeaderCell className={styles.tableHeader} >
                                Ảnh
                            </Table.HeaderCell>
                            <ImageCell dataKey="avatar" />
                        </Table.Column>

                        <Table.Column align="center" width={200} >
                            <Table.HeaderCell className={styles.tableHeader} >
                                Tên
                            </Table.HeaderCell>
                            <Table.Cell dataKey="name" className={styles.cellCenter} />
                        </Table.Column>
                        <Table.Column align="center" width={130} >
                            <Table.HeaderCell className={styles.tableHeader}  >
                                Số điện thoại
                            </Table.HeaderCell>
                            <Table.Cell dataKey="phone" className={styles.cellCenter} />
                        </Table.Column>
                        <Table.Column align="center" width={200} >
                            <Table.HeaderCell className={styles.tableHeader} >
                                Địa chỉ
                            </Table.HeaderCell>
                            <Table.Cell dataKey="address" className={styles.cellCenter} />
                        </Table.Column>
                        <Table.Column align="center" width={180}>
                            <Table.HeaderCell className={styles.tableHeader} >
                                Ngày tháng năm sinh
                            </Table.HeaderCell>
                            <Table.Cell dataKey="dob" className={styles.cellCenter} />
                        </Table.Column>
                        <Table.Column align="center" width={250}  >
                            <Table.HeaderCell className={styles.tableHeader} >
                                Email
                            </Table.HeaderCell>
                            <Table.Cell dataKey="email" className={styles.cellCenter} />
                        </Table.Column>

                        <Table.Column align="center" width={150} >
                            <Table.HeaderCell className={styles.tableHeader} >
                                Tổng tiền đã mua
                            </Table.HeaderCell>
                            <Table.Cell dataKey="totalPaid" className={styles.cellCenter} />
                        </Table.Column>
                        <Table.Column align="center" width={200}>
                            <Table.HeaderCell className={styles.tableHeader}  >
                                Ngày tạo tài khoản
                            </Table.HeaderCell>
                            <Table.Cell dataKey="createdAt" className={styles.cellCenter} />
                        </Table.Column>
                        <Table.Column align="center" width={150} fixed="right">
                            <Table.HeaderCell className={styles.tableHeader}  >
                                Quản lý
                            </Table.HeaderCell>
                            <LinkCell dataKey="_id" />

                        </Table.Column>

                    </Table>
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
                        pageSize={10}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>




            </div >
        </>
    )
}

export default UserManager