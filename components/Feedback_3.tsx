import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import Star from "./Star";
const feedbackData = [
  {
    id: 1,
    img: '/images/team-1.png',
    name: 'Peter Cooper',
    review: "Its really wonderful to get work done from him of mobile app development's task. He take care of everything in brief to make sure me that the work done properly.",
    company: "Barone LLC."
  },
  {
    id: 2,
    img: '/images/team-2.png',
    name: 'Wade Warren',
    review: "He took care of delivery time and without compromising the quality of the output which makes me satisfied always, and i would like to hire him again for my mobile app development task!",
    company: "Big Kahuna Ltd."
  },
  {
    id: 3,
    img: '/images/team-3.png',
    name: 'Marvin McKey',
    review: "The custom website he created was truly impressive—professionally designed, fully functional, and aligned with my vision. It has helped my business stand out online.",
    company: "Biffco Ltd."
  },
  {
    id: 4,
    img: '/images/team-4.png',
    name: 'Berg Jason',
    review: "My custom website was built with precision and creativity! The layout is stunning, the functionality is smooth, and the site is perfectly optimized. It’s exactly what I envisioned for my business.",
    company: "BERGIS ltd."
  },
  {
    id: 5,
    img: '/images/team-5.png',
    name: 'Alice Kieran',
    review: "Exceptional work and communication from the team. They are very responsive and considerate when it comes to customer's demands and go out of their way to get the job done with utmost professionalism.",
    company: "Alice Kieran Ltd."
  },
  {
    id: 6,
    img: '/images/team-6.png',
    name: 'Fakhri Shehab',
    review: "The best team to work with! The team is extra professional, always live to solve your problems (no matter what's the time!) and always following up! THE BEST BEST! Highly recommended!",
    company: "Eskilstuna, Södermanland."
  },
]
const Feedback_3 = () => {
  return (
    <div className="section bg-neutral-100 feedback-section-3">
      <div className="feedback-section-3__element feedback-section-3__element-1">
        <img
          src="/images/element-9.png"
          alt="image"
          className="img-fluid"
        />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-2">
        <img
          src="/images/element-10.png"
          alt="image"
          className="img-fluid"
        />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-3">
        <img
          src="/images/element-11.png"
          alt="image"
          className="img-fluid"
        />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-4">
        <img
          src="/images/element-12.png"
          alt="image"
          className="img-fluid"
        />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-5">
        <img
          src="/images/element-9.png"
          alt="image"
          className="img-fluid"
        />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-6">
        <img
          src="/images/element-10.png"
          alt="image"
          className="img-fluid"
        />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-7">
        <img
          src="/images/element-11.png"
          alt="image"
          className="img-fluid"
        />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-8">
        <img
          src="/images/element-12.png"
          alt="image"
          className="img-fluid"
        />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-9">
        <img
          src="/images/element-13.png"
          alt="image"
          className="img-fluid"
        />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-10">
        <img
          src="/images/element-14.png"
          alt="image"
          className="img-fluid"
        />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-11">
        <img
          src="/images/element-15.png"
          alt="image"
          className="img-fluid"
        />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-12">
        <img
          src="/images/element-16.png"
          alt="image"
          className="img-fluid"
        />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-8">
        <img
          src="/images/element-12.png"
          alt="image"
          className="img-fluid"
        />
      </div>
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-10">
              <div className="text-center">
                <span className="d-inline-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  Trusted by industrial innovators{" "}
                </span>
                <h3 className="mt-5 mb-5">
                  {" "}
                  Don’t take our word for it. See what our clients say{" "}
                </h3>
                <p className="mx-auto max-text-60">
                  {" "}
                  What follows are some of the comments made by our clients.
                  Don't take it on faith that we said it. Check out what some
                  of our previous customers had to say.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-xl-12">
            <Swiper
              dir="ltr"
              className="testimonial-slider-2"
              slidesPerView={1}
              loop={true}
              speed={1000}
              spaceBetween={32}
              navigation={{
                nextEl: ".testimonial-slider-2 .testimonial-slider-2__btn-next",
                prevEl: ".testimonial-slider-2 .testimonial-slider-2__btn-prev"
              }}
              modules={[Navigation]}
            >
              {
                feedbackData.map(({ id, name, company, img, review }) => (
                  <SwiperSlide key={id}>
                    <div className="testimonial-slider-2__item p-5 p-sm-8 p-md-12 p-xxl-15">
                      <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle mx-auto mb-8">
                        <span className="user__img rounded-circle">
                          <img
                            src={img}
                            alt="image"
                            className="user__img-is"
                          />
                        </span>
                      </div>
                      <div className="testimonial-slider-2__text mb-8">
                        <p className="text-center max-text-50 mx-auto">{review}</p>
                      </div>
                      <div className="text-center">
                        <Star />
                        <h5 className="mt-1">{name}</h5>
                        <span className="d-block sm-text mt-1">{company}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
              <div className="testimonial-slider-2__btn testimonial-slider-2__btn-prev">
                <div className="testimonial-slider-2__btn-is swiper-button-prev"></div>
              </div>
              <div className="testimonial-slider-2__btn testimonial-slider-2__btn-next">
                <div className="testimonial-slider-2__btn-is swiper-button-next"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback_3;