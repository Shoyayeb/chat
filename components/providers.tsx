'use client'
import { FC, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface providerProps {
    children: ReactNode
}

 const  Provider: FC<providerProps> = ({children}) =>{

    return(
        <>
        <Toaster position="top-center" reverseOrder={false}/>
        {children}
        </>
    )
}
export default Provider;