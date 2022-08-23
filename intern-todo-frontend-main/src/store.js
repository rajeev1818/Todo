import {configureStore} from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'

import getTodosReducer from './reducers/getTodosReducer'
import createTodoReducer from './reducers/createTodoReducer'
import deleteTodoReducer from './reducers/deleteTodoReducer'
import editTodoReducer from './reducers/editTodoReducer'
import updateUserReducer from './reducers/updateUserReducer'


const store=configureStore({
    reducer:{
        userLogin:userReducer,
        userTodos:getTodosReducer,
        createTodo:createTodoReducer,
        deleteTodo:deleteTodoReducer,
        editTodo:editTodoReducer,
        updateUser:updateUserReducer
    }

})


export default store



