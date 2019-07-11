import { Link } from '@reach/router';
import React from 'react';

const Nav = () => {
    return (
        <div id="nav">
            <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
            <Link to={process.env.PUBLIC_URL + '/customerform'}>Add Customer</Link>
        </div>
    )
}

export default Nav
