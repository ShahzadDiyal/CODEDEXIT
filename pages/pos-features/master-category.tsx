import Link from "next/link";
import Feedback_3 from "@/components/Feedback_3";
import Letstalk from "@/components/Letstalk";
import CoreValue from "@/components/CoreValue";
import Navbar from "@/components/NavbarTwo";
import { useEffect } from 'react';
import Footer from "@/components/Footer";

const Master_Category_Module = () => {
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
              <h3 className="clr-light mb-3">Master Category</h3>
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
                    Master Category{" "}
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
          <div className="row g-4 padding-around" style={{ border: "1px solid", borderRadius: "5px" }}>
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 mt-0 align-self-center">
              <h3>Master Category Module</h3>
              <p>
                {" "}
                The Master Category Module streamlines product management with a structured system for inventory organization. It features a well-organized product list, enabling users to track stock, pricing, taxes, and availability efficiently. Advanced search and filters enhance accessibility, simplifying vendor coordination and sales tracking.
                Its modern interface boosts productivity, accuracy, and decision-making in inventory management.{" "}
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
            <div className="col-md-6 align-self-center">
              <img
                src="/images/master-category.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
          </div>
          <hr />
          <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{ fontSize: "40px", padding: "20px" }}>
            {" "}
            Master Category Features{" "}
          </span>
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4>Available Product List</h4>
              <p>
                {" "}
                The Available Product List module features a structured table with efficient record handling, including pagination, date filters, and search functionality for quick access. Users can track stock, pricing, taxes, and availability with ease. Advanced filtering enhances usability, ensuring seamless
                inventory management and improved decision-making for optimized sales and stock control.{" "}
              </p>

            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/master-category.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/category.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4>Category List</h4>
              <p>
                {" "}
                The Category Tab features a structured table displaying parent categories and group names for seamless product classification. Each record includes an edit button, allowing users to update category details effortlessly. With an intuitive interface, this module simplifies category management,
                ensuring better organization, quick modifications, and improved inventory control.{" "}
              </p>

            </div>

          </div>
          
          {/* 
          <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{ fontSize: "40px", padding: "20px" }}>
            {" "}
            Graphical Insights{" "}
          </span> */}
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4>Vendor List</h4>
              <p>
                {" "}
                The Vendor Tab provides a comprehensive table displaying vendor details, including Vendor Tag, Name, Phone Number, Product Category, Status, Register Date, Creation Date, and Picture. Users can efficiently manage vendors with pagination, date filters, and a search function for quick access. The Action column allows seamless vendor editing,
                ensuring smooth coordination, organized vendor management, and improved operational efficiency.{" "}
              </p>
            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/vendors.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>

          </div>
          
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/brand-list.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4>Brand List </h4>
              <p>
                {" "}
                The Brand List module features a structured table displaying Brand Tag, Name, Vendor Name, Status, Description, and Picture for effective brand management. With pagination, date filters, and search functionality, users can quickly find and manage brands. The Action column allows seamless editing,
                ensuring accurate brand organization, streamlined vendor coordination, and improved inventory control.{" "}
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4>Product List</h4>
              <p>
                {" "}
                The Product List module provides a well-structured table displaying Tag, Product Name, Brand Name, Measurement Unit, Size, Color, Weight, Description, and Picture for efficient product management. With pagination, date filters, and search functionality, users can easily locate products. The Action column enables seamless editing,
                ensuring accurate product tracking, streamlined inventory control, and better decision-making.{" "}
              </p>
            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/products-list.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>

          </div>
          
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/customer-list.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4>Customer List</h4>
              <p>
                {" "}
                The Customer List module provides a detailed table displaying Store Name, Customer Name, Phone Number, Address, Email, Cash Customer Status, and Picture for efficient customer management. With pagination, date filters, and search functionality, users can quickly locate customer records. The Action column allows seamless editing,
                ensuring accurate data management, enhanced customer tracking, and improved service efficiency.{" "}
              </p>
            </div>
          </div>
          


          <div className="row g-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4>Warehouse</h4>
              <p>
                {" "}
                The Warehouse module provides a structured table displaying Warehouse Name and Picture for efficient inventory storage management. With pagination, date filters, and search functionality, users can quickly locate and manage warehouse records. The Action column enables seamless editing, ensuring accurate updates, better organization,
                and streamlined warehouse operations for improved inventory tracking and stock control.{" "}
              </p>
            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/warehouse-list.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/promotions-list.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4> Promotions</h4>
              <p>
                {" "}
                The Promotions module provides a structured table displaying Store Name, Promotion Name, Start Date, and End Date for efficient promotion tracking. With pagination, date filters, and search functionality, users can easily locate and manage active or upcoming promotions. The Action column allows seamless editing,
                ensuring accurate updates, better promotional planning, and enhanced sales strategy execution. {" "}
              </p>
            </div>
          </div>


        </div>
      </div>
      {/* <div className="field-service-section ">
        <div className="field-service-section__content bg-base-800">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-5 z-1">
                <ul className="list list-row flex-wrap gap-6 mb-8">
                  <li className="d-flex align-items-center gap-3">
                    <img
                      src="/images/icon-73.png"
                      alt="image"
                      className="img-fluid flex-shrink-0"
                    />
                    <h6 className="clr-accent"> Here since 2010 </h6>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <img
                      src="/images/icon-74.png"
                      alt="image"
                      className="img-fluid flex-shrink-0"
                    />
                    <h6 className="clr-accent"> Verified Partner </h6>
                  </li>
                </ul>
                <p className="clr-light mb-8 xxl-text">
                  {" "}
                  Whether you're a startup or an established company in the UK or worldwide, our field service management solutions streamline operations,
                  optimize workforce efficiency, and enhance customer satisfaction.{" "}
                </p>
                <p className="clr-light mb-5">
                  {" "}
                  Maximize productivity with our field service management solutions. Automate scheduling, track field teams in real-time, and optimize resources to ensure seamless service delivery,
                  reducing downtime and improving customer satisfaction effortlessly.{" "}
                </p>
                <p className="clr-light mb-5">
                  {" "}
                  Empower your workforce with cutting-edge technology. Our intuitive platform enables efficient job assignment, mobile access, and instant communication, helping technicians
                  complete tasks faster while keeping customers informed and happy.{" "}
                </p>
                <p className="clr-light mb-12">
                  {" "}
                  Stay ahead with data-driven insights. Leverage powerful analytics to track performance, identify trends, and make informed decisions, ensuring continuous
                  improvement and unmatched service excellence in your field operations.{" "}
                </p>
                <Link
                  href="contact-us"
                  className="bttn gap-2 bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                  {" "}
                  Schedule a call{" "}
                  <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                    {" "}
                    arrow_forward{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
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

export default Master_Category_Module;
