import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type: "submit" | "reset" | "button";
    variant: string;
    buttonWidth: "w-full" | "w-fit";
}
const Button = ({ children, variant, type, buttonWidth, ...reset }: IProps) => {
    return (
        <>
            <button type={type} {...reset} className={`${variant} cursor-pointer ${buttonWidth} rounded text-white py-2 font-medium`}>
                {children}
            </button>
        </>
    );
};

export default Button;