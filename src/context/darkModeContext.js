import { createContext, useReducer } from "react"
import DarkModeReducer from "./darkModeReducer";

const INITIAL_VALUE = {
    darkMode: false,
}

export const DarkModeContext = createContext(INITIAL_VALUE);

export const DarkModeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_VALUE);
    return (
        <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
            {children}
        </DarkModeContext.Provider>
    )
}