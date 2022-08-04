import React, { useEffect, useState } from "react";
import styles from "./ProfileUser.module.css";
import imguser from "../../../assets/img/Chef1.jpg";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Button from "@mui/material/Button";
// import {Link} from 'react-router-dom';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PropTypes from "prop-types";
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EditUser from "./EditInformation/EditInformationUser";
import EditPass from "./EditPassWord/EditPassWord";
import { api } from "../../../redux/SliceReducer/AuthSlice";
import axios from "axios";
import { getToken } from "../../../utils/Common";
import { style } from "@mui/system";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function FullWidthTabs({value}) {
  const theme = useTheme();



  return (
    <div className={styles.bgr}>
      {" "}
      
      <Box sx={{ width: "70%" }} className={styles.Box}>
        {/* <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
        <TabPanel value={value} index={0} dir={theme.direction}>
          <EditUser />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <EditPass />
        </TabPanel>

        {/* </SwipeableViews> */}
      </Box>
    </div>
  );
}

function ProfileUser() {
  const [userInfo, setUserInfo] = useState({});
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    async function user() {
      const res = await axios.get(api + "auth/getInfoUser", {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      setUserInfo(res.data.user);
    }
    user();
  }, []);
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.img}>
        <AppBar position="static" className={styles.AppBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="white"
          textColor="inherit"
          aria-label="full width tabs example"
        >
          <Tab label="Chỉnh sửa thông tin" {...a11yProps(1)} />
          <Tab label="Đổi mật khẩu" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
        </div>

        <div className={`${styles.row} row`}>
          <div className={`${styles.rowcol6} row`}>
            <div className="col-lg-4">
              <img className={styles.imguser} src={userInfo.img} alt="" />
            </div>
            <div className={`${styles.rowcol4} col-lg-4`}>
              <h4 className={styles.h4}>Họ Tên : {userInfo.ten} </h4>
              <p>
                <PinDropIcon />
                Địa Chỉ : {userInfo.dia_chi}
              </p>
            </div>
            <div className={`${styles.rowcol4} col-lg-4`}>
              <p>SDT : {userInfo.sdt}</p>

              <p className={styles.h4}>Email : {userInfo.email}</p>
            </div>
          </div>

          {/* <div className={`${styles.rowss} row`}>
                    <div className="col-lg-4">
                    <Link to='/edit-user' className={styles.link}><Button variant="contained">Chỉnh sửa thông tin</Button></Link>
                    </div>
                    <div className="col-lg-4">
                    <Link to='/edit-password'  className={styles.link}><Button variant="contained">Đổi Mật Khẩu</Button></Link>
                    </div>
                    <div className="col-lg-4">
                    <Button variant="contained">Followers</Button>
                    </div>
                </div> */}
        </div>
      </div>
      <FullWidthTabs 
      value={value}
      />
    </div>
  );
}

export default ProfileUser;
