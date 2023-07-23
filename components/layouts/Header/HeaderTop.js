import AppLogo from "@/components/shared/components/AppLogo/AppLogo";
import { Navigation } from "@/components/shared/components/Navigation/Navigation";

const HeaderTop = () => {
    return (
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center">
                <AppLogo width={'120'} height={'39'} priority={true} />
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                    id="mobile-menu-2">
                    <Navigation />
                </div>
            </div>
        </nav>
    );
};

export default HeaderTop;