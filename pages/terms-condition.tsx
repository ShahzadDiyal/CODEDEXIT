import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";

const terms_condition = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");

  // Detect initial hash on page load
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveLink(window.location.hash || "#terms");
    }
  }, []);

  // Update active link when clicking a menu item
  const handleSetActive = (id) => {
    if (activeLink !== id) {
      setActiveLink(id);
      router.replace(`/terms-condition${id}`, undefined, { shallow: true });
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar rtlurl="/rtl/terms-condition" scrollToSection={undefined} sections={undefined} />
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
                    {[
                      { id: "#terms", text: "Terms & Condition" },
                      { id: "#privacy", text: "Privacy Policy" },
                      { id: "#policy", text: "User Policy" },
                    ].map((item) => (
                      <li key={item.id}>
                        <Link
                          href={`/terms-condition${item.id}`}
                          className={`terms-sidebar__link t-link px-3 py-2 rounded-pill text-center d-flex justify-content-center ${activeLink === item.id ? "active" : ""
                            }`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleSetActive(item.id);
                          }}
                        >
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <style jsx>{`
        .terms-sidebar__link {
          color: black;
          transition: 0.3s;
        }
        .terms-sidebar__link.active {
          background-color: green;
          color: white;
        }
      `}</style>
                </nav>
              </aside>
            </div>
            <div className="col-md-7 col-xl-8" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex={0}>
              <h3 className="mb-5" id="terms"> Terms and Conditions </h3>
              <p className="mb-10">
                {" "}
                Welcome to CODEDEXIT Ltd! By accessing or using our services, you agree to comply with these Terms and Conditions. Please read them carefully.

                {" "}
              </p>
              <h4 className="mb-5">Service Usage and Compliance with Legal and Ethical Standards</h4>
              <p className="mb-10">
                {" "}
                Users must comply with all applicable local, national, and international laws when using CODEDEXIT Ltd services. Any form of unauthorized access, unethical use, data breaches, or illegal activities
                is strictly prohibited. Violation of these terms may result in account suspension or legal action.{" "}
              </p>

              <h4 className="mb-5"> Account Responsibility, Security, and Protection of Credentials</h4>
              <p className="mb-10">
                {" "}
                Users are solely responsible for maintaining the confidentiality of their account credentials, including usernames, passwords, and any authentication details. Any unauthorized access, suspicious activity, or security breach must be reported immediately to
                prevent misuse of services. CODEDEXIT Ltd is not liable for damages resulting from compromised accounts.{" "}
              </p>

              <h4 className="mb-5"> Liability Limitation, No Warranty, and Service Availability
              </h4>
              <p className="mb-10">
                {" "}
                CODEDEXIT Ltd provides all its SaaS products, IT solutions, and custom software services on an “as is” basis, without any express or implied warranties. We do not guarantee uninterrupted service, nor do we hold liability for indirect,
                incidental, or consequential damages arising from system downtimes or technical failures.{" "}
              </p>

              <h3 className="mb-5" id="privacy"> Privacy Policy </h3>
              <p className="mb-5">
                CODEDEXIT Ltd is committed to protecting your privacy. We collect and use personal
                information only to enhance our services, improve security, and ensure compliance
                with industry standards. Your data is stored securely and never shared with
                unauthorized third parties. By using our services, you agree to our data handling
                practices as outlined in our Privacy Policy. You can contact us anytime to learn
                more about how we manage your information.
              </p>

              <h4 className="mb-5">Data Collection, Usage, and Information Handling Practices</h4>
              <p className="mb-10">
                {" "}
                We collect and process user data, including personal details and technical usage metrics, to enhance service performance, security, and customer experience. Information may be gathered through direct input, automated logs, and tracking
                technologies, ensuring transparency and compliance with data protection regulations.{" "}
              </p>

              <h4 className="mb-5">Data Protection, Security Measures, and Confidentiality Assurance</h4>
              <p className="mb-10">
                {" "}
                CODEDEXIT Ltd prioritizes the confidentiality and security of user data by implementing encryption, access controls, and other industry-standard security practices. We do not share, sell, or distribute personal data to third
                parties without user consent, except when required by law or legal enforcement agencies.{" "}
              </p>

              <h4 className="mb-5">User Rights, Access to Information, and Data Modification Requests</h4>
              <p className="mb-10">
                Users have the right to access, update, or delete their personal information stored within our system, subject to verification and legal compliance. Requests for data modifications or removals must be submitted
                through proper channels, and CODEDEXIT Ltd will process them within the required regulatory timeframe.
              </p>
              <h3 className="mb-5" id="policy"> User Policy </h3>
              <p className="mb-10">
                CODEDEXIT Ltd is dedicated to providing secure and efficient technology solutions.
                Users must ensure ethical and lawful use of our services, including field service
                management, IT solutions, AI, and cloud services. Misuse of our platform, including
                unauthorized access, data breaches, or fraudulent activities, is strictly prohibited.
                Users are responsible for safeguarding their account credentials and reporting
                security issues immediately. Failure to comply with our policies may result in
                account suspension or termination. By using CODEDEXIT Ltd services, you agree to
                follow our guidelines and maintain the integrity of our platform.
              </p>

              <h4 className="mb-5">  Service Commitment, Quality Assurance, and Customer Satisfaction </h4>
              <p className="mb-10">
                {" "}
                CODEDEXIT Ltd is committed to providing reliable, high-quality SaaS products, IT services, cloud solutions, and AI-based technologies. We continuously enhance our platforms to ensure efficiency, security, and a seamless
                user experience, aligning with industry best practices and evolving customer needs.{" "}
              </p>
              <h4 className="mb-5"> Policy Updates, Modifications, and Continuous Improvements</h4>
              <p className="mb-10">
                {" "}
                CODEDEXIT Ltd reserves the right to update, modify, or revise its services, terms, and policies at any time to maintain compliance with technological advancements, legal regulations, and business requirements.
                Users will be informed of significant changes through official communication channels.{" "}
              </p>
              <h4 className="mb-5"> Compliance, Industry Standards, and Dedicated Customer Support</h4>
              <p className="mb-10">
                {" "}
                Our services adhere to international industry standards, security protocols, and regulatory guidelines. We provide dedicated customer support to assist users with queries, technical assistance,
                and service-related concerns, ensuring seamless service delivery and user satisfaction.{" "}
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
