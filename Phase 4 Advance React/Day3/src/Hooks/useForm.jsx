import { useState } from "react";

export default function useForm(initialValue) {
    const[values, setValues] = useState(initialValue);

    const handleChange = (e) => {
        const {name, value } = e.target;
        setValues(prev => ({
            ...prev, [name] : value
        }));
    };

    const resetForm = () => setValues(initialValue);

    return [values, handleChange, resetForm]
}