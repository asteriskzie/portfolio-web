import React, { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode; 
    filled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({children, filled=true, ...attributes}) => {
    let buttonClassName="cursor-pointer w-fit px-6 py-3 flex place-content-center rounded-xl "
    if (filled) {
        buttonClassName+="bg-white text-raisin_black font-bold"
    } else {
        buttonClassName+="text-white border-2 border-white "
    }
    return (
        <div className={buttonClassName}>
            <button>{children}</button>
        </div>
    )
}