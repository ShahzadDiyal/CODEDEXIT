import { Modal, Button } from 'react-bootstrap';

const ApplyNowModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;


    return (
        <Modal show={isOpen} onHide={onClose} centered >
            <Modal.Header closeButton style={{ backgroundColor: "green" }}>
                <Modal.Title>Apply Now!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <input type="text" name='firstName' className='form-control m-2' placeholder='First Name' />

                <div className="row">
                    <div className="col-6">
                        <input type="email" name='email' className='form-control m-2' placeholder='Email Name' />
                    </div>
                    <div className="col-6">
                        <input type="number" name='phone' className='form-control m-2' placeholder='Phone' />
                    </div>
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