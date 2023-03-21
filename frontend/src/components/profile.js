import React, {useEffect, useState} from 'react';
import {redirect} from 'react-router-dom';
import Cookies from 'js-cookie';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import artechlogoH from '../assets/artechlogoHorizontal.jpg';

export default function Profile() {
    const [user, setUser] = useState([]);

    async function getUser() {
        try {
            await fetch("http://localhost:3000/backend/getUser.php", {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: Cookies.get('loggedIn'),
                },
            }).then((response) => {
                if (response.ok) {
                    setUser(JSON.parse(response))
                    Cookies.set("user", user)
                }
                throw new Error('error')
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getUser()
    }, [getUser])

    function navigate(url) {
        return redirect(url)
    }

    return (
        <div className='Profile-container'>
            <div className='Profile-content'>
                <img src={artechlogoH} alt='Logo' className='Profile-logo-h' />
                <h3 className='Profile-content-title'>User Profile</h3>
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
                <div className='Profile-user-stats'>
                    <div className='border rounded mt-2 Profile-text-display'>EmployeeID: {user.employeeID}</div>
                    <div className='border rounded mt-2 Profile-text-display'>Username: {user.username}</div>
                    <div className='border rounded mt-2 Profile-text-display'>Name: {user.FirstName} {user.LastName}</div>
                    <div className='border rounded mt-2 Profile-text-display'>Phone: {user.Emp_Phone}</div>
                </div>
            </div>
        </div>
    )
}