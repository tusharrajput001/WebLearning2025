import { useState } from "react";

export default function useToggle(initialValue = false){
    const[value, setValue] = useState(initialValue);
    const toggle = () => setValue(prev => !prev);
    return [value, toggle];  // use this in hooks const [isVisible, toggle] = useToggle()
}