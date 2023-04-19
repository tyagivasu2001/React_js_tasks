import React from "react";
import '../pages/Home.scss'

const Product = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img id="img" src={props.src} alt={props.alt} />
      <p>{props.disc}</p>
      <button onClick={()=>props.handleproduct(props.id)}>Buy</button>
    </div>
  );
};

export default Product;

