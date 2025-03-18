import Link from "next/link";
import Feedback_3 from "@/components/Feedback_3";
import Letstalk from "@/components/Letstalk";
import CoreValue from "@/components/CoreValue";
import Navbar from "@/components/NavbarTwo";
import { useEffect } from 'react';
import Footer from "@/components/Footer";

const Make_Sale_Module = () => {
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
              <h3 className="clr-light mb-3">Make Sale</h3>
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
                    Make Sale{" "}
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
          <div className="row g-4 padding-around" style={{ border: "1px solid", borderRadius: "5px" }}>
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 mt-0 align-self-center">
              <h3>Make Sale Module</h3>
              <p>
                {" "}
                The Make Sale Module streamlines order processing with essential features and quick actions. Users can set customers, apply discounts, manage sales tax, and process payments efficiently. With Shortcuts keys and real-time order details, automated calculations,
                and an intuitive interface, this module ensures a seamless sales experience.{" "}
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
                src="/images/make-sale2.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
          </div>
          <hr />
          <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{ fontSize:"40px", padding:"20px" }}>
            {" "}
          Make Sale Features{" "}
          </span>
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4>F1: Payment Method</h4>
              <p>
                {" "}
                The F1: Payment Method button allows users to select a preferred payment method, including Cash, Account, or Card, each with distinct icons for clarity. Clicking F1 opens a clean, modern interface where users can input payment details and finalize transactions. This feature enhances efficiency,
                reduces errors, and ensures seamless, professional order processing.{" "}
              </p>

            </div>
            <div className="col-md-6">
              <img
                src="/images/f1-payment-method.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6">
              <img
                src="/images/product-list.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4>F2: Product List</h4>
              <p>
                {" "}
                The F2: Lookup button allows users to quickly search for products or customer details within the system. Upon pressing F2, a table appears displaying product listings with details like name, quantity, price, brand, and vendor. This functionality enhances efficiency,
                reducing manual searches and improving accuracy in selecting the right products or customers.{" "}
              </p>

            </div>

          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
           
            <div className="col-md-6 align-self-center">
              <h4>F3: Discount</h4>
              <p>
                {" "}
                Pressing F3 opens a popup where users can apply a discount either as a percentage or a fixed amount. This flexibility allows businesses to offer promotions, loyalty discounts, or special pricing. It ensures accurate calculations, enhances customer satisfaction, 
                and boosts sales by making pricing adjustments seamless and efficient.{" "}
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/discount.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>

          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6">
              <img
                src="/images/status.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4>F4: Status (Order Status List)</h4>
              <p>
                {" "}
                When users press F4, a popup opens displaying Paid, Unpaid, and Partially Paid order statuses. This allows quick selection and tracking of payment statuses, ensuring accurate financial records, reducing errors, and preventing duplicate payments. It enhances transparency, streamlines order management, and improves overall sales efficiency.{" "}
              </p>
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4>F5: Go to Product Cart View</h4>
              <p>
                {" "}
                Pressing F5 instantly navigates the user to the product cart, displaying all added items for review. Users can modify quantities, apply discounts, or remove products before finalizing the sale. This feature ensures order accuracy, reduces errors, and enhances the checkout experience for seamless
                {" "}
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/f5-product-cart.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 text-end">
              <img
                src="/images/sale-tax.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4>F6: Sales Tax</h4>
              <p className="align-items-center">
                {" "}
                When the user presses the F6 button, the system automatically applies the required sales tax to the total purchase amount. This ensures compliance with tax regulations and accurate financial calculations. It eliminates manual tax entry errors, streamlines transactions, and enhances transparency for both sellers and customers.
                {" "}
              </p>
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            
            <div className="col-md-6 align-self-center">
              <h4>F7: Set Customer</h4>
              <p className="align-items-center">
                {" "}
                When the user presses F7, a customer selection interface appears, allowing them to assign a buyer to the sale. This ensures accurate order tracking, personalized service, and efficient record-keeping. It helps in managing customer purchase history, enabling better sales insights, loyalty programs, and targeted promotions.
                {" "}
              </p>
            </div>
            <div className="col-md-6 text-end">
              <img
                src="/images/customer.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 text-end">
              <img
                src="/images/item-placement.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4>F8: Item Placement</h4>
              <p className="align-items-center">
                {" "}
                Pressing F8 adds the selected product to the sale, ensuring accurate item tracking. This automates product entry, reducing manual errors and saving time. It enhances efficiency by instantly updating totals, discounts, and taxes, ensuring a seamless checkout experience while maintaining precise inventory records.
                {" "}
              </p>
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            
            <div className="col-md-6 align-self-center">
              <h4>F9: Create Order</h4>
              <p className="align-items-center">
                {" "}
                Pressing F8 adds the selected product to the sale, ensuring accurate item tracking. This automates product entry, reducing manual errors and saving time. It enhances efficiency by instantly updating totals, discounts, and taxes, ensuring a seamless checkout experience while maintaining precise inventory records.
                {" "}
              </p>
            </div>
            <div className="col-md-6 text-end">
              <img
                src="/images/create-order.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            
            
            <div className="col-md-6 text-end">
              <img
                src="/images/reset.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4>F10: Reset</h4>
              <p className="align-items-center">
                {" "}
                Clicking the F10 button clears all entered fields and resets the sale module for a new transaction. This prevents incorrect data from being processed, reduces manual errors, and improves workflow efficiency. It ensures a fresh start for each sale, allowing users to handle multiple transactions seamlessly without confusion.
                {" "}
              </p>
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
           
            <div className="col-md-6 align-self-center">
              <h4>F11: Recall</h4>
              <p className="align-items-center">
                {" "}
                Pressing F11 switches the system to full-screen mode, hiding the taskbar and browser tabs for a distraction-free interface. Pressing F11 again restores the original view. This enhances focus, providing a clear workspace for efficient order management without unnecessary distractions.
                {" "}
              </p>
            </div>
            <div className="col-md-6 text-end">
              <img
                src="/images/f10.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            
            
            <div className="col-md-6 text-end">
              <img
                src="/images/Tender.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4>F12: Tender</h4>
              <p className="align-items-center">
                {" "}
                When the user presses F12, the system processes the transaction and finalizes payment details. This ensures a smooth and secure checkout, reducing errors and enhancing efficiency. The feature speeds up sales, improves accuracy, and provides a seamless experience for both customers and sales staff.
                {" "}
              </p>
            </div>
          </div>

          {/* other features */}

          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
           
            <div className="col-md-6 align-self-center">
              <h4>Order Details Panel</h4>
              <p className="align-items-center">
                {" "}
                This panel provides a comprehensive view of the sale, displaying seller and customer details, order status, and financial summaries. It enhances transaction transparency, prevents discrepancies, and ensures accurate record-keeping. Users can track payments, review customer information, and maintain an organized sales history for future reference.
                {" "}
              </p>
            </div>
            <div className="col-md-6 text-end">
              <img
                src="/images/detail.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            
            
            <div className="col-md-6 text-end">
              <img
                src="/images/entry.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4>Product Entry Section</h4>
              <p className="align-items-center">
                {" "}
                This section allows users to input Product Tag, Quantity, Price, Discount, and Total, streamlining order processing. It improves efficiency by enabling quick product additions, automatic calculations, and discount applications. This ensures accuracy in pricing, reduces manual errors, and enhances the overall sales workflow, leading to a smoother checkout experience.
                {" "}
              </p>
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            
            <div className="col-md-6 align-self-center">
              <h4>Financial Overview</h4>
              <p className="align-items-center">
                {" "}
                The Financial Overview displays Gross Total, Discounts, Sub Total, Sales Tax, and Final Total, providing a transparent breakdown of the order. This ensures accurate cost calculations, helping businesses maintain pricing consistency, prevent billing errors, and improve financial tracking for better decision-making and seamless transaction management.
                {" "}
              </p>
            </div>
            <div className="col-md-6 text-end">
              <img
                src="/images/financial-overview.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            
            
            <div className="col-md-6 text-end">
              <img
                src="/images/real-time-calculation.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4>Real-time Calculation</h4>
              <p className="align-items-center">
                {" "}
                The Real-time Calculation feature automatically updates pricing, discounts, and tax amounts as products are added or modified. This minimizes manual errors, enhances accuracy, and speeds up the checkout process. Businesses benefit from precise billing, improved customer experience, and reduced discrepancies in financial records.
                {" "}
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
     
     
     {/* MODULE END */}
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

      {/* <div className="section pb-0 service-section-2">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-9">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  Professional Field Services Management{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center">
                  {" "}
                  A team of field service experts optimizing operations, workforce efficiency, and customer satisfaction.{" "}
                </h2>
                <p className="text-center mx-auto max-text-70">
                  {" "}
                  We specialize in field service management solutions, leveraging the best technologies to streamline operations, enhance efficiency,
                  and support your journey from planning to execution and ongoing maintenance.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <div className="row g-6">
            <div className="col-md-4">
              <div className="help-card help-card--hover-base text-center bg--white border-0 t-shadow">
                <img
                  src="/images/icon-78.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5">
                  {" "}
                  B2B, B2C, Internal Platforms Development Services{" "}
                </h5>
                <p className="mb-8">
                  {" "}
                  Web development services - build with us any B2B/B2C/internal
                  platform and let your business scale.{" "}
                </p>
                <Link
                  href="field-service-management"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="help-card help-card--hover-base text-center bg--white border-0 t-shadow">
                <img
                  src="/images/icon-79.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5">
                  {" "}
                  Backend Development - JavaScript, PHP{" "}
                </h5>
                <p className="mb-8">
                  {" "}
                  Build your backend as REST API with JavaScript (Node.js,
                  Express) or PHP (Symfony, Laravel).{" "}
                </p>
                <Link
                  href="field-service-management"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="help-card help-card--hover-base text-center bg--white border-0 t-shadow">
                <img
                  src="/images/icon-80.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5">
                  {" "}
                  Frontend Development - React, Vue.js{" "}
                </h5>
                <p className="mb-8">
                  {" "}
                  Stunning user experience. Build frontend of your application
                  with trusted and loved by millions technologies - React and
                  Vue.js..{" "}
                </p>
                <Link
                  href="field-service-management"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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

export default Make_Sale_Module;
