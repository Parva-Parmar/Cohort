import type { ReactElement } from "react";


export interface ButtonProps {
    variant:  "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onCLick: () => void;
}

export const Button = (props: ButtonProps) => {
    return <button></button>
}