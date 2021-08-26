const defaultState = {
  customers: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'


export const customersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS:
      return {...state, customers:[...state.customers, ...action.payload]}
    case ADD_CUSTOMER:
      // Разворачиваем массив и в него добавляем наш action.payload.
      return { ...state, customers: [...state.customers, action.payload] }
    case REMOVE_CUSTOMER:
      return { ...state, customers: state.customers.filter(customers => customers.id !== action.payload) }
    default:
      return state
  }
}
// ActionCreater -  простейшая функ-ия которая будет возвращать нам объект. И параметром будет принимать данные.
export const addCustomerAction = (payload)=> ({type:ADD_CUSTOMER,payload})
export const removeCustomerAction = (payload)=> ({type:REMOVE_CUSTOMER,payload})
export const addManyCustomersAction = payload => ({type:ADD_MANY_CUSTOMERS, payload})