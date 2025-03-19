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

                <h3 className="text-center mb-3 clr-base m-3 p-3"><u> Why Choose Us?</u></h3>
                <p className="mb-5 text-center">
                  {" "}
                  At CODEDEXIT Ltd, we excel in cutting-edge SaaS solutions, custom software development, and IT services, designed to drive your business forward. From enterprise-grade applications and AI-driven innovations to scalable cloud platforms and digital transformation, we craft solutions that empower businesses to thrive. With a focus on efficiency, security, and innovation, we are your trusted
                  technology partner, helping you stay ahead in today’s competitive digital landscape. {" "}
                </p>
                <hr />
                <h3 className="text-center clr-base m-3 p-3"><u>Our Expertise</u></h3>

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
                <h3 className="text-center clr-base m-3 p-3"><u>Available Jobs</u></h3>
                <p className="mb-5 text-center mt-2" style={{ justifySelf: "center", width: "70%" }}>
                  {" "}
                  Join our innovative software company! Exciting job opportunities
                  available for developers, designers, and IT professionals. Apply now and grow!{" "}
                </p>
                <div className="row g-3 g-xxl-4 justify-content-center">
                  <div className="col-md-6 col-lg-4">
                    <div className="service-card service-card--1">
                      <div className="icon-box icon-box--md circle flex-shrink-0" style={{ backgroundColor: "rgb(255 206 0)" }}>
                        <img src="/images/people.png" alt="image" />
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-2 clr-base">Software Developer </h5>
                        <p className="mb-5">
                          {" "}
                          Join our team to build cutting-edge cloud solutions, AI-driven applications,
                          and scalable full-stack systems, fostering innovation and career growth.{" "}
                        </p>
                        <Link
                          href="/career-job-1/"
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
                      <div className="icon-box icon-box--md circle flex-shrink-0" style={{ backgroundColor: "rgb(197 147 213)" }}>
                        <img src="/images/people.png" alt="image" />
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-2 clr-base">NextJS Engineer </h5>
                        <p className="mb-5">
                          {" "}
                          Seeking for a talented and motivated NextJS Engineer to join our dynamic team. As a key member of our
                          development group. {" "}
                        </p>
                        <Link
                          href="/career-job-2"
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
                      <div className="icon-box icon-box--md circle flex-shrink-0" style={{ backgroundColor: "rgb(0 68 255)" }}>
                        <img src="/images/people.png" alt="image" />
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-2 clr-base">Python Developer</h5>
                        <p className="mb-5">
                          {" "}
                          We’re hiring Python developers to create high-quality
                          code samples on a flexible, remote contract (5-20 hrs/week),As a key member of our
                          development group.{" "}
                        </p>
                        <Link
                          href="/career-job-3"
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
                <div className="row g-3 g-xxl-4 justify-content-center mt-2">
                  <div className="col-md-6 col-lg-4">
                    <div className="service-card service-card--1">
                      <div className="icon-box icon-box--md circle flex-shrink-0" style={{ backgroundColor: "rgb(59 188 104)" }}>
                        <img src="/images/people.png" alt="image" />
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-2 clr-base">Associate Cloud Software Engineer</h5>
                        <p className="mb-5">
                          {" "}
                          This transformation together with Lenovo’s world-changing innovation is building a
                          more inclusive, trustworthy, and smarter future for everyone, everywhere.{" "}
                        </p>
                        <Link
                          href="/career-job-4"
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
                      <div className="icon-box icon-box--md circle flex-shrink-0" style={{ backgroundColor: "rgb(206 0 140)" }}>
                        <img src="/images/people.png" alt="image" />
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-2 clr-base">Software Development Intern </h5>
                        <p className="mb-5">
                          {" "}
                          Are you a passionate Computer Science or Software
                          Engineering graduate student eager to dive into real-world development? {" "}
                        </p>
                        <Link
                          href="/career-job-5"
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
                      <div className="icon-box icon-box--md circle flex-shrink-0" style={{ backgroundColor: "rgb(206 0 140)" }}>
                        <img src="/images/people.png" alt="image" />
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-2 clr-base">Junior Full Stack Developer</h5>
                        <p className="mb-5">
                          {" "}
                          Assist in the development and maintenance of web applications.
                          Work closely with senior developers to understand project requirements and coding standards.{" "}
                        </p>
                        <Link
                          href="/career-job-6"
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
            </div>
          </div>
        </div>
      </div>
      {/* <Technologies /> */}
      {/* <!-- About Section End --> */}
      {/* <!-- Gallery  --> */}
      {/* <div className="container-fluid p-0">
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
      </div> */}

      {/* <div className="section p-xl-0 bg-base-800 position-relative">
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
                  <div className="year-review__year"> 2015 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2015</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Launched our first SaaS-based Point of Sale (POS) software{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Delivered custom software solutions to 50+ clients{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Expanded our team to 100+ skilled developers{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Partnered with leading retail brands for POS solutions{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 100 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column">
                  <div className="year-review__year"> 2016 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2016</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Introduced AI-driven analytics for business intelligence{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Developed 100+ mobile apps for global clients{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Launched cloud-based solutions for SMEs{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Recognized as a top software development company{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 150 </h4>
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
                            Expanded our AI and machine learning services{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Partnered with 10+ Fortune 500 companies{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Launched a global talent acquisition program{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Achieved ISO 9001 certification{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 200 </h4>
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
                            Launched a next-gen e-commerce platform{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Expanded our cloud solutions to 20+ countries{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Developed AI-powered chatbots for customer support{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Surpassed $10M in annual revenue{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 250 </h4>
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
                            Launched a SaaS-based HR management system{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Developed 50+ custom software solutions for enterprises{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Expanded our mobile app development services{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Recognized as a top AI solutions provider{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 300 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column active">
                  <div className="year-review__year"> 2020 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2020</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Launched AI-driven predictive analytics tools{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Expanded our SaaS offerings to 30+ industries{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Partnered with global tech giants for cloud solutions{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Surpassed $20M in annual revenue{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 400 </h4>
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
                            Launched a next-gen IoT platform{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Developed 100+ AI-powered applications{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Expanded our team to 500+ professionals{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Recognized as a leader in cloud innovation{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 500 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column">
                  <div className="year-review__year"> 2022 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2022</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Launched a blockchain-based supply chain solution{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Expanded our AI services to healthcare and finance{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Partnered with 50+ global enterprises{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Surpassed $50M in annual revenue{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 600 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column">
                  <div className="year-review__year"> 2023 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2023</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Launched a generative AI platform for businesses{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Expanded our SaaS offerings to 50+ countries{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Developed 200+ custom software solutions{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Recognized as a top innovator in AI and ML{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 700 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column">
                  <div className="year-review__year"> 2024 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2024</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Launched a quantum computing research division{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Expanded our IoT solutions to smart cities{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Partnered with global governments for tech innovation{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Surpassed $100M in annual revenue{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 800 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">Devs</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column">
                  <div className="year-review__year"> 2025 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2025</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Launched a global AI-powered SaaS ecosystem{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Expanded our team to 1000+ professionals{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Partnered with 100+ Fortune 500 companies{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            Recognized as a global leader in software innovation{" "}
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
              </div>
            </div>
          </div>
        </div>
      </div> */}


      <Footer />
    </>
  );
};

export default Our_Careers;
