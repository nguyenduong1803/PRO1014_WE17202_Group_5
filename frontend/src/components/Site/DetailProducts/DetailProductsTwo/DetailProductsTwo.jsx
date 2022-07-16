import React from 'react'
import styles from './DetailProductsTwo.module.css';
import productsImg from '../../../../assets/img/seafood-1.jpg';
const products = [
    {
        img:productsImg,
        name:'Tôm Bé',
        price:'$1222',
    },
    
    {
        img:productsImg,
        name:'Tôm Bé',
        price:'$1222',
    }
];
function DetailProductsTwo() {
  return (
    <div className={`${styles.row} row`}>
        <div className={`${styles.col9} col-lg-9`}>
            <div className={styles.title}>
            Our Specials
            </div>
            <div className={styles.products}>
                {
                    products.map((value,index)=>{
                        return (
                            <div className={`${styles.list} col-lg-6`}>
                                <img src={value.img} alt=""/><br />
                                {value.name}
                               {value.price}
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
        <div className={`${styles.col3} col-lg-3`}>b</div>
    </div>
  )
}

export default DetailProductsTwo