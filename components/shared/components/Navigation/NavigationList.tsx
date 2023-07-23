import Link from "next/link";
import { classNames } from "@/components/shared/lib/classNames/classNames";

type NavLinks = {
    title: string,
    link: string,
}

interface NavigationListProps {
    navigation: NavLinks[];
    className?: string
}

const NavigationList = ({ navigation, className } : NavigationListProps) => {
    return (
        <ul className={classNames(`${className ? className : ''}`, {}, ['list flex flex-row gap-x-4'])}>
            {navigation.map((nav) => {
                return (
                    <li key={nav.link}>
                        <Link href={nav.link}>
                            {nav.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    );
};

export default NavigationList;