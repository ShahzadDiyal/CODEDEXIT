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

  {
    id: 4,
    img: '/images/team-4.png',
    name: 'Sophia Reynolds',
    review: 'Their AI solutions revolutionized our business! Predictive analytics and automation improved efficiency beyond expectations. Highly recommended!',
    company: 'NeuralTech Inc.'
  },
  {
    id: 5,
    img: '/images/team-5.png',
    name: 'Liam Bennett',
    review: 'Exceptional AI services! Their innovative approach enhanced our data processing and decision-making capabilities like never before.',
    company: 'Quantum Analytics'
  },
  {
    id: 6,
    img: '/images/team-6.png',
    name: 'Emily Carter',
    review: 'Our website was transformed into a high-performing, user-friendly platform. Their expertise in web development is truly impressive!',
    company: 'Visionary Designs'
  },
  {
    id: 7,
    img: '/images/team-7.png',
    name: 'Daniel Foster',
    review: 'From concept to execution, their web development team delivered a flawless and responsive website that exceeded our expectations!',
    company: 'TechSphere Ltd.'
  },
  {
    id: 8,
    img: '/images/team-8.png',
    name: 'Olivia Brooks',
    review: 'Their app development team built a seamless, high-performing mobile application that improved customer engagement and satisfaction.',
    company: 'NextGen Solutions'
  },
  {
    id: 9,
    img: '/images/element-13.png',
    name: 'Ethan Parker',
    review: 'Brilliant app development services! Our mobile app is smooth, user-friendly, and packed with features that customers love.',
    company: 'SwiftApps Inc.'
  },
  {
    id: 10,
    img: '/images/element-14.png',
    name: 'Ava Mitchell',
    review: 'Their custom software development tailored our workflow perfectly! Increased productivity and efficiency like never before.',
    company: 'Innovate Solutions'
  },
  {
    id: 11,
    img: '/images/element-15.png',
    name: 'Noah Harris',
    review: 'Top-notch custom software! It streamlined our processes, eliminated inefficiencies, and gave us a competitive edge.',
    company: 'Enterprise Dynamics'
  },
  {
    id: 12,
    img: '/images/element-16.png',
    name: 'Mia Thompson',
    review: 'Their POS system transformed our retail operations, making transactions seamless and inventory management effortless!',
    company: 'Retail Masters'
  },
  {
    id: 13,
    img: '/images/kamran-qa.jpg',
    name: 'Lucas Bennett',
    review: 'A game-changing POS solution! Easy to use, highly secure, and packed with features that improved our sales operations.',
    company: 'FastTrack Retail'
  },
  {
    id: 14,
    img: '/images/shahzad.png',
    name: 'Emma Wilson',
    review: 'Their SaaS products are exceptional! Scalable, user-friendly, and have significantly improved our business efficiency.',
    company: 'CloudSync Ltd.'
  },
  {
    id: 15,
    img: '/images/rizwanzamanpic.jpg',
    name: 'James Robinson',
    review: 'Reliable and feature-rich SaaS solutions! Their products helped automate our processes, saving time and resources.',
    company: 'SkyNet Solutions'
  }
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