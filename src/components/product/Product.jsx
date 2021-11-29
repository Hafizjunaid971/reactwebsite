import "./product.css";
// import Me from "../../img/me.JPEG";

const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>

      <img src={img} alt="" className="p-img" />
      <img src={link} alt="" className="p-img" />
    </div>
  );
};

export default Product;
