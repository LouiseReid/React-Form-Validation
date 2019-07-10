import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import * as yup from 'yup';
import { addCustomerAction } from '../redux/actions';

const Form = () => {

    const [inputs, setInputs] = useState({ id: uuid() })
    const nameInput = useRef(null)
    const dispatch = useDispatch()
    const addCustomer = (customer) => dispatch(addCustomerAction(customer))

    const onSubmit = (evt) => {
        evt.preventDefault()

        let schema = yup.object().shape({
            id: yup.string().required(),
            firstName: yup.string()
                .required(),
            lastName: yup.string()
                .required(),
            phoneNo: yup.string()
                .min(11)
                .required(),
            email: yup.string()
                .email()
                .required()
        })

        schema.isValid(inputs)
            .then(() => {
                addCustomer(inputs)
            })

        evt.target.reset()
        nameInput.current.focus()
    }

    const handleInputChange = (evt) => {
        evt.persist()
        setInputs(inputs => ({
            ...inputs,
            [evt.target.name]: evt.target.value
        }));

    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-element">
                <input type="text"
                    ref={nameInput}
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-element">
                <input type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-element">
                <input type="tel"
                    placeholder="Phone no."
                    name="phoneNo"
                    minLength="11"
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-element">
                <input type="email"
                    placeholder="Email address"
                    name="email"
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-element">
                <button type="submit">Save</button>
            </div>
        </form>
    )

}

export default Form