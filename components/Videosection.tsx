import { useState } from 'react';
import ModalVideo from 'react-modal-video'

const Videosection = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className="container-fluid p-0">
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="UmHMVU6dceA"
          onClose={() => setOpen(false)}
        />
        <div className="row g-0">
          <div className="col-12">
            <div className="section video-section text-center">
              <span
                onClick={() => setOpen(true)}
                className="bttn bttn--circle bttn--sqr bttn--sqr-xxl bttn--base-accent bttn--light-pulse video-button">
                <span className="material-symbols-rounded mat-icon size-48 solid">
                  {" "}
                  play_arrow{" "}
                </span>
              </span>
              <h5 className="clr-light mt-15 max-text-18 mx-auto">
                {" "}
                We Run It Services for Your Success{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videosection;