import Mobilemenu from "./Mobilemenu";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = ({ scrollToSection, sections, rtlurl, onMenuClick }) => {
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
                        <Link href="/" className="logo">
                          <img
                            src="/images/UZI-systems-Logo1.png"
                            alt="UZI Systems"
                            className="logo__img logo__dark"
                            style={{ width: "260px", height: "100px", marginTop: "-30px" }}
                          />
                          <img
                            src="/images/UZI-systems-Logo2.png"
                            alt="UZI Systems"
                            className="logo__img logo__light"
                            style={{ width: "260px", height: "100px", marginTop: "-30px" }}
                          />
                        </Link>
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
                <Link href="/" className="logo">
                  <img
                    src="/images/UZI-systems-Logo1.png"
                    alt="UZI Systems"
                    className="logo__img logo__dark"
                    style={{ width: "260px", height: "100px", marginTop: "-30px" }}
                  />
                  <img
                    src="/images/UZI-systems-Logo2.png"
                    alt="UZI Systems"
                    className="logo__img logo__light"
                    style={{ width: "260px", height: "100px", marginTop: "-30px" }}
                  />
                </Link>

                <ul className="list primary-menu__list">
                  <li>
                    <a href="/" className="primary-menu__link" >
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="primary-menu__link" onClick={() => onMenuClick("about", sections.aboutRef)}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="primary-menu__link" onClick={() => onMenuClick("service", sections.serviceRef)}>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="primary-menu__link" onClick={() => onMenuClick("products", sections.productRef)}>
                      Products
                    </a>
                  </li>

                  <li>
                    <a href="#" className="primary-menu__link" onClick={() => onMenuClick("news", sections.newsRef)}>
                      News
                    </a>
                  </li>
                  <li>
                    <a href="#" className="primary-menu__link" onClick={() => onMenuClick("contact", sections.contactRef)}>
                      Contact
                    </a>
                  </li>
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
              {/* Primary Menu End */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
