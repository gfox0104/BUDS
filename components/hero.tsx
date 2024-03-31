import Link from "next/link";
import Image from "next/image";
import AppPayImage from "@/public/images/apppay-2.png";
import PlayStoreImage from "@/public/images/playstore-download.png";
import WebAppImage from "@/public/images/webapp-1.png";
import MainImage from "@/public/images/main-img.png";

export default function Hero() {
  return (
    <section>
      <div className="bg-[#2d67d5]">
        <div className="max-w-[1170px] mx-auto">
          {/* Hero content */}

          <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
            {/* Section header */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="w-[345px] h-[571px] m-auto"
                  src={MainImage}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-[565px] md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="text-[#FFFFFF]">
                  <h3 className="h3 mb-3 text-[40px] leading-[60px]">
                    Leave the driving to us - BUDS has you covered
                  </h3>
                  <p className="mb-4 text-[15px]">
                    Download the Buds app today and experience the convenience
                    of on-demand transportation at your fingertips.
                  </p>
                  <div className="flex">
                    <Link
                      href="/"
                      className="mr-[10px] text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      <Image
                        className="w-[165px] h-[50px]"
                        src={PlayStoreImage}
                        alt="Features 02"
                      />
                    </Link>
                    <Link
                      href="/"
                      className="mr-[10px] text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      <Image
                        className="w-[165px] h-[50px]"
                        src={AppPayImage}
                        alt="Features 02"
                      />
                    </Link>
                    <Link
                      href="/"
                      className="mr-[10px] text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      <Image
                        className="w-[165px] h-[50px]"
                        src={WebAppImage}
                        alt="Features 02"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
