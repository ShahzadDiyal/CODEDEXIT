import Link from "next/link";
import Technologies from "@/components/Technologies";
import Service from "@/components/Service";
import Navbar from "@/components/Navbar";
import { useEffect } from 'react';
import Footer from "@/components/Footer";
import Testimonail from "@/components/Testimonail";

const service = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar rtlurl="/rtl/service" />
      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> Services</h3>
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
                    href="services"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Services{" "}
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
      {/* <!-- Service Section  --> */}
      <Service />
      {/* <!-- Support Section  --> */}
      <Technologies />
      {/* <!-- Pricing Section --> */}
      {/* <Pricing /> */}
      {/* <!-- Testimonials  --> */}
      <Testimonail />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default service;
