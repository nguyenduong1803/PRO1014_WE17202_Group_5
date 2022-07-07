
import table from "../assets/img/table.png"
import menus from "../assets/img/menu.png"
import bill from "../assets/img/bill.png"
import Home from "../assets/img/Home.png"
// category
export const listCategory = [
    {
        item: "Vegetable",
        change: "Rau củ"
    },
    {
        item: "Meat",
        change: "Thịt sạch"
    },
    {
        item: "Fruit",
        change: "Hoa quả"
    },
    {
        item:"Update",
        change:""
    }
]
// menu 
export const menu = [
    {
        name: "Trang Chủ",
        path: "/"
    },
    {
        name: "Cửa Hàng",
        path: "/cua-hang"
    },
    {
        name: "Blog",
        path: "/blogs"
    },
    {
        name: "Liên Hệ",
        path: ""
    },
]
export const listMenu=[
    {
        name:"Trang chủ",
        to:"/",
        icon:Home
    },
    {
        name:"Danh sách bàn",
        to:"/dat-ban",
        icon:table
    },
    {
        name:"Danh sách Menu",
        to:"/menu",
        icon:menus
    },
    {
        name:"Hóa đơn",
        to:"/orders",
        icon:bill
    },
   
]