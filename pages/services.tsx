import Link from "next/link";
import Technologies from "@/components/Technologies";
import Service from "@/components/Service";
import Navbar from "@/components/NavbarTwo";
import { useEffect, useRef, useState } from 'react';
import Footer from "@/components/Footer";
import Testimonail from "@/components/Testimonial";

const service = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <>
      <div onClick={backToTop} className={`back-to-top ${scrolled ? "d-block" : "d-none"}`}>
        <span className="back-top">
          <span className="material-symbols-outlined mat-icon fw-300">keyboard_double_arrow_up</span>
        </span>
      </div>
      {/* Navbar Section */}
      <Navbar rtlurl="/rtl/service" />

      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> Services</h3>
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
                    href="services"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Services{" "}
                  </Link>
                </li>
                <li className="d-none">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent"></Link>
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
                {/* <Link
                  href="InstallationAndSetup"
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
                <img src="/images/connection.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Technical Support & Maintenance </h5>
                <p className="mb-5">
                  {" "}
                  24/7 customer support, troubleshooting, and regular software updates to keep the system running smoothly, minimizing downtime and ensuring business continuity.{" "}
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
                <img src="/images/24-hours.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2"> 24/7 Technical Support</h5>
                <p className="mb-5">
                  {" "}
                  Ensure smooth business operations with 24/7 technical support, system updates, troubleshooting, and maintenance. Our team minimizes downtime, ensuring your POS system runs efficiently for optimal performance and reliability.{" "}
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
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(177 175 172)"}}>
                <img src="/images/reporting.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Reporting & Analytics</h5>
                <p className="mb-5">
                  {" "}
                  Gain real-time insights into sales, inventory, and customer trends with detailed reports and analytics. Track performance, identify opportunities, and make data-driven decisions to optimize operations,drive business growth.{" "}
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
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"#64f955"}}>
                <img src="/images/customizations.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Customization & Integration</h5>
                <p className="mb-5">
                  {" "}
                  Tailoring the POS to fit specific business needs, including integrating with third-party tools like accounting software, e-commerce platforms, and payment gateways for enhanced efficiency.{" "}
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
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(83 114 255)"}}>
                <img src="/images/stockmanagement.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Inventory & Stock Management</h5>
                <p className="mb-5">
                  {" "}
                  Track, manage, and optimize inventory across multiple locations with real-time updates, low-stock alerts, and automated stock adjustments to prevent shortages and ensure efficient stock control.{" "}
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
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(76 171 244)"}}>
                <img src="/images/process.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Sales & Order Processing</h5>
                <p className="mb-5">
                  {" "}
                  Streamline sales transactions with fast order processing, barcode scanning, invoice generation, and seamless checkout experiences, improving efficiency and enhancing customer satisfaction.{" "}
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
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-danger flex-shrink-0">
                <img src="/images/store.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Multi-Store Management</h5>
                <p className="mb-5">
                  {" "}
                  Easily manage multiple stores from a centralized system, ensuring synchronized inventory, pricing, and sales tracking while gaining real-time insights to streamline operations and improve overall business performance.{" "}
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
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-warning flex-shrink-0">
                <img src="/images/secure-payment.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2"> Secure Payment Processing</h5>
                <p className="mb-5">
                  {" "}
                  Accept multiple payment methods, including cash, cards, and digital wallets, with end-to-end encryption and fraud protection, ensuring secure and reliable transactions system.{" "}
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
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(205 62 198)"}}>
                <img src="/images/loyal-customer.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2"> Customer & Loyalty Management</h5>
                <p className="mb-5">
                  {" "}
                  Boost customer retention with loyalty programs, targeted promotions, and detailed customer profiles, offering businesses valuable insights to enhance engagement, drive repeat sales, and improve overall customer satisfaction and experience.{" "}
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
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(151 63 255)"}}>
                <img src="/images/team-management.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2"> Employee & User Management</h5>
                <p className="mb-5">
                  {" "}
                  Manage employees efficiently by assigning roles, setting permissions, and tracking performance with detailed logs and reports, ensuring security, accountability, and streamlined workforce operations for improved business productivity and control.{" "}
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
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(255 236 165)"}}> 
                <img src="/images/cloud-network.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Multi-Location Management</h5>
                <p className="mb-5">
                  {" "}
                  Streamline multi-location operations with centralized stock control, real-time reporting, and seamless coordination, ensuring efficiency, consistency, and smooth management across all business branches for enhanced productivity.{" "}
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
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* <!-- Service Section  --> */}

      {/* <!-- Support Section  --> */}
      <Technologies />
      {/* <!-- Pricing Section --> */}
      {/* <Pricing /> */}
      {/* <!-- Testimonials  --> */}
      <Testimonail />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default service;
