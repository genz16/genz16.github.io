import React, { useState } from "react";
import "./Cart.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import {Products} from'./Products';

const Cart = () => {

  const [item, setItem] = useState (Products);
  return (
    <>
      <header>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>5</p>
        </div>
      </header>
      <section className="main-cart-section mx-2 ">
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {
                item.map((curItem)=>{
                  return <Items key={curItem.id} {...curItem}/>

                })
              }

            </Scrollbars>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
