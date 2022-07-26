import React from "react";
import styles from "./MenuContetnOptions.module.css";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import InputLabel from '@mui/material/InputLabel';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';


function MenuContentOpTions({setModalShow,modalShow}) {
  
  const handleShowOrder = () => {
      setModalShow(!modalShow)
  }

  // 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function valuetext(value) {
    return `${value} VNĐ`;
  }
  const [value, setValue] = React.useState([0, 500000]);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className={styles.Menu}>
      <div style={{ display: 'flex', width: '100%' }} className="position-relative">
        <input type="search" placeholder="Tìm kiếm..." className={styles.searchInput} />
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
                <Checkbox {...label} /> Admin Templates
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
                min={0}
                step={1000}
                max={600000}
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
                <h4>Đặt bàn</h4>
              </div>

            </div>
          </h2>
          <div className={styles.line}></div> <br />
          <div className={styles.sliderPrice} style={{ color: 'white !important' }}>
            <div className="modal-container" onClick={handleShowOrder}>
              {/* <input id="modal-toggle" type="checkbox" /> */}
              <p className={styles.orderTable_btn}>Đặt bàn</p>
            </div>
              
          </div>
          <div className="accordion-body" style={{ padding: "0" }}></div>
        </div>
      </div>
      {/* <div
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
                <h4>Tags</h4>
              </div>

            </div>
          </h2>
          <div className={styles.line}></div> <br />
          <div className={styles.sliderPrice} style={{ color: 'white !important' }}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={ac}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="accordion-body" style={{ padding: "0" }}></div>
        </div>
      </div> */}


    </div>
  );
}

export default MenuContentOpTions;
