import React from "react";
import styles from "./MenuContetnOptions.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { selectCategory } from "../../../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../redux/SliceReducer/ManagerProductSlice";
import useDebounce from "../../../../hooks/useDebounce";

function MenuContentOpTions() {
  const listCategory = useSelector(selectCategory)
  const [activeCate, setActiveCate] = React.useState("")
  const [value, setValue] = React.useState([0, 500000]);
  const [keySearch, setKeySearch] = React.useState("");
  const debounceSearch = useDebounce(keySearch, 500)
  const debounceRange = useDebounce(value, 500)
  const dispatch = useDispatch()
  const handleActiveCate = (idCate) => {
    setActiveCate(idCate)
    dispatch(getProducts({ keySearch: debounceSearch, limit: 30,category:idCate}))
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function valuetext(value) {
    return `${value} VNĐ`;
  }

  const handleSearch = (e) => {
    setKeySearch(e.target.value);
  }
  React.useEffect(() => {
    dispatch(getProducts({ keySearch: debounceSearch, limit: 30,category:activeCate,from:debounceRange[0],to:debounceRange[1] }))
  }, [debounceSearch,debounceRange])
  return (
    <div className={styles.Menu}>
      <div style={{ display: 'flex', width: '100%' }} className="position-relative">
        <input type="search" placeholder="Tìm kiếm..." className={styles.searchInput} onChange={e=>handleSearch(e)}/>
        <div className={`icon position-absolute ${styles.searchIcon}`} ><SearchSharpIcon fontSize='small' /></div>
      </div>
      <div
        style={{ borderRadius: "20px" }}
        className={styles.optionss}
      >
        <div className={styles.accordionItem}>
          <h2 className="accordion-header " id="flush-headingOne">
            <button
              className={`${styles.accordionButton} d-flex justify-content-between align-items-center`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <div className={styles.accordTitle}>
                <div>
                  <h4>Danh mục</h4>
                </div>

              </div>
              <div className={styles.icon}>
                <ExpandMoreIcon />
              </div>
            </button>

          </h2>{" "}
          <div className={styles.line}></div> <br />
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={{ padding: "0" }}>
              <div className={styles.option}>
              <div className={activeCate === "" ? `form-check ${styles.input_space} ${styles.input_space_active}` : `form-check ${styles.input_space}`}  >
                      <input onClick={() => handleActiveCate("")}  className="form-check-input" type="radio" name="flexRadioDefault" id={`all__category`} />
                      <label onClick={() => handleActiveCate("")} className={`form-check-label ${styles.input_label}`} htmlFor={`all__category`}>
                        Tất cả 
                      </label>
                    </div>
                {
                  listCategory.map((category, index) => (
                    <div className={activeCate === category.id ? `form-check ${styles.input_space} ${styles.input_space_active}` : `form-check ${styles.input_space}`} key={category.id} >
                      <input onClick={() => handleActiveCate(category.id)}  className="form-check-input" type="radio" name="flexRadioDefault" id={`${category.name}__category`} />
                      <label onClick={() => handleActiveCate(category.id)} className={`form-check-label ${styles.input_label}`} htmlFor={`${category.name}__category`}>
                        {category.name}
                      </label>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ borderRadius: "20px", marginTop: "30px" }}
        className={styles.optionss}
      >
        <div className={styles.accordionItem}>
          <h2
            id="flush-headingOne"
            className={styles.accordionButton}
          >
            <div className={styles.accordTitle}>
              <div className={styles.accordTitleH4}>
                <h4>Chọn mức giá</h4>
              </div>

            </div>
          </h2>
          <div className={styles.line}></div> <br />
          <div className={styles.sliderPrice} style={{ color: 'white !important' }}>
            <Box sx={{ width: "90%" }}>
              <Slider
                onChange={handleChange}
                getAriaLabel={() => "Price range"}
                min={1}
                step={1000}
                max={2000000}
                value={value}
                valueLabelDisplay="auto"
                color="secondary"
                getAriaValueText={valuetext}
              />
            </Box>
          </div>
          <div className="accordion-body" style={{ padding: "0" }}></div>
        </div>
      </div>
    </div>
  );
}

export default MenuContentOpTions;
