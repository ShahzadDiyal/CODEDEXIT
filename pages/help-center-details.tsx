import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

import { useEffect } from 'react';

const help_center_details = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      <Navbar rtlurl />
      {/* Banner */}
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
                    href="#"
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
              <div className="col-md-8 col-lg-6">
                <div className="group group-xs group-row justify-content-center align-items-center clr-base mb-5">
                  <span className="material-symbols-rounded mat-icon flex-shrink-0 d-none d-sm-block">
                    {" "}
                    calendar_today{" "}
                  </span>
                  <span className="d-inline-block"> May 22, 2023 </span>
                </div>
                <h2 className="text-center mb-5">
                  {" "}
                  Do you offer free trials on Itechex?{" "}
                </h2>
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
            <div className="col-md-10 col-lg-8">
              <h4 className="mb-5"> What is Itechex? </h4>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur. Nisi felis bibendum
                pellentesque in nibh pretium cras. Fusce vitae duis adipiscing
                eu. Ac amet urna ipsum integer quam. Est enim vel fermentum eu.
                Orci congue amet sed ut. Interdum blandit adipiscing pulvinar
                elementum.{" "}
              </p>
              <h4 className="mt-15 mb-5">
                {" "}
                How to create a free account on itechex?{" "}
              </h4>
              <p>
                {" "}
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices cursus sit amet dictum sit amet justo donec enim
                diam porttitor lacus luctus accumsan tortor posuere praesent
                tristique magna sit amet purus gravida quis blandit turpis.{" "}
              </p>
              <h4 className="mt-15 mb-5">
                {" "}
                How to download and setup the the Webtech iOS or macOS app?{" "}
              </h4>
              <p>
                {" "}
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices cursus sit amet dictum sit amet justo donec enim
                diam porttitor lacus luctus accumsan tortor posuere praesent
                tristique magna sit amet purus gravida quis blandit turpis.{" "}
              </p>
              <figure className="my-15">
                <img
                  src="/images/help-details-img.png"
                  alt="image"
                  className="img-fluid"
                />
                <figcaption className="text-center mt-8">
                  Odio facilisis mauris sit amet massa vitae tortor.{" "}
                </figcaption>
              </figure>
              <h5 className="mb-5"> How to setup your itechex account </h5>
              <p>
                {" "}
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices cursus sit amet dictum sit amet justo donec enim
                diam porttitor lacus luctus accumsan tortor posuere praesent
                tristique magna sit amet purus gravida quis blandit turpis.{" "}
              </p>
              <ul className="list list-disc list-disc--base mt-6">
                <li>
                  <p>
                    {" "}
                    Cras sed felis eget velit aliquet. Morbi quis commodo odio{" "}
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    Pharetra vel turpis nunc eget lorem dolor. Quam vulputate{" "}
                  </p>
                </li>
                <li>
                  <p> Vestibulum rhoncus est pellentesque elit ullamcorper </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Related Question  --> */}
      <div className="section bg-neutral-100">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7">
                <h3 className="text-center"> Related Questions </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-6">
            <div className="col-md-6">
              <div className="question-card">
                <h5 className="mb-2">
                  <Link
                    href="help-center-details"
                    className="t-link d-block clr-heading question-card__title">
                    {" "}
                    How to create a free itechex account?{" "}
                  </Link>
                </h5>
                <Link
                  href="help-center-details"
                  className="t-link t-link--base fw-md question-card__link">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="question-card">
                <h5 className="mb-2">
                  <Link
                    href="help-center-details"
                    className="t-link d-block clr-heading question-card__title">
                    {" "}
                    Do you offer free trials on itechex?{" "}
                  </Link>
                </h5>
                <Link
                  href="help-center-details"
                  className="t-link t-link--base fw-md question-card__link">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="question-card">
                <h5 className="mb-2">
                  <Link
                    href="help-center-details"
                    className="t-link d-block clr-heading question-card__title">
                    {" "}
                    How can I invite my team members?{" "}
                  </Link>
                </h5>
                <Link
                  href="help-center-details"
                  className="t-link t-link--base fw-md question-card__link">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="question-card">
                <h5 className="mb-2">
                  <Link
                    href="help-center-details"
                    className="t-link d-block clr-heading question-card__title">
                    {" "}
                    How to create a free itechex account?{" "}
                  </Link>
                </h5>
                <Link
                  href="help-center-details"
                  className="t-link t-link--base fw-md question-card__link">
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
      {/* Footer */}
      <Footer />
    </>
  );
};

export default help_center_details;
