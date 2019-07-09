import { ADD_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER } from './constants';

let reducer = (state, { type, payload }) => {
    switch (type) {
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, payload]
            };
        case DELETE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter(customer => customer.id !== payload)
            };
        case EDIT_CUSTOMER:
            return {
                ...state,
                customers: state.customers.map(customer => (customer.id === payload.id) ? payload : customer)
            }
        default:
            return state
    }

}

export default reducer