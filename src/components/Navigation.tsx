import Image from "next/image";
import Link from "next/link";
import logo from "@/src/assets/icons/logo.png";

const Navigation = () => {
    return (
        <nav className="fixed top-8 w-full z-10 px-10">
            <div className="container ">
                <div className="flex items-center justify-between w-full">
                    <Link href="#" className="w-[100px] h-auto cursor-pointer">
                        <Image src={logo} alt="brand logo" />
                    </Link>
                    <div className="flex items-center justify-end gap-[80px]">
                        <Link
                            className="text-[20px] text-text-black capitalize cursor-pointer"
                            href="#">
                            home
                        </Link>
                        <Link
                            className="text-[20px] text-text-black capitalize cursor-pointer"
                            href="#">
                            shop
                        </Link>
                        <Link
                            className="text-[20px] text-text-black capitalize cursor-pointer"
                            href="#">
                            product
                        </Link>
                        <Link
                            className="text-[20px] text-text-black capitalize cursor-pointer"
                            href="#">
                            support
                        </Link>
                        <Link
                            className="text-[20px] text-text-black capitalize cursor-pointer"
                            href="#">
                            blog
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
