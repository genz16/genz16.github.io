import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-black border-0">
        <img src="/card/banner.webp" className="card-img" alt="Banner" height="450px"  />
        <div className="card-img-overlay">
          <h2 className="card-title">Brownies Cake</h2>
          <p className="card-text">Apakah anda sedang jenuh dengan Tugas Yang Menumpuk ? untuk itu tidak perlu khwatir karena <br/> product kami sudah menyiapkan kue Brownies untuk anda karna kue Brownies bermanfaat untuk <br/> meningkatkan fungsi pikiran, menambahkan energi dan memulihkan stamina </p>
          <button className="btn btn-outline-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
