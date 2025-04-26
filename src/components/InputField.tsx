import React from "react";

interface InputFieldProps {
    label: string;
    type: string;
    id: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

// Componente reutilizável de input

function InputField({label, type, id, placeholder, value, onChange, required = false}: InputFieldProps) {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block mb-2 text-sm font-medium">{label}</label>
            <input 
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full px-4 py-2 border rounded-t-md border-b-2 outline-1"
            />
        </div>
    );
}

export default InputField
