import Navbar from "@/components/NavbarTwo";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from 'react';
import BookADemo from "@/components/BookADemo";

const book_a_demo = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);


  return (
    <>
      <Navbar rtlurl="/rtl/contact-us" />
      {/* Banner */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> Book A Demo</h3>
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
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Book a Demo{" "}
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
      

      
      <BookADemo />
      {/* <!-- Meet Us Section  --> */}
      <div className="section bg-neutral-100">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  Meet us in our Offices{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center">
                  {" "}
                  Our company is all around the world, come and visit us{" "}
                </h2>
                <p className="text-center">
                  {" "}
                  We deliver unrivaled experiences and solutions that result in
                  competitive advantages.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="text-center">
                  <Link
                    href="contact-us"
                    className="bttn bttn--base bttn-md bttn-pill gap-2 fw-md flex-shrink-0">
                    {" "}
                    Let’s Schedule a Call{" "}
                    <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                      {" "}
                      headphones{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <div className="row g-6 gy-10">
            <div className="col-md-4">
              <div className="location-card">
                <img
                  src="/images/location-card-1.png"
                  alt="image"
                  className="img-fluid w-100 rounded-4"
                />
                <div className="group group-row align-items-center justify-content-between mt-8">
                  <div className="flex-grow-1">
                    <h4 className="mb-1"> San Francisco </h4>
                    <span className="sm-text d-block mb-1">
                      {" "}
                      demo@mail.com{" "}
                    </span>
                    <span className="d-block accent-text-clr fw-md">
                      {" "}
                      (415) 931 - 1616{" "}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="bttn bttn--base bttn--sqr rounded">
                      <span className="material-symbols-rounded">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="location-card">
                <img
                  src="/images/location-card-2.png"
                  alt="image"
                  className="img-fluid w-100 rounded-4"
                />
                <div className="group group-row align-items-center justify-content-between mt-8">
                  <div className="flex-grow-1">
                    <h4 className="mb-1"> London </h4>
                    <span className="sm-text d-block mb-1">
                      {" "}
                      demo@mail.com{" "}
                    </span>
                    <span className="d-block accent-text-clr fw-md">
                      {" "}
                      (415) 931 - 1616{" "}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="bttn bttn--base bttn--sqr rounded">
                      <span className="material-symbols-rounded">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="location-card">
                <img
                  src="/images/location-card-3.png"
                  alt="image"
                  className="img-fluid w-100 rounded-4"
                />
                <div className="group group-row align-items-center justify-content-between mt-8">
                  <div className="flex-grow-1">
                    <h4 className="mb-1"> New York </h4>
                    <span className="sm-text d-block mb-1">
                      {" "}
                      demo@mail.com{" "}
                    </span>
                    <span className="d-block accent-text-clr fw-md">
                      {" "}
                      (415) 931 - 1616{" "}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="bttn bttn--base bttn--sqr rounded">
                      <span className="material-symbols-rounded">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonail */}
      <Testimonial />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default book_a_demo;
