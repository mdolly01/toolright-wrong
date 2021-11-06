import React from 'react';
import './Account.css';

function Account() {
    return (
        <div className='account__info'>
            <h1>
                Sign up for Tool Right:
            </h1>
            <h4>First Name</h4><input type='text'></input>
            <h4>Last Name</h4><input type='text'></input>
            <h4>Email</h4><input type='text'></input>
            <h4>Phone number</h4><input type='text'></input>
            <h4>Address</h4><input type='text'></input>
            <h4>Address 2 (optional)</h4><input type='text'></input>
            <h4>City</h4><input type='text'></input>
            <h4>State</h4><input type='text'></input>
            <h4>Zip</h4><input type='text'></input>
            <input type="submit"></input>
        </div>
    )
}

export default Account;