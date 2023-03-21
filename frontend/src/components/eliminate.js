import React from 'react'
import './Components.css';
import "bootstrap/dist/css/bootstrap.min.css";
import squareLogo from '../assets/squareLogo.jpg';

const Eliminate = ({prevStep, SaveAndExit, nextStep, handleChange, values}) => {
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  const Save = (e) => {
    SaveAndExit(e);
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
          <h5 className='Hazard-form-subtitle'>Strategies to Eliminate Hazards</h5>
          <div style={{height: 200}} className='mt-3 overflow-auto'>
            <label className='form-label' for='eliminate'>Identify strategies to eliminate hazards from the job site</label>
            <textarea className='form-control' id='eliminate' rows='4' value={values.eliminate} onInput={handleChange('eliminate')}></textarea>
          </div>
          <div className='page-btns'>
            <div className='prev-page-btn'>
              <button class='btn' onClick={Previous}>Previous Page</button>
            </div>
            <div className='save-and-exit-btn'>
              <button class='btn' onClick={(values) => Save(values)}>Save & Exit</button>
            </div>
            <div className='next-page-btn'>
              <button class='btn' onClick={Continue}>Next Page</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Eliminate