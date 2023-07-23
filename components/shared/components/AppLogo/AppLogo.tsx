import Link from "next/link";
import Image from "next/image";
import { RoutePath } from "@/config/RoutsPaths/RoutePath";

interface AppLogoProps {
    className?: string
    classLogo?: string
    src?: string,
    alt?: string,
    width: string,
    height: string,
    priority?: boolean
}

const AppLogo = ( props:AppLogoProps) => {
    const { src, alt, classLogo, className, width, height, priority } = props;
    return (
        <Link href={RoutePath.main} className={`block ${className ? className : ''}`}>
            <Image
                width={width}
                height={height}
                src={`${src ? src :'/images/logo/logo.svg'}`}
                alt={`${alt ? alt : 'logo'}`}
                className={` ${classLogo ? classLogo : ''}`}
                priority={priority ? priority : false}
            />
        </Link>
    );
};

export default AppLogo;