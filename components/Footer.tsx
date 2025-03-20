import Link from "next/link";


const Footer = () => {
  return (
    <section className="footer-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-2__content section--sm">
              <div className="row g-4">
                <div className="col-sm-6 col-md-3 col-xl-3">
                  <h5 className="clr-light mb-5"> IT Services </h5>
                  <ul className="list list-xsm">
                    <li>
                      <Link
                        href="about-us"
                        className="t-link clr-light :clr-accent">
                        {" "}
                        About Us{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="services"
                        className="t-link clr-light :clr-accent">
                        {" "}
                        Services{" "}
                      </Link>
                    </li>

                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 col-xl-3">
                  <h5 className="clr-light mb-5"> Quick Link </h5>
                  <ul className="list list-xs">
                    <li>
                      <Link
                        href="terms-condition"
                        className="t-link clr-light :clr-accent">
                        {" "}
                        Terms & Condition{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="our-careers"
                        className="t-link clr-light :clr-accent">
                        {" "}
                        Our Careers{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="faq"
                        className="t-link clr-light :clr-accent">
                        {" "}
                        FAQ{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 col-xl-3">
                  <h5 className="clr-light mb-5"> Support </h5>
                  <ul className="list list-xs">
                    <li>
                      <Link
                        href="contact-us"
                        className="t-link clr-light :clr-accent">
                        {" "}
                        Contact Us{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="book-a-demo"
                        className="t-link clr-light :clr-accent">
                        {" "}
                        Book a Demo{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="register-a-company"
                        className="t-link clr-light :clr-accent">
                        {" "}
                        Register a Company{" "}
                      </Link>
                    </li>


                  </ul>
                </div>

                <div className="col-sm-6 col-md-4 col-xl-3">
                  <h5 className="clr-light mb-5"> Contact us </h5>
                  <ul className="list list-xsm">
                    <li>
                      <div className="mobile-notification">
                        <span className="mobile-notification__icon bg-danger">
                          <span className="material-symbols-rounded mat-icon clr-light size-32">
                            {" "}
                            phone_in_talk{" "}
                          </span>
                        </span>
                        <span className="mobile-notification__content">
                          <span className="sm-text d-block clr-light">
                            {" "}
                            Phone{" "}
                          </span>
                          <Link
                            href="#"
                            className="t-link mobile-notification__title :clr-accent">
                            {" "}
                            (482) 504 - 3207{" "}
                          </Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="mobile-notification">
                        <span className="mobile-notification__icon bg-success">
                          <span className="material-symbols-rounded mat-icon clr-light size-32">
                            {" "}
                            local_post_office{" "}
                          </span>
                        </span>
                        <span className="mobile-notification__content">
                          <span className="sm-text d-block clr-light">
                            {" "}
                            Email{" "}
                          </span>
                          <Link
                            href="#"
                            className="t-link mobile-notification__title :clr-accent">
                            {" "}
                            demo@mail.com{" "}
                          </Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="mobile-notification">
                        <span className="mobile-notification__icon bg-warning">
                          <span className="material-symbols-rounded mat-icon clr-light size-32">
                            {" "}
                            pin_drop{" "}
                          </span>
                        </span>
                        <span className="mobile-notification__content">
                          <span className="sm-text d-block clr-light">
                            {" "}
                            Location{" "}
                          </span>
                          <span className="mobile-notification__title">
                            {" "}
                            Santa Ana, Illinois, USA{" "}
                          </span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div className="footer-2__bottom">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <p className="clr-light text-center text-md-start">
                {" "}
                Copyright 2023 <u> CODEDEXIT Ltd</u> All Rights Reserved.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;