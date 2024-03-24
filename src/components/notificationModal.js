import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Correct import statement
import "./modal.css"
// Import any specific icons you need
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

export default function NotificationModal(props) {
  const [status, setStatus] = useState('error');

  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center">
              <h5 className="modal-title text-center" id="exampleModalLabel">Demand Status</h5>
            </div>
            <div className="modal-body">
              {
                (status === 'success') && (
                  <>
                    <p className='fs-4'> Congratulations, your request has been successfully processed ! </p>
                    <div className="d-flex justify-content-center" >
                      <FontAwesomeIcon icon={faCheck} style={{ color: "#63E6BE" }} className='Icon'/>
                    </div>
                  </>
                )
              }
              {
                (status === 'error') && (
                  <>
                    <p className='fs-4'> Oops! An error occurred while processing your request!</p>
                    <div className="d-flex justify-content-center" >
                    <FontAwesomeIcon icon={faCircleExclamation} style={{color: "#FFD43B",}} className='Icon'/>                    </div>
                  </>
                )
              }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
