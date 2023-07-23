import { ReactNode } from "react";
import Header from '../Header/Header';
import { MainProvider } from "@/components/context/MainContext";

interface MainLayoutProps {
    children: ReactNode,
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <MainProvider>
            <div className={'app'}>
                <Header />
                <main>
                    {children}
                </main>
            </div>
        </MainProvider>
    )
}

export default MainLayout;