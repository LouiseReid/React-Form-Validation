import React from 'react';
import { useSelector } from 'react-redux';
import CustomerItem from '../components/CustomerItem';

const Home = () => {

    const customers = useSelector(state => state.customers)


    return (
        <div>
            <h2>All Customers</h2>
            <ul>
                {customers.map(customer => (
                    <CustomerItem key={customer.id} customer={customer} />
                ))}
            </ul>
        </div>
    )
}

export default Home
