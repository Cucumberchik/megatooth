import React from "react";
import max from "./icons/max.svg";
import red from "./icons/second.svg";
import alfa from "./icons/alfa.svg";
import vsk from "./icons/vsk.svg";
import ing from "./icons/ing.svg";
import med from "./icons/ing.svg";
import "./company.css";

function Company() {
    return (
        <div className="company">
            <div className="container">
                <div className="company-content">
                    <div className="company-title">
                        <h1>Мы работаем по ДМС</h1>
                        <p>С ведущими страховыми компаниями России</p>
                    </div>
                    <div className="company-logos">
                        <img src={max} alt="" />
                        <img src={red} alt="" />
                        <img src={alfa} alt="" />
                        <img src={vsk} alt="" />
                        <img src={ing} alt="" />
                        <img src={med} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Company;
