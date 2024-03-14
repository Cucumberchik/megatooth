import React from "react";
import "./Doc.css";
import logo from "../Doctor/img/Rectangle 117.png";
import logo1 from "../Doctor/img/Rectangle 108.png";
import logo2 from "../Doctor/img/Rectangle 60.png";
import logo3 from "../Doctor/img/Rectangle 74.png";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

const Doc = () => {
  return (
    <div id="doc">
      <div className="container">
        <div className="doc">
          <div className="doc_bet">
            <h1>Наши доктора</h1>
            <h6>все врачи</h6>
          </div>
          <div className="doc_block">
            <div className="block1">
              <img src={logo3} alt="" />
              <div className="doc_op">
                <h1>10</h1>
                <div className="doc_op2">
                  <h6>Лет</h6>
                  <h6>опыта</h6>
                </div>
              </div>
              <p>Спиридонова Анна</p>
              <h3>
                Стоматолог-имплантолог,
                <br /> стоматолог-хирург,
                <br /> стоматолог-ортопед
              </h3>
              <div className="doc_icon">
                <div className="icon">
                  <MapsUgcIcon />
                  <h6>Отзывы</h6>
                </div>
                <PlayCircleFilledWhiteIcon style={{ color: "#2CB2BB" }} />
              </div>
            </div>
            <div className="block1">
              <img src={logo1} alt="" />
              <div className="doc_op">
                <h1>10</h1>
                <div className="doc_op2">
                  <h6>Лет</h6>
                  <h6>опыта</h6>
                </div>
              </div>
              <p>Алексеев Константин</p>
              <h3>
                Стоматолог-имплантолог,
                <br /> стоматолог-хирург,
                <br /> стоматолог-ортопед
              </h3>
              <div className="doc_icon">
                <div className="icon">
                  <MapsUgcIcon />
                  <h6>Отзывы</h6>
                </div>
                <PlayCircleFilledWhiteIcon style={{ color: "#2CB2BB" }} />
              </div>
            </div>
            <div className="block1">
              <img src={logo2} alt="" />
              <div className="doc_op">
                <h1>10</h1>
                <div className="doc_op2">
                  <h6>Лет</h6>
                  <h6>опыта</h6>
                </div>
              </div>
              <p>Константинова Анастасия</p>
              <h3>
                Стоматолог-имплантолог,
                <br /> стоматолог-хирург,
                <br /> стоматолог-ортопед
              </h3>
              <div className="doc_icon">
                <div className="icon">
                  <MapsUgcIcon />
                  <h6>Отзывы</h6>
                </div>
                <PlayCircleFilledWhiteIcon style={{ color: "#2CB2BB" }} />
              </div>
            </div>
            <div className="block1">
              <img src={logo} alt="" />
              <div className="doc_op">
                <h1>10</h1>
                <div className="doc_op2">
                  <h6>Лет</h6>
                  <h6>опыта</h6>
                </div>
              </div>
              <p>Илон Маск</p>
              <h3>
                Стоматолог-имплантолог,
                <br /> стоматолог-хирург,
                <br /> стоматолог-ортопед
              </h3>
              <div className="doc_icon">
                <div className="icon">
                  <MapsUgcIcon />
                  <h6>Отзывы</h6>
                </div>
                <PlayCircleFilledWhiteIcon style={{ color: "#2CB2BB" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doc;
