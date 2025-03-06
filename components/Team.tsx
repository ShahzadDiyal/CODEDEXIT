import Link from "next/link";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";

const Team = () => {
    return (
        <div className="section--sm section--bottom team-section-1">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8 col-xxl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center"  style={{fontSize:"30px"}}>
                  {" "}
                  Our Team{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center">
                  {" "}
                  The Amazing Team Behind Our Company{" "}
                </h2>
                <p className="text-center mx-auto t-short-para">
                  {" "}
                  Our team strives to assist our clients retain or acquire
                  best-in-class positions in their respective sectors.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <div className="row g-4 justify-content-center">
            <div className="col-sm-6 col-lg-3">
              <div className="team-card-1 text-center">
                <div className="team-card-1__img mx-auto">
                  <img
                    src="/images/rizwanzamanpic.jpg"
                    alt="image"
                    className="team-card-1__img-is"
                  />
                </div>
                <div className="team-card-1__body mt-10">
                  <h5 className="text-center"> Rizwan Zaman </h5>
                  <p className="text-center mt-1 mb-4 clr-accent">
                    {" "}
                   Software Engineer{" "}
                  </p>
                  <ul className="list list-xs list-row justify-content-center">
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="team-card-1 text-center">
                <div className="team-card-1__img mx-auto">
                  <img
                    src="/images/shahzad.png"
                    alt="image"
                    className="team-card-1__img-is"
                  />
                </div>
                <div className="team-card-1__body mt-10">
                  <h5 className="text-center"> Shahzad Diyal </h5>
                  <p className="text-center mt-1 mb-4 clr-accent">
                    {" "}
                   Frontend Engineer{" "}
                  </p>
                  <ul className="list list-xs list-row justify-content-center">
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="team-card-1 text-center">
                <div className="team-card-1__img mx-auto">
                  <img
                    src="/images/kamran-qa.jpg"
                    alt="image"
                    className="team-card-1__img-is"
                  />
                </div>
                <div className="team-card-1__body mt-10">
                  <h5 className="text-center">Kamran Khan</h5>
                  <p className="text-center mt-1 mb-4 clr-accent">
                    {" "}
                    QA Expert{" "}
                  </p>
                  <ul className="list list-xs list-row justify-content-center">
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="team-card-1 text-center">
                <div className="team-card-1__img mx-auto">
                  <img
                    src="/images/team-8.png"
                    alt="image"
                    className="team-card-1__img-is"
                  />
                </div>
                <div className="team-card-1__body mt-10">
                  <h5 className="text-center"> Floyd Miles </h5>
                  <p className="text-center mt-1 mb-4 clr-accent">
                    {" "}
                    Executive Assistant{" "}
                  </p>
                  <ul className="list list-xs list-row justify-content-center">
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__gap-top">
          <div className="container">
            <div className="row g-4 justify-content-center justify-content-xl-between align-items-center">
              <div className="col-sm-11 col-md-7 col-xl-6 col-xxl-5">
                <h4 className="clr-light text-center text-md-start">
                  {" "}
                  Get a 15 Minute Consultation Over Skype or Zoom!{" "}
                </h4>
              </div>
              <div className="col-md-5">
                <div className="text-center text-md-end">
                  <Link
                    href="contact-us"
                    className="bttn bttn-pill bttn-md bttn--light-accent align-items-center gap-2 fw-md">
                    {" "}
                    Let’s Talk Now{" "}
                    <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-base">
                      {" "}
                      headphones{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Team;