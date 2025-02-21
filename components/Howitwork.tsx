import React from 'react';

const Howitwork = () => {
    return (
      <section className="section">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-xl-7">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center"> كيف تعمل </span>
              <h2 className="mt-5 mb-5 text-center"> عمليات عملنا </h2>
              <p className="text-center mx-auto max-text-60"> نحن نقدم خدمات فريدة مصممة خصيصًا لشركتك. طرق مبتكرة للمساعدة عزز أرباح شركتك </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-5 gy-xl-4 g-4 justify-content-center">
          <div className="col-sm-6 col-lg-3">
            <div className="process-card-2 process-card-2--1 text-center">
              <div className="process-card-2__icon">
                <img src="/images/icon-47.png" alt="image" className="img-fluid" />
                <span className="process-card-2__notification"> 01 </span>
              </div>
              <h5 className="mt-8 mb-2"> اختر خدمة </h5>
              <p> فليكن هذا اتحادًا جامعيًا شحمًا ليجولا السلع النخبوية </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="process-card-2 process-card-2--2 text-center">
              <div className="process-card-2__icon">
                <img src="/images/icon-48.png" alt="image" className="img-fluid" />
                <span className="process-card-2__notification"> 02 </span>
              </div>
              <h5 className="mt-8 mb-2"> طلب لقاء </h5>
              <p> فليكن هذا اتحادًا جامعيًا شحمًا ليجولا السلع النخبوية </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="process-card-2 process-card-2--1 text-center">
              <div className="process-card-2__icon">
                <img src="/images/icon-49.png" alt="image" className="img-fluid" />
                <span className="process-card-2__notification"> 03 </span>
              </div>
              <h5 className="mt-8 mb-2"> ابدأ التخطيط </h5>
              <p> فليكن هذا اتحادًا جامعيًا شحمًا ليجولا السلع النخبوية </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="process-card-2 text-center">
              <div className="process-card-2__icon">
                <img src="/images/icon-50.png" alt="image" className="img-fluid" />
                <span className="process-card-2__notification"> 04 </span>
              </div>
              <h5 className="mt-8 mb-2"> التنفيذ والتثبيت </h5>
              <p> فليكن هذا اتحادًا جامعيًا شحمًا ليجولا السلع النخبوية </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Howitwork;