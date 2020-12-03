import React, { createContext, useContext, useReducer } from 'react';

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const globalReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "TOGGLE_THEME":
            return {
                ...state,
                isDark: action.theme
            }
        case "CURSOR_TYPE":
            return {
                ...state,
                cursorType: action.cursorType
            }

        default:
            console.warn(`Unhandeled action type: ${action.type}`);
            break;
    }
}

const initialState = {
    isDark: (typeof window !== `undefined`) ? (window.localStorage.getItem('theme') === "false" ? false : true) : true,
    cursorType: null,
    cursorStyles: ['cursorRed', "cursorTheme", "Locked"]
}

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState)
    return (
        <GlobalDispatchContext.Provider value={dispatch} >
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider >
    )
}

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
