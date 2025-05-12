import { createContext, useContext, useState } from "react";

// create an context
const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const[theme,setTheme] = useState('light');

    const toogleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    return(
        // provide context
        <ThemeContext.Provider value={{theme, toogleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

//consume context
export const useTheme = () => useContext(ThemeContext);
