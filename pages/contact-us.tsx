import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Link from "next/link";

import { useEffect, useState } from 'react';
import service_1 from "./services";




const contact_us = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
        const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            setStatus("Your request has been sent successfully!");
            setFormData({ name: "", email: "", service: "", message: "" });
        } else {
            setStatus(`Error: ${data.message}`);
        }
    } catch (error) {
        setStatus("Error: Something went wrong.");
    }
};





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
              <h3 className="clr-light mb-3"> Contact Us </h3>
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
                    Contact Us{" "}
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
      {/* <!-- Contact Section  --> */}
      <section className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  Got a Question?{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center">
                  {" "}
                  We are Here to Answer It!{" "}
                </h2>
                <p className="text-center">
                  {" "}
                  Please send us information about your project. One of our
                  project managers shall evaluate your project requirements and
                  give you a formal proposal. Detailed information will help us
                  evaluate your project{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 gy-lg-4 align-items-center">
            <div className="col-lg-6">
              <form onSubmit={handleSubmit} className="contact-form-1 bg-base p-5 py-md-10 rounded-4">
                <div className="row g-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control rounded-pill contact-form-1__input"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control contact-form-1__input rounded-pill"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <div className="contact-form-1__select yellow-input rounded-pill">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-select rounded-pill"
                        required
                      >
                        <option value="">Select Services</option>
                        <option value="Field Service Management">Field Service Management</option>
                        <option value="Cloud Solutions">Cloud Solutions</option>
                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                        <option value="AI & Chatbots">AI & Chatbots</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control contact-form-1__input rounded-8"
                      rows={3}
                      placeholder="Let us know"
                      required
                    ></textarea>
                  </div>
                  {/* <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="newsletter-subscribe" />
                      <label className="form-check-label clr-light" htmlFor="newsletter-subscribe">
                        I would like to be updated on the latest products, event announcements
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="accept-terms" required />
                      <label className="form-check-label clr-light" htmlFor="accept-terms">
                        I have read and accepted the Terms & Conditions and Privacy Policy
                      </label>
                    </div>
                  </div> */}
                  <div className="col-12">
                    <div className="text-center mt-6">
                      <button type="submit" className="bttn bttn--warning bttn-md bttn-pill fw-md">
                        Submit
                      </button>
                      <p>{status}</p>
                    </div>
                  </div>
                </div>
              </form>

            </div>
            <div className="col-lg-6">
              <ul className="list gap-0 service-link-list">
                <li>
                  <Link
                    href="#"
                    className="t-link service-link clr-heading :clr-light border-bottom">
                    <span className="group gap-1">
                      <span className="d-inline-block service-link__title fw-bold">
                        {" "}
                        Book a Demo{" "}
                      </span>
                      <span className="d-block">
                        {" "}
                        with our engagement specialist{" "}
                      </span>
                    </span>
                    <span className="service-link__icon clr-light bg-base">
                      <span className="material-symbols-outlined mat-icon">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </span>
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="#"
                    className="t-link service-link clr-heading :clr-light border-bottom">
                    <span className="group gap-1">
                      <span className="d-inline-block service-link__title fw-bold">
                        {" "}
                        Send Your CV{" "}
                      </span>
                      <span className="d-block">
                        {" "}
                        if you want to join our team{" "}
                      </span>
                    </span>
                    <span className="service-link__icon clr-light bg-base">
                      <span className="material-symbols-outlined mat-icon">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </span>
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="#"
                    className="t-link service-link clr-heading :clr-light">
                    <span className="group gap-1">
                      <span className="d-inline-block service-link__title fw-bold">
                        {" "}
                        Reach Us via Email{" "}
                      </span>
                      <span className="d-block"> info@eastandwestagency.com </span>
                    </span>
                    <span className="service-link__icon clr-light bg-base">
                      <span className="material-symbols-outlined mat-icon">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
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

export default contact_us;
