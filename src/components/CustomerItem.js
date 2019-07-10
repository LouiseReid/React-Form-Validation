import { Link } from '@reach/router';
import React from 'react';


const CustomerItem = ({ customer }) => {

    return (
        <div className="customer-item">
            <p>{customer.firstName} {customer.lastName}</p>
            <Link to={`/customer/${customer.id}`}>Details</Link>
        </div>
    )

}

export default CustomerItem