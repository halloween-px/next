"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getNavigationRequest } from "@/requests/navigation/request";

const MainContext = createContext({});

export const MainProvider = ({ children }: {children: ReactNode}) => {

    const [navigation, setNavigation] = useState([]);

    useEffect(() => {
        getNavigationRequest().then(data => setNavigation(data.items))
    }, [])

    const value = {
        navigation
    }

    return (
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => useContext(MainContext);