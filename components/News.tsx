import Link from "next/link";
import Image from "next/image";

const News = () => {
  return (
    <div className="section">
      <div className="container mt-5">
        <h2 className="text-center">Latest News</h2>
        <p className="text-center mb-4">
          Digital Transformation for the Microfinance and Banking Sector is becoming inevitable to effectively meet customer needs.
        </p>
        <div className="row">
          {newsArticles.map((article, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="news-card">
                <a target="_blank" rel="noopener noreferrer" className="news-card__link">
                  <div className="news-card__image">
                    <Image src={article.image} alt={article.title} layout="fill" objectFit="cover" />
                    <div className="news-card__overlay">
                      <h4 className="news-card__title text-white">{" "} {article.title}{" "} </h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="section__gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <div className="group group-row flex-wrap justify-content-center align-items-center">
                  <Link href="contact-us" className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md">
                    <span className="bttn__arrow">Contact Us</span>
                  </Link>
                  <Link href="contact-us" className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md">
                    <span className="bttn__arrow">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .news-card {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          margin-bottom: 20px;
        }

        .news-card__image {
          position: relative;
          width: 100%;
          height: 250px;
          border-radius: 10px;
          overflow: hidden;
        }

        .news-card__overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.6);
          color: white;
          padding: 15px;
          text-align: center;
        }

        .news-card__title {
          margin: 0;
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

const newsArticles = [
  {
    title: "From Bricks to Clicks: FinTech Driving Bank Branch Transformation",
    link: "/home",
    image: "/images/blog-post-1.png"
  },
  {
    title: "Digital P2G Initiatives: 5 Best Practices for Financial Inclusion",
    link: "/",
    image: "/images/blog-post-2.png"
  },
  {
    title: "Best Banking System & Software Solution",
    link: "/",
    image: "/images/blog-post-3.png"
  },
  {
    title: "Best Microfinance Banking System & Software Solution",
    link: "/",
    image: "/images/blog-post-4.png"
  },
  {
    title: "What Does Responsible Online and Digital Credit Look Like?",
    link: "/",
    image: "/images/blog-post-5.png"
  }
];

export default News;
