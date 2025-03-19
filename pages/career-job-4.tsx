import Navbar from "@/components/NavbarTwo";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import ApplyNowModal from "@/components/ApplyNowModal";

const Job_2 = () => {
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
                            <h3 className="clr-light mb-3">Cloud Software Engineer</h3>
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
                                        Associate Cloud Software Engineer{" "}
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
                                    <h3 className="clr-base mb-3">Associate Cloud Software Engineer</h3>
                                </div>
                                <div className="col-md-6">
                                    <div className="group group-row flex-wrap justify-content-end align-items-center">
                                        <button
                                            style={{ border: "1px solid" }}
                                            className="bttn bttn-md bttn-pill fw-md  align-items-center">
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
                            <div>
                                <h4 className="m-1">About the Job</h4>
                                <p className="m-1">
                                    We are Lenovo. We do what we say. We own what we do. We WOW our customers.
                                </p>
                                <p className="m-1">
                                    Lenovo is a US$57 billion revenue global technology powerhouse, ranked #248 in the Fortune Global 500, and serving millions of customers every day in 180 markets. Focused on a bold vision to deliver Smarter Technology for All, Lenovo has built on its success as the world’s largest PC company with a full-stack portfolio of AI-enabled, AI-ready, and AI-optimized devices (PCs, workstations, smartphones, tablets), infrastructure (server, storage, edge, high performance computing and software defined infrastructure), software, solutions, and services.
                                </p>

                                <h4 className="m-1">Description</h4>
                                <p className="m-1">
                                    This position is for an Associate Cloud Software Engineer in the Cloud Software team, part of the Advanced Innovation Center. This role will work closely with Engineering, Security, DevOps, QA, and Architecture teams to develop highly scalable solutions that integrate client agents and cloud services.
                                </p>

                                <h4 className="m-1">Responsibilities</h4>
                                <ul>
                                    <li>Work with the engineering team to develop and test software solutions that can involve client and cloud components.</li>
                                    <li>Implement features going through the software lifecycle from design to production release.</li>
                                    <li>Review pull requests from your peers to ensure high standards, consistency, and durability of the implementation.</li>
                                </ul>

                                <h4 className="m-1">Basic Qualifications</h4>
                                <ul>
                                    <li>Recent graduate with a Bachelor's or Master's Degree in Engineering, Computer Science, or a related discipline.</li>
                                    <li>6+ months of software development experience in Java and experience with Angular or React.</li>
                                    <li>Effective communication, presentation, and strong interpersonal skills.</li>
                                    <li>Knowledge of RESTful web services.</li>
                                    <li>Solid understanding of object-oriented design principles and patterns, data structures, software engineering, distributed systems, and database systems.</li>
                                    <li>Experience with SpringBoot, MongoDB.</li>
                                </ul>

                                <h4 className="m-1" >Preferred Qualifications</h4>
                                <ul>
                                    <li>Previous internship experience in software development companies.</li>
                                    <li>Basic experience with public Cloud services (AWS, Azure, Google Cloud Platform).</li>
                                    <li>Experience or familiarity with working in an Agile environment.</li>
                                    <li>Experience with Git.</li>
                                </ul>

                                <p className="m-1">
                                    We are an Equal Opportunity Employer and do not discriminate against any employee or applicant for employment because of race, color, sex, age, religion, sexual orientation, gender identity, national origin, status as a veteran, and basis of disability or any federal, state, or local protected class.
                                </p>
                            </div>



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

export default Job_2;
