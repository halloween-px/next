"use client"
import { classNames } from "@/components/shared/lib/classNames/classNames";
import NavigationList from "@/components/shared/components/Navigation/NavigationList";
import { useMainContext } from "@/components/context/MainContext";

type NavigationProps = {
    className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
    const { navigation } = useMainContext();
    return (
        <>
            <nav className={classNames('navigation', {}, [className!])}>
                <NavigationList navigation={navigation} />
            </nav>
        </>
    );
};