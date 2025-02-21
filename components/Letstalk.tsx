import Link from 'next/link';
import React from 'react';

const Letstalk = () => {
    return (
        <section className="section red-bg">
        <div className="container">
          <div className="row g-6 align-items-center">
            <div className="col-lg-6">
              <div className="section__gap-bottom pb-lg-0">
                <span className="d-block h5 lh-1 fw-semibold clr-base mb-5">
                  {" "}
                  Let’s Works Together{" "}
                </span>
                <h2 className="mb-10 clr-dark">
                  {" "}
                  We Love to Listen to Your Requirements{" "}
                </h2>
                <div className="border t-border-base rounded-4 px-6 py-8 d-inline-flex flex-column gap-6 mb-10">
                  <div className="group group-md group-row align-items-center">
                    <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                      <span className="user__img rounded-circle">
                        <img
                          src="/images/team-2.png"
                          alt="image"
                          className="user__img-is"
                        />
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-1 clr-dark"> Marvin McKinney </h5>
                      <p className="sm-text clr-base"> Biffco Ltd. </p>
                    </div>
                  </div>
                  <ul className="list list-row align-items-center flex-wrap">
                    <li>
                      <Link
                        href="#"
                        className="bttn bttn--base-outline bttn-sm bttn-pill gap-2 fw-md flex-shrink-0 align-items-center">
                        {" "}
                        Call Us{" "}
                        <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-base d-flex align-items-center">
                          {" "}
                          arrow_forward{" "}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="bttn bttn--base-outline bttn-sm bttn-pill gap-2 fw-md flex-shrink-0 align-items-center">
                        {" "}
                        Skype Us{" "}
                        <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-base d-flex align-items-center">
                          {" "}
                          arrow_forward{" "}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="bttn bttn--base-outline bttn-sm bttn-pill gap-2 fw-md flex-shrink-0 align-items-center">
                        {" "}
                        Mail Us{" "}
                        <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-base d-flex align-items-center">
                          {" "}
                          arrow_forward{" "}
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h5 className="mb-5 clr-dark"> You can Expect: </h5>
                <ul className="list list-row flex-wrap list-disc list-disc--base support-list">
                  <li>
                    <p className="clr-dark"> Phone Call Assistance </p>
                  </li>
                  <li>
                    <p className="clr-dark"> Project Estimation </p>
                  </li>
                  <li>
                    <p className="clr-dark"> Project Consultation </p>
                  </li>
                  <li>
                    <p className="clr-dark"> Solutions Demo </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <form
                action="#"
                className="contact-form-1 row g-4 bg-base p-2 py-5 py-md-10 px-xxl-10 rounded-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control rounded-pill contact-form-1__input"
                    placeholder="Name*"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    className="form-control contact-form-1__input rounded-pill"
                    placeholder="Phone*"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control contact-form-1__input rounded-pill"
                    placeholder="Email*"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control contact-form-1__input rounded-pill"
                    placeholder="Company Name"
                  />
                </div>
                <div className="col-12">
                  <div className="contact-form-1__select yellow-input rounded-pill">
                    <select className="form-select rounded-pill">
                      <option>Select Services</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="contact-form-1__select yellow-input rounded-pill">
                    <select className="form-select rounded-pill">
                      <option>Select Requirement</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control rounded-pill contact-form-1__input"
                    placeholder="$5,000"
                  />
                </div>
                <div className="col-md-6">
                  <div className="contact-form-1__select rounded-pill">
                    <select className="form-select rounded-pill">
                      <option>Right Now</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control contact-form-1__input rounded-8"
                    rows={3}
                    placeholder="Let us know what you need"></textarea>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="newsletter-subscribe"
                    />
                    <label
                      className="form-check-label clr-light"
                      htmlFor="newsletter-subscribe">
                      {" "}
                      I would like to be updated on the latest products, event
                      announcements{" "}
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="accept-terms"
                    />
                    <label
                      className="form-check-label clr-light"
                      htmlFor="accept-terms">
                      {" "}
                      I have read and accepted the Terms & Conditions Privacy
                      Policy{" "}
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="text-center mt-6">
                    <button className="bttn bttn--warning bttn-md bttn-pill fw-md">
                      {" "}
                      Send Message{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Letstalk;