import React from "react";
import instagram from "./icons/instagram.svg";
import user from "./icons/user.svg";
import external from "./icons/external.svg";
import vcontact from "./icons/vcontact.svg";
import facebook from "./icons/facebook.svg";
import ytube from "./icons/ytube.svg";
import od from "./icons/od.svg";
import first from "./icons/first.svg";
import second from "./icons/second.svg";
import third from "./icons/third.svg";
import forth from "./icons/forth.svg";
import orange from "./icons/oruser.svg";
import "./social.css";

function Social() {
    return (
        <div className="social">
            <div className="container">
                <div className="social-content">
                    <div className="social-title">
                        <h1>Мы в социальных сетях</h1>
                        <p>
                            Подписывайтесь на наши аккаунты, следите за
                            выгодными предложениями и задавайте вопросы. <br />{" "}
                            Мы всегда рады новым знакомствам. Наш хэштэг
                            #названиеклиники
                        </p>
                    </div>
                    <div className="social-navs">
                        <div className="social-nav">
                            <div className="nav">
                                <img src={instagram} alt="" />
                            </div>

                            <div className="nav-icon">
                                <h2>Instagram</h2>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                    }}
                                >
                                    <img src={user} alt="" />
                                    <h4>4 560</h4>
                                </div>
                            </div>
                            <div className="social-icon">
                                <img src={external} alt="" />
                            </div>
                        </div>
                        <div className="social-nav">
                            <div className="nav">
                                <img src={vcontact} alt="" />
                            </div>

                            <div className="nav-icon">
                                <h2>В контакте</h2>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                    }}
                                >
                                    <img src={user} alt="" />
                                    <h4>7 544</h4>
                                </div>
                            </div>
                            <div className="social-icon">
                                <img src={external} alt="" />
                            </div>
                        </div>
                        <div className="social-nav">
                            <div className="nav">
                                <img src={facebook} alt="" />
                            </div>

                            <div className="nav-icon">
                                <h2>Facebook</h2>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                    }}
                                >
                                    <img src={user} alt="" />
                                    <h4>507</h4>
                                </div>
                            </div>
                            <div className="social-icon">
                                <img src={external} alt="" />
                            </div>
                        </div>
                        <div className="social-nav">
                            <div className="nav">
                                <img src={ytube} alt="" />
                            </div>

                            <div className="nav-icon">
                                <h2>Youtube</h2>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                    }}
                                >
                                    <img src={user} alt="" />
                                    <h4>891</h4>
                                </div>
                            </div>
                            <div className="social-icon">
                                <img src={external} alt="" />
                            </div>
                        </div>
                        <div className="social-nav oranges">
                            <div className="nav orange">
                                <img src={od} alt="" />
                            </div>

                            <div className="nav-icon">
                                <h2>Одноклассники</h2>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                    }}
                                >
                                    <img src={orange} alt="" />
                                    <h4>12 045</h4>
                                </div>
                            </div>
                            <div className="social-icon">
                                <img src={external} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="social-imgs">
                        <img src={first} alt="" />
                        <img src={second} alt="" />
                        <img src={third} alt="" />
                        <img src={forth} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Social;
