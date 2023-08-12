import React, { ReactNode } from 'react'

interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
}

export const Card: React.FC<CardProps> = ({imageUrl, title, description}) => {
    return (
        <div className="flex flex-col space-y-4 items-center justify-center p-7 h-fit border-2 rounded-xl">
            <img src={imageUrl} alt={title} className="h-48"/>
            <div className="flex flex-col justify-center w-full">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-md">{description}</p>
            </div>
        </div>
    )
}