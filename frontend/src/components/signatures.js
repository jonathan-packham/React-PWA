import React from 'react';
import { SignatureComponent } from '@syncfusion/ej2-react-inputs';
import './Components.css';
import "bootstrap/dist/css/bootstrap.min.css";
import squareLogo from '../assets/squareLogo.jpg';
import {getComponent, registerLicense} from '@syncfusion/ej2-base';

registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpAaV5HQmFJfFBmQGlYd1RycEUmHVdTRHRcQl5iT39Ud01hXXZWdX0=;Mgo+DSMBPh8sVXJ0S0J+XE9AflRGQmJMYVF2R2BJelRxfF9EZEwxOX1dQl9gSX1ScERkWHdcdH1cTmk=;ORg4AjUWIQA/Gnt2VVhkQlFacldJWXxIe0x0RWFab1t6dV1MYlhBJAtUQF1hSn5Qd0NiXn5WcnFVR2BV;MTM1MTY1N0AzMjMwMmUzNDJlMzBibUVsd0pxSlY1SlhtV0hzSjVWOGtKdnhybmZZYU5GTWVjRzdrYzVvWWpZPQ==;MTM1MTY1OEAzMjMwMmUzNDJlMzBFTi9kLzJ6SytKT1lMbm1sbTh5eTNOdkVTdHduUnVOVmF5T1NOTkFlWlRnPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmdWf1ZpR2NbfE51flROal5VVBYiSV9jS31TdURlWHhfeHZQRmZZWA==;MTM1MTY2MEAzMjMwMmUzNDJlMzBnV1AxSkZHWk1oTktXLytGS3pVTjR2eEh4bGZndW9hZzE2UmJ6NFhkUjVBPQ==;MTM1MTY2MUAzMjMwMmUzNDJlMzBZdDg2alhXdjVudjBZWDMrYkt6UzV3OHlnZmZCcGorUEhKeU9JdmZObWdnPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJWXxIe0x0RWFab1t6dV1MYlhBJAtUQF1hSn5Qd0NiXn5WcnFURWRV;MTM1MTY2M0AzMjMwMmUzNDJlMzBEZWowcGt5b3M2Qm9kdHRmdllYYUVxSTdnQlhqcGtRZEkySlFhYWZpQXg0PQ==;MTM1MTY2NEAzMjMwMmUzNDJlMzBQK05KRzZSRkJFU09rUW5kTGRXR3FiU2FpYjhNOXNURUx2ZFhqVW9rdmlBPQ==;MTM1MTY2NUAzMjMwMmUzNDJlMzBnV1AxSkZHWk1oTktXLytGS3pVTjR2eEh4bGZndW9hZzE2UmJ6NFhkUjVBPQ==');

const Signatures = ({prevStep, SaveAndExit, handleChange, values}) => {
  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  const saveSign = e => {
    e.preventDefault();
    let signature = getComponent(document.getElementById('signature'), 'signature');
    values.signature = signature.save('jpg', 'Signature');
    uploadSign();
  }

  const clearSign = e => {
    e.preventDefault();
    let signature = getComponent(document.getElementById('signature'), 'signature');
    signature.clear();
  }

  const Save = (e) => {
    SaveAndExit(e);
  }

  async function uploadSign() {
      await fetch("http://localhost:3000/backend/uploadSign.php", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values.employeeID, values.formVersionNum, values.signature)
      }).then(res => res.json()).then(data => {
        if (data.ok) {
          console.log('Success', data);
        }
      })
  }

  return (
    <div className='Hazard-form-container'>
      <form className='Hazard-form'>
        <div className='Hazard-form-content'>
          <div className='row Hazard-form-header'>
            <img  src={squareLogo} alt='Logo' className='col w-25 Hazard-form-logo-square' />
            <div className='col w-75 pt-3'>
              <div className='row border rounded mt-2 Hazard-form-text-display'>
                Employee ID: {values.employeeID}
              </div>
              <div className='row border rounded mt-2 Hazard-form-text-display'>
                Job ID: {values.jobID}
              </div>
              <div className='row border rounded mt-2 Hazard-form-text-display'>
                Date: {values.date}
              </div>
              <div className='row border rounded mt-2 Hazard-form-text-display'>
                Time: {values.time}
              </div>
            </div>
          </div>
          <h3 className='Hazard-form-title'>Hazard Assesment Form</h3>
          <h5 className='Hazard-form-subtitle'>Muster Point & Signature</h5>
          <div className='mt-3'>
            <label className='form-label' for='muster'>Enter the Muster Point</label>
            <textarea className='form-control' id='muster' rows='1' value={values.musterPoint} onInput={handleChange('musterPoint')}></textarea>
          </div>
          <div className='my-3 justify-content-center'>
            <span className='sign-title'>Sign Here</span>
            <div className='border rounded' id='signature-control'>
              <SignatureComponent id='signature' />
            </div>
            <div className='row mt-2 justify-content-center'>
              <button className='col mx-2 btn btn-danger' onClick={clearSign}>Clear Signature</button>
              <button className='col mx-2 btn btn-success' onClick={saveSign}>Save Signature</button>
            </div>
          </div>
          <div className='page-btns'>
            <div className='prev-page-btn'>
              <button class='btn' onClick={Previous}>Previous Page</button>
            </div>
            <div className='save-and-exit-btn'>
              <button class='btn' onClick={(values) => Save(values)}>Save & Exit</button>
            </div>
            <div className='next-page-btn-disabled'>
              <button class='btn' disabled>Next Page</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signatures