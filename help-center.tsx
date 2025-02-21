import Link from "next/link";


const help_center = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section--sm help-banner">
              <div className="row">
                <div className="col-md-10 col-lg-8">
                  <span className="d-block h5 lh-1 fw-semibold clr-accent">
                    {" "}
                    Help Center{" "}
                  </span>
                  <h2 className="mt-5 mb-5 clr-light">
                    {" "}
                    We are here to help you{" "}
                  </h2>
                  <p className="mb-11 clr-light xxl-text">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur. Vestibulum sagittis
                    augue fringilla sodales leo tortor. Pharetra tempus
                    consequat interdum bibendum non .{" "}
                  </p>
                  <div className="newsletter-2 bg-light max-text-50">
                    <input
                      type="text"
                      className="newsletter-2__input placeholder-clr clr-dark"
                      placeholder="Search for articles..."
                    />
                    <button className="bttn bttn--base bttn-sm fw-md flex-shrink-0 rounded-1 newsletter-2__btn">
                      {" "}
                      Search{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="help-banner__img">
                <img
                  src="/images/support-banner-img.png"
                  alt="image"
                  className="help-banner__img-is"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Help Banner End --> */}
      {/* <!-- Help Category --> */}
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-7">
                <h3> Browse questions by category </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-6">
            <div className="col-md-6 col-lg-4">
              <div className="help-card text-center">
                <img
                  src="/images/icon-61.png"
                  alt="image"
                  className="img-fluid"
                />
                <h4 className="mt-8 mb-5"> Getting started </h4>
                <p className="mb-8">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur. Eu purus eget auctor
                  eu laoreet. Faucibus rhoncus tincidunt vel placerat aucibus
                  rhoncus.{" "}
                </p>
                <Link
                  href="getting-started"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="help-card text-center">
                <img
                  src="/images/icon-62.png"
                  alt="image"
                  className="img-fluid"
                />
                <h4 className="mt-8 mb-5"> Mobile and tablet </h4>
                <p className="mb-8">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur. Eu purus eget auctor
                  eu laoreet. Faucibus rhoncus tincidunt vel placerat aucibus
                  rhoncus.{" "}
                </p>
                <Link
                  href="getting-started"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="help-card text-center">
                <img
                  src="/images/icon-63.png"
                  alt="image"
                  className="img-fluid"
                />
                <h4 className="mt-8 mb-5"> Payments </h4>
                <p className="mb-8">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur. Eu purus eget auctor
                  eu laoreet. Faucibus rhoncus tincidunt vel placerat aucibus
                  rhoncus.{" "}
                </p>
                <Link
                  href="getting-started"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="help-card text-center">
                <img
                  src="/images/icon-64.png"
                  alt="image"                  className="img-fluid"
                />
                <h4 className="mt-8 mb-5"> Troubleshooting </h4>
                <p className="mb-8">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur. Eu purus eget auctor
                  eu laoreet. Faucibus rhoncus tincidunt vel placerat aucibus
                  rhoncus.{" "}
                </p>
                <Link
                  href="getting-started"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="help-card text-center">
                <img
                  src="/images/icon-65.png"
                  alt="image"
                  className="img-fluid"
                />
                <h4 className="mt-8 mb-5"> Team settings </h4>
                <p className="mb-8">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur. Eu purus eget auctor
                  eu laoreet. Faucibus rhoncus tincidunt vel placerat aucibus
                  rhoncus.{" "}
                </p>
                <Link
                  href="getting-started"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="help-card text-center">
                <img
                  src="/images/icon-66.png"
                  alt="image"
                  className="img-fluid"
                />
                <h4 className="mt-8 mb-5"> Billing settings </h4>
                <p className="mb-8">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur. Eu purus eget auctor
                  eu laoreet. Faucibus rhoncus tincidunt vel placerat aucibus
                  rhoncus.{" "}
                </p>
                <Link
                  href="getting-started"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
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
      {/* <!-- Help Category End --> */}
      {/* <!-- Popular Question  --> */}
      <div className="section bg-neutral-100">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7">
                <h3 className="text-center"> Popular Questions </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-6">
            <div className="col-md-6">
              <div className="question-card">
                <h5 className="mb-2">
                  <Link
                    href="help-center-details"
                    className="t-link d-block clr-heading question-card__title">
                    {" "}
                    How to create a free itechex account?{" "}
                  </Link>
                </h5>
                <Link
                  href="help-center-details"
                  className="t-link t-link--base fw-md question-card__link">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="question-card">
                <h5 className="mb-2">
                  <Link
                    href="help-center-details"
                    className="t-link d-block clr-heading question-card__title">
                    {" "}
                    Do you offer free trials on itechex?{" "}
                  </Link>
                </h5>
                <Link
                  href="help-center-details"
                  className="t-link t-link--base fw-md question-card__link">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="question-card">
                <h5 className="mb-2">
                  <Link
                    href="help-center-details"
                    className="t-link d-block clr-heading question-card__title">
                    {" "}
                    How can I invite my team members?{" "}
                  </Link>
                </h5>
                <Link
                  href="help-center-details"
                  className="t-link t-link--base fw-md question-card__link">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="question-card">
                <h5 className="mb-2">
                  <Link
                    href="help-center-details"
                    className="t-link d-block clr-heading question-card__title">
                    {" "}
                    How to create a free itechex account?{" "}
                  </Link>
                </h5>
                <Link
                  href="help-center-details"
                  className="t-link t-link--base fw-md question-card__link">
                  {" "}
                  Discover Now{" "}
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
    </>
  );
};

export default help_center;
