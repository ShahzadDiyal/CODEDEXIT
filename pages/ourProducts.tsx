import Link from "next/link";
import Navbar from "@/components/NavbarTwo";
import { useEffect, useRef, useState } from 'react';
import Footer from "@/components/Footer";
import Testimonail from "@/components/Testimonial";
import GetStartedToday from "@/components/GetStartedToday";

const AllPosFeatures = () => {
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
            <div className="col-md-6">
              <h3 className="clr-light mb-3"> Our Products</h3>
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
                    href="/ourProducts"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Our Products{" "}
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
      <section >
        <div className="section">
          <div className="section__gap-bottom">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-xl-8">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{fontSize:"30px"}}>
                  {" "}
                  Our Products{" "}
                </span>
                  <h3 className="mt-5 mb-5 text-center">
                    {" "}
                    World Class Software Products{" "}
                  </h3>
                  <p className="text-center mx-auto t-short-para">
                    {" "}
                    At CODEDEXIT Ltd, we provide advanced POS solutions for marts of all sizes, simplifying operations, enhancing efficiency, 
                    and driving growth with seamless sales, inventory, and management features! {" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
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

      {/* <GetStartedToday /> */}
      <Footer />
    </>
  );
};

export default AllPosFeatures;
