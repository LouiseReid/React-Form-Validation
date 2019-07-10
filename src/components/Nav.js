import { Link } from '@reach/router';
import React from 'react';

const Nav = () => {
    return (
        <div id="nav">
            <Link to="/">Home</Link>
            <Link to="/customerform">Add Customer</Link>
        </div>
    )
}

export default Nav
