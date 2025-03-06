import Link from "next/link";



const Service = () => {
  return (
    <div className="section">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{fontSize:"30px"}}>
                {" "}
                Our Services{" "}
              </span>
              <h3 className="mt-5 mb-5 text-center">
                {" "}
                World-Class Software Solutions{" "}
              </h3>
              <p className="text-center mx-auto t-short-para">
                {" "}
                CODEDEXIT Ltd. – Delivering innovative, scalable software solutions to transform businesses with cutting-edge technology, 
                automation, and future-ready digital innovations for lasting success!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-3 g-xxl-4 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-danger flex-shrink-0">
                <img src="/images/custom.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Custom Software Development</h5>
                <p className="mb-5">
                  {" "}
                  Custom software development delivering scalable, secure, and high-performance solutions to enhance efficiency, automate processes, and drive growth with innovative, user-friendly, and future-ready technology.{" "}
                </p>
                {/* <Link
                  href="field-service-management"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-success flex-shrink-0">
                <img src="/images/web-development.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Web development</h5>
                <p className="mb-5">
                  {" "}
                  Web development services creating responsive, secure, and dynamic websites to enhance user experience, boost engagement, and establish a strong online presence with cutting-edge technology, seamless performance, and scalable solutions.{" "}
                </p>
                {/* <Link
                  href="cloud-solutions-service"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-warning flex-shrink-0">
                <img src="/images/mobile-app.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Mobile App Development</h5>
                <p className="mb-5">
                  {" "}
                  Mobile app development services creating intuitive, feature-rich, and high-performance apps for iOS and Android, ensuring seamless user experience, scalability, and innovation to drive engagement and business growth.{" "}
                </p>
                {/* <Link
                  href="artificial-intelligence-service"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link> */}
              </div>
            </div>
          </div>
          
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
                <Link
                  href="services"
                  className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                  <span className="bttn__arrow"> More Services </span>
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
