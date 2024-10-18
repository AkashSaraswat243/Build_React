import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrice = ["12,495", "11,800", "1,999", "599"];
  let newPrice = ["8,999", "9,199", "899", "278"];
  let description = [
    ["8,000 DPI", "5 Programmable buttons"],
    ["intuitive surface", "designed for iPad Pro"],
    ["designed for iPad Pro", "intuitive surface"],
    ["Wireless", "optical orientation"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Product;
