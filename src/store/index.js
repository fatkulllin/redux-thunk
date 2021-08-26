import { createStore, combineReducers, applyMiddleware } from "redux"
import { cashReducer } from "./cashReducer"
import { customersReducer } from "./customersReducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customersReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

