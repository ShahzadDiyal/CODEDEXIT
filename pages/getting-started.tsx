import Navbar from "@/components/NavbarTwo";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from 'react';

const getting_started = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      <Navbar rtlurl="/rtl/getting-started" />
      {/* Banner Sectoin */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> Getting Started </h3>
              <ul className="list list-row flex-wrap breadcrumb-list">
                <li>
                  <Link
                    href="/"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Home{" "}
                  </Link>
                </li>
               
                <li className="">
                  <Link
                    href="/help-center"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Help Center{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Getting Started{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Help Topics --> */}
      <section className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-6">
                <h2 className="text-center mb-5"> Getting started </h2>
                <p className="text-center mx-auto max-text-50">
                  {" "}
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-6 justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="help-card">
                <div className="d-flex align-items-center gap-2 clr-base">
                  <span className="material-symbols-rounded mat-icon fw-200">
                    {" "}
                    calendar_month{" "}
                  </span>
                  <span className="d-block"> May 26, 2022 </span>
                </div>
                <h4 className="mt-4 mb-5">
                  {" "}
                  Do you offer free trials on Coded Exit ltd?{" "}
                </h4>
                <p className="mb-8">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur. Ut pharetra est
                  vestibulum volutpat nullam. Sit tincidunt lectus congue neque
                  tempus porttitor volutpat lorem. Tortor vitae sed dui dolor.
                  Malesuada cursus eget quis facilisis.{" "}
                </p>
                <Link
                  href="help-center-details"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Browse Articles{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-10 col-xl-8">
              <div className="help-card">
                <div className="d-flex align-items-center gap-2 clr-base">
                  <span className="material-symbols-rounded mat-icon fw-200">
                    {" "}
                    calendar_month{" "}
                  </span>
                  <span className="d-block"> May 26, 2022 </span>
                </div>
                <h4 className="mt-4 mb-5">
                  {" "}
                  How can I invite my team members?{" "}
                </h4>
                <p className="mb-8">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur. Ut pharetra est
                  vestibulum volutpat nullam. Sit tincidunt lectus congue neque
                  tempus porttitor volutpat lorem. Tortor vitae sed dui dolor.
                  Malesuada cursus eget quis facilisis.{" "}
                </p>
                <Link
                  href="help-center-details"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Browse Articles{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-10 col-xl-8">
              <div className="help-card">
                <div className="d-flex align-items-center gap-2 clr-base">
                  <span className="material-symbols-rounded mat-icon fw-200">
                    {" "}
                    calendar_month{" "}
                  </span>
                  <span className="d-block"> May 26, 2022 </span>
                </div>
                <h4 className="mt-4 mb-5">
                  {" "}
                  How to create a free Coded Exit ltd account?{" "}
                </h4>
                <p className="mb-8">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur. Ut pharetra est
                  vestibulum volutpat nullam. Sit tincidunt lectus congue neque
                  tempus porttitor volutpat lorem. Tortor vitae sed dui dolor.
                  Malesuada cursus eget quis facilisis.{" "}
                </p>
                <Link
                  href="help-center-details"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Browse Articles{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- CTA --> */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bg-base rounded-5 p-4 p-sm-8 p-xl-12 p-xxl-15">
              <div className="d-flex align-items-center gap-8 justify-content-between flex-wrap">
                <div className="d-flex gap-5 flex-wrap">
                  <div className="flex-shrink-0">
                    <img
                      src="/images/icon-67.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h3 className="clr-light mb-4">
                      {" "}
                      Can't find the right answer?{" "}
                    </h3>
                    <p className="clr-light max-text-50">
                      {" "}
                      Go to our contact page and{" "}
                      <Link
                        href="#"
                        className="t-link d-inline-block clr-accent :clr-light">
                        get in touch with us
                      </Link>
                      . Our support team will be happy to help you.{" "}
                    </p>
                  </div>
                </div>
                <Link
                  href="contact-us"
                  className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md gap-2">
                  <span className="d-inline-block"> Contact us </span>
                  <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-base d-flex align-items-center">
                    {" "}
                    arrow_forward{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Category --> */}
      <section className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row g-6">
              <div className="col-md-6">
                <h3> More categories </h3>
              </div>
              <div className="col-md-6">
                <div className="text-md-end">
                  <Link
                    href="help-center"
                    className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                    <span className="bttn__arrow"> All Categories </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-6">
            <div className="col-md-6 col-lg-4">
              <div className="help-card text-center">
                <img
                  src="/images/icon-61.png"
                  alt="image"
                  className="img-fluid"
                />
                <h4 className="mt-8 mb-5"> Getting started </h4>
                <p className="mb-8">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur. Eu purus eget auctor
                  eu laoreet. Faucibus rhoncus tincidunt vel placerat aucibus
                  rhoncus.{" "}
                </p>
                <Link
                  href="getting-started"
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
            <div className="col-md-6 col-lg-4">
              <div className="help-card text-center">
                <img
                  src="/images/icon-62.png"
                  alt="image"
                  className="img-fluid"
                />
                <h4 className="mt-8 mb-5"> Mobile Apps </h4>
                <p className="mb-8">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur. Eu purus eget auctor
                  eu laoreet. Faucibus rhoncus tincidunt vel placerat aucibus
                  rhoncus.{" "}
                </p>
                <Link
                  href="getting-started"
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
            <div className="col-md-6 col-lg-4">
              <div className="help-card text-center">
                <img
                  src="/images/icon-63.png"
                  alt="image"
                  className="img-fluid"
                />
                <h4 className="mt-8 mb-5"> Payments </h4>
                <p className="mb-8">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur. Eu purus eget auctor
                  eu laoreet. Faucibus rhoncus tincidunt vel placerat aucibus
                  rhoncus.{" "}
                </p>
                <Link
                  href="getting-started"
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
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default getting_started;
