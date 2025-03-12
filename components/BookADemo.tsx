import Link from 'next/link';
import React, { useState } from 'react';
import { addDoc , collection , db} from '../lib/firebase'
import { resolve } from 'path';


const Book_a_demo = () => {
  const [isLoading,setIsLoading] = useState(false);
  const [isStatus, setIsStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [formData , setFormData] = useState({
    firstName : "",
    lastName: "",
    email:"",
    phone:"",
    companyName:"",
    description:""
  })

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setIsLoading(true)
    setIsStatus(""); 
    setIsError(false);


    try {
      await addDoc(collection(db,"Book A Demo"), formData)
      setFormData({firstName:"", lastName:"", email: "", phone: "", companyName: "", description: "" })
      setIsStatus("✅ Your request for POS Demo is submitted successfully! we will get in touch with you as soon as possible!");
      setIsError(false);
    } catch (error) {
      setIsStatus("❌ " + error);
      setIsError(true);
    } finally{
      setIsLoading(false);
    }
  }


    return (
        <section className="section red-bg">
        <div className="container">
          <div className="row g-6 align-items-center">
            <div className="col-lg-6">
              <div className="section__gap-bottom pb-lg-0">
                <span className="d-block h5 lh-1 fw-semibold clr-base mb-5">
                  {" "}
                  Experience the Future of Our Services!{" "}
                </span>
                <h3 className="mb-10 clr-dark">
                  {" "}
                  Book a free demo today and see how we can elevate your business.{" "}
                </h3>
                <div className="border t-border-base rounded-4 px-6 py-8 d-inline-flex flex-column gap-6 mb-10 w-80">
                  <div className="group group-md group-row align-items-center">
                    <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                      <span className="user__img rounded-circle ">
                        <img
                          src="/images/team-5.png"
                          alt="image"
                          className="user__img-is"
                        />
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-1 clr-dark"> Marvin McKinney </h5>
                      <p className="sm-text clr-base"> Biffco Ltd. </p>
                    </div>
                  </div>
                  <ul className="list list-row align-items-center flex-wrap">
                    <li className='w-100'>
                      <Link
                        href="#"
                        className="bttn bttn--base-outline bttn-sm bttn-pill gap-2 fw-md flex-shrink-0 align-items-center w-100">
                        {" "}
                        Call Us{" "}
                        <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-base d-flex align-items-center">
                          {" "}
                          arrow_forward{" "}
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h5 className="mb-5 clr-dark"> You can Expect: </h5>
                <ul className="list list-row flex-wrap list-disc list-disc--base support-list">
                  <li>
                    <p className="clr-dark"> Phone Call Assistance </p>
                  </li>
                  <li>
                    <p className="clr-dark"> Project Estimation </p>
                  </li>
                  <li>
                    <p className="clr-dark"> Project Consultation </p>
                  </li>
                  <li>
                    <p className="clr-dark"> Solutions Demo </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <form
                action="#"
                onSubmit={handleSubmit}
                className="contact-form-1 row g-4 bg-base p-2 py-5 py-md-10 px-xxl-10 rounded-4">
                 <div className="col-md-12">
                  <input
                    type="text"
                    name='companyName'
                    value={formData.companyName}
                    onChange={handleChange}
                    className="form-control contact-form-1__input rounded-pill"
                    placeholder="Company Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-control rounded-pill contact-form-1__input"
                    placeholder="First Name*"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-control contact-form-1__input rounded-pill"
                    placeholder="First Name*"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control contact-form-1__input rounded-pill"
                    placeholder="Email*"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control contact-form-1__input rounded-pill"
                    placeholder="Phone*"
                    required
                  />
                </div>
               
                <div className="col-12">
                  <div className="contact-form-1__select yellow-input rounded-pill">
                    <select className="form-select rounded-pill" required>
                      <option>Select Services</option>
                      <option value="1">Point of Sale Demo</option>
                      <option value="2">Link Shortner</option>
                    </select>
                  </div>
                </div>
                
                <div className="col-12">
                  <textarea
                     name='description'
                     value={formData.description}
                     onChange={handleChange}
                    className="form-control contact-form-1__input rounded-8"
                    rows={3}
                    placeholder="Let us know what you need"></textarea>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="newsletter-subscribe"
                    />
                    <label
                      className="form-check-label clr-light"
                      htmlFor="newsletter-subscribe">
                      {" "}
                      I would like to be updated on the latest products, event
                      announcements{" "}
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="accept-terms"
                      required
                    />
                   <label
                    className="form-check-label clr-light"
                    htmlFor="accept-terms">
                    {" "}
                    I have read and accepted the <Link href="/terms-condition" style={{ color: "yellow" }}>Terms & Conditions </Link>{" "}
                  </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="text-center mt-6 ">
                    <button type='submit' className="bttn bttn--warning w-100 bttn-md bttn-pill fw-md" style={{height:"50px"}} disabled={isLoading}>
                    {isLoading ? (
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        ) : (
                         " Book a Demo Today!"
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
      </section>
    );
};

export default Book_a_demo;