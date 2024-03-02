import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import svg from "../../assets/backdrop_swiper.png"

export const HomeSwiper = () => {
    let data = [
        { title: "Имплантация зубов", price: "18 000", description: "По новой прогрессивной методике", img: 'https://s3-alpha-sig.figma.com/img/14bf/cf0a/7fef31556f8b8063812802f6af78dc66?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qZAL06VEjWCDvnAVOe1vcGvPvhrNYoik~0vAbL9ekPGxV19qqy0aSdyEkgoOFGuhEyi6U7xn5vDXt444PyR9Eu2mGOolmGZzdjVhILrfBHATXG47AOXoX6ilAY6GMOy1Pjz1md0X4ZKcUnru8FUPqII6ybwdn~Ixc-K2ISSLo4TKqwrkLsdRUiGSIgULmwD3PYTNn7DrtjGGa6adP8yWYM-CJLFeH30JZk18raBGaaCwB0VRa6kmlpnjVbT83oavfaDHkTkVrzxB8xW~Iu8VO8B5UyHlWaMS4L3rmgXMNRvy67nkq4aM3SURAtK24D1H25367DmpIKnQhZTWUL2qnQ__', link: "" },
        { title: "Сертификаты со скидкой", price: "18 000", description: "По новой прогрессивной методике", img: "https://s3-alpha-sig.figma.com/img/058b/63ad/d48102c93b34cf6d7525478d5482ea02?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HVSX1tCsLcTFm4ew~nRDxeCHr6WpveWiIiAz~QpTAITpcF8m8nNQrl40ix9i5IucdyHKH~nFfovWdzyfhsGOclQVXtBRXfoXuliZc1qCxrdF01-jUBsHdkj-kSSeE0nzkkhBMFb82kwGy6CxtRJ6QGjL2Bj2Yn9qwcffGLTmzvR-pc88WU1uvyjDHgjFk9Pq8DYuB~NKoJ-0cReO3G6J01hX1i0jeWBieVLMsD5eOpr311xMocGVVUQFfbc9dZZGZoNEgpdhhUcCE0cQbJ84W3WA8L~mSkXfwtS~xvKeX5nN~Yc~iFopKEZqO3pMF-1HNE2jOEKkOgYxQPYF4ElxPw__", link: "" },
        { title: "Новые услуги", price: "18 000", description: "", img: "https://s3-alpha-sig.figma.com/img/dd99/01bd/a73be07fa81758a3cd9cdaa9308bb38a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c~fklL7NAJwVTh7IEtugYJLyI9JuyeQEonR8ZLlzDTP6f1aTzH7OvKod9FpAy56JZhMiTmp-TZ291XgvIaLWeg2LrfpeXT4wRZaAjuTdAA1h~jKh2gCP-IZ8fYoU9n1jT5Yfc3HVXaOjDOQdw3jkvyjPwrypMmgsyd6SxjGXlOeD~DT~rManPCa6E5mX4~RBs7B7YTmlKvXM1Cdg5xlnaiQZqItQxeYAUh-kaPJ~yThBqOhh2nEwCNbvokM4hOg52ya9wP-5nX0UsIKtxQG1ftApYoQlXEDOCVe-oc91WU4s2Kw8XYqk26F7q1h8w3z-3dade4XY4kcrN6wSPuSMdg__", link: "" },
        { title: "Немецкий имплант премиум класса", price: "23 000", description: "", img: "https://s3-alpha-sig.figma.com/img/59d2/f9ac/ed2f88630700401e7e16d4a2a540e5bd?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gQVZi0cMzNFcsNNG90lMl6OqRBymNlRXAKoIghNE3kP1UT36iAfl0KEfUO~cNCfbMEUqRAtT~st-iSkFWZtQbUjCA7of06yc-o16RKmQhSZU0GeEzgRDQGWDFrVg1534XMXg9fFPF45MXHZVXFxzaRzX-AJRjUswTIgBy-q7KJpeG5QvWRqQPyYIlEJujItUC1DZ3J-mOIG4zffcZ4nEvCUcTdLLHmKNOxwgie0AYa0f9qCFJ9nNdyrcL7BYCAwcO9lA2uvLRWCop~tRs88MlZuWgp6FT4~o0UDcJazgl1QTXrOaK40Evk355BvjA~WuMs~Gu5ZkJyq9J2LP0~BrMQ__", link: "" }
    ];
    const [swiper, setSwiper] = useState(0)
    const [swiperTimer, setSwiperTimer] = useState(1)
    const [swiperTime, setSwiperTime] = useState(false)
    const Swipe = (type, id) => {
        if (!swiperTime) {
            setSwiperTimer(1)
            setSwiperTime(true)
            setTimeout(() => { setSwiperTime(false) }, 1000)
            if (type == "get") {
                setSwiper(id)
            } else if (type == "next") {
                if (data.length - 1 > swiper) {
                    setSwiper(swiper + 1)

                } else {
                    return

                }
            } else {
                if (0 < swiper) {
                    setSwiper(swiper - 1)
                } else {
                    return
                }
            }
        } else {
            return
        }
    }
    useEffect(() => {
        const timeInterval = setInterval(() => {
            swiperTime && setSwiperTimer(swiperTimer => (swiperTimer >= 1 ? swiperTime - 1 : 0))
        })
        return () => {
            clearInterval(timeInterval)
        }
    }, [swiperTime])
    return (

        <div className="home_wrapper">
            <div className="home_wrapper_content">
                <div className="home_wrappers">
                    {data.map((el, id) => (
                        <div key={id} className={`home_swiper ${swiper == id ? "active" : "none"}`}>
                            <div className="home_swiper_content">
                                <div className="home_swiper_title">
                                    <h3>{el.title}</h3>
                                    <h4>{el.price}</h4>
                                    <p>{el.description}</p>
                                    <button>Узнать подробнее</button>
                                </div>
                                <div className="home_bacdrop_swiper_content">
                                    <div className="home_backdrop" style={{
                                        backgroundImage: `url(${svg})`,

                                    }}>
                                        <img className="home_swiper_people" src={el.img} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="home_swiper_btns">
                    <div className="home_swiper_btn">
                        <button className={swiper == 0 ? "nul" : "normal"} onClick={() => Swipe('prev')}><IoIosArrowBack /></button>
                        <button className={swiper == data[data.length - 1] - 1 ? "nul" : "normal"} onClick={() => Swipe('next')}><IoIosArrowForward /></button>
                    </div>
                </div>

            </div>
            <div className="home_title_tegs">
                <div className="home_title_tegs_content">
                    {data.map((el, id) => (
                        <button className={`home_swiper_nagigate ${id == swiper ? "none" : "norm"}`} key={id} onClick={() => Swipe("get", id)}> {el.title}</button>
                    ))}
                </div>
            </div>
        </div>

    );
};
