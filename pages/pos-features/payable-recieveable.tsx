import Link from "next/link";
import Feedback_3 from "@/components/Feedback_3";
import Letstalk from "@/components/Letstalk";
import CoreValue from "@/components/CoreValue";
import Navbar from "@/components/NavbarTwo";
import { useEffect } from 'react';
import Footer from "@/components/Footer";

const Payable_Recievable_Module = () => {
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
            <div className="col-12">
              <h3 className="clr-light mb-3">Payable & Receivable Module </h3>
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
                    Payable & Receivable Module{" "}
                  </Link>
                </li>
                <li className="d-none">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent"></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner End --> */}
      <div className="section">
        <div className="container">
          <div className="row g-4" style={{ border: "1px solid", borderRadius: "5px", padding: "0 25px 25px 25px" }}>
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 mt-0 align-self-center">
              <h3>Payable & Receivable Module </h3>
              <p>
                {" "}
                The Payable & Receivable Module efficiently tracks outstanding payments with two dedicated tabs: Payable and Receivable. Each tab displays a structured list of total dues with advanced filtering, search, and pagination, ensuring accurate financial tracking. This module enhances cash flow management, reduces discrepancies, and improves financial planning for smoother business operations.
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
                src="/images/payable-recievable1.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
          </div>
          <hr />
          <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{ fontSize: "40px", padding: "20px" }}>
            {" "}
            Payable & Receivable Module {" "}
          </span>
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4><u>Payable</u></h4>
              <p>
                {" "}
                The Payable Tab displays a structured table with Vendor #, Vendor Name, Due Amount, and Creation Date, ensuring efficient tracking of outstanding payments. With advanced filtering, search, and pagination, users can quickly locate vendor dues. Clicking the Pay button opens a popup form for seamless 
                vendor payment processing, enhancing financial efficiency and accuracy.{" "}
              </p>

            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/payable-recievable1.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/vendor-payment.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4><u>Vendor Payment </u></h4>
              <p>
                {" "}
                The Vendor Payment Popup provides a seamless way to process payments with structured fields like Vendors, Payment Methods, Invoice #, Total Due Amount, Discount, Discounted Due Amount, Paid Amount, Paid Date, and Due Date. This intuitive interface ensures accurate payment handling, quick transactions, and better financial tracking,
                 helping businesses maintain smooth vendor relationships and efficient cash flow management.{" "}
              </p>
            </div>
          </div>
          <hr />
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4><u>Receivable  </u></h4>
              <p>
                {" "}
                The Receivable Tab displays a structured table with Customer #, Store Name, Customer Details, Due Amount, and Creation Date, ensuring efficient tracking of outstanding payments. With advanced filtering, search, and pagination, users can quickly find records. Clicking the Pay button opens a popup
                 form for seamless customer payment processing, enhancing financial efficiency and accuracy.{" "}
              </p>

            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/payable-recievable2.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/customer-payment.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4><u>Customer Payment</u></h4>
              <p>
                {" "}
                The Customer Payment Popup provides a seamless payment process with fields for Customer, Payment Methods, Invoice #, Total Due Amount, Discount, Discounted Due Amount, Paid Amount, Paid Date, and Due Date. This structured form ensures accurate transactions, allowing customers to apply discounts, track due amounts, and make 
                timely payments, enhancing efficiency, accuracy, and financial transparency.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-base-800">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-5">
                <h4 className="text-center clr-light">
                  {" "}
                  We use the latest technologies available to create timeless
                  designs.{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-1.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Android </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-2.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Codeignitor </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-3.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Flutter </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-4.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Nodejs </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-5.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Python </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-6.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> React </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-7.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Swift </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-8.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Angular </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-9.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> C Sharp </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-10.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Java </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-11.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Windows </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-12.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Laravel </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Testimonial --> */}
      <Feedback_3 />
      {/* <!-- Team Core Value --> */}
      <CoreValue />
      {/* <!-- Let's Talk --> */}
      <Letstalk />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Payable_Recievable_Module;
