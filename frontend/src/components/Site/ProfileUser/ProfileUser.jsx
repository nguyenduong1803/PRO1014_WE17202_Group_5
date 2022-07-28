import React from "react";
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
const User = [
  {
    img: imguser,
    name: "Devon Lane",
    address: "Lisbon, Portugal",
    addressEmail: "Hoa121102@gmail.com",
    phone: '0987654321',
  },
];

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

function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: "70%" }} className={styles.Box}>
      <AppBar position="static" className={styles.AppBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="white"
          textColor="inherit"
          aria-label="full width tabs example"
        >
          <Tab label={<AccountCircleIcon />} {...a11yProps(0)} />

          <Tab label="Chỉnh sửa thông tin" {...a11yProps(1)} />
          <Tab label="Đổi mật khẩu" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      {/* <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
      <TabPanel value={value} index={0} dir={theme.direction}></TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <EditUser />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <EditPass />
      </TabPanel>

      {/* </SwipeableViews> */}
    </Box>
  );
}

function ProfileUser() {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.img}></div>
        <div className={`${styles.row} row`}>
          {User.map((users, index) => (
            <div className={`${styles.rowcol6} row`}>
              <div className="col-lg-4">
                <img className={styles.imguser} src={users.img} alt="" />
              </div>
              <div className={`${styles.rowcol4} col-lg-4`}>
                
                <h4 className={styles.h4}>Họ Tên : {users.name} </h4>
                <p>
                  <PinDropIcon />
                  Địa Chỉ : {users.address}
                  
                </p>
              </div>
              <div className={`${styles.rowcol4} col-lg-4`}>
                <p>SDT : {users.phone}</p>

                <p className={styles.h4}>Email : {users.addressEmail}</p>
              </div>
            </div>
          ))}

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
      <FullWidthTabs />
    </div>
  );
}

export default ProfileUser;
