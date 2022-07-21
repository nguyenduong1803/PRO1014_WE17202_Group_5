import React from "react";
import MenuContentOptions from "./MenuContentOptions/MenuContentOpTions";
import LayoutSite from "../LayoutSite/LayoutSite";
import MenuContentDetail from "./MenuContentDetail/MenuContentDetail";
import product1 from "../../../assets/img/seafood-1.jpg";
import ButtonCart from "../../../components/Site/ContentHome/ButtonCart/ButtonCart";
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const product = [
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
  {
    img: product1,
    title: "overlay",
    content: "Copyright 2022. Made with love by Iqonic Design",
  },
];

function MenuContent() {
  return (
    <LayoutSite>
      <ButtonCart />
      <div className="container-fluid">
        <div className="row position-relative">
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div style={{display:'flex'}}>
              <input type="search" placeholder="Search" style={{fontSize:'1rem',padding: "10px 15px",borderRadius:'20px',border:'1px solid #FF7272',backgroundColor:'rgba(255,255,255,0.5)',marginBottom:'30px',width:'100%',marginLeft:'-3px'}}/>
              <div className="icon" style={{marginTop: "20px",color:'#FF7272'}}><SearchIcon/></div>
            </div>
            <div className="">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={ac}
                  label="Age"
                  onChange={0}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            </div>
          </div>
          <div className="col-lg-3">
            <MenuContentOptions />
          </div>
          <div className="col-lg-9">
            <div className="row">
              {product.map((products, index) => {
                return (
                  <MenuContentDetail
                    key={index}
                    img={products.img}
                    title={products.title}
                    content={products.content}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </LayoutSite>
  );
}

export default MenuContent;
