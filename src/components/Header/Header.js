import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header pt-10 flex flex-col lg:flex-row">
      <section className="p-10 lg:w-1/2">
        <h1 className="text-white text-3xl font-semibold">Reach your audience & convert your leads</h1>
        <p className="text-white py-5">
          Get your customers with SEO, rank your business with email marketing,
          build sales leads
        </p>
        <div className="buttons flex">
          <button className="bg-green-400 rounded-md px-5 py-1">
            Get Started
          </button>
          <button className="watch-btn rounded-md px-5 py-1 mx-3 text-white">
            Watch Demo
          </button>
        </div>
      </section>
      <section className="p-10">
        <img className="header-image " src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/04/106032482.jpeg?auto=format&q=60&fit=max&w=930" alt="" />
      </section>
    </div>
  );
};

export default Header;
