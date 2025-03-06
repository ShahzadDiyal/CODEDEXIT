import Link from "next/link";

const Features = () => {
  return (
    <div className="section pt-0"
      style={{
        paddingBottom: "0px",
        borderBottom: " 2px solid #5D3FD3 !important",
        marginBottom: "40px"
      }}>
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                {" "}
                Our POS Features{" "}
              </span>
              <h3 className="mt-5 mb-5 text-center">
                {" "}
                Trusted & Prosdfsjfessional POS Solutions{" "}
              </h3>
              <p className="text-center mx-auto t-short-para">
                {" "}
                Designed for retail, restaurants, and service industries, our advanced POS system streamlines operations, boosts
                efficiency, and drives growth. Transform your vision into success today!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-3" style={{}}>
          <img src="/images/out products.jpg" alt="" style={{ width: "100%", height: "400px", borderRadius: "5px" }} />
        </div>
        <div className="row g-3 g-xxl-4 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-danger flex-shrink-0">
                <img src="/images/icon-2.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Square POS</h5>
                <p className="mb-5">
                  {" "}
                  Free POS software with paid add-ons.
                  Supports inventory management, sales tracking, and reporting.{" "}
                </p>
                <Link
                  href="field-service-management"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
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
                <img src="/images/lamp.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Lightspeed POS</h5>
                <p className="mb-5">
                  {" "}
                  Advanced inventory management with multi-location support.
                  Customizable workflows for restaurants and retail.{" "}
                </p>
                <Link
                  href="cloud-solutions-service"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
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
                <h5 className="mb-2">Toast POS</h5>
                <p className="mb-5">
                  {" "}
                  Designed specifically for food businesses with kitchen display system (KDS).
                  Contactless ordering and payment options.{" "}
                </p>
                <Link
                  href="artificial-intelligence-service"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
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

                <Link
                  href="contact-us"
                  className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                  <span className="bttn__arrow"> Contact Us </span>
                </Link>
                <Link
                  href="#"
                  className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                  <span className="bttn__arrow"> More Products </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
