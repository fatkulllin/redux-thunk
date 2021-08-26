import {addManyCustomersAction} from '../customersReducer'
 
export const fetchCustomers = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyCustomersAction(json))) //json - это массив пользователй, который пришел от сервера
    }
}
