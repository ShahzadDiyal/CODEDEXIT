import Link from 'next/link';
import React from 'react';

const Features = () => {
    return (
        <section className="section features-section-1">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-xxl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  Exciting New Phase in the Advancement of Field Service Solutions{" "}
                </span>
                <h3 className="mt-5 mb-5">
                  {" "}
                  Let's collaborate to transform your ideal business into a successful reality through expert field services{" "}
                </h3>
                <p className="max-text-60">
                  {" "}
                  We manage projects from start to finish, delivering trusted field service 
                  solutions to ensure your success and provide the best IT support.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-xl-3">
              <div className="feature-card-1">
                <div className="icon-box icon-box--md bg-secondary circle">
                  <img src="/images/icon-28.png" alt="image" />
                </div>
                <h5 className="mt-8 mb-2">Top Flexibility</h5>
                <p className="mb-5">
                  {" "}
                  We offer the most responsive and efficient field services to 
                  businesses worldwide, ensuring seamless IT solutions.{" "}
                </p>
                <Link href="services" className="t-link t-link--base fw-md">
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
              <div className="feature-card-1">
                <div className="icon-box icon-box--md bg-danger circle">
                  <img src="/images/icon-29.png" alt="image" />
                </div>
                <h5 className="mt-8 mb-2">Time Saving</h5>
                <p className="mb-5">
                  {" "}
                  We deliver the most responsive and effective field services to enterprises and businesses globally.{" "}
                </p>
                <Link href="services" className="t-link t-link--base fw-md">
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
              <div className="feature-card-1">
                <div className="icon-box icon-box--md bg-success circle">
                  <img src="/images/icon-30.png" alt="image" />
                </div>
                <h5 className="mt-8 mb-2">Management</h5>
                <p className="mb-5">
                  {" "}
                  We offer the most responsive and efficient field services to enterprises and businesses worldwide.{" "}
                </p>
                <Link href="services" className="t-link t-link--base fw-md">
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
              <div className="feature-card-1">
                <div className="icon-box icon-box--md bg-warning circle">
                  <img src="/images/icon-31.png" alt="image" />
                </div>
                <h5 className="mt-8 mb-2">Collaborative</h5>
                <p className="mb-5">
                  {" "}
                  We deliver highly responsive and effective field 
                  services to businesses and enterprises globally.{" "}
                </p>
                <Link href="services" className="t-link t-link--base fw-md">
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
      </section>
    );
};

export default Features;