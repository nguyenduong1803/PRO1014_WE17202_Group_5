import React, { useContext, useEffect, useState } from 'react'
import { getName, getToken } from '../../../utils/Common'
import styles from "./Dashboard.module.css"
import AddIcon from '@mui/icons-material/Add';
import { Table } from 'react-bootstrap'
import { Doughnut } from 'react-chartjs-2';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar"
import axios from 'axios';
import { api } from '../../../utils/api';
const listDay=[1,10,20,30,40,50,100,150,200,365]
function Dashboard() {
    const [productStatic, setProductStatic] = React.useState([])
    const stateDoughnut = {
        labels: productStatic?.map(ele => ele.name_product),
        datasets: [
            {
                label: 'Món ăn best seller',
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                ],
                data: productStatic?.map(ele => ele.total_price)
            }
        ]
    }
    React.useEffect(async () => {
        await axios
            .get(api + `statistical/statisticalByProduct`, {
                headers: {
                    "Authorization": `Bearer ${getToken()}`
                },
            })
            .then(response => {
                setProductStatic(response.data.data)
            }).catch(function (err) {
            })

    })
    return (
        <>
            <Sidebar />
            <div className={`${styles.main} row`}>
                <div className={`${styles.leftSide} col-8   `}>
                    <div className={`${styles.greeting}`}>
                        <div>
                            <h2 style={{ color: `#1A358F`, fontSize: `38px` }}>Xin chào !</h2>
                            <p>Chào mừng { } đến với trang Admin</p>
                        </div>

                    </div>
                    <div className={`${styles.myDevice}`}>
                        <div>
                            <h3>Thống kê</h3>
                            <p style={{ color: `#75767E`, margin: "12px 0", fontSize: "17px" }}>5 món ăn bán được nhiều nhất</p>
                        </div>
                        <div style={{margin:"0 24px"}}>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Thống kê doanh thu</option>
                               {listDay.map(day=>(
                                <option value={day}>{day} Ngày trước</option>
                               ))}
                            </select>
                        </div>
                        <div style={{}}>
                            <h3>Tổng doanh thu: </h3>
                            <p style={{ marginTop: `12px` }}>320000000 đ</p>
                        </div>
                    </div>
                    <div className={`${styles.chartSection}`} >

                        <Bar
                            data={stateDoughnut}
                        />
                    </div>
                </div>
                <div className={`${styles.rightSide} col-4`}>
                    <div className={`${styles.topRight} row`}>

                        <p style={{ marginTop: `30px`, textAlign: `center`, fontSize: `27px`, fontWeight: `600` }}>Khách đặt nhiều nhất </p>

                        <Doughnut
                            data={stateDoughnut}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Average Rainfall per month',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                        />

                    </div>
                    <div className={`${styles.staffRequest} row`}>
                        {/* <div className={`${styles.content} `}>

                            <h3>Yêu cầu của nhân viên</h3>
                            <p><span style={{ fontSize: `24px`, fontWeight: `600`, color: `#1a358f`, width: `10px`, display: `inline-block`, width: `25px`, textAlign: `center` }}>
                                2
                            </span>Yêu cầu thiết bị</p>
                            <p><span style={{ fontSize: `24px`, fontWeight: `600`, color: `#f4cc3d`, width: `10px`, display: `inline-block`, width: `25px`, textAlign: `center` }}>
                                1
                            </span>Yêu cầu chỉnh hồ sơ</p>
                            <Table style={{ marginTop: `20px` }} borderless>
                                <thead >
                                    <tr>
                                        <th>Số</th>
                                        <th style={{ width: `150px` }}>Yêu cầu</th>
                                        <th>Trạng thái </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>081</td>
                                        <td>Yêu cầu chỉnh hồ sơ</td>
                                        <td>
                                            <div className={`${styles.status} ${styles.red}`}>
                                                Đợi phê duyệt
                                            </div>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>113</td>
                                        <td>Yêu cầu thiết bị</td>
                                        <td>
                                            <div className={`${styles.status} ${styles.orange}`}>
                                                Đợi phê duyệt
                                            </div>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>131</td>
                                        <td>Yêu cầu chỉnh hồ sơ</td>
                                        <td>
                                            <div className={`${styles.status} ${styles.red}`}>
                                                Đợi chỉnh sửa
                                            </div>
                                        </td>

                                    </tr>
                                </tbody>
                            </Table>
                        </div> */}
                    </div>

                </div>

            </div>
        </>




    )
}

export default Dashboard