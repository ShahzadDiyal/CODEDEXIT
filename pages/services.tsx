import Link from "next/link";
import Technologies from "@/components/Technologies";
import Service from "@/components/Service";
import Navbar from "@/components/NavbarTwo";
import { useEffect, useRef, useState } from 'react';
import Footer from "@/components/Footer";
import Testimonail from "@/components/Testimonial";
import GetStartedToday from "@/components/GetStartedToday";

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
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{fontSize:"30px"}}>
                {" "}
                Our Services{" "}
              </span>
              <h3 className="mt-5 mb-5 text-center">
                {" "}
                World-Class Software Services for Growth{" "}
              </h3>
              <p className="text-center mx-auto t-short-para">
                {" "}
                CODEDEXIT Ltd. – Delivering innovative, scalable software solutions to transform businesses with cutting-edge technology, automation, 
                and future-ready digital innovations for lasting success!{" "}
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
                <img src="/images/custom.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Custom Software Development</h5>
                <p className="mb-5">
                  {" "}
                  Custom software development delivering scalable, secure, and high-performance solutions to enhance efficiency, automate processes, and drive growth with innovative, user-friendly, and future-ready technology.{" "}
                </p>
              
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-success flex-shrink-0">
                <img src="/images/web-development.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Web development</h5>
                <p className="mb-5">
                  {" "}
                  Web development services creating responsive, secure, and dynamic websites to enhance user experience, boost engagement, and establish a strong online presence with cutting-edge technology, seamless performance, and scalable solutions.{" "}
                </p>
              
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-warning flex-shrink-0">
                <img src="/images/mobile-app.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Mobile App Development</h5>
                <p className="mb-5">
                  {" "}
                  Mobile app development services creating intuitive, feature-rich, and high-performance apps for iOS and Android, ensuring seamless user experience, scalability, and innovation to drive engagement and business growth.{" "}
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(255 131 102)"}}>
                <img src="/images/solution.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Cloud Solutions</h5>
                <p className="mb-5">
                  {" "}
                  Scalable, secure, and high-performance cloud computing services designed to enhance business operations, improve data accessibility, ensure reliability, and drive efficiency with seamless integration and advanced infrastructure management. 
                  {" "}
                </p>
            
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(187 97 202)"}}>
                <img src="/images/artificial-intelligence.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">AI & ML</h5>
                <p className="mb-5">
                  {" "}
                  AI & Machine Learning Solutions – Harness the power of smart automation and data-driven insights to optimize operations, improve decision-making, enhance efficiency, and drive innovation for scalable and intelligent business growth. {" "}
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(125 233 129)"}}>
                <img src="/images/customer-care.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">IT Consulting & Support</h5>
                <p className="mb-5">
                  {" "}
                  Providing expert guidance, technical assistance, and strategic solutions to optimize your IT infrastructure, enhance security, improve efficiency, and ensure seamless business operations with cutting-edge technology and proactive support.{" "}
                </p>
               
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
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* <!-- Service Section  --> */}

      {/* <!-- Support Section  --> */}
      <GetStartedToday />
    
      <Footer />
    </>
  );
};

export default service;
