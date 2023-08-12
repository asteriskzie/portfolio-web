import React, { ReactNode } from 'react'
import Image from 'next/image'

interface CardProps {
    imageName: string;
    title: string;
    description: string;
    href?: string;
    target?: string;
}

export const Card: React.FC<CardProps> = ({imageName, title, description, href="", target=""}) => {
    return (
        <div className="flex flex-col space-y-4 items-center justify-center p-7 h-fit border-2 rounded-xl">
            {/* <img src={imageUrl} alt={title} className="h-48"/> */}
            <Image 
                src={`/images/${imageName}`}
                width={500}
                height={500}
                alt={title}
            />
            <div className="flex flex-col justify-center w-full">
                <a className="text-xl font-bold hover:text-true_blue" href={href} target={target}>{title}</a>
                <p className="text-md">{description}</p>
            </div>
        </div>
    )
}