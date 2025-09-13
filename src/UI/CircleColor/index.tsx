import type { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
    backColor: string;
    variant?: string;
}

const CircleColor = ({ variant, backColor, ...reset }: IProps) => {
    return (
        <>
            <div className={`w-5 h-5 rounded-full ${variant}`} style={{ backgroundColor: backColor }} {...reset}></div>
        </>
    );
};

export default CircleColor;