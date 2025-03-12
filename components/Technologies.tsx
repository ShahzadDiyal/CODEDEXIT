import Link from 'next/link';
import { useState } from 'react';
import { addDoc, collection, db } from '../lib/firebase'

const Technologies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isStatus, setIsStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
    setIsLoading(true)
    setIsStatus("");
    setIsError(false);


    try {
      await addDoc(collection(db, "Technologies - Contact Form Data"), formData)
      setFormData({ name: "", phone: "", email: "", service: "", message: "" })
      setIsStatus("✅ Thank you for contact us! we will get in touch with you as soon as possible!");
      setIsError(false);
    } catch (error) {
      setIsStatus("❌ " + error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <div className="support-section-1">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="consult-section__content"
              style={{
                backgroundImage: "url(/images/consulting-form-bg-2.png)",
              }}>
              <div className="row justify-content-md-start">
                <div className="col-lg-6">
                  <form onSubmit={handleSubmit}>
                    <div className="booking-form">
                      <div className="booking-form__head">
                        <h3 className="text-center mb-2">
                          {" "}
                          Get Started Today{" "}
                        </h3>
                        <p className="text-center">
                          {" "}
                          It is our joy to have the opportunity to
                          collaborate.{" "}
                        </p>
                      </div>
                      <div className="row g-4">
                        <div className="col-12">
                          <input
                            type="text"
                            name='name'
                            className="form-control booking-form__input"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            name='phone'
                            className="form-control booking-form__input"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="email"
                            name='email'
                            className="form-control booking-form__input"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <div className="booking-form__select">
                            <select
                              className="form-select"
                              name='service'
                              value={formData.service}
                              onChange={handleChange}
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
                            rows={3}
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            className="form-control booking-form__input"
                            placeholder="Let us know what you need"></textarea>
                        </div>
                      </div>
                      <div className="booking-form__footer text-center">
                        <button
                          className="bttn bttn--base bttn-md bttn-pill fw-md w-100"
                          style={{height:"50px"}}
                          type="submit"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          ) : (
                            "Contact Us Now!"
                          )}
                        </button>

                      </div>
                      {isStatus && (
                        <div className="text-center mt-3">
                          <p style={{ color: isError ? "red" : "1fff41", fontWeight: "bold" }}>
                            {isStatus}
                          </p>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-6">
                <h2 className="text-center clr-light">
                  {" "}
                  Technologies We Use{" "}
                </h2>
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
        <div className="section__gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <div className="group group-row justify-content-center">
                  <Link
                    href="about-us"
                    className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md">
                    {" "}
                    More About Us{" "}
                    <span className="material-symbols-rounded mat-icon fw-300 bttn__icon">
                      {" "}
                      chevron_right{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;