import React from 'react'
import { useTheme } from './ThemeContext'


const Navbar = () => {
    const {toogleTheme} = useTheme();

    return <button onClick={toogleTheme}>Toogle Theme</button>

}

export default Navbar