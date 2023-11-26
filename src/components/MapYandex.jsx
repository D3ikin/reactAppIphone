//0794a364-5811-4b4d-90b7-07d0eeeeea177
//23a7e5bd-824a-478e-a604-97ab8e6ce16f

// import React from "react";
// import { YMaps, Map } from "react-yandex-maps";

// const MapYandex = () => {
//   return (
//     <YMaps>
//       <div>
//         <Map
//           defaultState={{ center: [51.786326, 55.112074], zoom: 10 }}
//           style={{ width: "600px", height: "400px" }}
//         />
//       </div>
//     </YMaps>
//   );
// };

// export default MapYandex;
//0794a364-5811-4b4d-90b7-07d0eeeeea177
//23a7e5bd-824a-478e-a604-97ab8e6ce16f
import logo from "../images/logo.svg";
import React, { useEffect } from "react";

const MapYandex = () => {
  const initMap = () => {
    const myMap = new window.ymaps.Map("map", {
      center: [51.786326, 55.112074],
      zoom: 10,
    });

    const placemark1 = new window.ymaps.Placemark(
      [51.786326, 55.112074],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../images/1.svg",
        iconImageSize: [110, 130],
        iconImageOffset: [-10, -20],
      }
    );

    myMap.geoObjects.add(placemark1);
  };

  useEffect(() => {
    const loadYMaps = async () => {
      if (!window.ymaps) {
        const script = document.createElement("script");
        script.src =
          "https://api-maps.yandex.ru/2.1/?apikey=23a7e5bd-824a-478e-a604-97ab8e6ce16f&lang=ru_RU";
        script.async = true;

        script.onload = () => {
          window.ymaps.ready(initMap);
        };

        document.head.appendChild(script);
      } else {
        initMap(); // Инициализировать карту, если ymaps уже загружены
      }
    };

    loadYMaps();
  }, []);

  return <div id="map" style={{ width: "600px", height: "400px" }} />;
};

export default MapYandex;
