import Link from "next/link";
import Technologies from "@/components/Technologies";
// import Service from "@/components/Service";
import Navbar from "@/components/NavbarTwo";
import { useEffect, useRef, useState } from 'react';
import Footer from "@/components/Footer";
import Testimonail from "@/components/Testimonial";

const AllPosFeatures = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <>
      <div onClick={backToTop} className={`back-to-top ${scrolled ? "d-block" : "d-none"}`}>
        <span className="back-top">
          <span className="material-symbols-outlined mat-icon fw-300">keyboard_double_arrow_up</span>
        </span>
      </div>
      {/* Navbar Section */}
      <Navbar rtlurl="/rtl/service" />

      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> Point Of Sale</h3>
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
      <section >
        <div className="section">
          <div className="section__gap-bottom">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-xl-8">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{fontSize:"30px"}}>
                  {" "}
                  Our POS Features{" "}
                </span>
                  <h3 className="mt-5 mb-5 text-center">
                    {" "}
                    Trusted & Professional POS Solutions{" "}
                  </h3>
                  <p className="text-center mx-auto t-short-para">
                    {" "}
                    Designed for small to large marts, our advanced POS system simplifies operations, enhances efficiency, and accelerates business growth. Take your mart
                    to the next level with seamless sales, inventory, and management solutions! {" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-3 g-xxl-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle bg-success flex-shrink-0">
                    <img src="/images/dashboard.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Dashboard</h5>
                    <p className="mb-5">
                      {" "}
                      The Dashboard module provides a comprehensive overview of business operations, featuring real-time analytics, key performance indicators, and visual reports. Users can track sales, inventory, expenses, and other essential metrics efficiently.{" "}
                    </p>
                    <Link
                      href="/pos-features/dashboard"
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
              <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle bg-danger flex-shrink-0">
                    <img src="/images/icon-2.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Make Sale</h5>
                    <p className="mb-5">
                      {" "}
                      The Admin module allows managing users, assigning roles, setting permissions, tracking audit logs, and handling tenants. It ensures secure access control, efficient user management, and comprehensive oversight of system activities.{" "}
                    </p>
                    <Link
                      href="/pos-features/make-sale"
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
              <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle bg-success flex-shrink-0">
                    <img src="/images/lamp.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Purchase Orders</h5>
                    <p className="mb-5">
                      {" "}
                      Purchase Orders module helps businesses efficiently manage stock procurement, ensuring seamless inventory replenishment. With a structured interface, real-time calculations, and shortcut keys, users can quickly process purchase orders
                      , track payments etc.{" "}
                    </p>
                    <Link
                      href="/pos-features/purchase-orders"
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
              <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle bg-danger flex-shrink-0">
                    <img src="/images/categorization.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Master Category</h5>
                    <p className="mb-5">
                      {" "}
                      The Master Category module allows businesses to organize products and services into structured categories. It helps streamline inventory management, improves search efficiency, and enhances reporting for better business insights and decision-making.{" "}
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
              <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"#ffc163"}}>
                    <img src="/images/checkout.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Online Orders</h5>
                    <p className="mb-5">
                      {" "}
                      The Online Orders module efficiently manages customer orders with real-time tracking. It categorizes orders into Pending, Confirmed, Shipped, Delivered, and Completed, ensuring smooth order processing and improved customer satisfaction.{" "}
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
              <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle flex-shrink-0" style={{background:"rgb(16 253 0)"}}>
                    <img src="/images/allstock.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">All Stock Management</h5>
                    <p className="mb-5">
                      {" "}
                      The All Stock module provides a detailed inventory overview, dividing stock into Total Stock in Store and Stock in Warehouse. It ensures accurate tracking, efficient stock management, real-time updates, and seamless inventory control for businesses.
                      {" "}
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
          
              <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(83 114 255)"}}>
                    <img src="/images/expense.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Expenses Management</h5>
                    <p className="mb-5">
                      {" "}
                      The Expenses module helps businesses track and manage operational costs efficiently. Users can record, categorize, and monitor expenses in real-time, ensuring accurate financial oversight and better cost management for profitability.{" "}
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
              
              <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(153 153 154)"}}>
                    <img src="/images/order-history.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Sale & Purchase History</h5>
                    <p className="mb-5">
                      {" "}
                      The History module maintains a complete record of Sale Order History and Purchase Order History, allowing businesses to track past transactions, review details, and ensure accurate financial and inventory management.{" "}
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
              <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle bg-danger flex-shrink-0">
                    <img src="/images/claim.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Claim Module</h5>
                    <p className="mb-5">
                      {" "}
                      The Claim module manages product claims, including returns, warranties, and damaged goods. It tracks claim statuses, processes refunds or replacements, maintains records, and ensures a smooth resolution for businesses and customers.{" "}
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
              <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle bg-warning flex-shrink-0">
                    <img src="/images/icon-4.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Accounting</h5>
                    <p className="mb-5">
                      {" "}
                      The Accounting Module is a powerful tool that helps businesses manage financial records efficiently. With real-time tracking, automated calculations, and secure access, businesses can streamline
                      accounting, reduce errors, and make informed financial decisions.{" "}
                    </p>
                    <Link
                      href="artificial-intelligence-service"
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
              <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(23 198 171)"}}>
                    <img src="/images/placement.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Item Placement</h5>
                    <p className="mb-5">
                      {" "}
                      The Item Placement module organizes products systematically by defining row numbers, cabinets, and placements. It ensures efficient storage, easy retrieval, optimized inventory management, and a well-structured warehouse or store layout.{" "}
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
              <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(255 0 0)"}}>
                    <img src="/images/hammer.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Damage /Lost Items</h5>
                    <p className="mb-5">
                      {" "}
                      The Damage/Lost module tracks and records damaged or lost inventory, updates stock levels, logs incidents, minimizes shrinkage, and ensures accurate inventory records for better business management, reporting, and loss prevention analysis.{" "}
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
              <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(236 162 85)"}}>
                    <img src="/images/commercial.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Return Orders</h5>
                    <p className="mb-5">
                      {" "}
                      The Return Orders module efficiently handles product returns, tracks returned items, processes refunds or exchanges, updates stock levels, and ensures a smooth return experience for both customers and businesses, enhancing satisfaction and efficiency.{" "}
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
              <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(205 62 198)"}}>
                    <img src="/images/income.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Payable/Receivable Tracker</h5>
                    <p className="mb-5">
                      {" "}
                      The Payable/Receivable module manages outstanding payments and incoming receivables, tracks due amounts, records transactions, and ensures smooth cash flow, helping businesses maintain financial stability and accurate accounting records.{" "}
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
              <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(151 63 255)"}}>
                    <img src="/images/settings.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Setting</h5>
                    <p className="mb-5">
                      {" "}
                      The Settings module enables admins to customize system preferences, update payment details, company information, email, contact info, and other configurations, ensuring seamless business operations, efficient management, and a tailored user experience.{" "}
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
              <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(227 227 227)"}}>
                    <img src="/images/report.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Report Module</h5>
                    <p className="mb-5">
                      {" "}
                      This POS system manages reports like Purchase Orders, Sales Orders, Profit Margins, Customer Reports, User Reports, Return Sales, and Return Purchases. Reports can be filtered by date and exported to Excel or PDF.{" "}
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
              <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle flex-shrink-0" style={{backgroundColor:"rgb(227 117 149)"}}>
                    <img src="/images/report.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Admin Module</h5>
                    <p className="mb-5">
                      {" "}
                      The Admin module enables user management, role assignment, and permission control. Admins can track audit logs for security and manage tenants efficiently, ensuring streamlined access control and operational oversight.{" "}
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
          </div>
          <div className="section__gap-top">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-xl-8">
                  <div className="group group-row flex-wrap justify-content-center align-items-center">
                    <Link
                      href="contact-us"
                      className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                      <span className="bttn__arrow"> Contact Us </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Service Section  --> */}

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

export default AllPosFeatures;
