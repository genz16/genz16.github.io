import React, { useState } from "react";
import Menuies from "./Menuies";

const Menu = () => {
  const [data, setData] = useState(Menuies);
  const filterResult = (catItem) => {
    const result = Menuies.filter((curData) => {
      return curData.menu === catItem;
    });
    setData(result);
  };
  return (
    <>
      <div>
        <div className="container my-3 py-3">
          <div className="row">
            <div className="col-12 mb-5" >
              <h1 className="display-6 fw-bolder text-center">OUR MENU</h1>
              <hr />
              <div className="row justify-content-center">
                <div className="buttons d-flex justify-content-center mb-3 pb-3">
                  <button className="btn btn-outline-dark me-2" onClick={() => setData(Menuies)}>
                    All
                  </button>
                  <button className="btn btn-outline-dark me-2" onClick={() => filterResult("Pancake")}>
                    Pancake
                  </button>
                  <button className="btn btn-outline-dark me-2" onClick={() => filterResult("Cookies")}>
                    Cookies
                  </button>
                  <button className="btn btn-outline-dark me-2" onClick={() => filterResult("Brownies")}>
                    Brownies
                  </button>
                  <button className="btn btn-outline-dark me-2" onClick={() => filterResult("Cupcake")}>
                    Cupcake
                  </button>
                </div>
                
                <div className="col-md-9 ">
                  <div className="row">
                    {data.map((values) => {
                      const { id, title, rp, image } = values;
                      return (
                        <>
                          <div className="col-md-4 mb-4" key={id}>
                            <div className="card">
                              <img src={image} class="card-img-top" alt="..." />
                              <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">Rp {rp}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
