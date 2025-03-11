import Link from "next/link";
import Feedback_3 from "@/components/Feedback_3";
import Letstalk from "@/components/Letstalk";
import CoreValue from "@/components/CoreValue";
import Navbar from "@/components/NavbarTwo";
import { useEffect } from 'react';
import Footer from "@/components/Footer";

const Dashboard_Module = () => {
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
              <h3 className="clr-light mb-3">Dashboard</h3>
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
                    Dashboard{" "}
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
              <h3>Dashboard Module</h3>
              <p>
                {" "}
                The Dashboard Module is essential for businesses to monitor, analyze, and optimize operations in real time. It provides centralized insights, data visualization, and performance tracking, enabling smarter decisions. With an intuitive interface, it enhances efficiency, transparency,
                and productivity, ensuring seamless business management and data-driven growth at a glance. {" "}
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
                src="/images/dashb.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
          </div>
          <hr />
          <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{ fontSize: "40px", padding: "20px" }}>
            {" "}
            Dashboard Features{" "}
          </span>
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">

            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4>Real-time Numerical Insights</h4>
              <p>
                {" "}
                The Dashboard Module provides a comprehensive overview of key business metrics through intuitive cards, displaying real-time numerical insights for seamless monitoring. Track Sales Orders, Sales Order Amount, Payables, Receivables, Purchase Orders, Purchase Order Amount, Expenses, and Damage Item Quantity at a glance. Enhance decision-making, financial tracking,
                and operational efficiency with a clear, data-driven interface for smarter business management.{" "}
              </p>

            </div>
            <div className="col-md-6">
              <img
                src="/images/numerical-insights.png"
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
                src="/images/dashboard-header.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4>Advanced Dashboard Filtering & Insights</h4>
              <p>
                {" "}
                Easily analyze your business performance with date-wise, month-wise, and year-wise views. Use the custom date filter to track data within any timeframe and the search filter for quick access to specific summaries. Gain precise insights, improved decision-making,
                and enhanced control over your business operations with real-time, customizable analytics.{" "}
              </p>

            </div>

          </div>
          <hr />
          <span className="d-block h5 lh-1 fw-semibold clr-base text-center" style={{ fontSize: "40px", padding: "20px" }}>
            {" "}
            Graphical Insights{" "}
          </span>
          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4>Total Sale & Purchase Insights</h4>
              <p>
                {" "}
                The Total Sale & Purchase graph provides a clear, real-time visual representation of your business transactions. Easily track sales and purchases trends, identify growth patterns, and make data-driven decisions. With dynamic insights and comparative analysis,
                optimize inventory, forecast demand, and enhance profitability—all in one powerful graphical view!{" "}
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/total-sale-purchase.png"
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
                src="/images/status-insights.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4>Order Status Insights</h4>
              <p>
                {" "}
                The Order Status graph provides a comprehensive overview of your financial transactions, displaying Paid, Partially Paid, and Unpaid orders in real time. Easily track payment trends, manage cash flow, and identify outstanding balances at a glance. Enhance financial
                control, streamline invoicing, and optimize revenue management with clear, data-driven insights!{" "}
              </p>
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4>Total Payable Receivable</h4>
              <p>
                {" "}
                Visualize your financial health with the Total Payable & Receivable Graph, offering a clear comparison of outstanding payments and incoming revenue. This dynamic graph helps you track cash flow, manage liabilities, and optimize financial planning effortlessly.
                Stay informed, make data-driven decisions, and maintain a balanced financial strategy with real-time insights.{" "}
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/payable-recieveable.png"
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
                src="/images/online-status-insights.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4>Real-Time Online Order Status Tracking</h4>
              <p>
                {" "}
                Stay in control with a comprehensive view of your orders. Track Completed, Pending, Delivered, Confirmed, and Shipped orders in real time. Gain instant insights, improve order management, and enhance customer satisfaction
                with a streamlined, easy-to-monitor dashboard for efficient business operations. Stay updated, stay ahead!{" "}
              </p>
            </div>
          </div>



          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4>Top Customers Overview</h4>
              <p>
                {" "}
                Get valuable insights into your customer base with the Top Customers section, displaying the total number of customers and their engagement. Easily track your most valuable clients, analyze purchasing trends, and enhance customer relationships.
                Stay ahead with data-driven strategies to boost retention, sales, and business growth. {" "}
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/top-cus.png"
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
                src="/images/top-prod.png"
                alt="image"
                className="img-fluid flex-shrink-0"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4>Top Sold Products Overview</h4>
              <p>
                {" "}
                Gain valuable insights into your best-performing products with the Top Sold Products section. Track high-demand items, sales trends, and customer preferences to optimize inventory, boost profitability, and enhance sales strategies.
                Stay ahead of market demands with real-time data and make informed decisions to drive business growth. {" "}
              </p>
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-7 col-xl-5">
            </div>
            <span className="w-100"></span>
            <div className="col-md-6 align-self-center">
              <h4>Total Available Products</h4>
              <p>
                {" "}
                Keep track of your current inventory with the Total Available Products section. Monitor stock levels in real time, prevent shortages, and ensure smooth operations. This feature helps in efficient inventory management, better planning,
                and improved sales fulfillment, keeping your business running seamlessly and customers satisfied.{" "}
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/available-prod.png"
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
                src="/images/expense-by-day.png"
                alt="image"
                className="img-fluid flex-shrink-0 w-100"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h4>Total Expense by Day</h4>
              <p>
                {" "}
                Monitor and manage your daily expenses with the Total Expense by Day section. Gain real-time insights into spending patterns, control costs, and optimize budget allocation. This feature helps in tracking financial efficiency, reducing unnecessary
                expenses, and making data-driven decisions for better financial management and business growth.{" "}
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

export default Dashboard_Module;
