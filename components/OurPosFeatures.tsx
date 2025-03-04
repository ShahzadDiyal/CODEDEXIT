  import Link from "next/link";

  const OurPosFeatures = () => {
    return (
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{border:"1px solid",padding:"10px",borderRadius:"10px",width:"30%",justifySelf:"center"}}>
                  {" "}
                  Our POS Features{" "}
                </span>
                <h3 className="mt-5 mb-5 text-center">
                  {" "}
                  Trusted & Professional POS Solutions{" "}
                </h3>
                <p className="text-center mx-auto t-short-para">
                  {" "}
                  Designed for small to large marts, our advanced POS system simplifies operations, enhances efficiency, and accelerates business growth. Take your mart 
                  to the next level with seamless sales, inventory, and management solutions! {" "}
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
                <div className="icon-box icon-box--md circle bg-danger flex-shrink-0">
                  <img src="/images/icon-2.png" alt="image" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-2">Make Sale</h5>
                  <p className="mb-5">
                    {" "}
                    The Make Sale module streamlines sales processing with a user-friendly interface, real-time calculations, and shortcut keys, ensuring fast transactions, improved efficiency, and a seamless checkout experience for businesses and customers.{" "}
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
                  <img src="/images/lamp.png" alt="image" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-2">Purchase Orders</h5>
                  <p className="mb-5">
                    {" "}
                    Purchase Orders module helps businesses efficiently manage stock procurement, ensuring seamless inventory replenishment. With a structured interface, real-time calculations, and shortcut keys, users can quickly process purchase orders
                    , track payments etc.{" "}
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
                  <h5 className="mb-2">Accounting</h5>
                  <p className="mb-5">
                    {" "}
                    The Accounting Module is a powerful tool that helps businesses manage financial records efficiently. With real-time tracking, automated calculations, and secure access, businesses can streamline 
                    accounting, reduce errors, and make informed financial decisions.{" "}
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

                  <Link
                    href="contact-us"
                    className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                    <span className="bttn__arrow"> Contact Us </span>
                  </Link>
                  <Link
                    href="all-Pos-Features"
                    className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                    <span className="bttn__arrow"> More Features </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default OurPosFeatures;
