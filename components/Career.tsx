import Link from "next/link";

const Career = () => {
  return (
    <div className="section">
      <div className="container mt-5">
        <span className="d-block h5 lh-1 fw-semibold clr-base text-center mt-1" style={{ fontSize: "30px" }}>
          {" "}
          Our Career{" "}
        </span>
        <h3 className="mt-2 clr-base text-center">
          {" "}
          JOIN HANDS WITH CODEDEXIT Ltd INNOVATE, SCALE, SUCCEED!{" "}
        </h3>
        <p className="text-center mx-auto t-short-para mb-4" style={{ padding: "20px" }}>
          {" "}
          Digital Transformation for the Microfinance and Banking Sector is becoming inevitable to effectively meet customer needs.{" "}
        </p>
        <img src="/images/ourcareers.jpg" alt="" style={{ width: "100%", height: "600px", borderRadius: "5px" }} />
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
                            <Link
                              href="/our-careers"
                              className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                              <span className="bttn__arrow"> Our Career</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    </div>
    
  );
};
export default Career;