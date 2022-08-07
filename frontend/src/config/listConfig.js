

import HomeIcon from "../assets/svg/HomeSvg"
import MenuIcon from "../assets/svg/MenuIcon"
import OrderIcon from "../assets/svg/OrderIcon"
import VrIcon from "../assets/svg/VrIcon"
import FloorIcon from "../assets/svg/FloorIcon"

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
export const listMenu = [
   
    {
        name: "Trang chủ",
        to: "/",
        icon: <HomeIcon width="28px" height="28px" />
    },
    {
        name: "Danh sách Menu",
        to: "/menu",
        icon: <MenuIcon width="32px" height="32px" />
    },
    {
        name: "Danh sách bàn",
        to: "/dat-ban",
        icon: <FloorIcon width="28px" height="28px" />
    },

    {
        name: "Hóa đơn",
        to: "/hoa-don",
        icon: <OrderIcon width="42px" height="42px" />
    },
    {
        name: "Xem nhà hàng",
        to: "/map",
        icon: <VrIcon width="42px" height="42px" />
    },

]
// page
export const listPagination = [{
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