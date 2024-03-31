import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import LogoImage from "@/public/images/logo.png";

export default function Header() {
  return (
    <header className="absolute w-full z-30 py-[10px]">
      <div className="max-w-[1170px] mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                className="w-[80px] h-[80px] rounded-[15px]"
                src={LogoImage}
                alt="Features 02"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-[15px] text-[#FFFFFF] hover:text-gray-200 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-[15px] text-[#FFFFFF] hover:text-gray-200 flex items-center transition duration-150 ease-in-out ml-[50px]"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-[15px] text-[#FFFFFF] hover:text-gray-200 flex items-center transition duration-150 ease-in-out ml-[50px]"
                >
                  For Riders
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-[15px] text-[#FFFFFF] hover:text-gray-200 flex items-center transition duration-150 ease-in-out ml-[50px]"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-[15px] text-[#FFFFFF] hover:text-gray-200 flex items-center transition duration-150 ease-in-out ml-[50px]"
                >
                  For Drivers
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-[15px] bg-[#FFFFFF] rounded-[25px] px-[40px] py-[9px] text-[#2D67D5] flex items-center transition duration-150 ease-in-out ml-[50px]"
                >
                  Download
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
