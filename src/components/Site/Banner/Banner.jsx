import React from "react";
import { Link } from "react-router-dom";
import styles from "./Banner.module.css";


function Banner() {
  return (
    <section className={`${styles.hero} ${styles.heroNormal}`}>
      <div className="container">
        <div className="row justify-content-center align-items-start">
          <div className="col-lg-12">
            <div className={styles.hero__item}>
              <div className={styles.hero__text}>
                <span>Hoa quả sạch</span>
                <h2 className={styles.banner_title}>
                  Rau củ<br />
                  100% Organic
                </h2>
                <p>Miễn phí giao hàng</p>
                <Link to="/" className={`btn ${styles.primaryBtn}`}>
                  MUA HÀNG
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
