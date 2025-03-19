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
                            <h3 className="clr-light mb-3"> NextJS Engineer </h3>
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
                                        NextJS Engineer{" "}
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
                                    <h3 className="clr-base mb-3">NextJS Engineer</h3>
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
                            <p className="mb-10">
                                {" "}
                                Steer Health is seeking a talented and motivated NextJS Engineer to join our dynamic team. As a key member of our development group, you will be responsible for creating intuitive, responsive,
                                and high-performance user interfaces that drive our healthcare technology solutions.

                                {" "}
                            </p>
                            <h4>
                                Requirements
                            </h4>
                            <p>Develop and maintain robust, scalable front-end applications using NextJS and React</p>

                            <ul>
                                <li>Expert in NextJS, React, and API integration</li>
                                <li>Design and develop responsive user interfaces that work seamlessly across various devices and browsers</li>
                                <li>Write clean, maintainable, and well-documented code</li>
                                <li>Participate in code reviews and contribute to our development best practices</li>
                                <li>Optimize application performance and loading times</li>
                                <li>Work closely with UI/UX designers to implement visually appealing and user-friendly interfaces</li>
                                <li>Troubleshoot and debug issues in front-end applications</li>
                                <li>Stay up-to-date with emerging front-end technologies and industry trends</li>
                            </ul>



                            <p className="pt-3">Proven experience as a Front-End Engineer, with a strong portfolio of web applications</p>
                            <ul>
                                <li>Deep knowledge of NextJS and React ecosystem</li>
                                <li>Proficiency in modern JavaScript (ES6+), HTML5, and CSS3</li>
                                <li>Experience with GraphQL, including writing and optimizing queries</li>
                                <li>Must have working experience with MongoDB database</li>
                                <li>Strong understanding of responsive design principles and cross-browser compatibility</li>
                                <li>Excellent problem-solving skills and attention to detail</li>
                                <li>Ability to work independently and collaboratively in a fast-paced environment</li>
                                <li>Strong communication skills and ability to explain technical concepts to non-technical stakeholders</li>
                            </ul>

                            <h4 className="pt-3">Preferred Qualifications</h4>
                            <ul>
                                <li>Experience with state management libraries (e.g., Redux, MobX)</li>
                                <li>Knowledge of TypeScript</li>
                                <li>Familiarity with CI/CD pipelines and DevOps practices</li>
                                <li>Experience with unit testing and end-to-end testing frameworks</li>
                                <li>Understanding of SEO principles and their application in front-end development</li>
                            </ul>


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
