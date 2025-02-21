import React, { useEffect, useState } from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false); 
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  const backtoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Head>
        <title>Itechex - IT Solution & Services HTML Template</title>
        <meta name="description" content=" IT Solution & Services HTML Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        onClick={backtoTop}
        className={`back-to-top ${scrolled ? "d-block" : "d-none"}`}>
        <span className="back-top">
          <span className="material-symbols-outlined mat-icon fw-300 d-grid">
            {" "}
            keyboard_double_arrow_up{" "}
          </span>
        </span>
      </div>      
      <main>{children}</main>
     
    </>
  );
};

export default Layout;
