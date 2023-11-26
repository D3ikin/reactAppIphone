import React from "react";
import dubai from "../images/dubai.svg";
import img1 from "../images/eva-pin-outline.svg";
import img2 from "../images/iconoir-cash.svg";
import img3 from "../images/material-symbols-shield-outline.svg";
import img4 from "../images/solar-like-line-duotone.svg";
 
import SelectButton from "./SelectButton";
function HeaderMain() {
  return (
    <div className="header-main">
      <p className="header-order">Закажите</p>
      <div className="block-iphone">
        <p>
          Apple iPhone 15 <p style={{ display: "inline" }}>из</p>
        </p>

        <div style={{ display: "flex" }}>
          <img src={dubai} alt="dubai" />
          <p>Дубая</p>
        </div>
      </div>
      <p className="header-price" id="header-price">
        по ценам на 30% ниже, чем в популярных сетевых магазинах
      </p>

      <div className="block-info">
        <div className="block-info__item">
          <img src={img2} alt="" />
          <div>
            <p>Кешбэк 22% от покупки</p>
            <p>при заказе из Дубая</p>
          </div>
        </div>
        <div className="block-info__item">
          <img src={img4} alt="" />
          <div>
            <p>Более 1100 довольных</p>
            <p>клиентов и 400+ отзывов</p>
          </div>
        </div>
        <div className="block-info__item">
          <img src={img1} alt="" />
          <div>
            <p>Доставка по всей России</p>
            <p>в течение 3 – 7 дней</p>
          </div>
        </div>
        <div className="block-info__item">
          <img src={img3} alt="" />
          <div>
            <p>Гарантия 1 год, а также</p>
            <p>рассрочка 0% до 12 мес.</p>
          </div>
        </div>
      </div>
      <SelectButton href="#choose-model" text="Перейти к выбору" />
    </div>
  );
}

export default HeaderMain;
