import { createStore } from 'redux';
import uuid from 'uuid/v4';
import reducer from './reducer';

const initialState = {
    customers: [
        {
            id: uuid(),
            firstName: 'Louise',
            lastName: 'Reid',
            phoneNo: '01237456894',
            email: 'louise@louise.co'
        }
    ]
}

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

export default store