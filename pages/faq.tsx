import Navbar from "@/components/NavbarTwo";
import Consult from "@/components/Consult";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import Technologies from "@/components/Technologies";
const faq_1_data = [
  {
    id: 1,
    question: "What services does Coded Exit Ltd provide?",
    answer: "Coded Exit Ltd specializes in custom software solutions, website development, mobile app development, cloud solutions, AI-based services, and SaaS products to help businesses scale efficiently."
  },
  {
    id: 2,
    question: "Can you develop custom software tailored to my business needs?",
    answer: "Yes! We create fully customized software solutions to align with your specific business requirements, improving operations and workflow efficiency."
  },
  {
    id: 3,
    question: "What types of websites do you develop?",
    answer: "We build all types of websites, including e-commerce platforms, business websites, enterprise portals, and custom web applications with modern UI/UX designs."
  },
  {
    id: 4,
    question: "Do you develop mobile applications for both Android and iOS?",
    answer: "Absolutely! We develop cross-platform and native mobile applications for Android and iOS, ensuring high performance and user engagement."
  },
  {
    id: 5,
    question: "What cloud solutions does Coded Exit Ltd offer?",
    answer: "We provide cloud migration, infrastructure management, cloud storage solutions, and scalable cloud applications to enhance flexibility and security."
  },
  {
    id: 6,
    question: "How do your AI solutions benefit businesses?",
    answer: "Our AI services help businesses automate processes, enhance data-driven decision-making, and improve customer interactions using advanced machine learning and deep learning models."
  },
  {
    id: 7,
    question: "What industries does Coded Exit Ltd serve?",
    answer: "We work with various industries, including healthcare, e-commerce, finance, logistics, education, and enterprise businesses, providing tailored technology solutions."
  },
  {
    id: 8,
    question: "Can you integrate AI into our existing software?",
    answer: "Yes, we specialize in AI integrations, enhancing existing software with intelligent automation, chatbots, predictive analytics, and more."
  },
  {
    id: 9,
    question: "What makes Coded Exit Ltd’s SaaS products unique?",
    answer: "Our SaaS products are highly scalable, user-friendly, and feature-rich, designed to streamline business operations and improve productivity with minimal setup."
  },
  {
    id: 10,
    question: "Do you offer website and app maintenance services?",
    answer: "Yes, we provide ongoing maintenance, updates, and support to ensure your website or app runs smoothly and remains secure."
  },
  {
    id: 11,
    question: "How does your custom software development process work?",
    answer: "We follow a structured development approach, including requirement analysis, UI/UX design, development, testing, and deployment, ensuring a tailored and high-quality solution."
  },
  {
    id: 12,
    question: "What technologies do you use for software and app development?",
    answer: "We utilize modern technologies, including React, Angular, Node.js, Python, Java, Flutter, and cloud platforms like AWS and Azure for robust development."
  },
  {
    id: 13,
    question: "How secure are the solutions you provide?",
    answer: "Security is our top priority. We implement the latest encryption, authentication, and cybersecurity protocols to ensure your data remains safe and protected."
  },
  {
    id: 14,
    question: "Do you provide cloud-based solutions for startups?",
    answer: "Yes! We offer cost-effective and scalable cloud solutions for startups, enabling them to grow efficiently without heavy infrastructure investments."
  },
  {
    id: 15,
    question: "How can I get started with Coded Exit Ltd?",
    answer: "Simply contact us through our website, email, or phone, and our team will assist you in finding the right solution for your business needs."
  }
]
;
const faq_2_data = [
  {
    id: 1,
    question: "What makes Coded Exit Ltd’s custom software solutions unique?",
    answer: "Our custom software is designed to fit your specific business needs, ensuring seamless integration, scalability, and long-term reliability."
  },
  {
    id: 2,
    question: "How do your cloud solutions improve business efficiency?",
    answer: "We offer scalable, secure, and cost-effective cloud solutions that enable remote access, data storage, and automated backups for maximum efficiency."
  },
  {
    id: 3,
    question: "What industries can benefit from Coded Exit Ltd’s software solutions?",
    answer: "We serve industries like healthcare, e-commerce, finance, logistics, and education, providing tailored tech solutions to meet industry-specific challenges."
  },
  {
    id: 4,
    question: "Do you offer AI-powered automation for business processes?",
    answer: "Yes, our AI solutions automate repetitive tasks, analyze data, and enhance decision-making, helping businesses increase productivity and reduce costs."
  },
  {
    id: 5,
    question: "What types of mobile apps does Coded Exit Ltd develop?",
    answer: "We develop native and cross-platform mobile apps with intuitive UI/UX, optimized performance, and advanced features for both Android and iOS users."
  },
  {
    id: 6,
    question: "Can you migrate my existing system to the cloud?",
    answer: "Absolutely! We provide smooth cloud migration services with minimal downtime, ensuring enhanced security and performance for your business applications."
  },
  {
    id: 7,
    question: "How does Coded Exit Ltd help startups with digital transformation?",
    answer: "We offer cost-effective SaaS, cloud, and AI solutions that enable startups to build scalable and efficient digital infrastructures from the ground up."
  },
  {
    id: 8,
    question: "Do you provide maintenance and support for deployed software?",
    answer: "Yes, we offer continuous monitoring, regular updates, and 24/7 support to ensure your software remains up-to-date and performs optimally."
  },
  {
    id: 9,
    question: "How does your SaaS platform benefit businesses?",
    answer: "Our SaaS products offer easy access, reduced infrastructure costs, and automated updates, allowing businesses to operate smoothly without IT burdens."
  },
  {
    id: 10,
    question: "Can Coded Exit Ltd build e-commerce websites?",
    answer: "Yes! We develop high-performance e-commerce platforms with secure payment gateways, user-friendly navigation, and advanced analytics integration."
  },
  {
    id: 11,
    question: "How does your AI technology improve customer experience?",
    answer: "We implement AI-driven chatbots, recommendation engines, and predictive analytics to enhance user interactions and streamline customer service."
  },
  {
    id: 12,
    question: "Do you offer API development and integration services?",
    answer: "Yes, we design and integrate secure, scalable APIs to connect your software with third-party services for enhanced functionality and automation."
  },
  {
    id: 13,
    question: "What security measures do you implement for SaaS applications?",
    answer: "We use end-to-end encryption, multi-factor authentication, and regular security audits to keep your SaaS applications secure from cyber threats."
  },
  {
    id: 14,
    question: "How do you ensure seamless website performance?",
    answer: "We use optimized coding, fast-loading design, caching techniques, and cloud hosting to ensure your website performs flawlessly under all conditions."
  },
  {
    id: 15,
    question: "How can I request a consultation with Coded Exit Ltd?",
    answer: "You can contact us through our website, email, or phone, and our team will schedule a consultation to discuss your project requirements in detail."
  }
];

