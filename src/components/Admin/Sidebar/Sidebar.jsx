
import React, { useEffect, useState } from "react";
import logo from "../../../assets/img/logo.png";
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
function Sidebar() {
  const [showNoti, setShowNoti] = useState(false);
  let pathname = window.location.pathname.split("/")[2];
  let a = useLocation()

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
            <img src={logo} alt="" className={styles.logoImg} />
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

        <NavLink
          to={`/admin/dashboard`}
          onClick={() => setShowNoti(false)}
        >
          <div className={styles.navLink}
            style={pathname === `/admin/dashboard` ? { backgroundColor: `#f3f5f9`, fontWeight: 400 } : {}}>
            <HomeIcon className={`${styles.icon}`} />
            <span >Dashboard</span>
          </div>
        </NavLink>

        <NavLink
          to={`/admin/quan-ly-san-pham`}
          onClick={() => setShowNoti(false)}
        >
          <div className={styles.navLink}
            style={pathname === `/admin/quan-ly-san-pham` ? { backgroundColor: `#f3f5f9`, fontWeight: 400 } : {}}>
            <InventoryIcon className={`${styles.icon}`} />
            <span > Sản phẩm </span>
          </div>
        </NavLink>

        <NavLink
          to={`/admin/quan-ly-don-hang`}
          onClick={() => setShowNoti(false)}
        >
          <div className={styles.navLink}
            style={pathname === `/admin/quan-ly-don-hang` ? { backgroundColor: `#f3f5f9`, fontWeight: 400 } : {}}>
            <LocalShippingIcon className={`${styles.icon}`} />
            <span >Đơn hàng</span>
          </div>
        </NavLink>

        <NavLink
          to={`/admin/quan-ly-nguoi-dung`}
          onClick={() => setShowNoti(false)}
        >
          <div className={styles.navLink}
            style={pathname === `/admin/quan-ly-nguoi-dung` ? { backgroundColor: `#f3f5f9`, fontWeight: 400 } : {}}>

            <GroupIcon className={`${styles.icon}`} />
            <span >Người dùng</span>
          </div>
        </NavLink>


        <NavLink
          to={`/admin/quan-ly-bai-viet`}
          onClick={() => setShowNoti(false)}
        >
          <div className={styles.navLink}
            style={pathname === `/admin/quan-ly-bai-viet` ? { backgroundColor: `#f3f5f9`, fontWeight: 400 } : {}}>

            <TextSnippetIcon className={`${styles.icon}`} />
            <span >Blogs</span>
          </div>
        </NavLink>

      </div>
      <div className={`${styles.account}`}>
        <div className={`${styles.accountImg}`}>
          <AccountCircleIcon />
        </div>
        <div className={`${styles.accountContent}`}>
          <>
            <p className={`${styles.accountName}`}>Name</p>
            <div className={`${styles.accountBtn}`}>
              <Link to="/dang-nhap">Đăng nhập</Link>
            </div>
          </>
        </div>
      </div>
    </div>

  );
}

export default Sidebar;
