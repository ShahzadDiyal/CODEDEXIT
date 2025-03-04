import Link from "next/link";
import Technologies from "@/components/Technologies";
import Service from "@/components/Service";
import Navbar from "@/components/NavbarTwo";
import { useEffect, useRef, useState } from 'react';
import Footer from "@/components/Footer";
import Testimonail from "@/components/Testimonial";

const service = () => {
  const [scrolled , setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    const handleScroll = () =>{
      setScrolled(window.scrollY > 100);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const backToTop = () =>{
      window.scrollTo({top: 0 , behavior: "smooth"})
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
      <section >
      <div className="section">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                {" "}
                We Provide the following services{" "}
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
                <h5 className="mb-2">Custom POS </h5>
                <p className="mb-5">
                  {" "}
                  Tailor-made Point of Sale solutions designed to fit your business needs, including inventory tracking, billing.{" "}
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
                <h5 className="mb-2">POS Integration </h5>
                <p className="mb-5">
                  {" "}
                  Seamless integration with payment gateways, accounting software, and CRM systems, along with 24/7 support for smooth operations.{" "}
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
                <h5 className="mb-2">Cloud-Based POS</h5>
                <p className="mb-5">
                  {" "}
                  Access your business data anytime, anywhere with our secure cloud-based POS systems, ensuring real-time insights.{" "}
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
      </section>
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
