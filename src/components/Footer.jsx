import React from "react";
import logo from "../images/logo.svg";
import footerIphone from "../images/footerIphone.png";
function Footer() {
  return (
    <div className="wrapper-footer">
      <div className="block-logo">
        <img src={logo} alt="logo" />
        <p>Оригинальная техника и аксессуары Apple</p>
      </div>
      <img
        className="footer-iphone-img"
        src={footerIphone}
        alt="footerIphone"
      />
      <div className="block-links">
        <a href="#choose-model">Версии и цены</a>
        <a href="#advantages">Преимущества</a>
        <a href="#aboutUs">О нас</a>
        <a href="#howWeWork">Как мы работаем?</a>
        <a href="#reviews">Отзывы</a>
      </div>
    </div>
  );
}

export default Footer;
