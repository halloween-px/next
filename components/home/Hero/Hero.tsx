import AppLogo from "@/components/shared/components/AppLogo/AppLogo";
import cls from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={`${cls.height} w-full flex justify-center items-center`}>
            <AppLogo width={'500'} height={'500'} />
        </div>
    );
};

export default Hero;