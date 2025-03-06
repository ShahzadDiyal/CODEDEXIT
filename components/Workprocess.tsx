import Link from 'next/link';
import React from 'react';

const Workprocess = () => {
    return (
        <section className="work-process-1">
        <div className="work-process-1__top section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-11 col-xl-6">
                <span className="d-block h5 lh-1 fw-semibold clr-accent text-center">
                  {" "}
                  The Way We Go About Our Work{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center clr-light">
                  {" "}
                  How Coded Exit Ltd Assist Your Business{" "}
                </h2>
                <p className="max-text-60 text-center mx-auto clr-light">
                  {" "}
                  We Offer Unique Services Tailored Specifically for Your
                  Company.Innovative Methods to Help Boost Your Company's
                  Profits{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="work-process-1__bottom section pb-0">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6 col-xl-3">
                <div className="about-card-1">
                  <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                    <span className="h6 fw-bold d-inline-block m-0">01</span>
                  </div>
                  <h5 className="mt-8 mb-5"> 01. Consultation  </h5>
                  <p className="mb-6">
                    {" "}
                    Understand client needs, define scope, and set objectives.{" "}
                  </p>
                  <Link
                    href="service-details-1"
                    className="t-link t-link--base fw-md mt-auto">
                    {" "}
                    Read More{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="about-card-1">
                  <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                    <span className="h6 fw-bold d-inline-block m-0">02</span>
                  </div>
                  <h5 className="mt-8 mb-5"> 02. Solution Design</h5>
                  <p className="mb-6">
                    {" "}
                    Create a tailored field service plan with resources.{" "}
                  </p>
                  <Link
                    href="service-details-1"
                    className="t-link t-link--base fw-md mt-auto">
                    {" "}
                    Read More{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="about-card-1">
                  <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                    <span className="h6 fw-bold d-inline-block m-0">03</span>
                  </div>
                  <h5 className="mt-8 mb-5"> 03. Implementation  </h5>
                  <p className="mb-6">
                    {" "}
                    Deploy field services, install systems, and monitor progress.{" "}
                  </p>
                  <Link
                    href="service-details-1"
                    className="t-link t-link--base fw-md mt-auto">
                    {" "}
                    Read More{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="about-card-1">
                  <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                    <span className="h6 fw-bold d-inline-block m-0">04</span>
                  </div>
                  <h5 className="mt-8 mb-5"> 04. Maintenance </h5>
                  <p className="mb-6">
                    {" "}
                    Provide continuous support, maintenance, and timely updates.{" "}
                  </p>
                  <Link
                    href="service-details-1"
                    className="t-link t-link--base fw-md mt-auto">
                    {" "}
                    Read More{" "}
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
      </section>
    );
};

export default Workprocess;