import { useState } from "react"

import operator from "../assets/women_operator.png"
import map from "../assets/map_icon.png"
import message from "../assets/message_icon.png"

import { PiNavigationArrow } from "react-icons/pi";
import { IoIosArrowDown, IoIosCall } from "react-icons/io";
import { LiaCopyrightSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { RiPencilLine } from "react-icons/ri";
import { TbMessageDots } from "react-icons/tb";
import axios from "axios";

export default function Footer() {
  const [list, setList] = useState({ name: "", number: "" })
  let num = list.number.replace(/[a-z *&/!@#№$?,.-]/g, '').slice(0, 11)

  let clinic = [
    ["Адреса клиник", "Цены", "Новости", 'Врачи', "Акции", "Сертификаты"],
    ["О стоматологии", 'Для иногородних', "Вопросы и ответы", "Отзывы", 'Примеры работ', "Контакты"]
  ]
  let services = [
    {
      title: "Красивая улыбка", src: [
        "Профессиональная чистка зубов",
        "Отбеливание зубов",
        "Отбеливание Zoom",
        "Художественная реставрация зубов",
        "Виниры",
        "Брекеты",
        "Скайсы"
      ]
    },
    {
      title: "Восстановить зуб", src: [
        "Имплантация зубов",
        "Коронка на зуб",
        "Мост из коронок",
        "Съемное протезирование зубов",
        "Виниры",
        "Художественная реставрация зубов"
      ]
    },
    {
      title: "Вылечить зубы", src: [
        "Лечение зубов",
        "Лечение кариеса",
        "Лечение пульпита",
        "Лечение периодонтита"
      ]
    },
    {
      title: "Восстановить все зубы", src: [
        "Все зубы за 1 день All-on-4",
        "Имплантация All-on-6"
      ]
    }
  ]
  return (
    <div className="Footer">
      <div className="Footer_content">
        <div className="Footer_questions">
          <div className="Footer_questions_operator">
            <img src={operator} alt="operator" />
          </div>
          <div className="Footer_questions_operator footer">
            <div className="Footer_questions_title">
              <h1>Остались вопросы? Мы ответим!</h1>
              <div className="Footer_questions_item">
                <div className="Footer_questions_name">
                  <div className="Footer_questions_item_input">
                    <h4>Имя</h4>
                    <input type="text" onChange={(e) => setList({ ...list, name: e.target.value })} />
                  </div>
                  <h3>Перезвоним <span>через 15 минут</span></h3>
                </div>
                <div className="Footer_questions_item_input">
                  <h4>Мобильный телефон</h4>
                  <input value={num} onChange={(e) => setList({ ...list, number: e.target.value })} type="text" placeholder="+7 000 000 00-00 " />
                </div>
              </div>
            </div>
            <button style={{ opacity: list.name.length > 3 && list.number.length === 11 ? "1" : "0.4" }}>Отправить</button>
          </div>
        </div>
        <div className="Footer_map">
          <h4>Проконсультируем вас по условиям и стоимости лечения, подберём врача и запишем вас на приём.
            Консультация займёт всего 30–40 минут.</h4>
          <div className="Footer_map_item">
            <img src={map} alt="map" />
            <h3>Ближайшие филиалы стоматологии</h3>
          </div>
          <div className="Footer_map_item">
            <img src={message} alt="message" />
            <h3>Отзывы о стоматологии и репутации</h3>
          </div>
        </div>
        <div className="Footer_clinic">
          {clinic.map((ell, ind) => (
            <div key={ind} className="Footer_clinic_title">
              {ell.map((el, id) => (
                <h3 key={id}>{el}</h3>
              ))}
            </div>
          ))}
        </div>
        <div className="Footer_line">
          <div className="Footer_line_item"></div>
        </div>
        <div className="Footer_services">
          {services.map((ell, id) => (
            <div key={id} className="Footer_services_item">
              <h2>{ell.title}</h2>
              {ell.src.map((el, id) => (
                <h4 key={id}>{el}</h4>
              ))}
            </div>
          ))}
        </div>
        <div className="Footer_basement">
          <div className="Footer_basement_item">
            <h3>
              <PiNavigationArrow />
              Moсква
              <IoIosArrowDown />
            </h3>
            <span>
              <LiaCopyrightSolid />
              2008-2024 Мегазуб <br />
              Все права запущены
            </span>
          </div>
          <div className="Footer_basement_item">
            <div>
              <IoIosCall />
              <h2>8 (800) 200-45-65 <br />
                <p>Горячая линия</p>
              </h2>
            </div>
            <div>
              <IoIosCall />
              <h2>8 (800) 200-45-65 <br />
                <p>Руководство</p>
              </h2>
            </div>
            <h4>
              <CiClock2 />
              В будни с 9:00 до 18:00
            </h4>
            <h4>
              <MdOutlineEmail />
              consult@clinic.ru</h4>
          </div>
          <div className="Footer_basement_item">
            <button> <RiPencilLine /> Записаться на приём</button>
            <button> <TbMessageDots /> Оставить отзыв <br /> или написать директору</button>
          </div>
          <div className="Footer_basement_item">
            <h1>Подписывайте на нас в соцсетях, <br /> чтобы быть в курсе всех собтиый</h1>
            <div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALsSURBVHgB5VZRThsxEB3PbPgoQU1vEP4qmo/kBCRSAfED7AmAE0BPkOUG9ASlJ1igqqigUnIDUjVU/eveoNuPIERiuzNLEpZkFxy1X+2Tolie9TzP83jGAP861GPGchiWnsFcGQFL4Iiuv96GWQmFaJ6KTQS1Y8E6k905VLEBONa6f/DdX4+m7RNYCs+rRBgKkbH2PRls8zgGN7KSQbOllNrmcaS18b/5qx3II3wZnpULVGgZMKC1bmTt0AXih5BaqBBIU63jN8YbxvSHRIUmR1N+imwp/FithGf1PLus1UY3RKUB9oO07UGEldOLnxbU8dXG690sR0KiqBCOzlVks7q/m5colZPzQ2B5Pe0tjqLEe2cXdf4rGa1PshaLTHdk0AYNDaNtjccdIC8UW9YapbAtPm/hemz3Jj8iMJkJ4iHt89nGVxurfmraF1XExuP9yTVWc7KRRHV/rTxwRCKjhS9TBgWcxfAcHIGuH8r9YomWp+atqioLv8ARzhEOjD70yNtmCUOjbw8Smaiwl2Qi21z9OBFK5bmBm7ioi75F+w5p7vLOwmekwRcbOMJJ0iLOBwu0cDmAQXS1ubo4ytLuxsoLjh3EllyBv0UokllrY5b0B0vaAjR8H9V2MiavxbJGrrI6STqsOjWuszvIRKCwKRWDN9FBY/2v/toxOMI5SwVciI84L2OJiMkiLtLxLGQzE1Y+fN7juLaUVrvKKCl/9Venn/Zn8TEmNMMWpHOabVLaLARgzUHXX2nLD6x6q4CauaWNVCmXcA4KEf/FhKqetZgQAylt3c21YDTnGQokmYiombWGG/Gm+EwX9zFhUs254Up1z9qxNibo6V4tPSdrpA3x/JvJ7xNFwO5I90nPP2hP1bBV6mP/UhpnX/f/qAHnNfLMJwbzhZyBZd7dEXK7sjkdZBKKz98QLstbSOS3XIUefWKkd8hPhIBJ5QxmekQxYnkLXZteEPl+PL2pJzBszE6QTL+GXpRF9P/gN0hEdrObkh7vAAAAAElFTkSuQmCC" alt="odnaclasniki" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALESURBVHgB5VZdbtNAEJ7dsSMEecgNcN8gAik5AYn4kSqkNj4B9AQRJ2h6AsQJCidwqFQhFVByg0SiKrxhTlC/NA84u8uM4wQn9c+WvNGRoqy96/lmdr75AfjfRZRtekHQuAs1T4JsgKWc+7tjuCkgA93D+qEE8dqAsQZbKBSRBhgqFR/98HfD6/sb0gzOWogyYCBtzAfUckzrCOzAGlrqnhDiFa1DpbR/4b+YQhHgg+CT56I70qBBKdXNs9BGWA9KHEkhARW2p353ZbDMHkR0D8kbbxswDgd/q7Tq8i3NZTzI7q8BCjA9A+L9v4I9PvnSq2P98uHp1/uJDgoJ0PW2gtGKB85y8Sj43KG/hlbqY5nSZnDaQnBbvFYQTy/8l6sYfdt7NiQ93e97T38lDogk/v3fMPPocboGuBQEnUsQjouDzjEtOyZ9J6HGXoWxilchOPefj5ffGEVkQz73N60kWEhKpgnHl8DezNV8RyvTpt+BNhrIkAmfsdHl2BxKmRvlkGlKQGNmZOp9t0pXpYcc29Sz3ERO3gnxjpYdjm+VvkpAYq6XLFQ8LTqj1HyYLNDdHnAppnbnslgJWpe/SkDKyzA5qGK/5NjCs5JbsAZMaT6W4PTzmJiUMZRcocJsThaJFUspDQ6Y+szW5snZEXuiQUaITo86Sp9LGDG4baPLKobMRAJtc84RwLHE2oQM+EmV/y17xnu25XDloaYWRMqoXOU321ThTtK+0pgpysPN9pMVgaJBBuUD1sAN5zCPUIoOPQ6LlKQAlbFaOAH7dAtRdgpYXWnSs9LqblumyoR1UA7TxCDWjF+LoaPdgTEmYnJsA7ps5BxfHjWye7kjBjXqgMYEj3ujpHZlCjrIpgiKv0b5hGchrr1GQfmIkbWQCvKAQPfp8UZDFEnEs9BMXw1C34+uG1UhaWO2Emb6DK7CPKDbI38AfrJctVZF20kAAAAASUVORK5CYII=" alt="" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANLSURBVHgB3VZdTttAEJ7ZtVHV5iG9gXmrKKjhBE0kQsVLEp+g6QmgJyCcoHAC0hM45AUJkMIRkBpQ3/AN6geIWsjudmYdp05iUoe8MZK1m9nNfPM/C/DSCecdekFQfA0rngBRhJzU93cuYVFABnojC/sCsGnA5AaLBWKkATpKPR789HfC2fMpWgvOSlKKgIG0Md+lFpe0jyAfWFEL3UDEz7QPldL+jb99BU8BvgtOPVe6PQ0alFKVLA3zEMuRQvYECpBKbl75lbHCIn1RSnefrPGWAWPi/yqtKuyloXhspc8mABFMwwC2lwFLgwKFBMi9paA3zgMn2awH52Vailqpk/j3aRmEYB4YFJFSww5d9hIek0YMb2rbbY67EKaR8IdaW6URbfx3H2DgEftqAjAhCTpiASCxB2PLAdzY3RMZy+7Z6J5/gKlsdqVkqzaHahiRQEiXlYAMSrS9U3dv+7UqgoJKItBRjuXxhwZDA7BHZ0DCVy0P0Oc8GMLvUqbsLCZqDHktwKtS7AaH3WEz7VH+aU7fp7h3krhTDdYJMHyqAWQCSnA7FkBIa6lNawNHVhmD040g4iLnDZcDJV4TOVmeoExABjDGnKQzzNHOIYysnLQOxh2Fa5itu9ODQ1gE0FqisU0L1dHD3lgJEp6+o7T2r2tVK5wSjRPHI6cehb4fLQzY96uXxtaR2GVXMY+F9+ufWsmddNui3sT3QwHObrrucgMyudq11jnSOc46p5L4ZksI4kI3GuIMlcPjZwGyG7UyX2lbft+9mBVisCGoXhNQtpjczvcbtnEsCjgS0qbMOODs2+he3K51z5o8vvgzaGuzyKCJ27kjxZJFeS6gHo0glTFs+/VqCxX6mnxGM/K4IAu/+GMwVoZiF5Hbb9e754ZXK09jB+VMCf0DXAE3pCWSAssZisEPf6tzXd9e5a4DRh/Yj/asTDwZyJUpPruXmwDLTDeBiXm4fnJ2yLVHbWpz2YnBLmZrefpc17a+zFjI5Gi3xe7hAk5i8lywpAkkXSihzCcGDeqAngkeaydoXBmaIJCDkOKvpfjIbyF6NURGwfwnRlpDeiK0CJRjsNAjiijit9BA37eyOg7+79+jwZyLONMHcB/Oa20vn/4Cdmu/hPTN5aMAAAAASUVORK5CYII=" alt="" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJHSURBVHgB3VZRbtNAEJ3ZtfsBfPgI/kQFJPcEJB+A+tX6BNAT9AhNj9ATACfYFglVgkoxN4hEQfzhG+CfRhXp7jCTOGGTps06rlSp7yPeaLz71jtv9g3AQwfeFkyNSR7BRqpAJRCI83y7gKaEQvRYPzlQgO8IKJhssiBWDuDY2tHhr3y7vB5fwKb5kmmtjBA5oo/aqYLHFYSRJU65XUR8y+PSWpf/zF8P4CbCp+Y0jXXcd+DAWttdtsMQyDpa6b5CBdrqrUHenW1Y+S9qHR/w16RtyAQy1zrblVO6UqOeH5sjRKBdAvzQhswnBU4J8PFmpj/TQTQdPDdfO/xInLUnEIhN8znTEGfAOf6evzlejCOO87//F4Yp/x3MEU6hwa0UiCeslCZL84ZPu4slQZbFpuUY1fUvDMVYEFqJsCplYW8EtriEy6rM8yAlNyashTVW8Y81cq0avs95oYzIfVtXWM0JHSbM+gfWRNCRTvIW7TNdIrXFIug8+3T2/v8bVMU2OvQLvBWhAAk6fC0lhCCkoAg7XhRYOEc8uBvCOl9bMn5xcvbboSvOd17twRponMO2uD9CV1uQbWC2q4AakxsJNyAu+VFp5YuhHdiId2RN/8qbEY4lXd/uUgbQErIGuw93DDh3qc/lMHJxj4hrik24DenUyLl8Smk1/NjSFoON2nCbkIo3KrYr8h1ER4Z/C7BXR4tzkfPvtHopvZBc7mTh9hbD3yG3CD0mlRw0FVElvdDQXfSWOQiuml0bcxBE6UO4KEOt6mHiH+hXC0oDeColAAAAAElFTkSuQmCC" alt="" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHlSURBVHgB7VXdLgNREJ45Z4mLJtYTWHdIJfUGekHiBvsG3kA8AZ5APQFvsFREoqTewEoQd11PYCUkouaMOdt2W270tL3sd9Gz53Rmvplz5gdgjDEcgb2bIIr8glfYAYYSMpY654wcQB9AwFR0UwZOZSMrnBF9nz6H60lXpo356DKY0BN3IuyLUsyIcS7E9NIPoQH0EdW0GBUb4iSK44AJkQmfwrXMntcRFrK6AZMS0XKvR8PABqGVriuNh7It2zNlfxajq5JEFsgVHIyKzCKzhXgknysLFzezOaHWKsgkqBnDiMHEt3ZFom6EQMbP/pycev3PgE0scIABSnv3ChwgV79d0IVG8by2BwPCiVCprDxsFu8vVa8bi9WrbXCEE2EvbJIpwOPiWe3ORW9gwhxS4C7iw0SYFfTDxmrZRc9zEWZUqXQR276OPsxHJQlDp+icCR83VitSFieDEHXw60rx63PmPwVXMgW6VePEaWsvaALdZoRar8DokU0dhO+ktbZRrNbq0tmDJjXLo2ze7aEgz7E2Z8/yNzTEu6g48rTXkNqKxZWE7XyT2YZs3vohYNSznW9kLtnxZGejnUD5+V+PtPa25HBTMtGXiH0ZvvYN+uqfMrSTLjnEMhPv3817ZZgkG2MM+AHL6cbKmQr+4wAAAABJRU5ErkJggg==" alt="" />
            </div>
            <h5>Политика конфиденциальности</h5>
            <h5>Карта сайта</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
