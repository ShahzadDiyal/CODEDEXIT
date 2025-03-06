  import Link from "next/link";

  const OurPosProducts = () => {
    return (
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{fontSize:"30px"}}>
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
        <div className="container">
          <div className="row mb-3" style={{}}>
            <img src="/images/pos.jpg" alt="" style={{ width: "100%", height: "600px", borderRadius: "5px" }} />
          </div>
          <div className="row g-3 g-xxl-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="service-card service-card--1">
                <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(255 206 0)"}}>
                  <img src="/images/cashier.png" alt="image" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-2">Point Of Sale</h5>
                  <p className="mb-5">
                    {" "}
                    Advanced, secure, and user-friendly POS systems designed for seamless transactions, efficient inventory tracking, and streamlined business management, ensuring reliability, scalability, and enhanced operational efficiency for businesses of all sizes.{" "}
                  </p>
                  <Link
                    href="/all-Pos-Features"
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
                  <img src="/images/link.png" alt="image" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-2">Link Shortner</h5>
                  <p className="mb-5">
                    {" "}
                    A fast, secure, and reliable Link Shortener designed for businesses and individuals to shorten, manage, and track URLs effortlessly, enhancing user engagement, 
                    analytics, and branding with customized, shareable links. {" "}
                  </p>
                  <Link
                    href="#jsdj"
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
  };

  export default OurPosProducts;
