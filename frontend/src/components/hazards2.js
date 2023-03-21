import React from 'react'
import './Components.css';
import "bootstrap/dist/css/bootstrap.min.css";
import squareLogo from '../assets/squareLogo.jpg';

const Hazards2 = ({prevStep, SaveAndExit, nextStep, handleChange, values}) => {
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
      <form class='Hazard-form'>
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
          <h5 className='Hazard-form-subtitle'>Select Remaining Preparation Items</h5>
          <div style={{height: 300}} className='border rounded overflow-auto'>
            <div className='row Hazard-form-check-contain'>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.mobile} onChange={handleChange('mobile')} id='mobile' />
                <label style={{fontSize: 14}} className='form-check-label' for='mobile'>Mobile Equipment</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.msdsRev} onChange={handleChange('msdsRev')} id='msdsRev' />
                <label style={{fontSize: 14}} className='form-check-label' for='msdsRev'>MSDS Reviewed</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.powerLine} onChange={handleChange('powerLine')} id='powerLine' />
                <label style={{fontSize: 14}} className='form-check-label' for='powerLine'>Overhead Power Lines</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.parking} onChange={handleChange('parking')} id='parking' />
                <label style={{fontSize: 14}} className='form-check-label' for='parking'>Parking / Fencing</label>
              </div>
            </div>
            <div className='row Hazard-form-check-contain'>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.pinch} onChange={handleChange('pinch')} id='pinch' />
                <label style={{fontSize: 14}} className='form-check-label' for='pinch'>Pinch Points</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.powerTool} onChange={handleChange('powerTool')} id='powerTool' />
                <label style={{fontSize: 14}} className='form-check-label' for='powerTool'>Power Tools</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.handAndStore} onChange={handleChange('handAndStore')} id='handAndStore' />
                <label style={{fontSize: 14}} className='form-check-label' for='handAndStore'>Product Handling and Storage</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.pubSafe} onChange={handleChange('pubSafe')} id='pubSafe' />
                <label style={{fontSize: 14}} className='form-check-label' for='pubSafe'>Public Safety</label>
              </div>
            </div>
            <div className='row Hazard-form-check-contain'>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.safeWatch} onChange={handleChange('safeWatch')} id='safeWatch' />
                <label style={{fontSize: 14}} className='form-check-label' for='safeWatch'>Safety Watch</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.respPro} onChange={handleChange('respPro')} id='respPro' />
                <label style={{fontSize: 14}} className='form-check-label' for='respPro'>Respiratory Protection</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.safeWorkPrac} onChange={handleChange('safeWorkPrac')} id='safeWorkPrac' />
                <label style={{fontSize: 14}} className='form-check-label' for='safeWorkPrac'>Safe Work Practices</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.scaffold} onChange={handleChange('scaffold')} id='scaffold' />
                <label style={{fontSize: 14}} className='form-check-label' for='scaffold'>Scaffold / Ladder</label>
              </div>
            </div>
            <div className='row Hazard-form-check-contain'>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.smokeOrNo} onChange={handleChange('smokeOrNo')} id='smokeOrNo' />
                <label style={{fontSize: 14}} className='form-check-label' for='smokeOrNo'>Smoking / No Smoking Rules</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.spillPrevResp} onChange={handleChange('spillPrevResp')} id='spillPrevResp' />
                <label style={{fontSize: 14}} className='form-check-label' for='spillPrevResp'>Spill Prevention and Response</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.steam} onChange={handleChange('steam')} id='steam' />
                <label style={{fontSize: 14}} className='form-check-label' for='steam'>Steam / Washed</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.tdgPlacards} onChange={handleChange('tdgPlacards')} id='tdgPlacards' />
                <label style={{fontSize: 14}} className='form-check-label' for='tdgPlacards'>TDG Placards</label>
              </div>
            </div>
            <div className='row Hazard-form-check-contain'>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.traffic} onChange={handleChange('traffic')} id='traffic' />
                <label style={{fontSize: 14}} className='form-check-label' for='traffic'>Traffic</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.vapors} onChange={handleChange('vapors')} id='vapors' />
                <label style={{fontSize: 14}} className='form-check-label' for='vapors'>Vapors / Odors</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.vehicleInspections} onChange={handleChange('vehicleInspections')} id='vehicleInspection' />
                <label style={{fontSize: 14}} className='form-check-label' for='vehicleInspection'>Vehicle Inspections</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.ventilation} onChange={handleChange('ventilation')} id='ventilation' />
                <label style={{fontSize: 14}} className='form-check-label' for='ventilation'>Ventilation</label>
              </div>
            </div>
            <div className='row Hazard-form-check-contain'>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.visibility} onChange={handleChange('visibility')} id='visibility' />
                <label style={{fontSize: 14}} className='form-check-label' for='visibility'>Visibility - dust, mist, fog</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.wasteManage} onChange={handleChange('wasteManage')} id='wasteManage' />
                <label style={{fontSize: 14}} className='form-check-label' for='wasteManage'>Waste Management</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.workerTraining} onChange={handleChange('workerTraining')} id='workerTraining' />
                <label style={{fontSize: 14}} className='form-check-label' for='workerTraining'>Worker Training - H2S, First Aid, TDG, WHMIS, Confined Space</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.workingAlone} onChange={handleChange('workingAlone')} id='workingAlone' />
                <label style={{fontSize: 14}} className='form-check-label' for='workingAlone'>Working Alone</label>
              </div>
            </div>
            <div className='row Hazard-form-check-contain'>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.weatherExtremes} onChange={handleChange('weatherExtremes')} id='weatherExtremes' />
                <label style={{fontSize: 14}} className='form-check-label' for='weatherExtremes'>Weather Extremes</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.heights} onChange={handleChange('heights')} id='heights' />
                <label style={{fontSize: 14}} className='form-check-label' for='heights'>Working with heights</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.workSiteEntry} onChange={handleChange('workSiteEntry')} id='workSiteEntry' />
                <label style={{fontSize: 14}} className='form-check-label' for='workSiteEntry'>Work Site Entry</label>
              </div>
            </div>
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

export default Hazards2