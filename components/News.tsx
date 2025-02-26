import Link from "next/link";

const News = () => {
  return (
    <div className="section">
      <div className="container mt-5">
        <h2 className="text-center">Latest News</h2>
        <p className="text-center mb-4">Digital Transformation for the Microfinance and Banking Sector is becoming inevitable to effectively meet customer needs.</p>
        <div className="row">
          {newsArticles.map((article, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="news-card">
                <div className="entry-thumb">
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    <img src={article.image} alt={article.title} className="img-fluid"  />
                  </a>
                </div>
                <div className="post-title-box">
                  <h4 className="entry-title">
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  </h4>
                </div>
              </div>
              
            </div>
          ))}
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
                    href="contact-us"
                    className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                    <span className="bttn__arrow"> Read More </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const newsArticles = [
  {
    title: "From Bricks to Clicks: FinTech Driving Bank Branch Transformation",
    link: "https://mfsys.ca/from-bricks-to-clicks-fintech-driving-bank-branch-transformation/",
    image: "https://mfsys.ca/wp-content/uploads/2019/06/shutterstock_373543888-800x510-scalia-gallery-fullwidth.jpg"
  },
  {
    title: "Digital P2G Initiatives: 5 Best Practices for Financial Inclusion",
    link: "https://mfsys.ca/digital-p2g-initiatives-5-best-practices-for-financial-inclusion/",
    image: "https://mfsys.ca/wp-content/uploads/2019/07/p2ga-scalia-gallery-fullwidth.jpg"
  },
  {
    title: "Best Banking System & Software Solution",
    link: "https://mfsys.ca/best-banking-system-software-solution/",
    image: "https://mfsys.ca/wp-content/uploads/2019/07/free-minimalist-banking-icon-set-vector-scalia-gallery-fullwidth.jpg"
  },
  {
    title: "Best Microfinance Banking System & Software Solution",
    link: "https://mfsys.ca/best-microfinance-banking-system-software-solution/",
    image: "https://mfsys.ca/wp-content/uploads/2019/07/CMB-BANNER3-scalia-gallery-fullwidth.jpg"
  },
  {
    title: "What Does Responsible Online and Digital Credit Look Like?",
    link: "https://mfsys.ca/what-does-responsible-online-and-digital-credit-look-like/",
    image: "https://mfsys.ca/wp-content/uploads/2019/07/fintech-scalia-gallery-fullwidth.jpg"
  }
];

export default News;
