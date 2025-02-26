import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Star from "./Star";
const feedbackData = [
  {
    id: 1,
    img: '/images/team-1.png',
    name: 'Peter Cooper',
    review: "Outstanding field solutions! They delivered timely and effective results, improving our operations significantly. Highly trusted!",
    company: "Barone LLC."
  },
  {
    id: 2,
    img: '/images/team-2.png',
    name: 'Wade Warren',
    review: "Professional, reliable, and efficient! Their field solutions transformed our workflow, delivering outstanding results every time",
    company: "Big Kahuna Ltd."
  },
  {
    id: 3,
    img: '/images/team-3.png',
    name: 'Marvin McKey',
    review: "Impressive field solutions that boosted our productivity and streamlined processes. Truly a game-changer for our business!",
    company: "Biffco Ltd."
  },
]

const Testimonail = () => {
  return (
    <div className="section">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xxl-7">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                {" "}
                The views expressed by our existing clients{" "}
              </span>
              <h2 className="mt-5 mb-5 text-center">
                {" "}
                Don’t take our word for it. See what our clients say{" "}
              </h2>
              <p className="text-center mx-auto max-text-60">
                {" "}
                Here are just a few of our customers' feedbacks. Have no trust
                in what we have to say. Have a look at what some of our prior
                clients have said about us.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="feedback-slider-2">
              <Swiper
                dir="ltr"
                slidesPerView="auto"
                loop={true}
                navigation={{
                  nextEl: ".feedback-slider-2__btn.swiper-button-next",
                  prevEl: ".feedback-slider-2__btn.swiper-button-prev",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                }}
                autoplay={true}
                modules={[Autoplay, Navigation]}
              >
                {
                  feedbackData.map(({ id, company, img, name, review }) => (
                    <SwiperSlide key={id}>
                      <div className=" px-3 px-md-4">
                        <div className="feedback-card-1">
                          <Star />
                          <p>{review}</p>
                          <hr className="hr" />
                          <div className="group group-md group-row align-items-center">
                            <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                              <span className="user__img rounded-circle">
                                <img
                                  src={img}
                                  alt="image"
                                  className="user__img-is"
                                />
                              </span>
                            </div>
                            <div className="flex-grow-1">
                              <h5 className="mb-1">{name}</h5>
                              <p className="sm-text">{company}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }

              </Swiper>
              <div className="feedback-slider-2__btn swiper-button-prev"></div>
              <div className="feedback-slider-2__btn swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonail;
