import Navbar from "@/components/NavbarTwo";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from 'react';
const allBlogs = [
  {
    id: 1,
    title: 'Transforming the Future with Intelligent Innovations',
    tag: 'Artificial Intelligence',
    date: 'Feb 07, 2025',
    blog: 'Artificial Intelligence revolutionizes industries, enhances automation, improves decision-making, boosts efficiency, and powers the future of smart technology.',
    img: '/images/blog-post-11.png',
    path : 'ai-post'
  },
  {
    id: 2,
    title: 'Revolutionizing Businesses with Smart Cloud Solutions',
    tag: 'Cloud Solutions',
    date: 'Feb 07, 2025',
    blog: 'Cloud solutions enhance scalability, security, and efficiency, empowering businesses with flexible, cost-effective, and reliable digital transformation strategies.',
    img: '/images/blog-post-10.png',
    path : 'cloud-solutions-post'
  },
  {
    id: 3,
    title: 'Revolutionizing Business with Smart Field Service Management',
    tag: 'Fields services',
    date: 'Feb 07, 2025',
    blog: 'Field Service Management enhances scheduling, tracking, and automation, boosting efficiency, reducing costs, and optimizing workforce operations seamlessly.',
    img: '/images/blog-post-9.png',
    path : 'field-service-management-post'
  },
  {
    id: 4,
    title: 'Strategies for Smart Solutions',
    tag: 'Smart Solutions',
    date: 'Feb 07, 2025',
    blog: 'Enhance critical thinking, tackle challenges effectively, and develop innovative solutions with proven problem-solving techniques for success in any situation.',
    img: '/images/blog-post-12.png',
    path : 'ai-and-chatbot'
  },
  {
    id: 5,
    title: 'Tailored Custom Solutions for Your Unique Business Needs',
    tag: 'Custom Solutions',
    date: 'Feb 07, 2025',
    blog: 'Custom solutions empower businesses with personalized, efficient, and scalable strategies, ensuring seamless operations, enhanced productivity, and long-term success in a competitive landscape.',
    img: '/images/blog-post-13.png',
    path : 'custom-solutions-post'
  },
  {
    id: 6,
    title: 'How Customer Satisfaction Drives Business Growth and Loyalty?',
    tag: 'Satisfaction',
    date: 'Feb 07, 2025',
    blog: 'Ensuring exceptional customer satisfaction builds trust, enhances brand loyalty, boosts retention, increases referrals, and drives long-term business success effortlessly.',
    img: '/images/blog-post-14.png',
    path : 'customer-satisfaction-post'
  },
]

// blog post for ai and chatbots
const AiChatbots = [
  {
    id: 1,
    title: 'Transforming the Future with Intelligent Innovations',
    tag: 'Artificial Intelligence',
    date: 'Feb 07, 2025',
    blog: 'Artificial Intelligence revolutionizes industries, enhances automation, improves decision-making, boosts efficiency, and powers the future of smart technology.',
    img: '/images/blog-post-11.png'
  },
  {
    id: 2,
    title: 'Strategies for Smart Solutions',
    tag: 'Smart Solutions',
    date: 'Feb 07, 2025',
    blog: 'Enhance critical thinking, tackle challenges effectively, and develop innovative solutions with proven problem-solving techniques for success in any situation.',
    img: '/images/blog-post-12.png'
  },
  {
    id: 3,
    title: 'How Customer Satisfaction Drives Business Growth and Loyalty?',
    tag: 'Satisfaction',
    date: 'Feb 07, 2025',
    blog: 'Ensuring exceptional customer satisfaction builds trust, enhances brand loyalty, boosts retention, increases referrals, and drives long-term business success effortlessly.',
    img: '/images/blog-post-14.png'
  },
]

