import Head from "next/head";
import { useEffect, useState } from "react";

// Importing Components
import About from "@/components/About";
import AboutCompany from "@/components/AboutCompany";
import Brand from "@/components/Brand";
import Consult from "@/components/Consult";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Service from "@/components/Service";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial"; // ✅ Fixed typo in component name
import Workprocess from "@/components/Workprocess";
import News from "@/components/News";
import Career from "@/components/Career";

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* SEO Head Section */}
      <Head>
        <title>Itechex - IT Solution & Services</title>
        <meta name="description" content="IT Solution & Services for your business" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Back to Top Button */}
      <div onClick={backToTop} className={`back-to-top ${scrolled ? "d-block" : "d-none"}`}>
        <span className="back-top">
          <span className="material-symbols-outlined mat-icon fw-300 d-grid">
            keyboard_double_arrow_up
          </span>
        </span>
      </div>

      {/* Page Sections */}
      <Navbar rtlurl="/rtl/service" />
      <Hero />
      {/* <Brand /> */}
      <Products />
      <Service />
      <About />
      <Team />
      <News />
      <Career />
      <Consult />
      {/* <Features /> */}
      {/* <Workprocess /> */}
      <Testimonial />
      <Footer />
    </>
  );
};

export default HomePage;

// Layout function for Next.js
HomePage.getLayout = function getLayout(page) {
  return <>{page}</>;
};
