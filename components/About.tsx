import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <section className="bg-neutral-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="grid-animation">
                <span className="grid-animation__line-wrapper">
                  <span className="grid-animation__line"></span>
                </span>
                <span className="grid-animation__line-wrapper">
                  <span className="grid-animation__line"></span>
                </span>
                <span className="grid-animation__line-wrapper">
                  <span className="grid-animation__line"></span>
                </span>
                <span className="grid-animation__line-wrapper">
                  <span className="grid-animation__line"></span>
                </span>
                <span className="grid-animation__line-wrapper">
                  <span className="grid-animation__line"></span>
                </span>
                <div className="section">
                  <div className="row g-4">
                    <div className="col-md-10 col-lg-6">
                      <div className="section__gap-bottom pb-lg-0">
                        <span className="d-block h5 lh-1 fw-semibold clr-base">
                          {" "}
                          Trusted & Professional Software Solutions{" "}
                        </span>
                        <h4 className="mt-5 mb-5">
                          {" "}
                          In 10 years, we've succeeded. Success rewards efforts.{" "}
                        </h4>
                        <p className="mb-8 max-text-60">
                          {" "}
                          At CODEDEXIT LTD, we are committed to delivering high-performance, reliable, and future-ready software solutions that help businesses thrive in the digital era. Whether you need a powerful POS system, enterprise software, 
                          or AI-driven applications, we provide the technology to fuel your success.{" "}
                        </p>
                        <Link
                          href="about-us"
                          className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                          {" "}
                          Find out More{" "}
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="about-img">
                        <div className="about-img__content about-img__content-xl">
                          <img
                            src="/images/make-sale.png"
                            alt="image"
                            className="about-img__is"
                          />
                        </div>
                        <div className="about-img__content">
                          <img
                            src="/images/about-img-3.png"
                            alt="image"
                            className="about-img__is"
                          />
                        </div>
                        <div className="about-img__content">
                          <img
                            src="/images/about-img-4.png"
                            alt="image"
                            className="about-img__is"
                          />
                        </div>
                        <div className="about-img__content">
                          <img
                            src="/images/about-img-5.png"
                            alt="image"
                            className="about-img__is"
                          />
                        </div>
                        <div className="about-img__content">
                          <img
                            src="/images/about-img-6.png"
                            alt="image"
                            className="about-img__is"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;