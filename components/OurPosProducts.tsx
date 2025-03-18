import Link from "next/link";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const OurPosProducts = () => (
  <div className="section">
    <div className="section__gap-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-xl-8">
            <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{ fontSize: "30px" }}>
              {" "}
              {/* <u>Our Products</u>{" "} */}
              Our Products{" "}
            </span>
            <h3 className="mt-5 mb-5 text-center">
              {" "}
              Trusted & Professional Software Solutions{" "}
            </h3>
            <p className="text-center mx-auto t-short-para">
              {" "}
              We specialize in delivering trusted and professional software solutions that empower businesses across various industries. With a strong focus on innovation, efficiency, and scalability.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12">
          <Swiper
            dir="ltr"
            slidesPerView="auto"
            centeredSlides={true}
            spaceBetween={24}
            loop={true}
            centeredSlidesBounds={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false
            }}
            speed={4000}
            breakpoints={{
              768: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              1200: {
                slidesPerView: 2.5,
                spaceBetween: 32,
              },
              1920: {
                slidesPerView: 3.5
              }
            }}
            modules={[Autoplay]}
            className="gallery-slider-1"
          >
            <SwiperSlide>
              <div className="row" style={{ border: "1px solid", borderRadius: "10px" }}>
                <div className="col-md-6 col-lg-4">
                  <div className="news-card">
                    <a target="_blank" rel="noopener noreferrer" className="news-card__link">
                      <div className="news-card__image" style={{ position: "relative" }}>
                        <img
                          src="/images/link-shortner.png"
                          style={{ height: "100%", display: "block" }}
                        />
                        <div
                          className="news-card__overlay"
                          style={{
                            position: "fixed",
                            bottom: "0",
                            width: "100%",
                            background: "rgba(0, 0, 0, 0.6)",
                            padding: "10px",
                            textAlign: "center"
                          }}
                        >
                          <h4 className="news-card__title text-white m-0">Link Shortner</h4>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row" style={{ border: "1px solid", borderRadius: "10px" }}>
                <div className="col-md-6 col-lg-4">
                  <Link href="all-Pos-Features">
                    <div className="news-card">
                      <a target="_blank" rel="noopener noreferrer" className="news-card__link">
                        <div className="news-card__image" style={{ position: "relative" }}>
                          <img
                            src="/images/pos-prod-removebg.png"
                            style={{ height: "100%", display: "block" }}
                          />
                          <div
                            className="news-card__overlay"
                            style={{
                              position: "fixed",
                              bottom: "0",
                              width: "100%",
                              background: "rgba(0, 0, 0, 0.6)",
                              padding: "10px",
                              textAlign: "center"
                            }}
                          >
                            <h4 className="news-card__title text-white m-0">Point of Sale</h4>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row" style={{ border: "1px solid", borderRadius: "10px" }}>
                <div className="col-md-6 col-lg-4">
                  <Link href="">
                    <div className="news-card">
                      <a target="_blank" rel="noopener noreferrer" className="news-card__link">
                        <div className="news-card__image" style={{ position: "relative" }}>
                          <img
                            src="/images/worqua.png"
                            style={{ height: "100%", display: "block" }}
                          />
                          <div
                            className="news-card__overlay"
                            style={{
                              position: "fixed",
                              bottom: "0",
                              width: "100%",
                              background: "rgba(0, 0, 0, 0.6)",
                              padding: "10px",
                              textAlign: "center"
                            }}
                          >
                            <h4 className="news-card__title text-white m-0">Work Order</h4>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>


          </Swiper>
        </div>
      </div>
    </div>
    <div className="section__gap-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-xl-8">
            <div className="group group-row flex-wrap justify-content-center align-items-center">

              <Link
                href="contact-us"
                className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                <span className="bttn__arrow"> Contact Us </span>
              </Link>
              <Link
                href="ourProducts"
                className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                <span className="bttn__arrow">More Products </span>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OurPosProducts;
