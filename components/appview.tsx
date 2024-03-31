import Link from "next/link";
import Image from "next/image";
import AppPayImage from "@/public/images/apppay-2.png";
import PlayStoreImage from "@/public/images/playstore-download.png";
import WebAppImage from "@/public/images/webapp-1.png";
import MainImage from "@/public/images/main-img.png";

export default function AppView() {
  return (
    <section className="py-[10px] px-[20px]">
      <div className="max-w-[1170px] mx-auto p-[10px]">
        <div className="pb-[40px]">
          <div className="mx-auto text-center">
            <div className="flex flex-col pb-[40px]">
              <h2 className="h2 mb-[10px] text-[34px] text-[#2D67D5] font-[700]">
                Buds App is available for all devices
              </h2>
              <p className="text-[16px] text-[#7A7A7A] font-[400]">
                Download our app and get anything delivered now!.
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <Link
                href="/"
                className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
              >
                <Image
                  className="w-[165px] h-[50px]"
                  src={PlayStoreImage}
                  alt="Features 02"
                />
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
              >
                <Image
                  className="w-[154px] h-[50px]"
                  src={AppPayImage}
                  alt="Features 02"
                />
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
              >
                <Image
                  className="w-[167px] h-[50px]"
                  src={WebAppImage}
                  alt="Features 02"
                />
              </Link>
            </div>
            <p className="pt-[30px] text-[#9498A8] tracking-[2px]">
              * AVAILABLE ON IPHONE, IPAD AND ALL ANDROID DEVICES
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