// blog posts for field service management
const FieldSericeBlogs = [
  {
    id: 1,
    title: 'Revolutionizing Business with Smart Field Service Management',
    tag: 'Fields services',
    date: 'Feb 07, 2025',
    blog: 'Field Service Management enhances scheduling, tracking, and automation, boosting efficiency, reducing costs, and optimizing workforce operations seamlessly.',
    img: '/images/blog-post-9.png'
  },
  {
    id: 2,
    title: 'Strategies for Smart Solutions',
    tag: 'Smart Solutions',
    date: 'Feb 07, 2025',
    blog: 'Enhance critical thinking, tackle challenges effectively, and develop innovative solutions with proven problem-solving techniques for success in any situation.',
    img: '/images/blog-post-12.png'
  },
  {
    id: 3,
    title: 'How Customer Satisfaction Drives Business Growth and Loyalty?',
    tag: 'Satisfaction',
    date: 'Feb 07, 2025',
    blog: 'Ensuring exceptional customer satisfaction builds trust, enhances brand loyalty, boosts retention, increases referrals, and drives long-term business success effortlessly.',
    img: '/images/blog-post-14.png'
  },
]

const CloudPost = [
  {
    id: 2,
    title: 'Revolutionizing Businesses with Smart Cloud Solutions',
    tag: 'Cloud Solutions',
    date: 'Feb 07, 2025',
    blog: 'Cloud solutions enhance scalability, security, and efficiency, empowering businesses with flexible, cost-effective, and reliable digital transformation strategies.',
    img: '/images/blog-post-10.png'
  },
  {
    id: 4,
    title: 'Strategies for Smart Solutions',
    tag: 'Smart Solutions',
    date: 'Feb 07, 2025',
    blog: 'Enhance critical thinking, tackle challenges effectively, and develop innovative solutions with proven problem-solving techniques for success in any situation.',
    img: '/images/blog-post-12.png'
  },
  {
    id: 6,
    title: 'How Customer Satisfaction Drives Business Growth and Loyalty?',
    tag: 'Satisfaction',
    date: 'Feb 07, 2025',
    blog: 'Ensuring exceptional customer satisfaction builds trust, enhances brand loyalty, boosts retention, increases referrals, and drives long-term business success effortlessly.',
    img: '/images/blog-post-14.png'
  },
]

