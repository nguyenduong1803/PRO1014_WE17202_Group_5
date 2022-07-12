import React from "react";
import styles from "./MenuContetnOptions.module.css";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { red } from '@mui/material/colors';
function MenuContentOpTions() {
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
      <div
        class="accordion accordion-flush"
        style={{ borderRadius: "20px" }}
        className={styles.optionss}
      >
        <div className={styles.accordionItem}>
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              className={styles.accordionButton}
              class=" "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <div className={styles.accordTitle}>
                <div>
                  <h4>Categories</h4>
                </div>
                <div className={styles.icon}>
                  <ExpandMoreIcon />
                </div>
              </div>
            </button>
          </h2>{" "}
          <div className={styles.line}></div> <br />
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body" style={{ padding: "0" }}>
              <div className={styles.option}>
                <Checkbox {...label} /> Admin Templates
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="accordion accordion-flush"
        style={{ borderRadius: "20px", marginTop: "30px" }}
        className={styles.optionss}
      >
        <div className={styles.accordionItem}>
          <h2
            class="accordion-header"
            id="flush-headingOne"
            className={styles.accordionButton}
          >
            <div className={styles.accordTitle}>
              <div className={styles.accordTitleH4}>
                <h4>Price</h4>
              </div>
             
             </div>
          </h2>
          <div className={styles.line}></div> <br />
          <div className={styles.sliderPrice}>
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
          <div class="accordion-body" style={{ padding: "0" }}></div>
        </div>
      </div>
    </div>
  );
}

export default MenuContentOpTions;
