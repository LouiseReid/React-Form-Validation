import { Link, navigate } from '@reach/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCustomerAction } from '../redux/actions';

const CustomerDetail = ({ id }) => {

    const customers = useSelector(state => state.customers)
    const [customer, setCustomer] = useState({})

    const dispatch = useDispatch()

    const deleteCustomer = (customer) => {
        dispatch(deleteCustomerAction(customer))
        navigate(process.env.PUBLIC_URL + '/')
    }

    useEffect(() => {
        const customer = customers.find(customer => customer.id === id)
        setCustomer(customer)
        // eslint-disable-next-line 
    }, [id])

    return (
        <div className="customer-detail">
            <h3 className="header-medium">{customer.firstName} {customer.lastName}</h3>
            <p>Phone no.: {customer.phoneNo}</p>
            <p>Email: {customer.email}</p>
            <button className="delete-btn btn" onClick={() => deleteCustomer(customer.id)}>Delete</button>
            <Link className="edit-btn btn" to={process.env.PUBLIC_URL + `/customer/${customer.id}/update`}>Edit</Link>
        </div>
    )
}

export default CustomerDetail