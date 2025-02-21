import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

import { useEffect } from 'react';

const error = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", 'ltr');
  },[])
  return (
    <>
      <Navbar rtlurl={`/rtl/404`} />
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section__gap-bottom text-center">
                <img
                  src="/images/error.png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
              <div className="row justify-content-center">
                <div className="col-md-10 col-xl-7">
                  <div className="text-center">
                    <h4 className="mb-5"> OOPS! SOMETHING WRONG </h4>
                    <p className="mb-8">
                      {" "}
                      We are sorry but the page you were looking for doesn't
                      exist{" "}
                    </p>
                    <Link
                      href="/"
                      className="bttn bttn--base bttn-md bttn-pill gap-2 fw-md flex-shrink-0">
                      {" "}
                      Back to Home{" "}
                      <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                        {" "}
                        arrow_forward{" "}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default error;
