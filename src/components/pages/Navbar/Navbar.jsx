import { useEffect, useState } from "react"

import logo from "../../assets/CompanyLogo.png"
import whiteLogo from "../../assets/CompanyLogoWhite.png"
import odnaclassniki from "./icons/odnaclassnik_small_icon.png"
import instagram from "./icons/instagram_small_icon.png"
import wk from "./icons/wk_small_icon.png"
import facebook from "./icons/facebook_small_icon.png"
import youtube from "./icons/youtube_small_icon.png"

import union from "./icons/union_small_icon.png"

import { PiNavigationArrow } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { ModalWindowSity } from './ModalWindowSity';
import { TbClockHour3 } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { LiaGlassesSolid } from "react-icons/lia";
import { LiaMedalSolid } from "react-icons/lia";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { RiPencilLine } from "react-icons/ri";
import { PiListFill } from "react-icons/pi";

export default function Navbar() {
    const [sityId, setSityId] = useState(0)
    const [modalSity, setModalSity] = useState(false)
    const [select, setSelect] = useState('')
    const sity = [
        "Бишкек",
        "Айдаркен",
        "Балыкчы",
        "Баткен",
        "Джалал-Абад",
        "Кадамжай",
        "Каинды",
        "Кант",
        "Кара-Балта",
        "Каракол",
        "Кара-Куль",
        "Кара-Суу",
        "Кемин",
        "Кербен",
        "Кок-Джангак",
        "Кочкор-Ата",
        "Кызыл-Кыя",
        "Майлуу-Суу",
        "Нарын",
        "Ноокат",
        "Орловка",
        "Ош",
        "Раззаков",
        "Сулюкта",
        "Таш-Кумыр",
        "Токмок",
        "Токтогул",
        "Узген",
        "Чолпон-Ата",
        "Шопоков",
    ]

    const selector = [
        { title: "Услуги", description: false },
        {
            title: "Примеры работ", description: [
                "Рекомендации перед приемом",
                "Рекомендации после лечения",
                "Гарантии"
            ]
        },
        {
            title: "Врачи", description: false
        },
        {
            title: "Отзывы", description: [
                "Рекомендации перед приемом",
                "Рекомендации после лечения",
                "Гарантии"
            ]
        },
        {
            title: "Пациенты", description: [
                "Рекомендации перед приемом",
                "Рекомендации после лечения",
                "Гарантии"
            ]
        },
        {
            title: "Для иногородних", description: [
                "Рекомендации перед приемом",
                "Рекомендации после лечения",
                "Гарантии"
            ]
        },
        {
            title: "О клинике", description: [
                "Рекомендации перед приемом",
                "Рекомендации после лечения",
                "Гарантии"
            ]
        },
        {
            title: "Контакты", description: false
        }
    ]
    return (
        <div className="navbar">
            <div className="navbar_content">
                <div className="navbar_navigation_user">
                    <button className="blockmaxwidth500" onClick={() => setModalSity(true)} >
                        <PiNavigationArrow />
                        {sity[sityId]}
                        <IoIosArrowDown />
                    </button>
                    <button className="blockmaxwidth500" onClick={() => window.location.href = 'tel:8 (800) 200-45-65'}>
                        8 (800) 200-45-65
                    </button>
                    <button className="nonemaxwidth500">Заказать звонок</button>
                    <button className="nonemaxwidth500">
                        <TbClockHour3 />
                        В будни с 9:00 до 18:00
                    </button>
                    <button className="nonemaxwidth500">
                        <HiOutlineMail />
                        Consult@clinic.ru
                    </button >
                    <button className="nonemaxwidth500">
                        <LiaGlassesSolid />
                        Версия для слабовидящих
                    </button>
                </div>
                <div className="navbar_logo">
                    <img className="blockmaxwidth500" src={whiteLogo} alt="logo" />
                    <button className="blockmaxwidth500 button nav"><PiListFill /></button>
                    <img className="nonemaxwidth500" src={logo} alt="logo" />
                    <div className="navbar_social_icon">
                        <img src={odnaclassniki} alt="odnaclassniki" />
                        <img src={instagram} alt="instagram" />
                        <img src={wk} alt="wk" />
                        <img src={facebook} alt="facebook" />
                        <img src={youtube} alt="youtube" />
                    </div>
                    <button className="nonemaxwidth500">
                        <LiaMedalSolid />
                        Награды и сертификаты</button>
                    <button className="nonemaxwidth500">
                        <BiMessageRoundedDetail />
                        Оставить отзыв или написать директору</button>
                    <button className="nonemaxwidth500">
                        <RiPencilLine />
                        Записаться на приём</button>
                </div>
                <div className="navbar_navigate">
                    <nav>
                        {selector.map((el, id) => (
                            <div onMouseEnter={() => setSelect(id)} key={id} className="navbar_navigate_links">
                                <button className="navbar_navigate_link">
                                    {id == 0 &&
                                        <img src={union} alt="union" />
                                    }
                                    {el.title}
                                    {el.description && <IoIosArrowDown />}
                                </button>
                                {el.description &&
                                    <div onMouseLeave={() => setSelect('')} style={{
                                        display: select == id ? "block" : "none",
                                        transition: "0.3s"
                                    }} className="navbar_navigate_select">
                                        {el.description.map((ell, idx) => (
                                            <button key={idx}>{ell}</button>
                                        ))}
                                    </div>
                                }


                            </div>
                        ))}
                    </nav>
                </div>
            </div>
            {modalSity && <ModalWindowSity sity={sity} modal={ModalWindowSity} setModal={setModalSity} setSityId={setSityId} />}
        </div>
    )
}