const faq = () => {
  const [active, setActive] = useState<null | number>(0);
  const [active1, setActive1] = useState<null | number>(0);
  const handleOpen = (id: number) => {
    id == active ? setActive(0) : setActive(id);
  };
  const handleOpen1 = (id: number) => {
    id == active1 ? setActive1(0) : setActive1(id);
  };
  let closed = {
    maxHeight: 0,
    overflow: "hidden",
    transition: "max-height 0.5s ease-out",
  };
  let opened = {
    maxHeight: "1000px",
    transition: "max-height 0.5s ease-in-out",
  };
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      <Navbar rtlurl="/rtl/faq" />
      {/* Banner Section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> FAQ </h3>
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
                    FAQ{" "}
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
      {/* <!-- FAQ Section --> */}
      <div className="section">
        <div className="container">
          <div className="row justify-content-lg-between">
            <div className="col-lg-5">
              <div className="section__gap-bottom pb-lg-0 position-sticky top-0">
                <span className="d-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  Questions & Answers{" "}
                </span>
                <h2 className="mt-2 mb-4"> Any Questions? Find here. </h2>
                <p className="t-short-para mb-8">
                  {" "}
                  Don’t find your answer here? just send us a message for any
                  query.{" "}
                </p>
                <Link
                  href="contact-us"
                  className="bttn bttn--base bttn-md gap-2 bttn-pill fw-md">
                  {" "}
                  Contact Us{" "}
                  <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                    {" "}
                    arrow_forward{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="custom-accordion custom-accordion--1">
                {faq_1_data.map(({ id, answer, question }) => (
                  <div key={id} className="custom-accordion__item">
                    <div
                      className="custom-accordion__header"
                      onClick={() => handleOpen(id)}>
                      <div className="d-flex gap-4 align-items-center flex-grow-1">
                        <img
                          src="/images/icon-59.png"
                          alt="image"
                          className="img-fluid flex-shrink-0"
                        />
                        <h6>{question}</h6>
                      </div>
                      <div className="icon-box icon-box--xs circle bg-base flex-shrink-0">
                        <span className="material-symbols-outlined mat-icon clr-light">
                          {" "}
                          arrow_forward_ios{" "}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`custom-accordion__body`}
                      style={id == active ? opened : closed}>
                      <div className="custom-accordion__content">
                        <p> {answer} </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- FAQ Section 2 --> */}
      <div className="section bg-neutral-100">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  Need Help? Read Popular Questions{" "}
                </span>
                <h2 className="my-5 text-center">
                  {" "}
                  Frequently Asked Questions{" "}
                </h2>
                <p className="text-center">
                  {" "}
                  Coded Exit ltd deep industry expertise enables global brands to hit
                  the ground running.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-6 justify-content-between">
            <div className="col-lg-6">
              <div className="section__gap-bottom pb-lg-0 sticky-top top-0">
                <div className="custom-accordion custom-accordion--1">
                  {faq_2_data.map(({ id, answer, question }) => (
                    <div key={id} className="custom-accordion__item">
                      <div
                        className="custom-accordion__header"
                        onClick={() => handleOpen1(id)}>
                        <div className="d-flex gap-4 align-items-center flex-grow-1">
                          <img
                            src="/images/icon-59.png"
                            alt="image"
                            className="img-fluid flex-shrink-0"
                          />
                          <h6>{question}</h6>
                        </div>
                        <div className="icon-box icon-box--xs circle bg-base flex-shrink-0">
                          <span className="material-symbols-outlined mat-icon clr-light">
                            {" "}
                            arrow_forward_ios{" "}
                          </span>
                        </div>
                      </div>
                      <div
                        className={`custom-accordion__body`}
                        style={id == active1 ? opened : closed}>
                        <div className="custom-accordion__content">
                          <p> {answer} </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <img
                src="/images/faqss.png"
                alt="image"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Consult Section  --> */}
      <Technologies />
      {/* <!-- Resource Section --> */}
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-11">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  Resources{" "}
                </span>
                <h2 className="mt-5 text-center">
                  {" "}
                  Explore Coded Exit Ltd’s resources for insights, innovation, security, and business efficiency.{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <div className="row g-6">
            <div className="col-md-4">
              <div className="blog-post-1 text-center pt-8 pb-4">
                <Link href="field-service-management-post" className="t-link d-inline-block">
                  <img
                    src="/images/blog-post-6.png"
                    alt="image"
                    className="img-fluid"
                  />
                </Link>
                <div className="blog-post-1__body text-center">
                  <h5 className="mb-2">
                    <Link
                      href="field-service-management-post"
                      className="t-link d-block clr-heading :clr-base d-block">
                      {" "}
                      Field Service Management{" "}
                    </Link>
                  </h5>
                  <p>Complete guide about field services! </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-post-1 text-center pt-8 pb-4">
                <Link href="ai-post" className="t-link d-inline-block">
                  <img
                    src="/images/blog-post-5.png"
                    alt="image"
                    className="img-fluid"
                  />
                </Link>
                <div className="blog-post-1__body text-center">
                  <h5 className="mb-2">
                    <Link
                      href="ai-post"
                      className="t-link d-block clr-heading :clr-base d-block">
                      {" "}
                      Artificial Intelligence{" "}
                    </Link>
                  </h5>
                  <p> How we serve AI services? </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-post-1 text-center pt-8 pb-4">
                <Link href="ai-and-chatbot" className="t-link d-inline-block">
                  <img
                    src="/images/blog-post-7.png"
                    alt="image"
                    className="img-fluid"
                  />
                </Link>
                <div className="blog-post-1__body text-center">
                  <h5 className="mb-2">
                    <Link
                      href="ai-and-chatbot"
                      className="t-link d-block clr-heading :clr-base d-block">
                      {" "}
                      AI & Chatbots{" "}
                    </Link>
                  </h5>
                  <p> Complete guide about chatbots!</p>
                </div>
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

export default faq;
