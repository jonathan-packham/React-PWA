import React, {useState} from 'react'
import './Components.css';
import "bootstrap/dist/css/bootstrap.min.css";
import squareLogo from '../assets/squareLogo.jpg';

const Hazards1 = ({SaveAndExit, nextStep, handleChange, values}) => {
  const [jobIDs, setJobIDs] = useState([]);

  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Save = ({e}) => {
    SaveAndExit({e});
  }
  
  async function getJobs() {
    try {
      await fetch("http://localhost:3000/backend/getJobs.php", {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        if (response.ok) {
          setJobIDs(JSON.parse(response))
          return jobIDs
        }
        throw new Error('error')
      })
    } catch (error) {
      console.log(error.message)
    }
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
                <div className='dropdown'>
                  <button className='dropdown-toggle' type='button' data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                    Job ID:
                  </button>
                  <ul className='dropdown-menu'>
                    <li><button className='dropdown-item' onClick=''></button></li>
                  </ul>
                </div>
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
          <h5 className='Hazard-form-subtitle'>Select Preparation Items</h5>
          <p>{values.accessExit}</p>
          <div style={{height: 300}} className='border rounded overflow-auto'>
            <div className='row Hazard-form-check-contain'>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.accessExit} onChange={handleChange('accessExit')} id='accessExit' />
                <label style={{fontSize: 14}} className='form-check-label ' for='accessExit'>Access / Exit</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.airborn} onChange={handleChange('airborne')} id='airborne' />
                <label style={{fontSize: 14}} className='form-check-label' for='airborne'>Airborne Particles</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.barricade} onChange={handleChange('barricade')} id='barricade' />
                <label style={{fontSize: 14}} className='form-check-label' for='barricade'>Barricade / Flag Area</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.blindBlankDisc} onChange={handleChange('blindBlankDisc')} id='blindBlankDisc' />
                <label style={{fontSize: 14}} className='form-check-label' for='blindBlankDisc'>Blinded / Blanked / Disconnected</label>
              </div>
            </div>
            <div className='row Hazard-form-check-contain'>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.codeOfPrac} onChange={handleChange('codeOfPrac')} />
                <label style={{fontSize: 14}} className='form-check-label'>Code of Practice</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.confined} onChange={handleChange('confined')} />
                <label style={{fontSize: 14}} className='form-check-label'>Confined Space Entry</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.depressurized} onChange={handleChange('depressurized')} />
                <label style={{fontSize: 14}} className='form-check-label'>Depressurized</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.diesel} onChange={handleChange('diesel')} />
                <label style={{fontSize: 14}} className='form-check-label'>Diesel Emergency Shut Down</label>
              </div>
            </div>
            <div className='row Hazard-form-check-contain'>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.drainage} onChange={handleChange('drainage')} />
                <label style={{fontSize: 14}} className='form-check-label'>Drainage</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.emergPlan} onChange={handleChange('emergPlan')} />
                <label style={{fontSize: 14}} className='form-check-label'>Emergency Response Plan Review</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.extension} onChange={handleChange('extension')} />
                <label style={{fontSize: 14}} className='form-check-label'>Extension Cords</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.fall} onChange={handleChange('fall')} />
                <label style={{fontSize: 14}} className='form-check-label'>Fall Protection</label>
              </div>
            </div>
            <div className='row Hazard-form-check-contain'>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.openings} onChange={handleChange('openings')} />
                <label style={{fontSize: 14}} className='form-check-label'>Floor / Roof Openings</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.genHouse} onChange={handleChange('genHouse')} />
                <label style={{fontSize: 14}} className='form-check-label'>General House</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.grounding} onChange={handleChange('grounding')} />
                <label style={{fontSize: 14}} className='form-check-label'>Grounding</label>
               </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.h2s} onChange={handleChange('h2s')} />
                <label style={{fontSize: 14}} className='form-check-label'>H2S</label>
              </div>
            </div>
            <div className='row Hazard-form-check-contain'>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.heavy} onChange={handleChange('heavy')} />
                <label style={{fontSize: 14}} className='form-check-label'>Heavy Lifting</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.hygiene} onChange={handleChange('hygiene')} />
                <label style={{fontSize: 14}} className='form-check-label'>Hygiene Program</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.lighting} onChange={handleChange('lighting')} />
                <label style={{fontSize: 14}} className='form-check-label'>Lighting</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.ladders} onChange={handleChange('ladders')} />
                <label style={{fontSize: 14}} className='form-check-label'>Ladders</label>
              </div>
            </div>
            <div className='row Hazard-form-check-contain'>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.lifting} onChange={handleChange('lifting')} />
                <label style={{fontSize: 14}} className='form-check-label'>Lifting Devices and Rigging</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.loadSecure} onChange={handleChange('loadSecure')} />
                <label style={{fontSize: 14}} className='form-check-label'>Load Secured</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={values.locked} onChange={handleChange('locked')} />
                <label style={{fontSize: 14}} className='form-check-label'>Locked / Tagged</label>
              </div>
              <div className='col form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' values={values.manlift} onChange={handleChange('manlift')} />
                <label style={{fontSize: 14}} className='form-check-label'>Manlift</label>
              </div>
            </div>
          </div>
          <div className='page-btns'>
            <div className='prev-page-btn-disabled'>
              <button className='btn' disabled>Previous Page</button>
            </div>
            <div className='save-and-exit-btn'>
              <button className='btn' onClick={Save(values)}>Save & Exit</button>
            </div>
            <div className='next-page-btn'>
              <button className='btn' onClick={Continue}>Next Page</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Hazards1