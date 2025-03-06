import Team from "@/components/Team";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, EffectFade, Navigation, Pagination} from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Feedback_2 from "@/components/Feedback_2";
import Videosection from "@/components/Videosection";
import { useEffect } from 'react';
import Navbar from "@/components/NavbarTwo";
import Footer from "@/components/Footer";

const why_choose_us = () => {
    const handleMouseOver = (event:any) => {
        const target = event.currentTarget;
        target.classList.add('active');
        const siblings = Array.from(target.parentNode.children).filter(
          (element) => element !== target
        );
        siblings.forEach((element:any) => {
          element.classList.remove('active');
        });
      };
      const valueSliderStep = ['<span class="d-inline-block clr-base me-2">01</span> People <span class="value-slider__circle value-slider__circle-1"></span>', '<span class="d-inline-block clr-base me-2">02</span> Growth <span class="value-slider__circle value-slider__circle-2"></span>', '<span class="d-inline-block clr-base me-2">03</span> Responsibility <span class="value-slider__circle value-slider__circle-3"></span>', '<span class="d-inline-block clr-base me-2">04</span> Fullfilment <span class="value-slider__circle value-slider__circle-4"></span>', '<span class="d-inline-block clr-base me-2">05</span> Fair Play <span class="value-slider__circle value-slider__circle-5"></span>', '<span class="d-inline-block clr-base me-2">06</span> Opennes <span class="value-slider__circle value-slider__circle-6"></span>'] 
      useEffect(() => {
        document.documentElement.setAttribute("dir", 'ltr');
      },[])
      return (
    <>
      <Navbar rtlurl="/rtl/about-us"/>
      {/* Banner Section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> Why Choose Us? </h3>
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
                    Why Choose Us?{" "}
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
      {/* <!-- Banner End --> */}
      {/* <!-- About Section  --> */}
      <div className="section">
        <div className="container">
          <div className="row justify-content-xxl-between">
            <div className="col-lg-6 col-xxl-5">
              <div className="section__gap-bottom pb-lg-0 position-sticky top-0">
                <span className="d-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  We’re Coded Exit Ltd {" "}
                </span>
                <h2 className="mt-2 mb-4">
                  {" "}
                  Why Choose Us?{" "}
                </h2>
              
                <p className="mb-5">
                  {" "}
                  At Coded Exit Ltd, we don’t just provide IT solutions—we build innovative, scalable, and efficient systems that transform businesses. Whether you need Field Service Management, Cloud Solutions, AI, Chatbots, or other IT services,
                   we are your trusted technology partner. Here’s why you should choose us?{" "}
                </p>
                <h4> Expertise Across Multiple Domains</h4>
                <p className="mb-8">
                  {" "}
                  With a team of highly skilled professionals, we bring deep expertise in field service management, AI-powered automation, cloud computing, and IT solutions. Our solutions are tailored to meet the specific
                   needs of businesses, ensuring maximum efficiency and productivity.{" "}
                </p>
                <h4> Cutting-Edge Technology</h4>
                <p className="mb-8">
                  {" "}
                  We stay ahead of industry trends by implementing the latest advancements in AI, cloud computing, and automation. Our solutions are designed to future-proof your business, 
                  keeping you competitive in a rapidly evolving digital landscape.{" "}
                </p>
                <h4> Custom Solutions for Every Business</h4>
                <p className="mb-8">
                  {" "}
                  No two businesses are the same, and neither are our solutions. We customize every service to fit your unique business model, 
                  whether you’re a startup, mid-sized company, or large enterprise.{" "}
                </p>
                <h4>Reliability & Security</h4>
                <p className="mb-8">
                  {" "}
                  We prioritize data security, system reliability, and compliance with industry standards. Our cloud and AI solutions are designed with high-performance security
                   measures to ensure your business runs smoothly without risks.{" "}
                </p>
                <h4>Scalable & Cost-Effective Solutions</h4>
                <p className="mb-8">
                  {" "}
                  Our solutions are built for growth and scalability. Whether you need an AI-driven chatbot, a cloud infrastructure upgrade, or an end-to-end field service management system, we ensure cost-effective 
                  and flexible solutions tailored to your business needs.{" "}
                </p>
                <h4> Customer-Centric Approach</h4>
                <p className="mb-8">
                  {" "}
                  Your success is our priority. We provide 24/7 support, ongoing maintenance, and a collaborative approach to ensure your business runs seamlessly. We believe in long-term 
                  partnerships that drive real business impact.{" "}
                </p>
                <h3>Let’s Innovate Together!</h3>
                <p className="mb-8">
                  {" "}
                  At Coded Exit Ltd, we are passionate about empowering businesses with technology. Whether you need to automate operations, improve efficiency, or scale with cloud and AI solutions, we are here to help.
                   Partner with us and take your business to the next level! {" "}
                </p>
                                
                  <Link
                  href="contact-us"
                  className="bttn bttn--base bttn-md bttn-pill gap-2 fw-md flex-shrink-0">
                  {" "}
                  Let’s work together{" "}
                  <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                    {" "}
                    arrow_forward{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <figure className="about-company-1__img">
                <img
                  src="/images/about-img-1.png"
                  alt="image"
                  className="img-fluid"
                />
                <figcaption className="about-company-1__img-wrapper">
                  <span className="h2 clr-light m-0 d-block text-start">
                    {" "}
                    1000{" "}
                  </span>
                  <span className="d-block clr-light text-start">
                    {" "}
                    Over 1000 employees globally use our vision to reality
                    services.{" "}
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About Section End --> */}
      {/* <!-- Gallery  --> */}
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12">
            <Swiper
            dir="ltr"
            slidesPerView="auto"
            centeredSlides={true}
            spaceBetween={24}
            loop={true}
            centeredSlidesBounds={true}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false
            }}
            speed={4000}
            breakpoints={{
                768: {
                    slidesPerView: 1.5,
                    spaceBetween: 16,
                  },
                  1200: {
                    slidesPerView: 2.5,
                    spaceBetween: 32,
                  },
                  1920: {
                    slidesPerView: 3.5
                  }
            }}
            modules={[Autoplay]}
            className="gallery-slider-1"
            >           
                <SwiperSlide>
                  <div className="gallery-slider-1__item">
                    <img
                      src="/images/gallery-slider-1.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="gallery-slider-1__item">
                    <img
                      src="/images/gallery-slider-2.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="gallery-slider-1__item">
                    <img
                      src="/images/gallery-slider-3.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="gallery-slider-1__item">
                    <img
                      src="/images/gallery-slider-4.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="gallery-slider-1__item">
                    <img
                      src="/images/gallery-slider-5.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                </SwiperSlide>           
            </Swiper>
          </div>
        </div>
      </div>
      {/* <!-- Gallery End --> */}
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
                <p>
                  {" "}
                  Here are a few numbers that speak to Coded Exit ltd's power, ease,
                  and speed.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text"> Developers: </p>
                    <h2 className="fw-normal clr-base"> 3.5k </h2>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text">
                      {" "}
                      Senior-level engineers:{" "}
                    </p>
                    <h2 className="fw-normal clr-base"> 70% </h2>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text">
                      {" "}
                      Clients served to date:{" "}
                    </p>
                    <h2 className="fw-normal clr-base"> 500+ </h2>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text">
                      {" "}
                      Years in business:{" "}
                    </p>
                    <h2 className="fw-normal clr-base"> 20 </h2>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text">
                      {" "}
                      Clients by referral:{" "}
                    </p>
                    <h2 className="fw-normal clr-base"> 70% </h2>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text">
                      {" "}
                      Average engagement:{" "}
                    </p>
                    <h2 className="fw-normal clr-base"> 36 </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Numbers End --> */}
      {/* <!-- Year Review  --> */}
      <div className="section p-xl-0 bg-base-800 position-relative">
        <div className="section__gap-bottom year-review__head">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
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
                <div onMouseOver={handleMouseOver} className="year-review__column">
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
                      <p className="text--xlcenter clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column">
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
                <div onMouseOver={handleMouseOver} className="year-review__column">
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
                <div onMouseOver={handleMouseOver} className="year-review__column">
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
                <div onMouseOver={handleMouseOver} className="year-review__column">
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
                <div onMouseOver={handleMouseOver} className="year-review__column active">
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
                <div onMouseOver={handleMouseOver} className="year-review__column ">
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
                <div onMouseOver={handleMouseOver} className="year-review__column">
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
                <div onMouseOver={handleMouseOver} className="year-review__column">
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
                <div onMouseOver={handleMouseOver} className="year-review__column">
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
                <div onMouseOver={handleMouseOver} className="year-review__column">
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
                <div onMouseOver={handleMouseOver} className="year-review__column">
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
      {/* <!-- Year Review End --> */}
      {/* <!-- Value Share  --> */}
      <section className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-6">
                <span className="d-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  The Values we Share{" "}
                </span>
                <h2 className="mt-2 mb-4">
                  {" "}
                  The Values that drive everything we do{" "}
                </h2>
                <p className="t-short-para">
                  {" "}
                  Strong values that bring great people together{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="value-slider-container">
                <div className="value-slider__step">
                  <div className="swiper-pagination"></div>
                </div>
                <Swiper
                dir="ltr"
                slidesPerView={1}
                autoplay={false}
                speed={1000}
                pagination={{
                    el: ".value-slider-container .swiper-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                      return '<span class="' + className + '">' + (valueSliderStep[index]) + "</span>";
                    }  
                }}
                navigation={{
                    nextEl: ".value-slider-container .swiper-button-next",
                    prevEl: ".value-slider-container .swiper-button-prev" 
                }}
                effect="fade"
                fadeEffect={{
                    crossFade:false
                }}
                onInit={(swiper) => {
                    const bullets = swiper.pagination.bullets;
                    const valueFraction = document.querySelector('.value-slider__fraction');
                    if (valueFraction) {
                      valueFraction.innerHTML = `1 / ${bullets.length}`;
                    }
                }}
                onSlideChange={(swiper) => {
                    const bullets = swiper.pagination.bullets;
                    const activeIndex = document.querySelector('.swiper-pagination-bullet-active .clr-base');
                    const finalIndex = activeIndex ? Number(activeIndex.textContent).toString() : '';
                    const valueFraction = document.querySelector('.value-slider__fraction');
                    if (valueFraction) {
                      valueFraction.innerHTML = `${finalIndex} / ${bullets.length}`;
                    }
                  }}
                modules={[Navigation, EffectFade, Pagination]}
                className="value-slider"
                >
                  
                    {/* <!-- Slides --> */}
                    <SwiperSlide>
                      <div className="value-slider__slide section--sm section--bottom">
                        <div className="row g-4 justify-content-xl-between align-items-lg-center">
                          <div className="col-lg-6 col-xl-7">
                            <div className="section__gap-bottom pb-lg-0">
                              <img
                                src="/images/value-slide-1.png"
                                alt="image"
                                className="value-slider__img"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-4">
                            <h3 className="mb-5 clr-light"> People </h3>
                            <p className="clr-light">
                              {" "}
                              They’re the greatest asset that The Software House
                              is built on. We work with them and for them,
                              making sure they feel fulfilled, appreciated, and
                              satisfied.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="value-slider__slide section--sm section--bottom">
                        <div className="row g-4 justify-content-xl-between align-items-lg-center">
                          <div className="col-lg-6 col-xl-7">
                            <div className="section__gap-bottom pb-lg-0">
                              <img
                                src="/images/value-slide-2.png"
                                alt="image"
                                className="value-slider__img"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-4">
                            <h3 className="mb-5 clr-light"> Openness </h3>
                            <p className="clr-light">
                              {" "}
                              We welcome new ideas and challenges that await us.
                              Keeping a broad perspective on the future, we spot
                              potential and real problems ahead of time, with
                              which we deal promptly. The openness to one
                              another drives our client and colleague relations.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="value-slider__slide section--sm section--bottom">
                        <div className="row g-4 justify-content-xl-between align-items-lg-center">
                          <div className="col-lg-6 col-xl-7">
                            <div className="section__gap-bottom pb-lg-0">
                              <img
                                src="/images/value-slide-3.png"
                                alt="image"
                                className="value-slider__img"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-4">
                            <h3 className="mb-5 clr-light"> Fair play </h3>
                            <p className="clr-light">
                              {" "}
                              We strive to make decisions that are fair to all
                              sides. Our employees get adequate praise for their
                              efforts and compensation for their skills.
                              Similarly, our clients see prices that are
                              adequate to our involvement and work quality.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="value-slider__slide section--sm section--bottom">
                        <div className="row g-4 justify-content-xl-between align-items-lg-center">
                          <div className="col-lg-6 col-xl-7">
                            <div className="section__gap-bottom pb-lg-0">
                              <img
                                src="/images/value-slide-4.png"
                                alt="image"
                                className="value-slider__img"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-4">
                            <h3 className="mb-5 clr-light"> Fulfilment </h3>
                            <p className="clr-light">
                              {" "}
                              Being fulfilled by our work keeps us energized. We
                              create first-class software that’s fast,
                              efficient, and ready to scale because we want us
                              and our clients to be proud of our work.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="value-slider__slide section--sm section--bottom">
                        <div className="row g-4 justify-content-xl-between align-items-lg-center">
                          <div className="col-lg-6 col-xl-7">
                            <div className="section__gap-bottom pb-lg-0">
                              <img
                                src="/images/value-slide-1.png"
                                alt="image"
                                className="value-slider__img"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-4">
                            <h3 className="mb-5 clr-light"> Responsibility </h3>
                            <p className="clr-light">
                              {" "}
                              To ensure of our clients’ success, we bring in
                              knowledge, technology skills, and high engagement
                              to each project. Our communication remains open
                              for all partners regardless of their continent,
                              culture, or time zone.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="value-slider__slide section--sm section--bottom">
                        <div className="row g-4 justify-content-xl-between align-items-lg-center">
                          <div className="col-lg-6 col-xl-7">
                            <div className="section__gap-bottom pb-lg-0">
                              <img
                                src="/images/value-slide-2.png"
                                alt="image"
                                className="value-slider__img"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-4">
                            <h3 className="mb-5 clr-light"> Growth </h3>
                            <p className="clr-light">
                              {" "}
                              We aim high, always learning, to understand every
                              novelty from the world of technology. We support
                              our employees’ learning and practicing so that
                              they can deliver top-class solutions in ambitious
                              projects.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                 
                </Swiper>
                <div className="value-slider__control">
                  <div className="value-slider__fraction"></div>
                  <div className="value-slider__btn swiper-button-prev"></div>
                  <div className="value-slider__btn swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Value Share End --> */}
      {/* <!-- Video Section  --> */}
      <Videosection />
      {/* <!-- Video Section End --> */}
      {/* <!-- Team Member  --> */}
      <Team />
      {/* <!-- Team Member End --> */}
      {/* <!-- Feedback Section  --> */}
      <Feedback_2 />
      {/* <!-- Feedback Section End --> */}
      {/* <!-- Brand Section  --> */}
      <div className="section--sm section--bottom">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  Our Customers{" "}
                </span>
                <h2 className="mt-5 text-center">
                  {" "}
                  Worldwide Our 6000+ Satisfied Client{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-6 align-items-center">
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-1.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-2.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-3.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-4.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-5.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-6.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-7.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-8.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-9.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-10.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-11.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-12.png"
                alt="image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default why_choose_us;
