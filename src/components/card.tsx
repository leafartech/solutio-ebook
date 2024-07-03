import { ReactNode } from "react";

interface CardProps {
    icon: ReactNode
    title: string
    text: string
}

export function Card({ icon, text, title }: CardProps) {
    return (
        <div className="border flex flex-col items-center bg-white rounded-xl py-4 sm:py-8 sm:px-6 px-4">
            {icon}
            <div className="mt-4 text-center flex-col gap-2">
                <h3 className="text-xl font-bold text-[#303030]">{title}</h3>
                <p className="font-medium">{text}</p>
            </div>
        </div>
    )
}