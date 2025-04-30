import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string;
}

// Componente reutilizável de input
function InputField({label, id, ...rest}: InputFieldProps) {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block mb-2 text-sm font-medium">{label}</label>
            <input 
                id={id}
                {...rest} // Restante das outras props
                className="w-full px-4 py-2 border rounded-t-md border-b-2 outline-1"
            />
        </div>
    );
}

export default InputField
