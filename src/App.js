import Header from "./components/Header";
import HeaderMain from "./components/HeaderMain";
import Calculator from "./components/Calculator";
import iphons from "./images/backIphons.png";
import "./App.scss";
import "./AppMedia.scss";
import Conditions from "./components/Conditions";
import Subscrib from "./components/Subscribe";
import Payment from "./components/Payment";
import Reviews from "./components/Reviews";
import QuestionsAnswers from "./components/QuestionsAnswers";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="wrapper-header">
        <Header />
        <HeaderMain />
      </div>

      <div className="bg-iphons2">
        <img className="bg-iphons-img" src={iphons} />
        <Calculator />
      </div>
      <Conditions />
      <Subscrib />
      <Payment />
      <Reviews />
      <QuestionsAnswers />
      <Schedule />
      <Footer />
      <div className="the-end">
        <p>© 2023 Все права защищены</p>
      </div>
    </div>
  );
}

export default App;
