import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from 'react';

const terms_condition = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar rtlurl="/rtl/terms-condition" />
      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> Terms & Conditions </h3>
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
                    Terms & Conditions{" "}
                  </Link>
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
      {/* <!-- Terms & Condition --> */}
      <div className="section">
        <div className="container">
          <div className="row g-6 justify-content-md-between">
            <div className="col-md-5 col-lg-4 col-xl-3">
              <aside className="terms-sidebar position-sticky top-60">
                <nav className="terms-sidebar__nav">
                  <ul className="list list-group" id="list-example">
                    <li>
                      <Link
                        href="#terms"
                        className="terms-sidebar__link t-link px-3 py-2 rounded-pill text-center d-flex justify-content-center active ">
                        {" "}
                        Terms & Condition{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#privacy"
                        className="terms-sidebar__link t-link px-3 py-2 rounded-pill text-center d-flex justify-content-center">
                        {" "}
                        Privacy Policy{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#policy"
                        className="terms-sidebar__link t-link px-3 py-2 rounded-pill text-center d-flex justify-content-center">
                        {" "}
                        User Policy{" "}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </aside>
            </div>
            <div className="col-md-7 col-xl-8" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex={0}>
              <h3 className="mb-5" id="terms"> Terms and Conditions </h3>
              <p className="mb-10">
                {" "}
                Welcome to Uzisystem! By accessing or using our services, you agree to comply with these Terms and Conditions. Please read them carefully.

                {" "}
              </p>
              <h4 className="mb-5"> Use Terms for Uzisystem services </h4>
              <p className="mb-10">
                {" "}
                Uzisystem provides innovative technology solutions. By using our website and services, you agree to adhere to these
                terms. We reserve the right to update these terms at any time.{" "}
              </p>

              <h4 className="mb-5"> Acceptance of Terms </h4>
              <p className="mb-10">
                {" "}
                By using Uzisystem’s services, you agree to comply with these terms. We reserve the right to update these terms at any time. Continued use constitutes acceptance of changes.
                If you do not agree, please refrain from using our services.{" "}
              </p>

              <h4 className="mb-5">Service Usage and Restrictions </h4>
              <p className="mb-10">
                {" "}
                Uzisystem provides IT solutions, field service management, AI, and cloud services. Users must not misuse our services for illegal activities, unauthorized access, or system disruptions.
                Violations may lead to suspension or termination of services.{" "}
              </p>

              <h3 className="mb-5" id="privacy"> Privacy Policy </h3>
              <p className="mb-5">
                Uzisystem is committed to protecting your privacy. We collect and use personal
                information only to enhance our services, improve security, and ensure compliance
                with industry standards. Your data is stored securely and never shared with
                unauthorized third parties. By using our services, you agree to our data handling
                practices as outlined in our Privacy Policy. You can contact us anytime to learn
                more about how we manage your information.
              </p>

              <h4 className="mb-5">Data Collection and Usage</h4>
              <p className="mb-10">
                {" "}
                We collect essential user data to improve our services, ensuring compliance with security protocols.
                Your data is never shared with unauthorized third parties.{" "}
              </p>

              <h4 className="mb-5">Security and Confidentiality</h4>
              <p className="mb-10">
                {" "}
                Uzisystem implements strict security measures to protect personal and business data. Users are responsible for maintaining their account
                confidentiality and must report any security breaches immediately.{" "}
              </p>

              <h4 className="mb-5"> Cookies and Tracking </h4>
              <p className="mb-10">
                Uzisystem uses cookies and tracking technologies to enhance user experience,
                analyze website traffic, and improve service efficiency. These cookies help us
                understand user preferences, ensuring a personalized and secure browsing experience.
                By using our services, you consent to our use of cookies in accordance with our
                Privacy Policy. You can manage cookie settings in your browser at any time.
              </p>
              <h3 className="mb-5" id="policy"> User Policy </h3>
              <p className="mb-10">
                Uzisystem is dedicated to providing secure and efficient technology solutions.
                Users must ensure ethical and lawful use of our services, including field service
                management, IT solutions, AI, and cloud services. Misuse of our platform, including
                unauthorized access, data breaches, or fraudulent activities, is strictly prohibited.
                Users are responsible for safeguarding their account credentials and reporting
                security issues immediately. Failure to comply with our policies may result in
                account suspension or termination. By using Uzisystem’s services, you agree to
                follow our guidelines and maintain the integrity of our platform.
              </p>

              <h4 className="mb-5"> User Responsibilities </h4>
              <p className="mb-10">
                {" "}
                Users must provide accurate information, comply with all applicable laws, and use Uzisystem’s services ethically. Misuse of services,
                including fraudulent activities, will result in immediate account suspension.{" "}
              </p>
              <h4 className="mb-5"> Account Management </h4>
              <p className="mb-10">
                {" "}
                Users are responsible for safeguarding their account credentials. Unauthorized access or data breaches caused by negligence may lead to penalties.
                Uzisystem reserves the right to suspend accounts violating our policies.{" "}
              </p>
            </div>

          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default terms_condition;
