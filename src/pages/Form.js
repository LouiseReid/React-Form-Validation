import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from 'uuid/v4';
import { addCustomerAction } from '../redux/actions';
import validator from '../validator';

toast.configure()

const Form = () => {

    const [inputs, setInputs] = useState({ id: uuid() })
    const nameInput = useRef(null)
    const dispatch = useDispatch()
    const addCustomer = (customer) => dispatch(addCustomerAction(customer))


    const onSubmit = (evt) => {
        evt.preventDefault()

        validator(inputs)
            .then(response => {
                if (response) {
                    addCustomer(inputs)
                    toast(`Excellent job, you saved ${inputs.firstName}!`)
                }
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
        <form onSubmit={onSubmit} >
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