import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import Star from './Star';
const feedbackData = [
  {
    id: 1,
    img: '/images/team-1.png',
    name: 'Peter Cooper',
    review: "Their field service management solution transformed our operations! Scheduling, tracking, and reporting are now seamless. Our technicians work faster, and customer satisfaction has skyrocketed. Highly recommended!",
    company: "Barone LLC."
  },
  {
    id: 2,
    img: '/images/team-2.png',
    name: 'Wade Warren',
    review: "We struggled with workforce coordination until we found this service. Now, everything runs smoothly with real-time updates and automated workflows. A must-have for any service-based company!",
    company: "Big Kahuna Ltd."
  },
  {
    id: 3,
    img: '/images/team-3.png',
    name: 'Marvin McKey',
    review: "This platform has made managing field teams effortless. The user-friendly interface, smart analytics, and excellent support have helped us scale efficiently. Best decision we’ve made!",
    company: "Biffco Ltd."
  },
]

const Feedback_2 = () => {
  return (
    <div className="section--sm section--top feedback-section-2">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <span className="d-block h5 lh-1 fw-semibold clr-accent text-center">
                {" "}
                The Opinions of Our Customers{" "}
              </span>
              <h2 className="mt-5 mb-5 text-center clr-light">
                {" "}
                Check What Our Clients Feedback On Our AI & Big Data Services{" "}
              </h2>
              <p className="text-center mx-auto max-text-60 clr-light">
                {" "}
                What follows are some of the comments made by our
                clients.Don't take it on faith that we said it. Check out what
                some of our previous customers had to say.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-12">
            <div className="feedback-slider-3-container">
              <Swiper
                dir='ltr'
                slidesPerView="auto"
                loop={true}
                spaceBetween={8}
                navigation={{
                  nextEl: '.feedback-slider-1__btn.swiper-button-next',
                  prevEl: '.feedback-slider-1__btn.swiper-button-prev',
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                  }
                }}
                modules={[Navigation]}
                className="feedback-slider-3"
              >
                {
                  feedbackData.map(({ id, name, img, company, review }) => (
                    <SwiperSlide key={id}>
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
                            <p className="sm-text">{company} </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              <div className="feedback-slider-1__btn swiper-button-prev"></div>
              <div className="feedback-slider-1__btn swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback_2;