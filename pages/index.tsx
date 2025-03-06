import Head from "next/head";
import { useEffect, useState, useRef } from "react";

import About from "@/components/About";
import Consult from "@/components/Consult";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/OurPosFeatures";
import Service from "@/components/Service";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import News from "@/components/News";
import Career from "@/components/Career";

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  const heroRef = useRef(null);
  const productRef = useRef(null);
  const serviceRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const newsRef = useRef(null);
  const careerRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);

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
      <Head>
        <title>Coded Exit Ltd.</title>
      </Head>

      <div onClick={backToTop} className={`back-to-top ${scrolled ? "d-block" : "d-none"}`}>
        <span className="back-top">
          <span className="material-symbols-outlined mat-icon fw-300">keyboard_double_arrow_up</span>
        </span>
      </div>

      <Navbar scrollToSection={(ref) => ref.current?.scrollIntoView({ behavior: "smooth" })} sections={{
        heroRef, productRef, serviceRef, aboutRef, teamRef, newsRef, careerRef, testimonialRef, contactRef
      }} rtlurl/>

      <section ref={heroRef}><Hero /></section>
      <section ref={productRef}><Products /></section>
      <hr />
      <section ref={serviceRef}><Service /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={teamRef}><Team /></section>
      <section ref={newsRef}><News /></section>
      <hr />
      <section ref={careerRef}><Career /></section>
      <hr />
      <section ref={testimonialRef}><Testimonial /></section>
      <Footer />
    </>
  );
};

export default HomePage;
