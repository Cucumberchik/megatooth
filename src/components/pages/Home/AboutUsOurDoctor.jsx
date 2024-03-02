import { useState } from "react"
import doctor from "../../assets/AboutUsOurDoctor.png"
import check from "../../assets/checkSmoll.png"

export const AboutUsOurDoctor = () => {
    const [pagin, setPagin] = useState(0)
    const [timeBlock, setTimeBlock] = useState(false)

    let arr = [
        { num: 1 },
        { num: 2 },
        { num: 3 },
        { num: 4 },
    ]
    const handleFunc = (type, id) => {
        if (!timeBlock) {
            setTimeBlock(true)
            setTimeout(() => { setTimeBlock(false) }, 500)
            if (type == "next") {
                setPagin(pagin => pagin < arr.length - 1 && pagin + 1)
            } else {
                setPagin(id)
            }
        } else {
            return
        }

    }
    return (
        <div className="AboutUsOurDoctor">
            <div className="AboutUsOurDoctor_content">
                <div className="AboutUsOurDoctor_pagination">
                    <div className="AboutUsOurDoctor_pagination_title">
                        <h1>Что надо знать, выбирая клинику?</h1>
                    </div>
                    <div className="AboutUsOurDoctor_pagination_item">
                        <div className="AboutUsOurDoctor_pagination_page">
                            {arr.map((el, id) => (
                                <button onClick={() => handleFunc("prev", id)} className={`aboutusdoctor ${pagin == id ? "active" : ""}`} key={id}>{el.num}</button>
                            ))}
                        </div>
                        <div className="AboutUsOurDoctor_pagination_btn">
                            <button onClick={() => handleFunc("next")}>Следующий шаг</button>
                        </div>
                    </div>
                    <div className="AboutUsOurDoctor_pagination_detail">
                        <h3>Детальная диагностика и планирование</h3>
                        <span>
                            <img src={check} alt="check" />
                            <p>Вам не должны предлагать установку имплантов в день посещения и только на основании панорамного снимка или визуального осмотра. Важна тщательная диагностика, а также проведение компьютерной томографии, сдача анализов крови.</p>
                        </span>
                        <span>
                            <img src={check} alt="check" />
                            <p>Наша стоматология работает по международным стандартам комплексной диагностики: сбор анамнеза, комплексные анализы, визуальный осмотр полости рта, анализ компьютерной томографии, фотометрия лица пациента и снятие параметров прикуса. Только после этого имплантолог и ортопед могут составить предварительные планы лечения, которые впоследствии нужно будет уточнить в процессе компьютерного моделирования и дополнительной диагностики по назначению</p>
                        </span>
                    </div>

                </div>
                <div className="AboutUsOurDoctor_doctor">
                    <img src={doctor} alt="doc" />
                </div>
            </div>
        </div>
    )
}
