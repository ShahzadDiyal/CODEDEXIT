import Team from "@/components/Team";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Feedback_2 from "@/components/Feedback_2";
import Videosection from "@/components/Videosection";
import { useEffect } from 'react';
import Navbar from "@/components/NavbarTwo";
import Footer from "@/components/Footer";
import Technologies from "@/components/Technologies";

const Our_Careers = () => {
  const handleMouseOver = (event: any) => {
    const target = event.currentTarget;
    target.classList.add('active');
    const siblings = Array.from(target.parentNode.children).filter(
      (element) => element !== target
    );
    siblings.forEach((element: any) => {
      element.classList.remove('active');
    });
  };
  const valueSliderStep = ['<span class="d-inline-block clr-base me-2">01</span> People <span class="value-slider__circle value-slider__circle-1"></span>', '<span class="d-inline-block clr-base me-2">02</span> Growth <span class="value-slider__circle value-slider__circle-2"></span>', '<span class="d-inline-block clr-base me-2">03</span> Responsibility <span class="value-slider__circle value-slider__circle-3"></span>', '<span class="d-inline-block clr-base me-2">04</span> Fullfilment <span class="value-slider__circle value-slider__circle-4"></span>', '<span class="d-inline-block clr-base me-2">05</span> Fair Play <span class="value-slider__circle value-slider__circle-5"></span>', '<span class="d-inline-block clr-base me-2">06</span> Opennes <span class="value-slider__circle value-slider__circle-6"></span>']
  useEffect(() => {
    document.documentElement.setAttribute("dir", 'ltr');
  }, [])
  return (
    <>
      <Navbar rtlurl="/rtl/about-us" />
      {/* Banner Section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3">Our Career </h3>
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
                    Our Careers{" "}
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
            <div className="col-12">

              <h3 className="mt-2 clr-base mb-4 text-center">
                {" "}
                JOIN HANDS WITH CODEDEXIT Ltd INNOVATE, SCALE, SUCCEED!{" "}
              </h3>
              <figure className="about-company-1__img">
                <img
                  src="/images/ourcareers.jpg"
                  alt="image"
                  className="img-fluid"
                  style={{ borderRadius: "10px", border: "1px solid" }}
                />

              </figure>
            </div>
            <div className="col-12">
              <div className="section__gap-bottom pb-lg-0 position-sticky top-0">

                <h4 className="text-center mb-3 clr-base"><u> Why Choose Us?</u></h4>
                <p className="mb-5 text-center">
                  {" "}
                  At CODEDEXIT Ltd, we excel in cutting-edge SaaS solutions, custom software development, and IT services, designed to drive your business forward. From enterprise-grade applications and AI-driven innovations to scalable cloud platforms and digital transformation, we craft solutions that empower businesses to thrive. With a focus on efficiency, security, and innovation, we are your trusted
                  technology partner, helping you stay ahead in today’s competitive digital landscape. {" "}
                </p>
                <h4 className="text-center clr-base"><u>Our Expertise</u></h4>
                <hr />
                <div className="row">
                  <div className="col-md-6 col-xl-6 col-lg-6 align-self-center">
                    <h4 className="clr-base">SaaS Solutions</h4>
                    <p className="mb-5 mt-2">
                      {" "}
                      At CODEDEXIT Ltd, our SaaS solutions provide scalable and secure cloud-based software tailored to your business needs. From Point of Sale (POS) systems for seamless transactions to custom website and app development for a strong digital presence, we specialize in software solutions that enhance
                      efficiency, security, and growth—empowering businesses to thrive in today’s fast-paced market. {" "}
                    </p>
                  </div>
                  <div className="col-md-6 col-xl-6 col-lg-6 align-self-center">
                    <img
                      src="/images/cloud-1.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6 col-xl-6 col-lg-6 align-self-center">
                    <h4 className="clr-base">Custom Software Development </h4>
                    <p className="mb-5 mt-2">
                      {" "}
                      At CODEDEXIT Ltd, our Custom Software Development services deliver tailored applications designed to meet your unique business needs. Whether you need a powerful enterprise solution, a dynamic web or mobile app, or a specialized automation tool, we build scalable, secure, and high-performance software that enhances
                      efficiency and drives growth—helping your business stay ahead in the digital era.{" "}
                    </p>
                  </div>
                  <div className="col-md-6 col-xl-6 col-lg-6 align-self-center">
                    <img
                      src="/images/customsoft.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6 col-xl-6 col-lg-6 align-self-center">
                    <h4 className="clr-base">AI & ML - AI-Driven Insights for Smarter Decisions</h4>
                    <p className="mb-5 mt-2">
                      {" "}
                      At CODEDEXIT Ltd, we leverage advanced machine learning and AI-driven insights to transform your data into actionable intelligence. Our solutions enhance predictive analytics, automation, and decision-making, helping businesses optimize processes, improve customer experiences, and gain a competitive edge in
                      an ever-evolving digital landscape. Stay ahead with data-driven innovation powered by AI.{" "}
                    </p>
                  </div>
                  <div className="col-md-6 col-xl-6 col-lg-6 align-self-center">
                    <img
                      src="/images/AIml.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6 col-xl-6 col-lg-6 align-self-center">
                    <h4 className="clr-base">☁️Cloud Solutions – Seamless Migration & Cloud Optimization</h4>
                    <p className="mb-5 mt-2">
                      {" "}
                      CODEDEXIT Ltd provides cloud migration, optimization, and cloud-native development to ensure businesses stay scalable, flexible, and secure. Whether you need AWS, Azure, or Google Cloud integration, our experts design high-performance cloud architectures that enhance efficiency, security, and cost-effectiveness,
                      enabling businesses to innovate faster and grow without infrastructure limitations.{" "}
                    </p>
                  </div>
                  <div className="col-md-6 col-xl-6 col-lg-6 align-self-center">
                    <img
                      src="/images/cldsol.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6 col-xl-6 col-lg-6 align-self-center">
                    <h4 className="clr-base">🔒Cybersecurity & Compliance – Protect Your Data with Confidence</h4>
                    <p className="mb-5 mt-2">
                      {" "}
                      At CODEDEXIT Ltd, we ensure your business stays secure and compliant with industry-leading cybersecurity solutions. From data encryption and threat detection to regulatory compliance (GDPR, HIPAA, ISO), we safeguard your digital assets from cyber threats. Our proactive approach minimizes risks, ensuring
                      business continuity and customer trust in a constantly evolving security landscape. {" "}
                    </p>
                  </div>
                  <div className="col-md-6 col-xl-6 col-lg-6 align-self-center">
                    <img
                      src="/images/cybersecc.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6 col-xl-6 col-lg-6  align-self-center">
                    <h4 className="clr-base">🔄IT Consulting & Support – Expert Guidance & 24/7 Technical Assistance</h4>
                    <p className="mb-5 mt-2">
                      {" "}
                      CODEDEXIT Ltd provides IT consulting and 24/7 technical support, ensuring businesses run smoothly and securely. Our experts offer strategic technology roadmaps, system optimizations, and troubleshooting to maximize efficiency and minimize downtime. Whether it's cloud integration, software deployment, or IT infrastructure management, we provide
                      tailored solutions that drive business success in a rapidly changing digital world. {" "}
                    </p>
                  </div>
                  <div className="col-md-6 col-xl-6 col-lg-6  align-self-center">
                    <img
                      src="/images/element-4.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <hr />
                <h4 className="text-center clr-base"><u>Industries We Serve</u></h4>
                <p className="mb-5 text-center mt-2" style={{ justifySelf: "center", width: "70%" }}>
                  {" "}
                  We provide custom software, cloud solutions, AI, and automation to optimize
                  operations, efficiency, and digital transformation across various industries.{" "}
                </p>
                <div className="row g-3 g-xxl-4 justify-content-center">
                  <div className="col-md-6 col-lg-4">
                    <div className="service-card service-card--1">
                      <div className="icon-box icon-box--md circle flex-shrink-0" style={{ backgroundColor: "rgb(255 206 0)" }}>
                        <img src="/images/healthcare.png" alt="image" />
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-2 clr-base">Healthcare </h5>
                        <p className="mb-5">
                          {" "}
                          We develop custom healthcare software, cloud-based patient management systems, and telehealth platforms with HIPAA compliance, ensuring secure data storage,
                          seamless doctor-patient interactions for enhanced efficiency.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="service-card service-card--1">
                      <div className="icon-box icon-box--md circle flex-shrink-0" style={{ backgroundColor: "rgb(197 147 213)" }}>
                        <img src="/images/money.png" alt="image" />
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-2 clr-base">Finance </h5>
                        <p className="mb-5">
                          {" "}
                          Our custom fintech applications offer secure cloud-based transactions, AI-driven fraud detection, and blockchain integration, ensuring safe banking,
                          investment, and financial management through web and mobile platforms.{" "}
                        </p>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="service-card service-card--1">
                      <div className="icon-box icon-box--md circle flex-shrink-0" style={{ backgroundColor: "rgb(0 68 255)" }}>
                        <img src="/images/retailer.png" alt="image" />
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-2 clr-base">Retail & E-commerce </h5>
                        <p className="mb-5">
                          {" "}
                          We build custom e-commerce websites, POS systems, and AI-powered recommendation engines, integrating secure payment gateways,
                          cloud solutions, and automation for seamless retail and online shopping experiences.{" "}
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-3 g-xxl-4 justify-content-center mt-2">
                  <div className="col-md-6 col-lg-4">
                    <div className="service-card service-card--1">
                      <div className="icon-box icon-box--md circle flex-shrink-0" style={{ backgroundColor: "rgb(59 188 104)" }}>
                        <img src="/images/claw.png" alt="image" />
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-2 clr-base">Manufacturing – ERP & Automation  </h5>
                        <p className="mb-5">
                          {" "}
                          Our custom ERP and automation software optimizes production, supply chain, and inventory management, leveraging cloud technology, AI, and IoT to provide
                          real-time data insights, improved efficiency, and seamless business operations.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="service-card service-card--1">
                      <div className="icon-box icon-box--md circle flex-shrink-0" style={{ backgroundColor: "rgb(206 0 140)" }}>
                        <img src="/images/lms.png" alt="image" />
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-2 clr-base">Education – Cloud-Enabled LMS  </h5>
                        <p className="mb-5">
                          {" "}
                          We create custom Learning Management Systems (LMS), interactive e-learning platforms, and AI-powered applications, providing web and mobile-based
                          solutions for personalized learning and seamless education management.{" "}
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Technologies />
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
                {/* <div onMouseOver={handleMouseOver} className="year-review__column">
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
                </div> */}
                {/* <div onMouseOver={handleMouseOver} className="year-review__column">
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
                </div> */}
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
                    crossFade: false
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

export default Our_Careers;
