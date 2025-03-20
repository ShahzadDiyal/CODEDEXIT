import Link from "next/link";
import Feedback_3 from "@/components/Feedback_3";
import Letstalk from "@/components/Letstalk";
import CoreValue from "@/components/CoreValue";
import Navbar from "@/components/NavbarTwo";
import { useEffect } from 'react';
import Footer from "@/components/Footer";

const Item_Placement_Module = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar rtlurl="/rtl/service-details-1" />
      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="clr-light mb-3">Item Placement</h3>
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
                    href="/all-Pos-Features"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Features{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Item Placement{" "}
                  </Link>
                </li>
                <li className="d-none">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent"></Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
            <div className="container" style={{ marginTop: "20px" }}>
              <div className="row justify-content-center">
                <div className="group group-row flex-wrap justify-content-end align-items-end">
                  <Link
                    href="book-a-demo"
                    className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                    <span className="bttn__arrow"> Book a Demo </span>
                  </Link>
                  <Link
                    href="register-a-company"
                    className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                    <span className="bttn__arrow"> Register a Company </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner End --> */}
      <div className="section">
        <div className="container">
          <div className="row g-4 padding-around" style={{ border: "1px solid", borderRadius: "5px"}}>
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 mt-0 align-self-center">
              <h3>Item Placement Module </h3>
              <p>
                {" "}
                The Item Placement Module helps track the physical location of products, including section, cabin, row, and more, ensuring efficient inventory organization. It enhances quick product retrieval, reduces misplacement, and improves stock accuracy. With structured tracking, businesses can streamline operations,
                minimize search time, and optimize warehouse or store space management effectively.
                {" "}
              </p>
              <Link
                href="contact-us"
                className="bttn gap-2 bttn--base bttn-md bttn-pill fw-md flex-shrink-0" style={{ marginTop: "28px" }}>
                {" "}
                Start Project{" "}
                <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                  {" "}
                  arrow_forward{" "}
                </span>
              </Link>
            </div>
            <div className="col-md-6">
              <img
                src="/images/items-placements.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
          </div>
          <hr />
          <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{ fontSize: "40px", padding: "20px" }}>
            {" "}
            Item Placement Features{" "}
          </span>
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4><u>Section List</u></h4>
              <p>
                {" "}
                The Section List helps track and manage main storage sections where products are placed. With a structured table displaying Name and Creation Date, users can efficiently organize inventory locations. The edit functionality allows seamless updates, ensuring optimized space utilization, quick product retrieval,
                reduced misplacement, and improved inventory accuracy for smooth operations.{" "}
              </p>

            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/section-list.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/section-row-number-list.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4><u> Section Row Number List </u></h4>
              <p>
                {" "}
                The Section Row Number List efficiently tracks product storage locations by organizing sections and row numbers. With a structured table displaying Section Name, Row Number, and Creation Date, users can easily manage inventory placement. The edit functionality allows seamless updates, ensuring optimized space
                utilization, quick product retrieval, and improved inventory accuracy.{" "}
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>

            <div className="col-md-6 align-self-center">
              <h4><u> Section Row Cabin List </u></h4>
              <p>
                {" "}
                The Section Row Cabin List module tracks product storage locations with fields for Section Name, Row Number, and Cabin Number, ensuring organized inventory management. With creation dates and an edit function, users can update storage details easily. This improves product retrieval, reduces misplacement,
                optimizes space usage, and enhances overall warehouse or store efficiency.{" "}
              </p>
            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/section-row-cabon.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/items-placements.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4><u> Product Placement List </u></h4>
              <p>
                {" "}
                The Product Placement List module efficiently tracks product storage locations, displaying Product Name, Section, Row, Cabin Number, and Creation Date for accurate inventory management. With edit functionality, users can easily update product placement details, ensuring quick retrieval, reduced misplacement,
                and optimized storage organization for smoother warehouse and store operations.{" "}
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <div className="container" style={{ marginTop: "20px" }}>
                <div className="row justify-content-center">
                  <div className="group group-row flex-wrap justify-content-center align-items-end">
                    <Link
                      href="book-a-demo"
                      className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                      <span className="bttn__arrow"> Book a Demo </span>
                    </Link>
                    <Link
                      href="register-a-company"
                      className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                      <span className="bttn__arrow"> Register a Company </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Item_Placement_Module;
