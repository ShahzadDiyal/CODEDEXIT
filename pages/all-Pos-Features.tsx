import Link from "next/link";
import Technologies from "@/components/Technologies";
// import Service from "@/components/Service";
import Navbar from "@/components/NavbarTwo";
import { useEffect, useRef, useState } from 'react';
import Footer from "@/components/Footer";
import Testimonail from "@/components/Testimonial";
import GetStartedToday from "@/components/GetStartedToday";

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
            <div className="col-md-6">
              <h3 className="clr-light mb-3">Point Of Sale</h3>
              <ul className="list list-row flex-wrap breadcrumb-list">
                <li>
                  <Link href="/" className="d-inline-block t-link clr-light :clr-accent">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/ourProducts" className="d-inline-block t-link clr-light :clr-accent">
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link href="/all-Pos-Features" className="d-inline-block t-link clr-light :clr-accent">
                    Features Of POS
                  </Link>
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
      <section >
        <div className="section">
          <div className="section__gap-bottom">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-xl-8">
                  <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{ fontSize: "30px" }}>
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
            <div className="row g-4 padding-around mt-2 mb-2" style={{ border: "1px solid", borderRadius: "5px" }}>
              <div className="col-md-7 col-xl-5">

              </div>
              <span className="w-100"></span>
              <div className="col-md-6 mt-0 align-self-center">
                <h3>Dashboard Module</h3>
                <p>
                  {" "}
                  The Dashboard Module is essential for businesses to monitor, analyze, and optimize operations in real time. It provides centralized insights, data visualization, and performance tracking, enabling smarter decisions. With an intuitive interface, it enhances efficiency, transparency,
                  and productivity, ensuring seamless business management and data-driven growth at a glance. {" "}
                </p>
                <Link
                  href="/dashboard"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/dashb.png"
                  alt="image"
                  className="img-fluid flex-shrink-0"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-4 padding-around mt-2 mb-2" style={{ border: "1px solid", borderRadius: "5px" }}>
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
                  href="/make-sale"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
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
          </div>
          <div className="container">
            <div className="row g-4 padding-around mt-2 mb-2" style={{ border: "1px solid", borderRadius: "5px" }}>
              <div className="col-md-7 col-xl-5">

              </div>
              <span className="w-100"></span>
              <div className="col-md-6 mt-0 align-self-center">
                <h3>Purchase Orders Module</h3>
                <p>
                  {" "}
                  The Purchase Order Management module streamlines business transactions by tracking vendor purchases, payments, and outstanding balances. It enhances financial accuracy, reduces errors, improves vendor relations,
                  and ensures efficient order management with real-time data insights.{" "}
                </p>
                <Link
                  href="/purchase-orders"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/purchase-orders.png"
                  alt="image"
                  className="img-fluid flex-shrink-0"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-4 padding-around mb-2 mt-2" style={{ border: "1px solid", borderRadius: "5px" }}>
              <div className="col-md-7 col-xl-5">

              </div>
              <span className="w-100"></span>
              <div className="col-md-6 mt-0 align-self-center">
                <h3>Master Category Module</h3>
                <p>
                  {" "}
                  The Master Category Module streamlines product management with a structured system for inventory organization. It features a well-organized product list, enabling users to track stock, pricing, taxes, and availability efficiently. Advanced search and filters enhance accessibility, simplifying vendor coordination and sales tracking.
                  Its modern interface boosts productivity, accuracy, and decision-making in inventory management.{" "}
                </p>
                <Link
                  href="/master-category"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
              <div className="col-md-6 align-self-center">
                <img
                  src="/images/master-category.png"
                  alt="image"
                  className="img-fluid flex-shrink-0"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-4 padding-around mb-2 mt-2" style={{ border: "1px solid", borderRadius: "5px" }}>
              <div className="col-md-7 col-xl-5">
              </div>
              <span className="w-100"></span>
              <div className="col-md-6 mt-0 align-self-center">
                <h3>All Stock Management</h3>
                <p>
                  {" "}
                  The Stock Management Module ensures seamless tracking of inventory across stores and warehouses, preventing stockouts and overstocking. With real-time updates, efficient categorization, and automated stock adjustments, businesses can optimize inventory levels. Advanced search, filtering, and reporting enhance decision-making, while seamless warehouse-store coordination boosts
                  efficiency, reduces losses, and ensures smooth operations for better sales and profitability.
                  {" "}
                </p>
                <Link
                  href="/all-stock"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/all-stock-management.png"
                  alt="image"
                  className="img-fluid flex-shrink-0"
                  style={{ border: "1px solid", borderRadius: "5px" }}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-4 padding-around mb-2 mt-2" style={{ border: "1px solid", borderRadius: "5px" }}>
              <div className="col-md-7 col-xl-5">
              </div>
              <span className="w-100"></span>
              <div className="col-md-6 mt-0 align-self-center">
                <h3>Expense Management Module</h3>
                <p>
                  {" "}
                  The Expense Management Module streamlines financial tracking with Expense List and Expense Type List tabs, ensuring organized expense categorization. It enhances budgeting, reduces financial discrepancies, and improves decision-making with clear records. With efficient tracking and reporting, businesses can optimize spending, maintain transparency, and achieve better financial
                  control for improved profitability and operational efficiency.
                  {" "}
                </p>
                <Link
                  href="/expense-management"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/expense-management.png"
                  alt="image"
                  className="img-fluid flex-shrink-0"
                  style={{ border: "1px solid", borderRadius: "5px" }}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-4 padding-around mb-2 mt-2" style={{ border: "1px solid", borderRadius: "5px" }}>
              <div className="col-md-7 col-xl-5">
              </div>
              <span className="w-100"></span>
              <div className="col-md-6 mt-0 align-self-center">
                <h3>History Module </h3>
                <p>
                  {" "}
                  The History Module provides a detailed sale and purchase order tracking system, ensuring transparency and accountability in transactions. Businesses can easily access past orders, monitor trends, and analyze purchase patterns. With efficient record-keeping, quick search, and filtering, this module enhances decision-making, prevents discrepancies,
                  and improves financial planning for smoother, more reliable operations.
                  {" "}
                </p>
                <Link
                  href="/sale-purchase-history"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/history-module.png"
                  alt="image"
                  className="img-fluid flex-shrink-0"
                  style={{ border: "1px solid", borderRadius: "5px" }}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-4 padding-around mb-2 mt-2" style={{ border: "1px solid", borderRadius: "5px" }}>
              <div className="col-md-7 col-xl-5">
              </div>
              <span className="w-100"></span>
              <div className="col-md-6 mt-0 align-self-center">
                <h3>Claims Module </h3>
                <p>
                  {" "}
                  The Claim Module provides a centralized platform to manage and track all claims efficiently. It ensures transparency, quick dispute resolution, and accurate record-keeping for refunds, returns, or damaged goods. With structured data and streamlined processing, businesses can reduce financial losses, enhance customer satisfaction,
                  and maintain seamless vendor coordination for improved operational efficiency.
                  {" "}
                </p>
                <Link
                  href="/claims"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/claims.png"
                  alt="image"
                  className="img-fluid flex-shrink-0"
                  style={{ border: "1px solid", borderRadius: "5px" }}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-4 padding-around mb-2 mt-2" style={{ border: "1px solid", borderRadius: "5px" }}>
              <div className="col-md-7 col-xl-5">
              </div>
              <span className="w-100"></span>
              <div className="col-md-6 mt-0 align-self-center">
                <h3>Accounting Module </h3>
                <p>
                  {" "}
                  The Accounting Module streamlines financial management with four key tabs: Accounts, Deposits, Transfers, and Transactions. Each tab features a structured table with advanced filtering, search, and pagination, ensuring accurate tracking of financial records. This module enhances transparency, efficiency, and decision-making, helping businesses maintain precise financial control and seamless cash flow management.
                  {" "}
                </p>
                <Link
                  href="/accounting"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/accounting-module.png"
                  alt="image"
                  className="img-fluid flex-shrink-0"
                  style={{ border: "1px solid", borderRadius: "5px" }}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-4 padding-around mb-2 mt-2" style={{ border: "1px solid", borderRadius: "5px" }}>
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
                  href="/item-placement"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
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
          </div>
          <div className="container">
            <div className="row g-4 padding-around mb-2 mt-2" style={{ border: "1px solid", borderRadius: "5px" }}>
              <div className="col-md-7 col-xl-5">
              </div>
              <span className="w-100"></span>
              <div className="col-md-6 mt-0 align-self-center">
                <h3>Damage/Lost Items Module </h3>
                <p>
                  {" "}
                  The Damage or Lost Items List module helps track and manage
                  inventory losses efficiently. With a detailed table displaying Store Name, Product Name, Quantity, Purchase Price, Total Amount, and Creation Date, businesses can monitor losses, identify patterns, and take preventive measures. The Action column allows seamless updates, ensuring accurate record-keeping and minimizing financial impact.
                  {" "}
                </p>
                <Link
                  href="/damage-lost"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/damage-lost-pic.png"
                  alt="image"
                  className="img-fluid flex-shrink-0"
                  style={{ border: "1px solid", borderRadius: "5px" }}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-4 padding-around mb-2 mt-2" style={{ border: "1px solid", borderRadius: "5px" }}>
              <div className="col-md-7 col-xl-5">
              </div>
              <span className="w-100"></span>
              <div className="col-md-6 mt-0 align-self-center">
                <h3>Return Orders Module </h3>
                <p>
                  {" "}
                  The Return Orders Module efficiently manages returned sales and purchase orders with two dedicated tabs: Total Return Sale Orders and Total Return Purchase Orders. Each tab features a structured table with advanced filtering, search, and pagination, ensuring accurate tracking of returns. This module enhances inventory control,
                  reduces losses, and streamlines return processing for smoother operations.
                  {" "}
                </p>
                <Link
                  href="/return-orders"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/return-sale-order.png"
                  alt="image"
                  className="img-fluid flex-shrink-0"
                  style={{ border: "1px solid", borderRadius: "5px" }}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-4 padding-around mb-2 mt-2" style={{ border: "1px solid", borderRadius: "5px" }}>
              <div className="col-md-7 col-xl-5">
              </div>
              <span className="w-100"></span>
              <div className="col-md-6 mt-0 align-self-center">
                <h3>Payable & Receivable Module </h3>
                <p>
                  {" "}
                  The Payable & Receivable Module efficiently tracks outstanding payments with two dedicated tabs: Payable and Receivable. Each tab displays a structured list of total dues with advanced filtering, search, and pagination, ensuring accurate financial tracking. This module enhances cash flow management, reduces discrepancies, and improves financial planning for smoother business operations.
                  {" "}
                </p>
                <Link
                  href="/payable-recieveable"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/payable-recievable1.png"
                  alt="image"
                  className="img-fluid flex-shrink-0"
                  style={{ border: "1px solid", borderRadius: "5px" }}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-4 padding-around mb-2 mt-2" style={{ border: "1px solid", borderRadius: "5px" }}>
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
                  href="/settings"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
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
          </div>
          <div className="container">
            <div className="row g-4 padding-around mb-2 mt-2" style={{ border: "1px solid", borderRadius: "5px" }}>
              <div className="col-md-7 col-xl-5">
              </div>
              <span className="w-100"></span>
              <div className="col-md-6 mt-0 align-self-center">
                <h3>Report Module </h3>
                <p>
                  {" "}
                  The Report Module in our POS system provides comprehensive insights through multiple tabs, including Purchase Orders Report, Sales Order Report, Customer Report, Profit/Margin Report, User Report, Return Sales Orders, and Return Purchase Orders. Each tab offers a flexible, user-friendly interface, allowing seamless data retrieval, analysis, and tracking. This module enhances decision-making by
                  delivering accurate, real-time reports tailored to business needs.
                  {" "}
                </p>
                <Link
                  href="/report-module"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/purchase orders pic.png"
                  alt="image"
                  className="img-fluid flex-shrink-0"
                  style={{ border: "1px solid", borderRadius: "5px" }}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-4 padding-around mb-2 mt-2" style={{ border: "1px solid", borderRadius: "5px" }}>
              <div className="col-md-7 col-xl-5">
              </div>
              <span className="w-100"></span>
              <div className="col-md-6 mt-0 align-self-center">
                <h3>Admin Module </h3>
                <p>
                  {" "}
                  The Admin Module serves as the central control hub for managing the entire Point of Sale system. It enables administrators to handle roles, permissions, users, audit logs, and tenants efficiently. With robust access control, user management, and activity tracking, this module ensures security, accountability, and smooth multi-tenant operations,
                  empowering admins to maintain system integrity and operational efficiency.
                  {" "}
                </p>
                <Link
                  href="/admin-module"
                  className="t-link t-link--base fw-md">
                  {" "}
                  More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/admin-side.jpg"
                  alt="image"
                  className="img-fluid flex-shrink-0"
                  style={{ border: "1px solid", borderRadius: "5px", width: "100%", height: "500px" }}
                />
              </div>
            </div>
          </div>



          {/* <div className="container">
            <div className="row g-3 g-xxl-4 justify-content-center">
              
              <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle flex-shrink-0" style={{ backgroundColor: "#ffc163" }}>
                    <img src="/images/checkout.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Online Orders</h5>
                    <p className="mb-5">
                      {" "}
                      The Online Orders module efficiently manages customer orders with real-time tracking. It categorizes orders into Pending, Confirmed, Shipped, Delivered, and Completed, ensuring smooth order processing and improved customer satisfaction.{" "}
                    </p>
                    <Link
                      href="##"
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
          <div className="section__gap-top">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-xl-8">
                  <div className="group group-row flex-wrap justify-content-center align-items-center">
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

      <GetStartedToday />
      <Footer />
    </>
  );
};

export default AllPosFeatures;
