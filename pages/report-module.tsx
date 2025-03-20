import Link from "next/link";
import Feedback_3 from "@/components/Feedback_3";
import Letstalk from "@/components/Letstalk";
import CoreValue from "@/components/CoreValue";
import Navbar from "@/components/NavbarTwo";
import { useEffect } from 'react';
import Footer from "@/components/Footer";

const Report_Module = () => {
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
              <h3 className="clr-light mb-3">Report Module </h3>
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
                    Report Module {" "}
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
          <div className="row g-4 padding-around" style={{ border: "1px solid", borderRadius: "5px"}}>
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 mt-0 align-self-center">
              <h3>Report Module </h3>
              <p>
                {" "}
                The Report Module in our POS system provides comprehensive insights through multiple tabs, including Purchase Orders Report, Sales Order Report, Customer Report, Profit/Margin Report, User Report, Return Sales Orders, and Return Purchase Orders. Each tab offers a flexible, user-friendly interface, allowing seamless data retrieval, analysis, and tracking. This module enhances decision-making by
                delivering accurate, real-time reports tailored to business needs.
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
                src="/images/purchase orders pic.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
          </div>
          <hr />
          <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{ fontSize: "40px", padding: "20px" }}>
            {" "}
            Report Module Features {" "}
          </span>
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4><u>Purchase Orders Report </u></h4>
              <p>
                {" "}
                The Purchase Orders Report feature provides a detailed list of all purchase orders, displayed in a structured table with fields like Vendor, Gross Total, Discount Amount, Total, Paid Amount, Remaining Amount, and Purchase Date. It includes pagination, advanced filtering (by user, vendor, products, order status, and date), and supports import/export to Excel for seamless data management.
                This feature ensures efficient tracking and analysis of purchase transactions.{" "}
              </p>

            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/purchase orders pic.png"
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
                src="/images/sale orders pic.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4><u>Sales Orders Report </u></h4>
              <p>
                {" "}
                The Sales Orders Report feature provides a detailed list of all sales transactions, displayed in a structured table with fields like Order #, Customer Name, Gross Total, Discount Amount, Sub Total, Tax Amount, Total, Paid Amount, Remaining Amount, Profit, Cost, and Sale Date. It includes pagination, advanced filtering (by user, customers, products,
                order status, and date) and supports export to PDF and Excel for seamless reporting.{" "}
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4><u>Margin/Profit Report</u></h4>
              <p>
                {" "}
                The Margin/Profit Report feature provides a detailed breakdown of profit margins, displayed in a structured table with fields like Product Name, Quantity, Cost, Total, Margin, and Profit. It includes pagination, advanced filtering (by user, customers, products, and date) for precise data analysis. Additionally, it supports export to PDF and Excel,
                ensuring seamless reporting and efficient tracking of business profitability.{" "}
              </p>

            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/margin pic.png"
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
                src="/images/customer report pic.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4><u>Customer Report </u></h4>
              <p>
                {" "}
                The Customer Report feature provides a comprehensive list of customer transactions, displayed in a structured table with fields like Customer Name, Order #, Total Amount, and Order Date. It includes pagination, advanced filtering (by product categories, customers, products, users, and date) for refined data analysis. Additionally, it supports export to PDF and Excel,
                enabling seamless reporting and efficient customer transaction tracking.{" "}
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4><u>Users Report </u></h4>
              <p>
                {" "}
                The Users Report feature provides a detailed overview of user-related transactions, displayed in a structured table with fields like User Name, Order #, Total Amount, and Order Date. It includes pagination, advanced filtering (by customers, products, users, and date) for precise data analysis. Additionally, it supports export to PDF and Excel,
                ensuring seamless reporting and efficient tracking of user-based transactions.{" "}
              </p>

            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/user report pic.png"
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
                src="/images/return sale orders pic.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4><u>Return Sale Orders Report</u></h4>
              <p>
                {" "}
                The Return Sale Report feature provides a detailed list of all returned sales transactions, displayed in a structured table with fields like Order #, Total Amount, and Order Date. It includes pagination and date-based filtering for efficient data retrieval. Additionally, it supports export to PDF and Excel, ensuring seamless reporting
                and accurate tracking of returned sales for better financial management.{" "}
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4><u>Return Purchase Orders Report</u></h4>
              <p>
                {" "}
                The Return Purchase Orders Report feature provides a detailed list of all returned purchase orders, displayed in a structured table with fields like Order #, Total Amount, and Order Date. It includes pagination and date filtering for efficient data retrieval. Additionally, it supports export to PDF and Excel,
                enabling seamless reporting and effective tracking of returned purchase transactions.{" "}
              </p>

            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/return purchase orders pic.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
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

      {/* <div className="section bg-base-800">
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
      </div> */}

     
      <Footer />
    </>
  );
};

export default Report_Module;
