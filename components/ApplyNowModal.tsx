import { Modal, Button } from 'react-bootstrap';

const ApplyNowModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;


    return (
        <Modal show={isOpen} onHide={onClose} centered dialogClassName="custom-modal">
            <Modal.Header closeButton style={{ backgroundColor: "#7c41fb" }}>
                <Modal.Title>Apply Now!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <label htmlFor="" className='text-dark'>Full Name</label>
                <input type="text" name='fullName' className='form-control p-2' placeholder='Enter Full Name' required/>

                <div className="row">
                    <div className="col-6">
                        <label htmlFor="" className='text-dark  mt-3'>Email</label>
                        <input type="email" name='email' className='form-control p-2' placeholder='Enter Email Name' />
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className='text-dark  mt-3'>Phone</label>
                        <input type="number" name='phone' className='form-control p-2' placeholder='Enter your Phone' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="" className='text-dark mt-3'>Gender</label>
                        <select className='form-select p-2'>
                            <option value="">Male</option>
                            <option value="">Female</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className='text-dark mt-3'>Education Level</label>
                        <select name="" className='form-select p-2' id="">
                            <option value="">Master's Degree</option>
                            <option value="">Bechelor's Degree</option>
                            <option value="">Diploma/High School</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="" className='text-dark mt-3'>Professional Experience</label>
                        <select name="" className='form-select p-2' id="">
                            <option value="">0-2</option>
                            <option value="">3-5</option>
                            <option value="">6-10</option>
                            <option value="">+11</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className='text-dark mt-3'>Expected joining date</label>
                        <input type="date" className='form-control p-2' />
                    </div>
                </div>
                <div>
                    <label htmlFor="" className='text-dark mt-3'>Select the Job You want to apply for!</label>
                    <select name="" className='form-select text-gray pt-3' id="">
                        <option value="">Software Engineer</option>
                        <option value="">Nextjs Engineer</option>
                        <option value="">Python Developer</option>
                        <option value="">Associate Cloud Software Engineer</option>
                        <option value="">Software Development Intern</option>
                        <option value="">Junior Full Stack Developer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="" className='text-dark mt-3'>Expected Salary in ($)</label>
                    <input type="number" className='form-control p-2' placeholder='Enter your Expected salary' />
                </div>
                <div>
                    <label htmlFor="" className='text-dark mt-3'>Upload Your Resume</label>
                    <input type="file" accept="image/*" className='form-control p-2' placeholder='Enter your image here' />

                </div>
                <div>
                    <label htmlFor="" className='text-dark mt-3'>Upload Certifications/Approvals/</label>
                    <input type="file" accept='image/*' className='form-control p-2' />

                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant='secondary' onClick={onClose}>Close</Button>
                <Button variant='primary' onClick={onClose}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ApplyNowModal;