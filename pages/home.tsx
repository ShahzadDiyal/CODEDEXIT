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
import Features from "@/components/Features";
import OurPosFeatures from "@/components/OurPosFeatures";

const HomePage = () => {
  const productRef = useRef(null);
  const serviceRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const newsRef = useRef(null);
  const careerRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);

  return (
    <>
      <Head>
        <title>Coded Exit</title>
      </Head>

      {/* Sticky Navbar */}
      <Navbar 
        scrollToSection={(ref) => ref.current?.scrollIntoView({ behavior: "smooth" })} 
        sections={{ productRef, serviceRef, aboutRef, teamRef, newsRef, careerRef, testimonialRef }} 
        rtlurl={undefined} 
      />

      <Hero />
      <section ref={productRef}><OurPosFeatures /></section>
      <section ref={serviceRef}><Service /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={teamRef}><Team /></section>
      <section ref={newsRef}><News /></section>
      <section ref={careerRef}><Career /></section>
      <section ref={testimonialRef}><Testimonial /></section>
      <Footer />
    </>
  );
};

export default HomePage;
