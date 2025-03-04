import Link from "next/link";



const Service = () => {
  return (
    <div className="section">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{border:"1px solid",padding:"10px",borderRadius:"10px",width:"20%",justifySelf:"center"}}>
                {" "}
                Our Services{" "}
              </span>
              <h3 className="mt-5 mb-5 text-center">
                {" "}
                World-Class POS Services for Growth{" "}
              </h3>
              <p className="text-center mx-auto t-short-para">
                {" "}
                Empowering retail, restaurants, and service industries with cutting-edge technology. Let’s turn your business vision into reality!{" "}
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
                <img src="/images/customization.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Installation & Setup </h5>
                <p className="mb-5">
                  {" "}
                  Complete deployment of the POS system, covering software and hardware setup, configuration, data migration, user training, and initial support to ensure a seamless and efficient start for businesses with minimal disruptions.{" "}
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
                <img src="/images/connection.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Technical Support & Maintenance </h5>
                <p className="mb-5">
                  {" "}
                  24/7 customer support, troubleshooting, and regular software updates to keep the system running smoothly, minimizing downtime and ensuring business continuity.{" "}
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
                <img src="/images/cloud-computing.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Customization & Integration</h5>
                <p className="mb-5">
                  {" "}
                  Tailoring the POS to fit specific business needs, including integrating with third-party tools like accounting software, e-commerce platforms, and payment gateways for enhanced efficiency.{" "}
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
