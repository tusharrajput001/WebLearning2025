import { act, Children, createContext, useContext, useReducer } from "react";

// Create Context
const TodoContext = createContext();

// initial Todos
const intitialState = [];


// Reducer Function
const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return[...state, {id: Date.now(), text: action.payload, done:false}];
        case "TOOGLE_TODO":
            return state.map(todo => 
                todo.id == action.payload ? {...todo, done: !todo.done} : todo
            );
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};


// Provider
export const TodoProvider = ({children}) => {
    const[todos, dispatch] = useReducer(todoReducer, intitialState);
    return(
        <TodoContext.Provider value={{todos,dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

// custom hook
export const useTodo = () => useContext(TodoContext);
