import Navbar from "@/components/NavbarTwo";
import Consult from "@/components/Consult";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
const faq_1_data = [
  {
    id: 1,
    question: "What services does Coded Exit Ltd offer?",
    answer:
      "Coded Exit Ltd provides field service management, IT solutions, AI development, cloud solutions, and more to help businesses streamline operations and enhance efficiency.",
  },
  {
    id: 2,
    question: "How can Coded Exit Ltd improve my field service operations?",
    answer:
      "Our field service management solutions optimize scheduling, dispatching, and tracking, ensuring faster service delivery and improved customer satisfaction.",
  },
  {
    id: 3,
    question: "What industries do you serve?",
    answer:
      "We cater to various industries, including logistics, healthcare, retail, manufacturing, and IT, offering customized tech solutions to meet specific needs.",
  },
  {
    id: 4,
    question: "Do you offer AI-based solutions?",
    answer:
      "Yes! Our AI solutions help businesses automate processes, enhance decision-making, and improve customer interactions using advanced machine learning models.",
  },
  {
    id: 5,
    question: " What cloud solutions do you provide?",
    answer:
      "We offer cloud migration, infrastructure management, and scalable cloud applications to help businesses achieve flexibility and security.",
  },
  {
    id: 6,
    question: "Can you customize solutions for my business?",
    answer:
      "Absolutely! We tailor our solutions to fit your unique business needs, ensuring seamless integration and maximum efficiency.",
  },
  {
    id: 7,
    question: "How secure are Coded Exit Ltd’s IT solutions?",
    answer:
      "Security is our top priority. We implement robust cybersecurity measures, data encryption, and compliance standards to protect your business.",
  },
  {
    id: 8,
    question: "What makes Coded Exit Ltd different from competitors?",
    answer:
      "Our expertise, customer-centric approach, and commitment to innovation set us apart. We provide scalable, cutting-edge solutions tailored to your growth.",
  },
  {
    id: 9,
    question: "How can I get started with Coded Exit Ltd?",
    answer:
      "Simply contact us through our website or email, and our team will assist you in choosing the right solution for your business needs.",
  },
  {
    id: 10,
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes! We provide dedicated support, regular updates, and maintenance to ensure your systems run smoothly at all times.",
  },
];
const faq_2_data = [
  {
    id: 1,
    question: "How does Coded Exit Ltd ensure the security of my business data?",
    answer:
      "We implement advanced encryption, multi-layered security protocols, and regular audits to safeguard your data from cyber threats and unauthorized access.",
  },
  {
    id: 2,
    question: "Are Coded Exit Ltd’s cloud solutions reliable and scalable?",
    answer:
      "Yes! Our cloud solutions are built for high availability, scalability, and resilience, ensuring your business operations run smoothly without downtime.",
  },
  {
    id: 3,
    question: "How does Coded Exit Ltd help improve operational efficiency?",
    answer:
      "We streamline workflows, automate repetitive tasks, and optimize resource allocation to enhance productivity and reduce operational costs.",
  },
  {
    id: 4,
    question: "Do your IT solutions comply with industry security standards?",
    answer:
      "Absolutely! Our solutions follow global security frameworks like ISO, GDPR, and NIST to ensure compliance and protect sensitive business data.",
  },
  {
    id: 5,
    question: "How does Coded Exit Ltd prevent downtime and system failures?",
    answer:
      "We use proactive monitoring, failover mechanisms, and disaster recovery strategies to minimize disruptions and ensure seamless business continuity.",
  },
  {
    id: 6,
    question: "Can Coded Exit Ltd integrate its solutions with existing business systems?",
    answer:
      "Yes, our solutions are designed for seamless integration with your current software and infrastructure, ensuring a smooth transition without disruptions.",
  },
  {
    id: 7,
    question: "How do you maintain reliability in field service management?",
    answer:
      "Our solutions offer real-time tracking, predictive maintenance, and automated scheduling to enhance service reliability and customer satisfaction.",
  },
  {
    id: 8,
    question: "What measures does Coded Exit Ltd take to prevent cybersecurity threats?",
    answer:
      "We deploy AI-powered threat detection, regular security updates, and employee training programs to prevent cyberattacks and ensure robust defense mechanisms.",
  },
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
                src="/images/faq-img.png"
                alt="image"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Consult Section  --> */}
      <Consult />
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
