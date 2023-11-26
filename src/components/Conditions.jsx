import React from "react";
import iphons from "../images/iphoneConditions.svg";
import img1 from "../images/conditions1.svg";
import img2 from "../images/conditions2.svg";
import img3 from "../images/conditions3.svg";
import img4 from "../images/conditions4.svg";
import img5 from "../images/conditions5.svg";
import img6 from "../images/conditions6.svg";
import ModalOrder from "./ModalOrder";

function Conditions(props) {
  return (
    <div className="conditions-wrapper">
      <div className="your-container">
        <div className="main">
          <div className="block-title">
            <div className="your-title">
              Узнайте, есть ли смартфон с нужным вам объёмом памяти и в желаемом
              цвете в наличии
            </div>

            <ModalOrder
              toggle={true}
              className="your-check-availability-button"
              text="Уточнить наличие"
            />
          </div>
          <img
            loading="lazy"
            src={iphons}
            className="your-image"
            alt="Smartphone"
          />
        </div>
        <div className="your-subtitle" id="advantages">
          Почему технику Apple заказывают у нас?
        </div>
        <div className="feature-block">
          <div className="your-feature-container">
            <div className="your-feature">
              <img
                loading="lazy"
                src={img1}
                className="your-feature-icon"
                alt="Originality"
              />
            </div>
            <div className="your-feature-description">
              <div className="your-feature-title">100% оригинальность</div>
              <div className="your-feature-text">
                Мы продаем только оригинальную технику Apple, при этом стоимость
                устройств за счёт доставки из Дубая в среднем на 30% ниже, чем в
                других магазинах
              </div>
            </div>
          </div>
          <div className="your-feature-container">
            <div className="your-feature">
              <img
                loading="lazy"
                src={img2}
                className="your-feature-icon"
                alt="Stores"
              />
            </div>
            <div className="your-feature-description">
              <div className="your-feature-title">Магазины в Оренбурге</div>
              <div className="your-feature-text">
                Вы можете посетить наш магазин и приобрести понравившуюся
                технику и комплектующие к ней, а также получить сервисное
                обслуживание
              </div>
            </div>
          </div>
          <div className="your-feature-container">
            <div className="your-feature">
              <img
                loading="lazy"
                src={img3}
                className="your-feature-icon"
                alt="Cashback"
              />
            </div>
            <div className="your-feature-description">
              <div className="your-feature-title">
                Кешбэк до 22% от стоимости
              </div>
              <div className="your-feature-text">
                При заказе телефона из Дубая, вы можете вернуть часть суммы по
                системе Tax-free в течение 5 – 7 дней после оплаты
              </div>
            </div>
          </div>
          <div className="your-feature-container">
            <div className="your-feature">
              <img
                loading="lazy"
                src={img4}
                className="your-feature-icon"
                alt="Return"
              />
            </div>
            <div className="your-feature-description">
              <div className="your-feature-title">
                Возврат в течение 14 дней
              </div>
              <div className="your-feature-text">
                Если вас что-либо не устроит, вы сможете вернуть товар и
                получить на карту 100% средств обратно в течение 3-х рабочих
                дней
              </div>
            </div>
          </div>
          <div className="your-feature-container">
            <div className="your-feature">
              <img
                loading="lazy"
                src={img5}
                className="your-feature-icon"
                alt="Delivery"
              />
            </div>
            <div className="your-feature-description">
              <div className="your-feature-title">Бережная доставка по РФ</div>
              <div className="your-feature-text">
                При всех отправлениях мы указываем повышенный класс хрупкости, а
                также страхуем посылку с описью содержимого
              </div>
            </div>
          </div>
          <div className="your-feature-container">
            <div className="your-feature">
              <img
                loading="lazy"
                src={img6}
                className="your-feature-icon"
                alt="Warranty"
              />
            </div>
            <div className="your-feature-description">
              <div className="your-feature-title">
                Официальная гарантия – 1 год
              </div>
              <div className="your-feature-text">
                При возникновении неисправностей, вы можете сдать устройство на
                бесплатный ремонт в любой авторизированный сервисный центр Apple
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conditions;
