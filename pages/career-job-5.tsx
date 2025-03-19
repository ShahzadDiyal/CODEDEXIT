import Navbar from "@/components/NavbarTwo";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from 'react';
import ApplyNowModal from "@/components/ApplyNowModal";

const Job_5 = () => {
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
                            <h3 className="clr-light mb-3">Software Development Intern</h3>
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
                                        Software Development Intern{" "}
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
                                    <h3 className="clr-base mb-3">Software Development Intern</h3>
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
                                <div>
                                    <h4 className="mt-2">About the Job</h4>
                                    <p className="mt-2">
                                        We are a leading property insurer of the world's largest businesses, providing more than one-third of FORTUNE 1000-size companies with engineering-based risk management and property insurance solutions. FM helps clients maintain continuity in their business operations by drawing upon state-of-the-art loss-prevention engineering and research, risk management skills and support services, tailored risk transfer capabilities, and superior financial strength. To do so, we rely on a dynamic, culturally diverse group of employees, working in more than 100 countries, in a variety of challenging roles.
                                    </p>
                                    <p className="mt-2">
                                        This US-based remote opportunity will require periodic travel to our corporate headquarters in Johnston, RI, which is part of the greater Providence area.
                                    </p>
                                    <p className="mt-2">
                                        With a large college-age population, Providence offers a vibrant arts and entertainment scene that includes local theatre and music, collegiate and minor league sporting events, and excellent restaurants, and we’re not that far from the breathtaking RI beaches!
                                    </p>

                                    <h4 className="mt-2">Position</h4>
                                    <p className="mt-2">FM is hiring a Software Engineering Intern to join our team for the Summer 2025!</p>
                                    <p className="mt-2">
                                        This is an excellent opportunity for motivated students to apply their classroom experience, professional attitude, and personal ambition. You will get firsthand experience while earning college credits and getting paid!
                                    </p>

                                    <h4 className="mt-2">Responsibilities</h4>
                                    <p className="mt-2">
                                        As a Software Development Intern, you will have the opportunity to work on real-world problems and solutions with a team of talented developers. Your projects may consist of:
                                    </p>
                                    <ul>
                                        <li>Developing or modifying business applications.</li>
                                        <li>Integrating business applications and databases.</li>
                                        <li>Augmenting rapid software delivery and deployment processes.</li>
                                        <li>Automating software testing processes.</li>
                                    </ul>

                                    <h4 className="mt-2">Schedule</h4>
                                    <ul>
                                        <li>Must be able to work full-time 37.5 hours a week for 12 weeks.</li>
                                        <li>Hours: 9am to 5pm EST Monday-Friday.</li>
                                    </ul>

                                    <h4 className="mt-2">Education</h4>
                                    <ul>
                                        <li>
                                            Must be enrolled as a full-time student studying Computer Science or a related degree program in an undergraduate 4-year accredited institution or pursuing a graduate degree during the Summer 2025 Semester to be considered.
                                        </li>
                                    </ul>

                                    <h4 className="mt-2">Technical Skills</h4>
                                    <ul>
                                        <li>Knowledge of Theory and Principles of Software Engineering.</li>
                                        <li>Proficiency in High-level Programming Languages.</li>
                                        <li>Object-Oriented Programming.</li>
                                        <li>Algorithms.</li>
                                        <li>Data Structures.</li>
                                        <li>SQL.</li>
                                        <li>JavaScript.</li>
                                        <li>HTML.</li>
                                        <li>CSS.</li>
                                        <li>Knowledge of databases and computer operating systems.</li>
                                        <li>Basic knowledge of networks.</li>
                                        <li>Experience with or willingness to learn C#, REST API, and .NET is a plus!</li>
                                    </ul>

                                    <h4 className="mt-2">Soft Skills</h4>
                                    <ul>
                                        <li>Ability to work effectively in teams and solve problems.</li>
                                        <li>Desire and willingness to learn new technologies.</li>
                                    </ul>

                                    <h4 className="mt-2">Compensation</h4>
                                    <p className="mt-2">
                                        The hiring range for this position is $24.00 to $33.00 per hour. The final salary offer will vary based on geographic location, individual education, skills, and experience.
                                    </p>

                                    <p className="mt-2">
                                        FM is an Equal Opportunity Employer and is committed to attracting, developing, and retaining a diverse workforce.
                                    </p>
                                </div>

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

export default Job_5;
