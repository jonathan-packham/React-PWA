import React, {useEffect, useState} from 'react';
import {redirect} from 'react-router-dom';
import Cookies from 'js-cookie';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import squareLogo from '../assets/squareLogo.jpg';

export default function Forms() {
    const [loginStatus, setLoginStatus] = useState(false);
    const [formData, setFormData] = useState([]);
    const [rowOne, setRowOne] = useState('invisible');
    const [rowTwo, setRowTwo] = useState('invisible');
    const [rowThree, setRowThree] = useState('invisible');
    const [rowFour, setRowFour] = useState('invisible');
    const [rowFive, setRowFive] = useState('invisible');
    const [rowSix, setRowSix] = useState('invisible');
    const [rowSeven, setRowSeven] = useState('invisible');
    
    const checkLoginStatus = () => {
        setLoginStatus(Cookies.get('loggedIn'));
        return loginStatus;
    }

    function navigate(url) {
        return redirect(url);
    }

    const setTableRows = () => {
        switch (formData.length) {
            case 1: 
                setRowOne('visible');
                return;
            case 2: 
                setRowOne('visible');
                setRowTwo('visible');
                return;
            case 3: 
                setRowOne('visible');
                setRowTwo('visible');
                setRowThree('visible');
                return;
            case 4: 
                setRowOne('visible');
                setRowTwo('visible');
                setRowThree('visible');
                setRowFour('visible');
                return;
            case 5: 
                setRowOne('visible');
                setRowTwo('visible');
                setRowThree('visible');
                setRowFour('visible');
                setRowFive('visible');
                return;
            case 6: 
                setRowOne('visible');
                setRowTwo('visible');
                setRowThree('visible');
                setRowFour('visible');
                setRowFive('visible');
                setRowSix('visible');
                return;
            case 7: 
                setRowOne('visible');
                setRowTwo('visible');
                setRowThree('visible');
                setRowFour('visible');
                setRowFive('visible');
                setRowSix('visible');
                setRowSeven('visible');
                return;
            default: 
                return null;
        }
    }

    useEffect(() => {
        checkLoginStatus;
        getCurrentDate;
        getFormData();
        setTableRows;
    })

    async function getFormData() {
        try {
            await fetch("http://localhost:3000/backend/getFormData.php", {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application'
                },
            }).then((response) => {
                if (response.ok) {
                    setFormData(JSON.parse(response))
                }
                throw new Error('error')
            })
        } catch (error) {
            console.log(error.message)
        }
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
                                <th scope='col'>Form #</th>
                                <th scope='col'>Job Name: </th>
                                <th scope='col'>Location: </th>
                                <th scope='col'>Date: </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={rowOne}>
                                <th scope='row'>{formData[0].Permit_Number}</th>
                                <td>{formData[0].Job_Name}</td>
                                <td>{formData[0].Location_Name}</td>
                                <td>{formData[0].Date_Time}</td>
                            </tr>
                            <tr className={rowTwo}>
                            <th scope='row'>{formData[1].Permit_Number}</th>
                                <td>{formData[1].Job_Name}</td>
                                <td>{formData[1].Location_Name}</td>
                                <td>{formData[1].Date_Time}</td>
                            </tr>
                            <tr className={rowThree}>
                            <th scope='row'>{formData[2].Permit_Number}</th>
                                <td>{formData[2].Job_Name}</td>
                                <td>{formData[2].Location_Name}</td>
                                <td>{formData[2].Date_Time}</td>
                            </tr>
                            <tr className={rowFour}>
                            <th scope='row'>{formData[3].Permit_Number}</th>
                                <td>{formData[3].Job_Name}</td>
                                <td>{formData[3].Location_Name}</td>
                                <td>{formData[3].Date_Time}</td>
                            </tr>
                            <tr className={rowFive}>
                            <th scope='row'>{formData[4].Permit_Number}</th>
                                <td>{formData[4].Job_Name}</td>
                                <td>{formData[4].Location_Name}</td>
                                <td>{formData[4].Date_Time}</td>
                            </tr>
                            <tr className={rowSix}>
                            <th scope='row'>{formData[5].Permit_Number}</th>
                                <td>{formData[5].Job_Name}</td>
                                <td>{formData[5].Location_Name}</td>
                                <td>{formData[5].Date_Time}</td>
                            </tr>
                            <tr className={rowSeven}>
                            <th scope='row'>{formData[6].Permit_Number}</th>
                                <td>{formData[6].Job_Name}</td>
                                <td>{formData[6].Location_Name}</td>
                                <td>{formData[6].Date_Time}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}