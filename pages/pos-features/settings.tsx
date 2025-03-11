import Link from "next/link";
import Feedback_3 from "@/components/Feedback_3";
import Letstalk from "@/components/Letstalk";
import CoreValue from "@/components/CoreValue";
import Navbar from "@/components/NavbarTwo";
import { useEffect } from 'react';
import Footer from "@/components/Footer";

const Settings_Module = () => {
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
            <div className="col-12">
              <h3 className="clr-light mb-3">Setting Module </h3>
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
                    Setting Module{" "}
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
      {/* <!-- Banner End --> */}
      <div className="section">
        <div className="container">
          <div className="row g-4" style={{ border: "1px solid", borderRadius: "5px", padding: "0 25px 25px 25px" }}>
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 mt-0 align-self-center">
              <h3>Setting Module </h3>
              <p>
                {" "}
                The Settings Module serves as the central hub for configuring and customizing the Point of Sale system. With multiple tabs like General Settings, Company Details, Tax, System, Email, and Custom Localizations, users can fine-tune operations to match business needs. This module enhances flexibility, compliance, and efficiency,
                ensuring seamless system management and a personalized POS experience.
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
                src="/images/setting.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
          </div>
          <hr />
          <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{ fontSize: "40px", padding: "20px" }}>
            {" "}
            Setting Module Features {" "}
          </span>
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4><u>Company Details</u></h4>
              <p>
                {" "}
                The Company Details Tab allows businesses to update essential company information, including name, phone, email, and tax details, through a user-friendly form. This ensures accurate records, enhances professionalism, and maintains compliance with tax regulations. Keeping company details updated helps in
                seamless communication, efficient invoicing, and a well-managed business identity.{" "}
              </p>

            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/company-details.png"
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
                src="/images/systems.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4><u>System Tab</u></h4>
              <p>
                {" "}
                The System Tab allows businesses to configure essential settings, including Company Locations, Default Language, Timezone, Currency Name, Currency Symbol, and Currency Position. This ensures a personalized and region-specific POS experience, improving accuracy in transactions, seamless global operations, and better
                user accessibility, ultimately enhancing efficiency and operational consistency.{" "}
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4><u> Email Configuration</u></h4>
              <p>
                {" "}
                The Email Configuration Tab allows seamless email setup with fields like Mail Protocol, Mail Encryption, Mail Host, Mail Port, Mail Username, and Mail Password. This ensures secure and reliable email communication for order confirmations, invoices, and notifications. With proper configuration, businesses can enhance customer engagement,
                security, and operational efficiency through automated email transactions.{" "}
              </p>

            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/email-configurations.png"
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
                src="/images/localizations.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4><u>Custom Localization </u></h4>
              <p>
                {" "}
                The Localization Tab allows users to customize language settings by selecting a language, module, and screen for a personalized experience. A search bar enables quick access to specific localizations, while a structured table with Key, Module Name, Screen Name, Default Value, and Value ensures seamless translations.
                This enhances usability, accessibility, and system adaptability for diverse business needs.{" "}
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4><u>Tax List</u></h4>
              <p>
                {" "}
                The Tax Tab provides a structured table displaying Tax Name, Tax, Tax Type, Tax Scope, Creation Date, and Picture, ensuring efficient tax management. With advanced search, filtering, and pagination, users can easily track and update tax records. This feature enhances compliance, accuracy,
                and financial transparency, streamlining tax calculations and business operations.{" "}
              </p>

            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/taxlist.png"
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
                src="/images/payment-method-list.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4><u>Payment Method List</u></h4>
              <p>
                {" "}
                The Payment Method Tab provides a structured table displaying Name, Display Name, Store Name, Enable/Disable, and Picture, ensuring efficient payment management. With advanced pagination, search, and filtering, users can quickly locate and manage payment options. This feature enhances flexibility, control, and seamless transaction processing,
                optimizing the payment experience for both businesses and customers.{" "}
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4><u>Order Status Type List</u></h4>
              <p>
                {" "}
                The Order Status Type Tab provides a structured table displaying Name, Store Name, and Enable/Disable options, ensuring efficient order status management. With advanced search, filtering, and pagination, users can quickly locate and update order statuses. This enhances workflow efficiency,
                order tracking, and operational control, ensuring a smooth and organized sales process.{" "}
              </p>

            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/orderstatustype.png"
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
                src="/images/me-unit-list.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4><u>Measurement Unit List</u></h4>
              <p>
                {" "}
                The Measurement Unit List Tab provides a structured table displaying Name, Creation Date, Picture, and Action, ensuring efficient unit management. With advanced search, filtering, and pagination, users can quickly locate and manage measurement units. This feature enhances inventory accuracy, standardization, and operational efficiency,
                ensuring seamless product categorization and precise stock tracking.{" "}
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4><u>Custom Store List</u></h4>
              <p>
                {" "}
                The Custom Store List provides a structured table displaying essential store details like Name, Country, State, City, Zip Code, Address, and Picture. With advanced search, filtering, and pagination, users can efficiently locate and manage store records. This module enhances store organization, location tracking, and operational
                efficiency, ensuring smooth business management across multiple locations.{" "}
              </p>

            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/images/custom-store-list.png"
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
                src="/images/email-sms.png"
                alt="image"
                className="img-fluid flex-shrink-0"
                style={{ border: "1px solid", borderRadius: "5px" }}
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4><u>Email/SMS Templates List</u></h4>
              <p>
                {" "}
                The Email/SMS Templates List provides a structured table displaying Template Name, Bcc, Enabled Status, and Action, ensuring efficient communication management. With advanced search, filtering, and pagination, users can quickly locate and manage templates. This module enhances automation, consistency, and efficiency, allowing businesses to
                streamline notifications, marketing messages, and customer engagement effortlessly.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-base-800">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-5">
                <h4 className="text-center clr-light">
                  {" "}
                  We use the latest technologies available to create timeless
                  designs.{" "}
                </h4>
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
      </div>

      {/* <!-- Testimonial --> */}
      <Feedback_3 />
      {/* <!-- Team Core Value --> */}
      <CoreValue />
      {/* <!-- Let's Talk --> */}
      <Letstalk />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Settings_Module;
