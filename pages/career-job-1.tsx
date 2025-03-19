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
                            <h3 className="clr-light mb-3"> Software Developer </h3>
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
                                        Software Developer{" "}
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
                                    <h3 className="clr-light mb-3"> Software Developer </h3>
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
                            <p className="mb-10">
                                {" "}
                                Our goal is to help every recent graduate worldwide find a job that aligns with their ambitions:
                                join us to make the aspirations of a community of over 1,000,000 users come true!

                                {" "}
                            </p>
                            <p className="mb-10">
                                {" "}
                                We are constantly looking for students, recent graduates, and junior professionals who aspire to join our team. Apply for this position, and our HR team will contact you as soon as a role in this
                                area becomes available and your CV matches the profile we are seeking.{" "}
                            </p>
                            <p className="mb-10">
                                {" "}
                                For all Junior positions as Web Developer we offer a 6 months internship contract ($85,000 per year), you will have the opportunity to grow exponentially thanks to on-the-job training, you will be able to work fully remote for as
                                long as you want and we will equip you with a latest generation MacBook.{" "}
                            </p>
                            <h4>Responsibilities:</h4>
                            <p>
                                {" "}Within the team, you may be responsible for one or more of the following tasks:  {" "}
                            </p>
                            <ul>
                                <li>Front-end Development and Maintenance of Websites: Creating and updating the visible and interactive elements of websites using languages such as HTML, CSS, and JavaScript to ensure an optimal user experience.</li>
                                <li>Assistance in Developing and Integrating Interactive and Dynamic Features: Supporting the creation and implementation of advanced features and animations using JavaScript frameworks and libraries like React or Vue.js.</li>
                                <li>Collaboration with the Team to Solve Technical Issues and Implement Improvements: Working closely with other developers and team members to resolve bugs, address technical challenges, and effectively implement new features.</li>
                                <li>Testing and Debugging Code to Ensure Correctness and Compatibility: Verifying and correcting errors in the code through the execution of automated and manual tests to ensure the website functions properly across different platforms and browsers.</li> </ul>
                            <li>Participation in Designing and Implementing Intuitive and Responsive User Interfaces: Involvement in designing user interfaces, including element layout, color selection, and navigation management to enhance usability and accessibility.</li>
                            <li>Updating and Optimizing Existing Websites to Improve Performance and User Experience: Reviewing and optimizing existing code, including reducing loading times, resolving compatibility issues, and implementing best practices for web design.</li>


                            <h4 className="pt-3">What we offer!</h4>
                            <p>{" "}Working in the Joinrs team means being able to choose the best psychophysical conditions for tranquility and productivity. This translates into:{" "}</p>
                            <ul>
                                <li>Remote working and flexibility. You'll have the opportunity to work remotely full-time, but you can also use one of our offices.</li>
                                <li>Dynamic work environment. Our offices remain open, providing shared workspaces, meeting rooms, break areas, and a bar with fresh fruit and various snacks. You'll also find a foosball table and a gaming station. We aim for an informal work environment that encourages shared moments, always respecting individual activities.</li>
                                <li>Team building & fun. We frequently organize aperitifs, games, and leisure moments, which are integral parts of life at Joinrs, both inside and outside the office.</li>
                                <li>Company welfare. We guarantee you a company welfare package that meets your expectations.</li>

                            </ul>

                            <h4 className="pt-3">Who We Are:</h4>
                            <p>{" "}Our mission is to support every recent graduate and junior professional in achieving their goals, helping them start their careers with optimism and a clear vision for their future.
                                We are a united team that strongly believes in collaboration: together we work, discuss, and achieve results that inspire us to aim for ever more ambitious goals.
                                Our community includes over 1,000,000 members across the US, UK, Europe, and Brazil, as well as 300+ companies like PwC, Accenture, Gi Group, Danone, and Siemens. And we’re growing fast—join us!
                                Contract & Compensation:For all Junior positions we offer a 6-month internship contract with a salary of $85,000 yearly, aiming for a permanent contract.
                                The annual base salary is $85,000 (USD) which will be prorated based on internship start and end date. Actual compensation offered to the successful candidate may vary from posted hiring based upon geographic location, work experience, education, and/or skill level, among other things.
                                Salary reviews are scheduled every six months, with your compensation increasing rapidly as you gain experience and translate it into a more significant impact.{" "}</p>

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
