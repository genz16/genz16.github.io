import React from "react";

const Items = ({price,title,img,amount}) => {
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} />
        </div>
        <div className="title">
          <h4>{title}</h4>
        </div>
        <div className="add-minus-quantity">
          <i className="fas fa-minus minus"></i>
          <input type="text" placeholder="2" />
          <i className="fas fa-plus add"></i>
        </div>
        <div className="price">
          <h4>{price}</h4>
        </div>
        <div className="remove-item">
          <i className="fas fa-trash-alt remove"></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;
