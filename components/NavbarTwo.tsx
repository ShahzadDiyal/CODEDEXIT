import Mobilemenu from "./Mobilemenu";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavbarTwo = ({ rtlurl }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const inactiveTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  const openMobileMenu = () => {
    document.body.classList.toggle("mobile-menu--toggle");
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Mobilemenu />

      <header className="header header--2 sticky-navbar">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Mobile Header */}
              <div className="mobile-header">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                    <div className="mobile-header__content">
                        <a href="#" className="logo">
                          <img
                            src="/images/UZI-systems-Logo1.png"
                            alt="Coded Exit Ltd."
                            className="logo__img logo__dark"
                            style={{ width: "260px", height: "100px", marginTop: "-30px" }}
                          />
                          <img
                            src="/images/UZI-systems-Logo2.png"
                            alt="Coded Exit Ltd."
                            className="logo__img logo__light"
                            style={{ width: "260px", height: "100px", marginTop: "-30px" }}
                          />
                        </a>
                        <button
                          onClick={openMobileMenu}
                          className="bttn bttn--sqr bttn--sqr-sm bttn--light bttn--rounded mobile-menu__toggler"
                        >
                          <span className="material-symbols-rounded mat-icon fw-300">
                            menu
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Header End */}

              {/* Primary Menu */}
              <nav className="primary-menu align-items-center">
                <Link href="#" className="logo">
                  <img
                    src="/images/UZI-systems-Logo1.png"
                    alt="Coded Exit Ltd."
                    className="logo__img logo__dark"
                    style={{ width: "260px", height: "100px", marginTop: "-30px" }}
                  />
                  <img
                    src="/images/UZI-systems-Logo2.png"
                    alt="Coded Exit Ltd."
                    className="logo__img logo__light"
                    style={{ width: "260px", height: "100px", marginTop: "-30px" }}
                  />
                </Link>

                <ul className="list primary-menu__list">
                  <li>
                    <Link
                      href="/"
                      className="primary-menu__link"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ourProducts"
                      className="primary-menu__link"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/"
                      className="primary-menu__link"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us/"
                      className="primary-menu__link"
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/blog/"
                      className="primary-menu__link"
                    >
                      Blog
                    </Link>
                  </li>


                  <Link
                    href="/contact-us/"
                    className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                    Contact Us
                  </Link>
                  <li>
                    <button className="dark-mode-toggle" onClick={() => setTheme(inactiveTheme)}>
                      {theme !== "light" ? (
                        <span className="dark-mode-toggle__light">
                          <span className="material-symbols-rounded mat-icon">light_mode</span>
                        </span>
                      ) : (
                        <span className="dark-mode-toggle__dark">
                          <span className="material-symbols-rounded mat-icon">dark_mode</span>
                        </span>
                      )}
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarTwo;
