import React from "react";
import styles from "./ShopProducts.module.css";
import { DataContext } from "../../../contexts/DataContext"
import {ListProduct} from "../../../components/Site/FeaturedProduct/FeaturedProduct"


function ShopProducts() {
  const { data, action } = React.useContext(DataContext);
  const { renderProduct, setRenderProduct } = action
  const handleSort = function (e) {
    setRenderProduct({ type: e.target.value })
  }
  return (
    <div>
      <div className={` ${styles.shopProduct}`}>
        <div className={`d-flex justify-content-between align-items-center ${styles.shopFilter}`}>
          <div className={`d-flex justify-content-around ${styles.productSort}`}>
            <p>Sắp xếp</p>
            <div className={` ${styles.productSortOptions}`}>
              <select onChange={e => handleSort(e)}>
                <option value="">Xếp theo</option>
                <option value="sortDescend">Theo Giá Giảm Dần</option>
                <option value="sortPrice">Theo Giá Tăng dần</option>
              </select>
            </div>
          </div>
          <div className={styles.productFounded}>
            <h4 className={styles.title}>Tìm thấy {data.renderProduct(renderProduct) && data.renderProduct(renderProduct).length} sản phẩm</h4>
          </div>
        </div>
        <ListProduct
          data={data}
          renderProduct={renderProduct}
          col="col-lg-4 col-md-6 col-sm-6"
        />
      </div>
    </div>
  );
}


export default ShopProducts;
