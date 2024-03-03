import phone from "./icons/phone_rating.png"
export const HomeRating = () => {
  let social = [
    [
      {
        title: "Продокторов",
        rating: "4,7",
        img: "https://klinika-vyzdorovlenia.ru/wp-content/uploads/2023/05/prodoktorov-logo-svg.svg"
      },
      {
        title: "Yell.ru",
        rating: "8,9",
        img: "https://levpro.ru/bundles/web/img/demo/yell-logo.svg?v6"
      },
      {
        title: "ЛайкДоктор",
        rating: "6,8",
        img: "https://png.pngtree.com/png-vector/20231211/ourlarge/pngtree-therapist-icon-glyph-png-image_10873305.png"
      }
    ],
    [
      {
        title: "Google",
        rating: "4,7",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
      },
      {
        title: "Стаматология.су",
        rating: "4,7",
        img: "https://www.smu.edu/-/media/Site/StudentAffairs/HealthCenter/Dental-Icon.png?h=500&iar=0&w=500&hash=89BBCC7B7B3BD2A7037E49948E9CB88C"
      },
      {
        title: "zoon",
        rating: "4,7",
        img: "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/86/2d/a5/862da552-b2ba-0468-a6d1-12b5372efa19/source/512x512bb.jpg"
      },
    ],
    [
      {
        title: "Yandex",
        rating: "3,3",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Yandex_icon.svg/2048px-Yandex_icon.svg.png"
      },
      {
        title: "Flamp.ru",
        rating: "4,1",
        img: "https://thumb.tildacdn.com/tild6161-3734-4763-b332-666130306234/-/format/webp/Flamp.png"
      }
    ]
  ]
  return (
    <div className="HomeRating">
      <div className="HomeRating_content">
        <div className="HomeRating_title">
          <div className="HomeRating_title_item">
            <h1>Независимые рейтинги</h1>
          </div>
          <div className="HomeRating_rating_item">
            {social.map((ell, ind) => (
              <div key={ind} className="HomeRating_rating_content">
                {ell.map((el, id) => (
                  <div key={id} className="HomeRating_rating_social">
                    <img src={el.img} alt="logo" />
                    <div className="Home_rating_social_title">
                      <h3>{el.title}</h3>
                      <h4>{el.rating}
                        <span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" stroke="#2CB2BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 2H14V6" stroke="#2CB2BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.66699 9.33333L14.0003 2" stroke="#2CB2BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </span>
                      </h4>
                    </div>
                  </div>
                ))}

              </div>
            ))}
          </div>
        </div>
        <div className="HomeRating_img">
          <img src={phone} alt="phone" />
        </div>
      </div>
    </div>
  )
}
