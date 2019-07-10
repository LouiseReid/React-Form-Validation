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
        navigate('/')
    }

    useEffect(() => {
        const customer = customers.find(customer => customer.id === id)
        setCustomer(customer)
        // eslint-disable-next-line 
    }, [id])

    return (
        <div className="customer-detail">
            <h3>{customer.firstName} {customer.lastName}</h3>
            <p>{customer.phoneNo}</p>
            <p>{customer.email}</p>
            <button onClick={() => deleteCustomer(customer.id)}>X</button>
            <Link to={`/customer/${customer.id}/update`}>Edit</Link>
        </div>
    )
}

export default CustomerDetail