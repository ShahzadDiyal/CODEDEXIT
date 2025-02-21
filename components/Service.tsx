import Link from "next/link";

const Service = () => {
  return (
    <div className="section">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                {" "}
                We Provide the following services{" "}
              </span>
              <h2 className="mt-5 mb-5 text-center">
                {" "}
                For your future prosperity, we provide world-class IT services.{" "}
              </h2>
              <p className="text-center mx-auto t-short-para">
                {" "}
                We Offer Trusted, Professional IT Service & Technology Solution.
                Let's Make Your Dream Business Link reality{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-3 g-xxl-4 justify-content-center">
          {/* <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-base flex-shrink-0">
                <img src="/images/icon-1.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">IT Solution</h5>
                <p className="mb-5">
                  {" "}
                  We offer the most responsive, innovative, and functional IT solutions to enterprises and
                   businesses worldwide, ensuring efficiency, growth, and success.{" "}
                </p>
                <Link
                  href="it-solutions-service"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div> */}
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-danger flex-shrink-0">
                <img src="/images/icon-2.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Field Services</h5>
                <p className="mb-5">
                  {" "}
                  We provide the most responsive and efficient Field Service Management solutions to enterprises and businesses worldwide.{" "}
                </p>
                <Link
                  href="field-service-management"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-success flex-shrink-0">
                <img src="/images/icon-3.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Cloud Solutions</h5>
                <p className="mb-5">
                  {" "}
                  We deliver the most reliable and scalable Cloud Solutions to enterprises and businesses 
                  worldwide for seamless digital transformation.{" "}
                </p>
                <Link
                  href="cloud-solutions-service"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-warning flex-shrink-0">
                <img src="/images/icon-4.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Artificial Intelligence</h5>
                <p className="mb-5">
                  {" "}
                  We deliver the most intelligent and innovative AI solutions to enterprises
                   and businesses worldwide for enhanced efficiency and growth.{" "}
                </p>
                <Link
                  href="artificial-intelligence-service"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-info flex-shrink-0">
                <img src="/images/icon-5.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">AI & Chatbot</h5>
                <p className="mb-5">
                  {" "}
                  We deliver the most intelligent and efficient AI & Chatbot solutions, 
                  enhancing automation and customer engagement for businesses worldwide.{" "}
                </p>
                <Link
                  href="ai-and-chatbot-service"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div> */}
          {/* <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-secondary flex-shrink-0">
                <img src="/images/icon-6.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Custom Solutions</h5>
                <p className="mb-5">
                  {" "}
                  We deliver the most innovative and scalable custom solutions, empowering enterprises and businesses
                   worldwide with efficiency, flexibility, and success.{" "}
                </p>
                <Link
                  href="custom-solutions-service"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="section__gap-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <div className="group group-row flex-wrap justify-content-center align-items-center">
                {/* <Link
                  href="services"
                  className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                  {" "}
                  More Services{" "}
                </Link> */}
                <Link
                  href="contact-us"
                  className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                  <span className="bttn__arrow"> Contact Us </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
