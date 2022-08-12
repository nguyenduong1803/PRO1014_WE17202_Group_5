import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/SliceReducer/AuthSlice";
import { Link } from "react-router-dom";

export default function ProfileAvatar() {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    dispatch(logOut());
  };

  return (
    <div className={`dropdown`} style={{ marginRight: "12px" }}>
      <Avatar
        style={{ width: "30px", height: "30px" }}
        className="btn"
        type="button"
        id="dropdownMenuButton2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {/* Dropdown button */}
      </Avatar>
      <ul
        className="dropdown-menu mt-30"
        aria-labelledby="dropdownMenuButton2"
        style={{ borderRadius: "10px" }}
      >
        <li>
          <Link
            className="dropdown-item d-flex align-items-center"
            style={{ fontSize: ".8rem" }}
            to="/profile"
          >
            
            <Avatar
              fontSize="small"
              style={{ width: "25px", height: "25px",marginRight:'10px'}}
            />
            Profile
          </Link>
        </li>
        {/* <li>
          <a
            className="dropdown-item d-flex align-items-center"
            style={{ fontSize: ".8rem" }}
            href="#"
          >
            <Avatar
              fontSize="small"
              style={{ width: "25px", height: "25px" }}
            />
           Trang quản trị
          </a>
        </li> */}
        <li>
          <Link
            className="dropdown-item d-flex align-items-center"
            style={{ fontSize: ".8rem" }}
            to='/dang-ky'
          >
            <ListItemIcon style={{ minWidth: "0" ,paddingRight: "10px"}}>
              <PersonAdd fontSize="medium" />
            </ListItemIcon>
            Add another account
          </Link>
        </li>
        {/* <li>
          <Link
            className="dropdown-item d-flex align-items-center"
            style={{ fontSize: ".8rem" }}
            to=''
          >
            <ListItemIcon style={{ minWidth: "0" }}>
              <Settings fontSize="medium" />
            </ListItemIcon>
            Settings
          </Link>
        </li> */}
        <li>
          <div
            className="dropdown-item d-flex align-items-center"
            style={{ fontSize: ".8rem" }}
            to="/"
            onClick={handleLogout}
          >
            
            <ListItemIcon style={{ minWidth: "0" ,paddingRight: "10px"}}>
              <Logout fontSize="medium" />
            </ListItemIcon>
            Logout
          </div>
        </li>
      </ul>
    </div>
  );
}
