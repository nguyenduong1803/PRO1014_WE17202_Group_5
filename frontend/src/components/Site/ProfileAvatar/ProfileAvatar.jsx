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
import { removeUserSession } from '../../../utils/Common';
export default function ProfileAvatar() {
    const handleLogout = (e) => {
        removeUserSession()
    }
    return (
        <div className={`dropdown`}  >
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
                    <a className="dropdown-item d-flex align-items-center" href="/"
                        onClick={handleLogout}
                    > <ListItemIcon>
                            <Logout fontSize="medium" />
                        </ListItemIcon>
                        Logout</a></li>
            </ul>
        </div>
    );
}