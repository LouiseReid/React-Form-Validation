import { navigate } from '@reach/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCustomerAction } from '../redux/actions';
import validator from '../validator';

const UpdateForm = ({ id }) => {

    const customers = useSelector(state => state.customers)
    const [customer, setCustomer] = useState({})

    const dispatch = useDispatch()
    const editCustomer = (customer) => dispatch(editCustomerAction(customer))

    useEffect(() => {
        const customer = customers.find(customer => customer.id === id)
        setCustomer(customer)
        // eslint-disable-next-line 
    }, [id])

    const onSubmit = (evt) => {
        evt.preventDefault()

        validator(customer)
            .then(response => {
                if (response) {
                    editCustomer(customer)
                    navigate('/')
                }
            })
    }

    const handleInputChange = (evt) => {
        evt.persist()
        setCustomer(customer => ({
            ...customer,
            [evt.target.name]: evt.target.value
        }));
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-element">
                <input type="text"
                    placeholder="First Name"
                    name="firstName"
                    defaultValue={customer.firstName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-element">
                <input type="text"
                    placeholder="Last Name"
                    name="lastName"
                    defaultValue={customer.lastName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-element">
                <input type="tel"
                    placeholder="Phone no."
                    name="phoneNo"
                    defaultValue={customer.phoneNo}
                    minLength="11"
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-element">
                <input type="email"
                    placeholder="Email address"
                    name="email"
                    defaultValue={customer.email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-element">
                <button type="submit">Update</button>
            </div>
        </form>
    )
}

export default UpdateForm