// ALL BLOG POSTS
const AllBlogPosts = () => {
  return (
    <>
      {
        allBlogs.map(({ id, title, blog, date, img, tag,path }) => (
          <div key={id} className="col-md-6 col-lg-4">
            <div className="blog-post-1">
              <Link
                   href={path}
                className="blog-post-1__link">
                <img
                  src={img}
                  alt="image"
                  className="blog-post-1__img"
                />
              </Link>
              <div className="blog-post-1__body">
                <ul className="list list-row list--divider">
                  <li>
                    <Link 
                      href={path}
                      className="t-link d-inline-block clr-base :clr-base fw-md">{tag}</Link>
                  </li>
                  <li>
                    <div className="group group-xs group-row align-items-center">
                      <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base">
                        {" "}
                        alarm{" "}
                      </span>
                      <span className="d-inline-block">{date}</span>
                    </div>
                  </li>
                </ul>
                <h5 className="mt-5 mb-5">
                  <Link
                      href={path}
                    className="t-link clr-heading :clr-base d-block">{title}</Link>
                </h5>
                <p className="mb-5">{blog} </p>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

const AiAndChatbotPost = () => {
  return (
    <>
      {
        AiChatbots.map(({ id, title, blog, date, img, tag }) => (
          <div key={id} className="col-md-6 col-lg-4">
            <div className="blog-post-1">
              <Link
                href="blog-details-1"
                className="blog-post-1__link">
                <img
                  src={img}
                  alt="image"
                  className="blog-post-1__img"
                />
              </Link>
              <div className="blog-post-1__body">
                <ul className="list list-row list--divider">
                  <li>
                    <Link
                      href="blog-details-1"
                      className="t-link d-inline-block clr-base :clr-base fw-md">{tag}</Link>
                  </li>
                  <li>
                    <div className="group group-xs group-row align-items-center">
                      <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base">
                        {" "}
                        alarm{" "}
                      </span>
                      <span className="d-inline-block">{date}</span>
                    </div>
                  </li>
                </ul>
                <h5 className="mt-5 mb-5">
                  <Link
                    href="blog-details-1"
                    className="t-link clr-heading :clr-base d-block">{title}</Link>
                </h5>
                <p className="mb-5">{blog} </p>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

const FieldServiceManagementPost = () => {
  return (
    <>
      {
        FieldSericeBlogs.map(({ id, title, blog, date, img, tag }) => (
          <div key={id} className="col-md-6 col-lg-4">
            <div className="blog-post-1">
              <Link
                href="blog-details-1"
                className="blog-post-1__link">
                <img
                  src={img}
                  alt="image"
                  className="blog-post-1__img"
                />
              </Link>
              <div className="blog-post-1__body">
                <ul className="list list-row list--divider">
                  <li>
                    <Link
                      href="blog-details-1"
                      className="t-link d-inline-block clr-base :clr-base fw-md">{tag}</Link>
                  </li>
                  <li>
                    <div className="group group-xs group-row align-items-center">
                      <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base">
                        {" "}
                        alarm{" "}
                      </span>
                      <span className="d-inline-block">{date}</span>
                    </div>
                  </li>
                </ul>
                <h5 className="mt-5 mb-5">
                  <Link
                    href="blog-details-1"
                    className="t-link clr-heading :clr-base d-block">{title}</Link>
                </h5>
                <p className="mb-5">{blog} </p>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}


const CloudSolutionPost = () => {
  return (
    <>
      {
        CloudPost.map(({ id, title, blog, date, img, tag }) => (
          <div key={id} className="col-md-6 col-lg-4">
            <div className="blog-post-1">
              <Link
                href="blog-details-1"
                className="blog-post-1__link">
                <img
                  src={img}
                  alt="image"
                  className="blog-post-1__img"
                />
              </Link>
              <div className="blog-post-1__body">
                <ul className="list list-row list--divider">
                  <li>
                    <Link
                      href="blog-details-1"
                      className="t-link d-inline-block clr-base :clr-base fw-md">{tag}</Link>
                  </li>
                  <li>
                    <div className="group group-xs group-row align-items-center">
                      <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base">
                        {" "}
                        alarm{" "}
                      </span>
                      <span className="d-inline-block">{date}</span>
                    </div>
                  </li>
                </ul>
                <h5 className="mt-5 mb-5">
                  <Link
                    href="blog-details-1"
                    className="t-link clr-heading :clr-base d-block">{title}</Link>
                </h5>
                <p className="mb-5">{blog} </p>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

const blog = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      {/* Navbar */}
      <Navbar rtlurl="/rtl/blog-page-1" />
      {/* Banner Section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> Blog </h3>
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
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    blog{" "}
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
      {/* <!-- Blog Section --> */}
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <div className="text-center">
                  <span className="d-inline-block h5 lh-1 fw-semibold clr-base">
                    {" "}
                    Browse our articles & resources{" "}
                  </span>
                  <h2 className="mt-3 mb-3">
                    {" "}
                    Take a look at our latest articles and resources{" "}
                  </h2>
                  <p className="mx-auto text-center">
                    {" "}
                    Have a look at the most recent articles and resources that
                    we have.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-6">
            <div className="col-lg-6">
              <div className="blog-post-1 blog-post-1--xl">
                <Link href="blog-details-1" className="blog-post-1__link">
                  <img
                    src="/images/blog-post-4.png"
                    alt="image"
                    className="blog-post-1__img"
                  />
                </Link>
                <div className="blog-post-1__body">
                  <ul className="list list-row list--divider">
                    <li>
                      <Link
                        href="blog-details-1"
                        className="t-link d-inline-block clr-base :clr-base fw-md">
                        {" "}
                        AI & Chatbot{" "}
                      </Link>
                    </li>
                    <li>
                      <div className="group group-xs group-row align-items-center">
                        <span className="material-symbols-rounded mat-icon solid flex-shrink-0 d-none d-sm-block">
                          {" "}
                          alarm{" "}
                        </span>
                        <span className="d-inline-block"> Feb 07, 2025 </span>
                      </div>
                    </li>
                  </ul>
                  <h4 className="mt-5 mb-5">
                    <Link
                      href="/ai-and-chatbot"
                      className="t-link d-block clr-heading :clr-base">
                      {" "}
                      The Most Groundbreaking Developments in AI and Chatbots
                       That Have Emerged So Far This Year{" "}
                    </Link>
                  </h4>
                  <p>
                    {" "}
                    AI and chatbots have revolutionized automation, enhancing customer engagement, streamlining processes, improving efficiency,
                     and delivering intelligent, real-time interactions effortlessly.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="list list-md">
                <li>
                  <div className="blog-post-2">
                    <Link href="ai-post" className="blog-post-2__link">
                      <img
                        src="/images/blog-post-5.png"
                        alt="image"
                        className="blog-post-2__img"
                      />
                    </Link>
                    <div className="blog-post-2__content">
                      <ul className="list list-row list--divider">
                        <li>
                          <Link
                            href="ai-post"
                            className="t-link d-inline-block clr-base :clr-base fw-md">
                            {" "}
                            Artifical Intelligence{" "}
                          </Link>
                        </li>
                        <li>
                          <div className="group group-xs group-row align-items-center">
                            <span className="material-symbols-rounded mat-icon solid flex-shrink-0">
                              {" "}
                              alarm{" "}
                            </span>
                            <span className="d-inline-block">
                              {" "}
                              Feb 07, 2025{" "}
                            </span>
                          </div>
                        </li>
                      </ul>
                      <h5 className="mt-3">
                        <Link
                          href="ai-post"
                          className="t-link d-block clr-heading :clr-base">
                          {" "}
                          AI Powers Innovation, Efficiency, and Intelligent Decision-Making.{" "}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-post-2">
                    <Link href="ai-and-chatbot" className="blog-post-2__link">
                      <img
                        src="/images/blog-post-6.png"
                        alt="image"
                        className="blog-post-2__img"
                      />
                    </Link>
                    <div className="blog-post-2__content">
                      <ul className="list list-row list--divider">
                        <li>
                          <Link
                            href="ai-and-chatbot"
                            className="t-link d-inline-block clr-base :clr-base fw-md">
                            {" "}
                            Chatbots{" "}
                          </Link>
                        </li>
                        <li>
                          <div className="group group-xs group-row align-items-center">
                            <span className="material-symbols-rounded mat-icon solid flex-shrink-0">
                              {" "}
                              alarm{" "}
                            </span>
                            <span className="d-inline-block">
                              {" "}
                              Feb 07, 2025{" "}
                            </span>
                          </div>
                        </li>
                      </ul>
                      <h5 className="mt-3">
                        <Link
                          href="ai-and-chatbot"
                          className="t-link d-block clr-heading :clr-base">
                          {" "}
                          Smart Chatbots Automate Interactions, Boost Engagement, and Improve Efficiency.{" "}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-post-2">
                    <Link href="field-service-management-post" className="blog-post-2__link">
                      <img
                        src="/images/blog-post-7.png"
                        alt="image"
                        className="blog-post-2__img"
                      />
                    </Link>
                    <div className="blog-post-2__content">
                      <ul className="list list-row list--divider">
                        <li>
                          <Link
                            href="field-service-management-post"
                            className="t-link d-inline-block clr-base :clr-base fw-md">
                            {" "}
                            Field Service Management{" "}
                          </Link>
                        </li>
                        <li>
                          <div className="group group-xs group-row align-items-center">
                            <span className="material-symbols-rounded mat-icon solid flex-shrink-0">
                              {" "}
                              alarm{" "}
                            </span>
                            <span className="d-inline-block">
                              {" "}
                              Feb 07, 2025{" "}
                            </span>
                          </div>
                        </li>
                      </ul>
                      <h5 className="mt-3">
                        <Link
                          href="field-service-management-post"
                          className="t-link d-block clr-heading :clr-base">
                          {" "}
                          Field Service Management Enhances Efficiency, Scheduling, and Workforce Productivity.{" "}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-post-2">
                    <Link href="cloud-solutions-post" className="blog-post-2__link">
                      <img
                        src="/images/blog-post-8.png"
                        alt="image"
                        className="blog-post-2__img"
                      />
                    </Link>
                    <div className="blog-post-2__content">
                      <ul className="list list-row list--divider">
                        <li>
                          <Link
                            href="cloud-solutions-post"
                            className="t-link d-inline-block clr-base :clr-base fw-md">
                            {" "}
                            Cloud Solutions{" "}
                          </Link>
                        </li>
                        <li>
                          <div className="group group-xs group-row align-items-center">
                            <span className="material-symbols-rounded mat-icon solid flex-shrink-0">
                              {" "}
                              alarm{" "}
                            </span>
                            <span className="d-inline-block">
                              {" "}
                              Feb 07, 2025{" "}
                            </span>
                          </div>
                        </li>
                      </ul>
                      <h5 className="mt-3">
                        <Link
                          href="cloud-solutions-post"
                          className="t-link d-block clr-heading :clr-base">
                          {" "}
                          Cloud Solutions Enhance Data Security, Accessibility, and Performance.{" "}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Help Category --> */}
      <div className="section bg-neutral-100">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="group group-row flex-wrap gap-5 justify-content-between align-items-center">
                  <h2 className="flex-grow-1"> Blog Categories </h2>
                  <Link
                    href="blog"
                    className="bttn bttn--base-outline bttn-md bttn-pill gap-2 fw-md flex-shrink-0 align-items-center">
                    {" "}
                    All Articles{" "}
                    <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-base d-flex align-items-center">
                      {" "}
                      arrow_forward{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-6">
            <div className="col-md-6 col-lg-4">
              <div className="help-card text-center">
                <img
                  src="/images/icon-75.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5"> Field Service Management </h5>
                <p>
                  {" "}
                  Field Service Management optimizes scheduling, dispatching, 
                  tracking, and workforce operations for efficient service delivery.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="help-card text-center">
                <img
                  src="/images/icon-76.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5">AI & Chatbot</h5>
                <p>
                  {" "}
                  AI & Chatbots enhance automation, streamline customer interactions,
                   improve efficiency, provide instant support, and optimize business operations.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="help-card text-center">
                <img
                  src="/images/icon-77.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5"> Cloud Solutions</h5>
                <p>
                  {" "}
                  Cloud solutions enable secure data storage, scalability,
                  remote access, seamless collaboration, and enhanced business efficiency.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Latest Post --> */}
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container-xl">
            <div className="row g-4 align-items-lg-end">
              <div className="col-lg-5">
                <h2> Latest Posts </h2>
              </div>
              <div className="col-lg-7">
                <ul className="list list-row flex-wrap justify-content-lg-end list--divider list-group">
                  <li>
                    <Link
                      className="tab-button active"
                      href="#all-post"
                      data-bs-toggle="list">
                      {" "}
                      All{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tab-button"
                      href="#aiandchatbot"
                      data-bs-toggle="list">
                      {" "}
                      AI & Chatbots{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tab-button"
                      href="#fieldServiceManagement"
                      data-bs-toggle="list">
                      {" "}
                      Field Service Management{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tab-button"
                      href="#cloudSolutions"
                      data-bs-toggle="list">
                      {" "}
                      Cloud Solutions{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="all-post">
                  <div className="row g-6">
                    <AllBlogPosts />
                  </div>
                </div>
                <div className="tab-pane fade" id="aiandchatbot">
                  <div className="row g-6">
                    <AiAndChatbotPost />
                  </div>
                </div>
                <div className="tab-pane fade" id="fieldServiceManagement">
                  <div className="row g-6">
                    <FieldServiceManagementPost />
                  </div>
                </div>
                <div className="tab-pane fade" id="cloudSolutions">
                  <div className="row g-6">
                    <CloudSolutionPost />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CTA  --> */}
      {/* <div className="section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-banner bg-base rounded-5">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="section__gap-bottom pb-md-0">
                      <h3 className="clr-light mb-6">
                        {" "}
                        Subscribe to our weekly email newsletter{" "}
                      </h3>
                      <p className="clr-light mb-6">
                        {" "}
                        Need more information? Subscribe to Newsletter & Get
                        Update and News{" "}
                      </p>
                      <div className="newsletter-2 newsletter-2--light max-text-50">
                        <input
                          type="text"
                          className="newsletter-2__input"
                          placeholder="Enter your email"
                        />
                        <button className="bttn bttn--light bttn-md fw-md flex-shrink-0 rounded-1 newsletter-2__btn">
                          {" "}
                          subscribe{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-center">
                      <img
                        src="/images/cta-img-2.png"
                        alt="image"
                        className="img-fluid mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Footer */}
      <Footer />
    </>
  );
};

export default blog;
