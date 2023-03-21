import React, {useState} from 'react';
import {redirect} from 'react-router-dom';
import Cookies from 'js-cookie';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import squareLogo from '../assets/squareLogo.jpg';

export default function Forms() {
    const current = new Date();
    const [loginStatus, setLoginStatus] = useState(false);
    const [currentDate, setCurrentDate] = useState(0);
    
    const checkLoginStatus = () => {
        setLoginStatus(Cookies.get('loggedIn'));
        return loginStatus;
    }

    function navigate(url) {
        return redirect(url);
    }

    const getCurrentDate = () => {
        setCurrentDate(current.getDate());
    }

    return (
        <div className='Form-display-container'>
            <div className='Form-display-content'>
                <img src={squareLogo} alt='Logo' className='Form-display-logo-s' />
                <h3 className='Form-display-title'>Form Information</h3>
                <div className='collapse' id='navbarToggler'>
                    <div className='row my-2'>
                        <div className='col'>
                            <button className='Nav-btn' type='button' onClick={navigate('/profile')}>Profile</button>
                        </div>
                        <div className='col'>
                            <button className='Nav-btn' type='button' onClick={navigate('/forms')}>Form Information</button>
                        </div>
                        <div className='col'>
                            <button className='Nav-btn' type='button' onClick={navigate('/newForm')}>New Form</button>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
                <div className='Form-display-table-contain'>
                    <table className='table'>
                        <thead>
                            <tr>
                                
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}