import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import Me from "../../img/me.JPEG";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Hafiz Junaid Ahmed ANSARI</h1>
        <p className="pl-desc">
        
        </p>
      </div>
      <div className="pl-list">
      {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
        {/* <img src={Me} alt="" className="i-img" /> */}
      </div>
    </div>
  );
};

export default ProductList;
