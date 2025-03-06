import Link from "next/link";
import Feedback_3 from "@/components/Feedback_3";
import Letstalk from "@/components/Letstalk";
import CoreValue from "@/components/CoreValue";
import Navbar from "@/components/NavbarTwo";
import { useEffect } from 'react';
import Footer from "@/components/Footer";

const Installation_and_setup = () => {
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
              <h3 className="clr-light mb-3">Make Sale</h3>
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
                    Make Sale{" "}
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
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">
              
            </div>
            <span className="w-100"></span>
            <div className="col-md-6">
            <h2>Make Sale Module</h2>
              <p>
                {" "}
                We are a Field Service Management company. We provide efficient workforce and service automation solutions. Let us help you streamline operations using technologies like real-time tracking,
                scheduling, dispatching, reporting, and mobile workforce management.
                We have extensive expertise in delivering advanced Field Service Management solutions. By utilizing the latest technologies and the right tools, our team develops tailored solutions that perfectly align with industry needs. Managing field operations is a complex process, and we support you
                at every stage, from planning and deployment to optimization and ongoing maintenance.{" "}
              </p>
              <Link
                href="contact-us"
                className="bttn gap-2 bttn--base bttn-md bttn-pill fw-md flex-shrink-0 mt-3">
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
                src="/images/make-sale.jpg"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
              {/* <p className="mb-8">
                {" "}
                We have extensive expertise in delivering advanced Field Service Management solutions. By utilizing the latest technologies and the right tools, our team develops tailored solutions that perfectly align with industry needs. Managing field operations is a complex process, and we support you
                at every stage, from planning and deployment to optimization and ongoing maintenance.{" "}
              </p> */}
              
            </div>
          </div>
        </div>
      </div>
      <div className="field-service-section ">
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

      <div className="section pb-0 service-section-2">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-9">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  Professional Field Services Management{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center">
                  {" "}
                  A team of field service experts optimizing operations, workforce efficiency, and customer satisfaction.{" "}
                </h2>
                <p className="text-center mx-auto max-text-70">
                  {" "}
                  We specialize in field service management solutions, leveraging the best technologies to streamline operations, enhance efficiency,
                  and support your journey from planning to execution and ongoing maintenance.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <div className="row g-6">
            <div className="col-md-4">
              <div className="help-card help-card--hover-base text-center bg--white border-0 t-shadow">
                <img
                  src="/images/icon-78.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5">
                  {" "}
                  B2B, B2C, Internal Platforms Development Services{" "}
                </h5>
                <p className="mb-8">
                  {" "}
                  Web development services - build with us any B2B/B2C/internal
                  platform and let your business scale.{" "}
                </p>
                <Link
                  href="field-service-management"
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
            <div className="col-md-4">
              <div className="help-card help-card--hover-base text-center bg--white border-0 t-shadow">
                <img
                  src="/images/icon-79.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5">
                  {" "}
                  Backend Development - JavaScript, PHP{" "}
                </h5>
                <p className="mb-8">
                  {" "}
                  Build your backend as REST API with JavaScript (Node.js,
                  Express) or PHP (Symfony, Laravel).{" "}
                </p>
                <Link
                  href="field-service-management"
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
            <div className="col-md-4">
              <div className="help-card help-card--hover-base text-center bg--white border-0 t-shadow">
                <img
                  src="/images/icon-80.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5">
                  {" "}
                  Frontend Development - React, Vue.js{" "}
                </h5>
                <p className="mb-8">
                  {" "}
                  Stunning user experience. Build frontend of your application
                  with trusted and loved by millions technologies - React and
                  Vue.js..{" "}
                </p>
                <Link
                  href="field-service-management"
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

export default Installation_and_setup;
