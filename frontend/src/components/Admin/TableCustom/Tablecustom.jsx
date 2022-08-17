import React from 'react'
import styles from "./Tablecustom.module.css"
import { Link } from "react-router-dom";
import Table from "rsuite/Table";
import "rsuite-table/dist/css/rsuite-table.css";
import Loadings from "../../Site/Loading/Loadings/Loadings"
import { searchProduct } from '../../../redux/SliceReducer/ManagerProductSlice';
import { useDispatch } from 'react-redux';

function Tablecustom({ tables, data, setIdProduct, path }) {
    const [loading, setLoading] = React.useState(false)
    console.log(data)
    return (
        <>
            {loading ? <Loadings /> :
                <div className={`${styles.Profiletable} mt-4`}>
                    {
                        (<Table
                            data={data}
                            rowHeight={55}
                            height={data?.length > 9 ? (550 * data?.length) / 10 : 600}

                        // affixHorizontalScrollbar
                        >
                            {
                                tables.map((table, index) => {
                                    let Component;
                                    if (table.type === "img") {
                                        Component = <ImageCell dataKey={table.dataKey} />
                                    } else if (table.type === "cell") {
                                        Component = <Table.Cell dataKey={table.dataKey} />
                                    } else if (table.type === "status") {
                                        Component = <PositionCell dataKey={table.dataKey} />
                                    } else if (table.type === "edit") {
                                        Component = <EditCell setIdProduct={setIdProduct} dataKey={table.dataKey} />
                                    } else if (table.type === "comment") {
                                        Component = <CommentCell dataKey={table.dataKey} />
                                    } else if (table.type === "postAction") {
                                        Component = <PostAction setIsBlog={setIdProduct} dataKey={table.dataKey} path={path} />
                                    } else if (table.type === "deleteCate") {
                                        Component = <CategoryAction setIdProduct={setIdProduct} dataKey={table.dataKey} path={path}nameCate={table.name} />
                                    }
                                    else if (table.type === "orderAction") {
                                        Component = <OrderDetail dataKey={table.dataKey} />
                                    } else if (table.type === "isSucces") {
                                        Component = <IsSuccesOrder dataKey={table.dataKey} />
                                    }
                                    
                                    else {
                                        Component = <Table.Cell dataKey={table.dataKey} />
                                    }
                                    return (
                                        <Table.Column key={index} width={table.width} align="center" fixed={table.isFixed}>
                                            <Table.HeaderCell className={styles.HeaderCell}>
                                                {table.name}
                                            </Table.HeaderCell>
                                            {Component}
                                        </Table.Column>
                                    )
                                })
                            }
                        </Table>)}
                </div>
            }
        </>
    )
}
// show img avatar
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
// state order
const PositionCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell
        {...props}
        style={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
        }}
    >
        {rowData[dataKey] === "true" ? (
            <div className={`${styles.on}`}>Còn hàng</div>
        ) : (
            <div className={`${styles.off}`}>Hết hàng</div>
        )}
    </Table.Cell>
);
// comment
const CommentCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell {...props} style={{ padding: 0 }}>
        <div>{rowData[dataKey].length}</div>
    </Table.Cell>
);


// order deatail
const OrderDetail = ({ rowData, dataKey, ...props }) => (
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
const CategoryAction = ({ rowData, dataKey, setIdProduct,nameCate, path, ...props }) => (
    <Table.Cell {...props}>
        <div className={styles.Celll}>
            <Link
                to={{
                    pathname: `/admin/${path}${rowData[dataKey]}`,
                }}
                className={`${styles.btnEdit} `}
                role="button"
            >
                Sửa
            </Link>
            <button
                className={`${styles.btnDelete}`}
                onClick={() => setIdProduct(rowData[dataKey])}
                role="button"
                data-toggle="modal"
                data-target="#exampleModal"
            >
                Xóa
            </button>
        </div>
    </Table.Cell>
);
const IsSuccesOrder = ({ rowData, dataKey, ...props }) => (
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
const PostAction = ({ rowData, dataKey, setIsBlog, path, ...props }) => (
    <Table.Cell {...props}>
        <div className={styles.Celll}>
            <Link
                to={{
                    pathname: `/admin/${path}/${rowData[dataKey]}`,
                }}
                className={`${styles.btnEdit} `}
                role="button"
            >
                Xem chi tiết
            </Link>
            {/* <button
                className={`${styles.btnDelete}`}
                onClick={() => setIsBlog(rowData[dataKey])}
                role="button"
                data-toggle="modal"
                data-target="#exampleModal"
            >
                Xóa
            </button> */}
        </div>
    </Table.Cell>
);
const EditCell = ({ rowData, dataKey, setIdProduct, ...props }) => {
    const dispatch = useDispatch()

    return (
        <Table.Cell {...props}>
            <div className={styles.Celll}>
                <Link
                    onClick={() => dispatch(searchProduct(rowData[dataKey]))}
                    to={{
                        pathname: `/admin/sua-san-pham`,
                        search: `#${rowData[dataKey]}`,
                    }}
                    className={`${styles.btnEdit} `}
                    role="button"
                >
                    Sửa
                </Link>
                <button
                    className={`${styles.btnDelete}`}
                    onClick={() => setIdProduct(rowData[dataKey])}
                    role="button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                >
                    Xóa
                </button>
            </div>
        </Table.Cell>
    )
};
export default Tablecustom