import React from "react";
import DetailProductsOne from "../DetailProducts/DetailProductsOne/DetailProductsOne";
import DetailProductsTwo from "../DetailProducts/DetailProductsTwo/DetailProductsTwo";
import LayoutSite from "../LayoutSite/LayoutSite";
function DetailProducts() {

  return (
    <LayoutSite>
      <div className="row">
      <DetailProductsOne
    
      />
      </div>
      <div className='row'>
      <DetailProductsTwo />
      </div>
    </LayoutSite>
  );
}
export default DetailProducts;