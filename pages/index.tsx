import Head from "next/head";
import { useEffect, useState, useRef } from "react";

import About from "@/components/About";
import Consult from "@/components/Consult";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/OurPosProducts";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import News from "@/components/News";
import CoreValue from "@/components/CoreValue";
import Technologies from "@/components/Technologies";

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const heroRef = useRef(null);
  const productRef = useRef(null);
  const serviceRef = useRef(null);
  const newsRef = useRef(null);
  const getStarted = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

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


  const handleMenuClick = (section, ref) => {
    if (activeSection !== section) {
      setActiveSection(section); // Set the active section first
  
      // Wait for the state to update before scrolling
      requestAnimationFrame(() => {
        ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
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

      <Navbar onMenuClick={handleMenuClick} scrollToSection={(ref) => ref.current?.scrollIntoView({ behavior: "smooth" })} sections={{
        heroRef, productRef, serviceRef, newsRef, getStarted, contactRef,aboutRef
      }} rtlurl />

      {/* alway showing on the main page */}
      <section ref={heroRef}><Hero /></section>
      <section className="d-none" ref={aboutRef}><About /></section>
      {activeSection === null && (
        <>
          <section ref={newsRef}><News /></section>
          <hr />
          <section ref={serviceRef}><Service /></section>
          <hr />
          <section ><CoreValue /></section>
          <hr />
          <section ref={productRef}><Products /></section>
          <hr />
          {/* <section ref={aboutRef}><About /></section>
          <hr /> */}
          <section ref={contactRef}><Technologies /></section>
          <hr />
        </>
      )}

      {activeSection === "news" &&
        <section ref={newsRef}><News /></section>
      }
      {activeSection === "service" &&
        <section ref={serviceRef}><Service /></section>
      }
      {activeSection === "products" &&
        <section ref={productRef}><Products /></section>
      }
      {activeSection === "technologies" &&
        <section ref={getStarted}><Technologies /></section>
      }
      {activeSection === "about" &&
        <section ref={aboutRef}><About /></section>
      }
      {activeSection === "contact" &&
        <section className="mt-3" ref={contactRef}><Technologies /></section>
       
      }
      <hr />
      <Footer />
    </>
  );
};

export default HomePage;




// import Head from "next/head";
// import { useEffect, useState, useRef } from "react";

// import About from "@/components/About";
// import Consult from "@/components/Consult";
// import Footer from "@/components/Footer";
// import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar";
// import Products from "@/components/OurPosProducts";
// import Service from "@/components/Service";
// import Team from "@/components/Team";
// import Testimonial from "@/components/Testimonial";
// import News from "@/components/News";
// import CoreValue from "@/components/CoreValue";

// const HomePage = () => {
//   const [scrolled, setScrolled] = useState(false);

//   const heroRef = useRef(null);
//   const productRef = useRef(null);
//   const serviceRef = useRef(null);
 
//   const teamRef = useRef(null);
//   const newsRef = useRef(null);
//   const testimonialRef = useRef(null);
//   const contactRef = useRef(null);

//   useEffect(() => {
//     document.documentElement.setAttribute("dir", "ltr");

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const backToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       <Head>
//         <title>Coded Exit Ltd.</title>
//       </Head>

//       <div onClick={backToTop} className={`back-to-top ${scrolled ? "d-block" : "d-none"}`}>
//         <span className="back-top">
//           <span className="material-symbols-outlined mat-icon fw-300">keyboard_double_arrow_up</span>
//         </span>
//       </div>

//       <Navbar scrollToSection={(ref) => ref.current?.scrollIntoView({ behavior: "smooth" })} sections={{
//         heroRef, productRef, serviceRef, teamRef, newsRef, testimonialRef, contactRef
//       }} rtlurl/>

//       <section ref={heroRef}><Hero /></section>
//       <section ref={productRef}><Products /></section>
//       <hr />
//       <section><CoreValue /></section>
//       <hr />
//       <section ref={serviceRef}><Service /></section>
//       <section ref={teamRef}><Team /></section>
//       <section ref={newsRef}><News /></section>
//       <hr />
//       <section ref={testimonialRef}><Testimonial /></section>
//       <Footer />
//     </>
//   );
// };

// export default HomePage;
