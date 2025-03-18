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
                Register Your Company Today!{" "}
              </span>
              <h3 className="mb-10 clr-dark">
                {" "}
                Fill in the details to get started, and let us help you streamline your business operations.{" "}
              </h3>
              <div className="border t-border-base rounded-4 px-6 py-8 d-inline-flex flex-column gap-6 mb-10 w-80">
                <div className="group group-md group-row align-items-center justify-content-center">
                  <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle ms-2">
                    <span className="user__img rounded-circle">
                      <img
                        src="/images/team-2.png"
                        alt="image"
                        className="user__img-is"
                      />
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-1 clr-dark"> Shahzad Diyal </h5>
                    <p className="sm-text clr-base"> Biffco Ltd. </p>
                  </div>
                </div>
                <ul className="list list-row align-items-center justify-content-end">
                  <li className='w-100'>
                    <Link
                      href="contact-us"
                      className="bttn bttn--base-outline bttn-sm bttn-pill gap-2 fw-md flex-shrink-0 align-items-center w-100">
                      {" "}
                      Contact Us Now{" "}
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
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control contact-form-1__input rounded-pill"
                  placeholder="Enter a Company Name you want to Register*"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control rounded-pill contact-form-1__input"
                  placeholder="First Name*"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control rounded-pill contact-form-1__input"
                  placeholder="Last Name*"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control contact-form-1__input rounded-pill"
                  placeholder="Enter your Email*"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="password"
                  className="form-control contact-form-1__input rounded-pill"
                  placeholder="Enter your Password*"
                  required
                />
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
                    required
                  />
                  <label
                    className="form-check-label clr-light"
                    htmlFor="accept-terms">
                    {" "}
                    I have read and accepted the <Link href="/terms-condition" style={{ color: "yellow" }}>Terms & Conditions </Link>{" "}
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="text-center mt-6">
                  <button className="bttn bttn--warning bttn-md bttn-pill fw-md w-100">
                    {" "}
                    Submit{" "}
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