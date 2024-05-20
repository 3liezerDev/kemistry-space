import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    faFacebook,
    faInstagram,
    faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <>
            <div className="bg-black shadow-md absolute w-full h-16 p-4 flex flex-row justify-between mt-2">
                <div >
                    <NavigationMenu >
                    <NavigationMenuList className="flex space-x-4" >
                        <NavigationMenuItem >
                            <FontAwesomeIcon className="text-white hover:text-pink-600" icon={faInstagram} size="2x" />
                            <NavigationMenuContent>
                                <NavigationMenuLink href="https://www.instagram.com" isExternal/>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem >
                            <FontAwesomeIcon className="text-white hover:text-pink-600"  icon={faTiktok} size="2x" />
                            <NavigationMenuContent>
                                <NavigationMenuLink></NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem >
                            <FontAwesomeIcon className="text-white hover:text-pink-600"  icon={faFacebook} size="2x" />
                            <NavigationMenuContent>
                                {" "}
                                <NavigationMenuLink />
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                </div>
                <div className="flex flex-row space-x-4">
                    <p className="text-white text-xl hover:text-pink-600">terms & conditions</p>
                    <p className="text-white text-xl hover:text-pink-600">policy & privacy</p>
                </div>
                <div>
                    <p className="text-white text-xl hover:text-pink-600">© all rights reserved</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
