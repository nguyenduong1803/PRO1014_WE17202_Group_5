import React from 'react'
import styles from './ProfileUser.module.css';
import imguser from '../../../assets/img/seafood-1.jpg';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
const User = [
    {
        img:imguser,
        name:'Devon Lane',
        address:'Lisbon, Portugal',
        addressEmail:'Hoa121102@gmail.com',
    },
    
];
function ProfileUser() {
  return (
    <div className={styles.content}>
        <div className={styles.img}></div>
        <div className={`${styles.row} row`}>
            <div className='col-lg-6'>
                {
                    User.map((users, index)=>(
                        <div className={`${styles.rowcol6} row`}>
                    <div className="col-lg-4"><img className={styles.imguser} src={users.img} alt="" /></div>
                    <div className={`${styles.rowcol4} col-lg-4`}> <h4 className={styles.h4}>{users.name} </h4> <p><PinDropIcon/>{users.address}</p></div>
                    <div className={`${styles.rowcol4} col-lg-4`}>
                        <p>UI/UX Designer</p>
                        
                        <p className={styles.h4}>

                        {users.addressEmail}

                        </p>
                        <p>Email</p>
                        
                        </div>
                </div>
                    ))
                }
            </div>
            <div className={`${styles.col6} col-lg-6`}>
                <div className={`${styles.rowss} row`}>
                    <div className="col-lg-4">
                    <Link to='/edit-user'><Button variant="contained">Chỉnh sửa thông tin</Button></Link>
                    </div>
                    <div className="col-lg-4">
                    <Link to='/edit-password'><Button variant="contained">Đổi Mật Khẩu</Button></Link>
                    </div>
                    <div className="col-lg-4">
                    <Button variant="contained">Followers</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileUser