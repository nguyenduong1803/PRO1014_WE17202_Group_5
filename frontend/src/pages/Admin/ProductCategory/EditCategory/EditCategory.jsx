import React, { useState } from 'react';
import styles from "../AddCategory/AddCategory.module.css";
import Header from "../../../../components/Admin/Header/Header";
import Breadcrumbs from "../../../../components/Admin/BreadCrumb/Breadcrumb";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar"
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../../../redux/selector';
import { updateCategory } from '../../../../redux/SliceReducer/CategorySlice';
import { useHistory } from 'react-router';
import ToastMess from '../../../../components/Site/ToastMess/ToastMess';
import { Link } from 'react-router-dom';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const EditCategory = () => {
  const [nameCategory, setNameCategory] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()
  const [state,setState] = useState(false)
  const breadcrumItem = [
    {
      href: "/admin/quan-ly-danh-muc",
      title: "Quản lý",
      isActive: false,
    },
    {
      href: "admin/sua-danh-muc",
      title: "sua-danh-muc",
      isActive: true,
    },
  ];

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateCategory({ id: idCategory, name:nameCategory}))
    setState(true)
    // history.push("/admin/quan-ly-danh-muc")
  }
  const categories = useSelector(selectCategory)
  const idCategory = window.location.pathname.split("/")[3]
  const category = categories.find(item => item.id === Number(idCategory))
  return (
    <>
      <Sidebar />
      {window.innerWidth <= 425 && <Header />}
      <div className={`${styles.main}`}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <h2 style={{ fontSize: `30px`, fontWeight: `bold`, color: `#1A358F` }}>
          Sửa danh mục
        </h2>
        
          <div >
            <form
              onSubmit={e => handleSubmit(e)}
            >
              <div className={`${styles.form}`}>
                <div className={`${styles.formRow} `}>
                  <div className={`${styles.formLeft} `}>
                    <div className={`${styles.wrapLeft}`}>
                      <label htmlFor="">
                        Mã danh mục
                      </label>
                      <input
                        className="form-control" id="disabledInput" type="text" disabled
                        value={category && category.id}
                      />
                    </div>
                  </div>
                  <div className={`${styles.formRight} `}>
                    <div className={`${styles.wrapRight}`}>
                      <label htmlFor="">
                        Sửa danh mục
                      </label>
                      <input
                        defaultValue={category && category.name}
                        type="text"
                        name="name"
                        onChange={(event) => {
                          setNameCategory(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.formRow} `}>
                <div className={`${styles.formLeft} `}>
                </div>
                <div className={`${styles.formRight} `}>
                  <div className={`${styles.buttonSection}`}>
                    <button type="submit" className={`${styles.btnAdd}`} >
                      Cập nhật
                    </button>
                    <Link className={`${styles.btnCancel}`} to="/admin/quan-ly-danh-muc">Huỷ</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
      </div>
       <ToastMess notify="đã sửa thành công" setState={setState} state={state}/>
    </>
  )
}

export default EditCategory