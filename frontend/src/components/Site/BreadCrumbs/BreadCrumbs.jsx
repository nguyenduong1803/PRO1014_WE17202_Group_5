import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import styles from "./BreadCrumbs.module.css";
import { Link } from "react-router-dom"
import Typography from "@mui/material/Typography";
// import { toSlug } from "../../../extensions/toSlug";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function BreadCrumbs(props) {

  return (
    <section
      className={styles.breadcrumbs}
      style={{ backgroundImage: `url(${props.img}` }}
    >
      <h3 className={styles.pageTitle}>{props.title}</h3>
      <Breadcrumbs
        maxItems={3}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        className={styles.breadcrumbsmenu}
      >
        {
          props.list.map((bread, index) => {
            return bread.active===false ?
              (
                <Link key={index} color="inherit"  to={bread.to}>
                  {bread.title}
                </Link>
              ) : (
                <p key={index}>{bread.title}</p>
              )
          })
        }
        {props.subtitle && <Typography  component="div" key="2" color="text.primary">
          {props.subtitle}
        </Typography>}
        ,
      </Breadcrumbs>
    </section>
  );
}

export default BreadCrumbs;
