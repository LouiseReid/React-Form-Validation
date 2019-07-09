import { ADD_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER } from './constants';

export const addCustomerAction = (customer) => ({
    type: ADD_CUSTOMER,
    payload: customer
})

export const deleteCustomerAction = (id) => ({
    type: DELETE_CUSTOMER,
    payload: id
})

export const editCustomerAction = (customer) => ({
    type: EDIT_CUSTOMER,
    payload: customer
})
