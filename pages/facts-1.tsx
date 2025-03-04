import Navbar from "@/components/NavbarTwo";
import Footer from "@/components/Footer";
import Link from "next/link";

import { useEffect } from "react";

const facts_1 = () => {
  const handleMouseOver = (event: any) => {
    const target = event.currentTarget;
    target.classList.add("active");
    const siblings = Array.from(target.parentNode.children).filter(
      (element) => element !== target
    );
    siblings.forEach((element: any) => {
      element.classList.remove("active");
    });
  };
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      <Navbar rtlurl="/" />
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> History & Facts </h3>
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
                    History & Facts{" "}
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
      {/* <!-- Year Review --> */}
      <div className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-11">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                {" "}
                IT runs your company. You need reliable managed IT services.{" "}
              </span>
              <h2 className="mt-5 mb-5 text-center">
                {" "}
                Hopes for the future are what we dream up. We successfully
                implement them.{" "}
              </h2>
              <p className="text-center">
                {" "}
                You will know that you have located your dream when you have the
                drive to accomplish a goal, the guts to follow it, the fortitude
                to conquer any difficulties that stand in your way, and the
                feeling of being fortunate when you ultimately realize it.
                Continue to dream, work hard, and it will pay off.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section p-xl-0 bg-base-800 position-relative">
        <div className="section__gap-bottom year-review__head">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h2 className="clr-light text-center">
                  {" "}
                  Coded Exit ltd through the years{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="year-review">
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2010 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2010</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We win our first unicorn client{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Our count of IPO’ed clients swells to 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Coded Exit ltd dives into the IoT domain{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We join forces with CTO Connection{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 1000 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2011 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2011</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We win our first unicorn client{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Our count of IPO’ed clients swells to 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Coded Exit ltd dives into the IoT domain{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We join forces with CTO Connection{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 1080 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2012 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2012</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We win our first unicorn client{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Our count of IPO’ed clients swells to 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Coded Exit ltd dives into the IoT domain{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We join forces with CTO Connection{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 1000 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2013 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2013</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We win our first unicorn client{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Our count of IPO’ed clients swells to 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Coded Exit ltd dives into the IoT domain{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We join forces with CTO Connection{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 2100 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2014 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2014</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We win our first unicorn client{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Our count of IPO’ed clients swells to 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Coded Exit ltd dives into the IoT domain{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We join forces with CTO Connection{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 2600 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column active">
                  <div className="year-review__year"> 2015 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2015</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We win our first unicorn client{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Our count of IPO’ed clients swells to 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Coded Exit ltd dives into the IoT domain{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We join forces with CTO Connection{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 2700 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column ">
                  <div className="year-review__year"> 2016 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2016</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We win our first unicorn client{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Our count of IPO’ed clients swells to 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Coded Exit ltd dives into the IoT domain{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We join forces with CTO Connection{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 2900 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2017 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2017</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We win our first unicorn client{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Our count of IPO’ed clients swells to 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Coded Exit ltd dives into the IoT domain{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We join forces with CTO Connection{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 3100 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2018 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2018</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We win our first unicorn client{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Our count of IPO’ed clients swells to 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Coded Exit ltd dives into the IoT domain{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We join forces with CTO Connection{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 3300 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2019 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2019</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We win our first unicorn client{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Our count of IPO’ed clients swells to 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Coded Exit ltd dives into the IoT domain{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We join forces with CTO Connection{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 3500 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2020 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2020</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We win our first unicorn client{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Our count of IPO’ed clients swells to 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Coded Exit ltd dives into the IoT domain{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We join forces with CTO Connection{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 3800 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2021 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2021</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We win our first unicorn client{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Our count of IPO’ed clients swells to 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Coded Exit ltd dives into the IoT domain{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            We join forces with CTO Connection{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 4050 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Numbers  --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section__gap-bottom pb-lg-0 position-sticky top-0">
                <span className="d-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  Top engineers, dedicated your success{" "}
                </span>
                <h2 className="mt-2 mb-4"> Numbers speak louder than words </h2>
                <p className="t-short-para">
                  {" "}
                  Coded Exit ltd offers a diverse variety of information
                  technology-related goods and services, such as web
                  development, digital marketing services, and mobile app
                  development.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text"> Developers: </p>
                    <h1 className="fw-normal clr-base"> 3.5k </h1>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text">
                      {" "}
                      Senior-level engineers:{" "}
                    </p>
                    <h1 className="fw-normal clr-base"> 70% </h1>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text">
                      {" "}
                      Clients served to date:{" "}
                    </p>
                    <h1 className="fw-normal clr-base"> 500+ </h1>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text">
                      {" "}
                      Years in business:{" "}
                    </p>
                    <h1 className="fw-normal clr-base"> 20 </h1>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text">
                      {" "}
                      Clients by referral:{" "}
                    </p>
                    <h1 className="fw-normal clr-base"> 70% </h1>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text">
                      {" "}
                      Average engagement:{" "}
                    </p>
                    <h1 className="fw-normal clr-base"> 36 </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Work Process --> */}
      <div className="section bg-base-800">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-accent text-center">
                  {" "}
                  Our Process{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center clr-light">
                  {" "}
                  How it works{" "}
                </h2>
                <p className="text-center max-text-50 mx-auto clr-light">
                  {" "}
                  Our highly collaborative engagement journey means you benefit
                  from faster adoption and accelerated speed to market.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="list gap-12 list-row flex-wrap work-step-card">
                <li>
                  <div className="work-step-card__content">
                    <h5 className="clr-accent mb-5"> Discovery </h5>
                    <p className="clr-light mb-8">
                      {" "}
                      Once we’ve heard more about your goals and timeline, we’ll
                      start assembling your team for the development.{" "}
                    </p>
                    <h2 className="clr-accent mt-auto"> 01 </h2>
                  </div>
                </li>
                <li>
                  <div className="work-step-card__content">
                    <h5 className="clr-accent mb-5"> Staffing </h5>
                    <p className="clr-light mb-8">
                      {" "}
                      We’ll send you pre-screened, high-quality candidates for
                      consideration, ensuring a perfect fit for your company{" "}
                    </p>
                    <h2 className="clr-accent mt-auto"> 02 </h2>
                  </div>
                </li>
                <li>
                  <div className="work-step-card__content">
                    <h5 className="clr-accent mb-5"> Kickoff </h5>
                    <p className="clr-light mb-8">
                      {" "}
                      Your brand-new development team will put in a lot of extra
                      effort in order to realize your product vision.{" "}
                    </p>
                    <h2 className="clr-accent mt-auto"> 03 </h2>
                  </div>
                </li>
                <li>
                  <div className="work-step-card__content">
                    <h5 className="clr-accent mb-5"> Ramp up </h5>
                    <p className="clr-light mb-8">
                      {" "}
                      After the release, we will quickly and effectively
                      increase your staff to match the success of your product.{" "}
                    </p>
                    <h2 className="clr-accent mt-auto"> 04 </h2>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Core Operation  --> */}
      <div className="section core-operation-section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  Core Operational Principles{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center">
                  {" "}
                  The Values that drive everything we do{" "}
                </h2>
                <p className="text-center max-text-60 mx-auto">
                  {" "}
                  Values guide, actions produce. Our employees and consumers are
                  held accountable. Our Code of Conduct explains our company.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ul className="list gap-8">
                <li>
                  <div className="border rounded-4 p-6 p-md-10 p-lg-6 p-xl-10 d-flex flex-column flex-sm-row gap-6 bg--white">
                    <div className="icon-box icon-box--lg circle bg-base flex-shrink-0">
                      <h4 className="clr-light"> 01 </h4>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-5">
                        {" "}
                        We honor commitments and focus on results:{" "}
                      </h5>
                      <p>
                        {" "}
                        Quality comes first. We proactively advise our clients
                        on how to get the most value from their tech investments
                        and commit to projects we can fully deliver on.{" "}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="border rounded-4 p-6 p-md-10 p-lg-6 p-xl-10 d-flex flex-column flex-sm-row gap-6 bg--white">
                    <div className="icon-box icon-box--lg circle bg-base flex-shrink-0">
                      <h4 className="clr-light"> 02 </h4>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-5">
                        {" "}
                        We offer flexible and stackable service models:{" "}
                      </h5>
                      <p>
                        {" "}
                        Transparent service models give you flexibility. We can
                        switch between being an on-demand consultant to a
                        one-stop-shop for all your engineering needs.{" "}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="border rounded-4 p-6 p-md-10 p-lg-6 p-xl-10 d-flex flex-column flex-sm-row gap-6 bg--white">
                    <div className="icon-box icon-box--lg circle bg-base flex-shrink-0">
                      <h4 className="clr-light"> 03 </h4>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-5">
                        {" "}
                        We are in for the long-term success:{" "}
                      </h5>
                      <p>
                        {" "}
                        Co-creation is our way of doing business. Our teams will
                        proactively support your business at all stages of the
                        software development life cycle (and beyond).{" "}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default facts_1;
