import Link from "next/link";
import Feedback_3 from "@/components/Feedback_3";
import Letstalk from "@/components/Letstalk";
import CoreValue from "@/components/CoreValue";
import Navbar from "@/components/NavbarTwo";
import { useEffect } from 'react';
import Footer from "@/components/Footer";

const Claims_Module = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar rtlurl="/rtl/service-details-1" />
      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="clr-light mb-3">Claims</h3>
              <ul className="list list-row flex-wrap breadcrumb-list">
                <li>
                  <Link
                    href="home"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/all-Pos-Features"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Features{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Claims{" "}
                  </Link>
                </li>
                <li className="d-none">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent"></Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
            <div className="container" style={{ marginTop: "20px" }}>
              <div className="row justify-content-center">
                <div className="group group-row flex-wrap justify-content-end align-items-end">
                  <Link
                    href="book-a-demo"
                    className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                    <span className="bttn__arrow"> Book a Demo </span>
                  </Link>
                  <Link
                    href="register-a-company"
                    className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                    <span className="bttn__arrow"> Register a Company </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner End --> */}
      <div className="section">
        <div className="container">
          <div className="row g-4 padding-around" style={{border:"1px solid", borderRadius:"5px"}}>
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 mt-0 align-self-center">
              <h3>Claims Module </h3>
              <p>
                {" "}
                The Claim Module provides a centralized platform to manage and track all claims efficiently. It ensures transparency, quick dispute resolution, and accurate record-keeping for refunds, returns, or damaged goods. With structured data and streamlined processing, businesses can reduce financial losses, enhance customer satisfaction, 
                and maintain seamless vendor coordination for improved operational efficiency.
                {" "}
              </p>
              <Link
                href="contact-us"
                className="bttn gap-2 bttn--base bttn-md bttn-pill fw-md flex-shrink-0" style={{ marginTop: "28px" }}>
                {" "}
                Start Project{" "}
                <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                  {" "}
                  arrow_forward{" "}
                </span>
              </Link>
            </div>
            <div className="col-md-6">
              <img
                src="/images/claims.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{border:"1px solid", borderRadius:"5px"}}
              />
            </div>
          </div>
          <hr />
          <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{ fontSize: "40px", padding: "20px" }}>
            {" "}
           Claim Module Features{" "}
          </span>
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4><u>Claims List</u></h4>
              <p>
                {" "}
                The Claim Module efficiently tracks and manages claims with a structured table displaying Store Name, Product Name, Customer & Vendor Details, Claim Date, Status, Reason, Quantity, and Claim Amount. Users can monitor resolution progress, with fields for Resolution Date and Notes ensuring transparency. Advanced search, date filtering, and pagination enable quick access to claims, improving dispute resolution and record accuracy. The Action column allows seamless claim management, reducing losses, enhancing customer
                 satisfaction, and streamlining vendor coordination for smooth operations.{" "}
              </p>

            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/claims.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{border:"1px solid", borderRadius:"5px"}}
              />
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/edit-claims.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{border:"1px solid", borderRadius:"5px"}}
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4><u>Claim Edit Functionality</u></h4>
              <p>
                {" "}
                The Claim Module features an intuitive sidebar that opens from the right when double clicking on a record or the edit button. This allows users to edit claim details seamlessly, including status, resolution notes, and claim amount. With a structured layout, users can quickly update records without leaving the main page. This enhances efficiency, ensures real-time claim management,
                 and improves user experience, enabling smooth claim tracking and resolution.{" "}
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <div className="container" style={{ marginTop: "20px" }}>
                <div className="row justify-content-center">
                  <div className="group group-row flex-wrap justify-content-center align-items-end">
                    <Link
                      href="book-a-demo"
                      className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                      <span className="bttn__arrow"> Book a Demo </span>
                    </Link>
                    <Link
                      href="register-a-company"
                      className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                      <span className="bttn__arrow"> Register a Company </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
      <Footer />
    </>
  );
};

export default Claims_Module;
