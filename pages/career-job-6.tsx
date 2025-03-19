import Navbar from "@/components/NavbarTwo";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from 'react';
import ApplyNowModal from "@/components/ApplyNowModal";

const Job_6 = () => {
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
                                    <div>
                                        <h4 className="mt-2">About the Job</h4>
                                        <p className="mt-2">
                                            The Aerospace Corporation is the trusted partner to the nation’s space programs, solving the hardest problems and providing unmatched technical expertise. As the operator of a federally funded research and development center (FFRDC), we are broadly engaged across all aspects of space—delivering innovative solutions that span satellite, launch, ground, and cyber systems for defense, civil, and commercial customers. When you join our team, you’ll be part of a special collection of problem solvers, thought leaders, and innovators. Join us and take your place in space.
                                        </p>

                                        <h4 className="mt-2">About the Team</h4>
                                        <p className="mt-2">
                                            The Information Systems and Cyber Division (ISCD) staff couples the latest in information system technologies, such as elastic compute clouds, containerization, microservices, real-time operating systems, and visualization frameworks, with expertise in cybersecurity, software architecture, software engineering, data science, Artificial Intelligence, process improvement, and software development to deliver responsive, resilient, high-performance software-intensive systems to our Intelligence Community, DoD, and civilian customers.
                                        </p>
                                        <p className="mt-2">
                                            The Engineering Applications Department (EAD) develops a wide variety of innovative tools and applications to support civil, commercial, and national security space systems. From web, cloud, and desktop visualization to virtual and augmented reality; EAD evaluates and creates unique visual experiences that present data and analysis to key decision-makers.
                                        </p>

                                        <h4 className="mt-2">Work Model</h4>
                                        <p className="mt-2">
                                            This is a full-time position based in Chantilly, VA, or Colorado Springs, CO, offering a hybrid work model that combines 3 regular onsite workdays and remote flexibility as business needs allow.
                                        </p>

                                        <h4 className="mt-2">Responsibilities</h4>
                                        <ul>
                                            <li>Support industry-leading scientists and engineers in developing maintainable cloud-native web applications and backend service-oriented architecture components.</li>
                                            <li>Provide technical support in application architecture, development, and CI/CD.</li>
                                            <li>Build user interfaces and advanced visualizations to enhance data analysis and decision-making processes.</li>
                                            <li>Interface with various Engineering and Technology Group (ETG), launch, satellite, and other program office customers.</li>
                                            <li>Foster innovation by staying current with emerging technologies and industry best practices.</li>
                                        </ul>

                                        <h4 className="mt-2">Requirements – Associate Member of Technical Staff – Systems Software Engineer</h4>
                                        <ul>
                                            <li>Bachelor’s degree in Computer Science, Engineering, or a related STEM field.</li>
                                            <li>At least one year of experience in full-stack development (post-bachelor's completion).</li>
                                            <li>Demonstrated skill in object-oriented programming languages and modern web frameworks (C++, Java, or Python).</li>
                                            <li>Proficiency in MERN is highly desirable.</li>
                                            <li>Knowledge in Continuous Integration/Continuous Deployment (CI/CD).</li>
                                            <li>Ability to work independently and collaboratively within a multidisciplinary team.</li>
                                            <li>Willingness to travel occasionally to customer sites within the U.S. (approximately 5%).</li>
                                            <li>U.S. citizenship is required to obtain and maintain a security clearance.</li>
                                        </ul>

                                        <h4 className="mt-2">Preferred Qualifications</h4>
                                        <ul>
                                            <li>Ability to deploy applications to Kubernetes.</li>
                                            <li>Experience with AWS, Microsoft Azure, or Google Cloud.</li>
                                            <li>Excellent interpersonal skills, including the ability to establish and maintain effective working relationships.</li>
                                            <li>Previous experience working with aerospace or defense industry clients.</li>
                                            <li>Current and active Top-Secret clearance with Sensitive Compartmented Information access (TS/SCI).</li>
                                        </ul>

                                        <h4 className="mt-2">Compensation</h4>
                                        <p className="mt-2">
                                            The grade-based pay range for this job is listed below. Individual salaries within that range are determined through various factors, including but not limited to education, experience, knowledge, and skills.
                                        </p>
                                        <ul>
                                            <li>Salary Range: $70,100 - $105,100 (Annual)</li>
                                        </ul>

                                        <h4 className="mt-2">Leadership Competencies</h4>
                                        <p className="mt-2">At Aerospace, our commitment is to our people. To cultivate talent and ensure a strong pipeline of future leaders, we want individuals who:</p>
                                        <ul>
                                            <li>Operate Strategically</li>
                                            <li>Lead Change</li>
                                            <li>Engage with Impact</li>
                                            <li>Foster Innovation</li>
                                            <li>Deliver Results</li>
                                        </ul>

                                        <h4 className="mt-2">Employee Benefits</h4>
                                        <p className="mt-2">During the interview process, our team will provide details of our industry-leading benefits. A few highlights include:</p>
                                        <ul>
                                            <li>Comprehensive health care and wellness plans</li>
                                            <li>Paid holidays, sick time, and vacation</li>
                                            <li>Standard and alternate work schedules, including telework options</li>
                                            <li>401(k) Plan with company contributions (8%-12% based on years of service)</li>
                                            <li>Flexible spending accounts</li>
                                            <li>Variable pay program for exceptional contributions</li>
                                            <li>Relocation assistance</li>
                                            <li>Professional growth and development programs</li>
                                            <li>Education assistance programs</li>
                                            <li>An inclusive work environment built on teamwork, flexibility, and respect</li>
                                        </ul>

                                        <p className="mt-2">
                                            We are all unique, from various backgrounds and walks of life, yet one thing bonds us—the belief that we can make a difference. This core belief empowers us to do our best work at The Aerospace Corporation.
                                        </p>
                                    </div>

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

export default Job_6;
