import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/SliceReducer/AuthSlice'
import { Link } from 'react-router-dom';

export default function ProfileAvatar() {
    const dispatch = useDispatch()
    const handleLogout = (e) => {
        dispatch(logOut())
    }


    return (
        <div className={`dropdown`} style={{marginRight:"12px"}} >
            
            <Avatar className="btn  dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </Avatar>
            <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton2" >
                <li><a className="dropdown-item d-flex align-items-center" href="#"> <Avatar /> Profile</a></li>
                <li><a className="dropdown-item d-flex align-items-center" href="#"><Avatar fontSize="small" /> My account</a></li>
                <li><a className="dropdown-item d-flex align-items-center" href="#"> <ListItemIcon>
                    <PersonAdd fontSize="medium" />
                </ListItemIcon> Add another account</a></li>
                <li><a className="dropdown-item d-flex align-items-center" href="#"><ListItemIcon>
                    <Settings fontSize="medium" />
                </ListItemIcon>
                    Settings</a></li>
                <li>
                    <div className="dropdown-item d-flex align-items-center" to="/"
                        onClick={handleLogout}
                    > <ListItemIcon>
                            <Logout fontSize="medium" />
                        </ListItemIcon>
                        Logout</div></li>
            </ul>
        </div>
    );
}