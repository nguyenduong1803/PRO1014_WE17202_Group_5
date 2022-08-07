import React, { useState } from 'react';
import styles from "./AddCategory.module.css";
import Header from "../../../../components/Admin/Header/Header";
import Breadcrumbs from "../../../../components/Admin/BreadCrumb/Breadcrumb";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar"
import { useDispatch } from 'react-redux';
import { addCategorys } from '../../../../redux/SliceReducer/CategorySlice';
import ToastMess from '../../../../components/Site/ToastMess/ToastMess';

const AddCategory = () => {
  const [state,setState] = useState(false)
  const dispatch = useDispatch()
  const breadcrumItem = [
    {
      href: "/admin/quan-ly-danh-muc",
      title: "Quản lý",
      isActive: false,
    },
    {
      href: "/them-danh-muc",
      title: "Thêm loại danh mục",
      isActive: true,
    },
  ];
  const [nameCategory, setNameCategory] = useState('')
  const handleSubmit = e => {
    e.preventDefault();
    setState(true)
    dispatch(addCategorys(nameCategory))
  }
  return (
    <>
      <Sidebar />
      {window.innerWidth <= 425 && <Header />}
      <div className={`${styles.main}`}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <h2 style={{ fontSize: `30px`, fontWeight: `bold`, color: `#1A358F` }}>
          Thêm loại danh mục mới
        </h2>
        <div>
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
                    />
                  </div>
                </div>
                <div className={`${styles.formRight} `}>
                  <div className={`${styles.wrapRight}`}>
                    <label htmlFor="">
                      Tên danh mục
                    </label>
                    <input
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
                  <button type="submit" className={`${styles.btnAdd}`}>
                    Thêm loại danh mục
                  </button>
                  <button className={`${styles.btnCancel}`} path="quan-ly-danh-muc">Huỷ</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastMess notify="đã thêm thành công" setState={setState} state={state} />
    </>
  )
}

export default AddCategory