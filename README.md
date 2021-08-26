# redux-thunk
Пакет: redux-thunk.
Redux-thunk является middleware. Поэтому необходима функция applyMiddleware(thunk))). Используем его в store.

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

Для тестирования будем использовать api сервис https://jsonplaceholder.typicode.com/ на получение пользователей.

Создали папку asyncAction именно здесь будем создавать асинхронные запрос к внешнму api.

В app.js создали кнопку на обработку эту функции.
<button onClick={() => dispatch(fetchCustomers())}>Добавить клиентов из базы</button>

Redux thunk - middleware, который позволяет внутри каких-то сторонних функций использовать dispatch.Он внутри себя прокидывает параметром dispatch  и мы можем им пользоваться.
