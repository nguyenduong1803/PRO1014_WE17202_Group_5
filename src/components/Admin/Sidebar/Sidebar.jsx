
import React, { useEffect, useState } from "react";
import logoSea from "../../../assets/img/logoSea.png";
import styles from "./Sidebar.module.css";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { NavLink } from "react-router-dom";
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PostAddIcon from '@mui/icons-material/PostAdd';

const listManagement = [

  {
    name: "Sản phẩm",
    path: "quan-ly-san-pham",
    icon: InventoryIcon
  },
  {
    name: "Đơn hàng",
    path: "quan-ly-don-hang",
    icon: LocalShippingIcon
  },
  {
    name: "Nhân viên",
    path: "quan-ly-nguoi-dung",
    icon: GroupIcon
  },
  {
    name: "Vật liệu",
    path: "quan-ly-vat-lieu",
    icon: PostAddIcon
  },
]
const SidebarItem = function ({ Icon, name, path, setShowNoti }) {
  let pathname = window.location.pathname.split("/")[2];
  return (
    <NavLink
      to={`/admin/${path}`}
      onClick={() => setShowNoti(false)}
    >
      <div className={styles.navLink}
        style={pathname === path ? { backgroundColor: `#f3f5f9`, fontWeight: 400 } : {}}>
        <Icon className={`${styles.icon}`} />
        <span >{name}</span>
      </div>
    </NavLink>
  )
}
function Sidebar() {
  let a = useLocation()
  const [showNoti, setShowNoti] = useState(false);

  useEffect(() => {

  }, [a])
  const notiFakeData = [
    {
      img: `https://robohash.org/sitetoccaecati.png?size=50x50&set=set1`,
      title: `Đơn hàng mới được tạo`,
      dateTime: {
        time: `12:02 AM`,
        date: `31/5/2022`
      }
    },
    {
      img: `https://robohash.org/perferendisnihilerror.png?size=50x50&set=set1`,
      title: `có 1 bài blog mới đã được đăng`,
      dateTime: {
        time: `02:02 PM`,
        date: `30/5/2022`
      }
    },
    {
      img: `https://robohash.org/estquisquamasperiores.png?size=50x50&set=set1
`,
      title: `Sản phẩm ABC sắp hết`,
      dateTime: {
        time: `01:02 AM`,
        date: `31/5/2022`
      }
    },
    {
      img: `https://robohash.org/utnequedistinctio.png?size=50x50&set=set1`,
      title: `có 1 bài blog mới đã được đăng`,
      dateTime: {
        time: `11:02 AM`,
        date: `01/06/2022`
      }
    },

  ]
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.head}`}>
        <div className={`${styles.headContent}`}>
          <NavLink to="/admin/" >
            <img src={logoSea} alt="" className={styles.logoImg} />
          </NavLink>
          <div
            className={`${styles.iconBell}`}
            onClick={() => setShowNoti(!showNoti)}
          >
            <NotificationsNoneIcon />
          </div>
          {showNoti && (
            <div className={`${styles.noti}`}>
              <div className={`${styles.notiHead}`}>
                <h4>Thông báo</h4>
                <span>Xoá</span>
                <span>Đánh dấu đã đọc</span>
              </div>
              <div className={`${styles.notiContent}`}>
                {notiFakeData.map((e, index) =>
                  <div
                    className={styles.notiItem}
                    key={index}
                    onClick={() => setShowNoti(false)}
                  >
                    <img src={e.img} alt="" />
                    <p>{e.title}</p>
                    <div className={styles.dateTime}>
                      <p>{e.dateTime.time}</p>
                      <p>{e.dateTime.date}</p>
                    </div>
                  </div>
                )}
              </div>
              <p>Xem thêm</p>
            </div>
          )}
        </div>
        <p style={{ fontSize: `12px`, marginTop: `8px` }}>
          Hệ thống quản lý thiết bị
        </p>
      </div>
      <div className={`${styles.content}`}>
        <SidebarItem
          setShowNoti={setShowNoti}
          name="Dashboard"
          Icon={HomeIcon}
          path="dashboard"
        />
        <div className="accordion accordion-flush" >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className={`${styles.accordiBtn} accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <ManageAccountsIcon className={`${styles.icon}`} /> Quản lý
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                {listManagement.map((item, index) => (
                  <SidebarItem
                    key={index}
                    setShowNoti={setShowNoti}
                    name={item.name}
                    Icon={item.icon}
                    path={item.path}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

        <SidebarItem
          setShowNoti={setShowNoti}
          name="Blogs"
          Icon={TextSnippetIcon}
          path="quan-ly-bai-viet"
        />

      </div>
      <div className={`${styles.account}`}>
        <div className={`${styles.accountImg}`}>
          <AccountCircleIcon />
        </div>
        <div className={`${styles.accountContent}`}>
          <>
            <p className={`${styles.accountName}`}>Name</p>
            <div className={`${styles.accountBtn}`}>
              <Link to="/admin/dang-nhap">Đăng nhập</Link>
            </div>
          </>
        </div>
      </div>
    </div>

  );
}

export default Sidebar;
