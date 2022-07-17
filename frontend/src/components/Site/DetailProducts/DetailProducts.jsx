import React from "react";
import DetailProductsOne from "../DetailProducts/DetailProductsOne/DetailProductsOne";
import DetailProductsTwo from "../DetailProducts/DetailProductsTwo/DetailProductsTwo";
function DetailProducts() {
  return (
    <div>
      <div className="row">
      <DetailProductsOne />
      </div>
      <div className='row'>
      <DetailProductsTwo />
      </div>
    </div>
  );
}

export default DetailProducts;
