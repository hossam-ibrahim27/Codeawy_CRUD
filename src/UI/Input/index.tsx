import type { InputHTMLAttributes } from "react";

const Input = ({ ...reset }: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <>
            <input {...reset} className="border border-slate-200 outline-none focus:border-slate-600 focus:ring-1 shadow-md p-2 text-md rounded-md" />
        </>
    );
};

export default Input;