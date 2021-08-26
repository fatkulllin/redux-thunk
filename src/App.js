import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction } from './store/customersReducer'
import { removeCustomerAction } from './store/customersReducer'
import {addCashAction} from './store/cashReducer'
import {getCashAction} from './store/cashReducer'
import { fetchCustomers } from './store/acyncActions/customer';

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

// Функции для добавления и снятия денег из нашего состояния
  const addCash = () => {
    dispatch(addCashAction(5))
  }
  const getCash = () => {
    dispatch(getCashAction(5))
  }

// Функции для добавления и удаления клиентов
  const addCustomer = (name) => {

    const customer = {
      name,
      id: Date.now()
    }

    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = customer => {

    dispatch(removeCustomerAction(customer.id))

  }


  return (
    <div className="content">

      <p>{cash}</p>

      <div className="buttons">

        <button onClick={() => addCash()}>Добавить денег</button>
        <button onClick={() => getCash()}>Уменьшить денег</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>

      </div>

      {customers.length > 0 ?
        <ul>
          {customers.map(customer => (
            <li key={customer.id} onClick={() => removeCustomer(customer)}>{customer.name}</li>
          ))}
        </ul>

        :

        <div>
          Клиенты отсутствуют
        </div>

      }

    </div>
  )

}

export default App;
