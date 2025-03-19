import Navbar from "@/components/NavbarTwo";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import ApplyNowModal from "@/components/ApplyNowModal";

const Job_1 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
    }, []);
    return (
        <>
            <Navbar rtlurl={undefined} />
            {/* Banner section */}
            <section className="banner-section section--sm">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="clr-light mb-3"> Python Developer</h3>
                            <ul className="list list-row flex-wrap breadcrumb-list">
                                <li>
                                    <Link
                                        href="home"
                                        className="d-inline-block t-link clr-light :clr-accent">
                                        {" "}
                                        Home{" "}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/our-careers/"
                                        className="d-inline-block t-link clr-light :clr-accent">
                                        {" "}
                                        Our Career{" "}
                                    </Link>
                                </li>
                                <li className="">
                                    <Link
                                        href="#"
                                        className="d-inline-block t-link clr-light :clr-accent">
                                        {" "}
                                        Python Developer{" "}
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
                        <div className="col-md-12 col-xl-12" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex={0}>
                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className="clr-base mb-3">Python Developer</h3>
                                </div>
                                <div className="col-md-6">
                                    <div className="group group-row flex-wrap justify-content-end align-items-center">
                                        <button
                                            className="bttn bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                                            <span className="bttn__arrow"
                                                onClick={() => setIsModalOpen(true)}
                                            > Apply Now</span>
                                        </button>
                                        {/* set state and pass the props */}
                                        <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                                    </div>
                                </div>


                            </div>
                            <hr />
                            <h4>About the job
                            </h4>
                            <p className="mb-10">
                                {" "}
                                BeaconFire is based in Central NJ, specializing in Software Development, Web Development, and Business Intelligence; we are looking for candidates who are passionate
                                about combining technology and design to create user-friendly websites.

                                {" "}
                            </p>
                            <h4>Responsibilities:</h4>
                            <ul>
                                <li>Develop websites using Python, HTML, CSS, Node.js, React.js, and Angular2+, among other tools</li>
                                <li>Write scalable, secure, maintainable code that powers our clients’ platforms</li>
                                <li>Create, deploy, and maintain automated system tests</li>
                                <li>Work with Testers to understand defects opened and resolve them in a timely manner</li>
                                <li>Support continuous improvement by investigating alternatives and technologies and presenting these for architectural review</li>
                                <li>Collaborate effectively with other team members to accomplish shared user story and sprint goals</li>
                                <li>Invest time in constant professional development to stay up to date with new technological developments and programming languages</li>
                                <li>Discover and fix programming bugs</li>
                                <li>Other duties as assigned</li>
                            </ul>
                            <h4>Basic Qualifications:</h4>
                            <p>
                                <ul>
                                    <li>Proficient understanding of Python</li>
                                    <li>Experience in programming language JavaScript or similar (e.g., Java, Python, C, C++, C#) and understanding of the software development life cycle</li>
                                    <li>Basic knowledge of code versioning (e.g., Git, SVN)</li>
                                    <li>A passion for coding pixel-perfect web pages</li>
                                    <li>Good verbal communication and interpersonal skills</li>
                                </ul>

                            </p>
                            <h4>Preferred Qualifications:</h4>
                            <p><ul>
                                <li>Bachelor's degree or higher in Computer Science or related fields</li>
                                <li>0-1 year of practical experience in JavaScript coding</li>
                                <li>Familiarity with at least one JavaScript framework (Angular2+, React.js, Express.js)</li>
                                <li>Experience with unit and integration testing of code, with an understanding of JavaScript testing frameworks like Jasmine, Cucumber, Mocha, and Karma</li>
                                <li>Experience providing REST/SOAP APIs for user interface consumption</li>
                                <li>Experience working within an Agile development methodology Scrum</li>
                            </ul>
                            </p>
                            <strong>BeaconFire is an E-verified company and work - Visa Sponsorship is Available.


                            </strong>
                            <h4>Featured benefits</h4>
                            <p><ul>
                                <li>Medical insurance</li>
                                <li>Vision insurance</li>
                                <li>Dental insurance</li>
                                <li>401(k)</li>
                            </ul>
                            </p>
                        </div>
                        <div className="section__gap-top">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-xl-8">
                                        <div className="group group-row flex-wrap justify-content-center align-items-center">
                                            <button

                                                className="bttn bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                                                <span className="bttn__arrow"
                                                    onClick={() => setIsModalOpen(true)}
                                                > Apply Now</span>
                                            </button>
                                            {/* set state and pass the props */}
                                            <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </>
    );
};

export default Job_1;
