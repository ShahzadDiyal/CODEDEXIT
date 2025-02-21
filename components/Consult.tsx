import React, { useState } from 'react';

const Consult = () => {
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
    setStatus("Sending...");

    try {
      const response = await fetch("/api/sendEmail1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("✅ Your Email has been sent successfully!");

        // Clear the form
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setStatus("");
        }, 5000);

      } else {
        setStatus(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      setStatus("❌ Error: Something went wrong.");
    }
  };


  return (
    <section className="consult-section">
      <div className="consult-section__top section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-11 col-xxl-10">
              <span className="d-block h5 lh-1 fw-semibold clr-accent text-center">
                {" "}
                We provide a wide range of services to meet your needs.{" "}
              </span>
              <h2 className="mt-5 mb-5 text-center clr-light">
                {" "}
                Get a Free Consultation on Your Upcoming Project Here!{" "}
              </h2>
              <p className="text-center clr-light">
                {" "}
                If you have a project or idea, contact or make an appointment.
                Our rep will soon respond.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="consult-section__bottom section--top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="consult-section__content"
                style={{
                  backgroundImage: "url(/images/consulting-form-bg.png)",
                }}>
                <div className="row justify-content-md-end">
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
                            className="bttn bttn--base bttn-md bttn-pill fw-md"
                            type="submit"
                            disabled={status === "Sending..."}
                          >
                            {status === "Sending..." ? "Sending..." : "Submit"}
                          </button>
                          {status && <p className="mt-2 text-center">{status}</p>}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consult;