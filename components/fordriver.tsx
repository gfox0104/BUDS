import Image from "next/image";

import DrivingMobImage from "@/public/images/driving-mob.png";

export default function ForDriver() {
  return (
    <section>
      <div className="max-w-[1170px] mx-auto py-12 md:py-20 ">
        <div className="grid gap-20">
          {/* 1st item */}
          <div className="md:grid md:grid-cols-12 items-center">
            {/* Image */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
              data-aos="fade-up"
            >
              <Image
                className="max-w-full mx-auto md:max-w-none h-auto"
                src={DrivingMobImage}
                width={426}
                height={589}
                alt="Features 01"
              />
            </div>
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-left"
            >
              <div className="p-[10px]">
                <h2 className="text-[34px] text-[#2d67d5] mb-2 font-[700] leading-[50px]">
                  For Drivers
                </h2>
                <p className="text-[16px] text-[#7A7A7A] mb-6">
                  At Buds, we value the hard work and dedication of our
                  driversAs a member of the Buds team, you’ll have the
                  opportunity to provide a valuable service to your community
                  while earning a competitive income.
                </p>
                <p className="text-[16px] text-[#7A7A7A] mb-6">
                  Our state-of-the-art app makes it easy for you to find and
                  accept fares, and our GPS tracking system helps ensure your
                  safety on the roadWe also provide ongoing support and
                  resources to help you succeed as a Buds driver.
                </p>
                <ul className="text-[#616161] text-[15px] font-[400] mb-2">
                  <li className="flex flex-col mb-5 mt-5">
                    <h3 className="text-[#2D67D5] text-[18px] mb-[5px] font-[700] leading-6">
                      1Flexibility
                    </h3>
                    <span>
                      Choose when and where you want to work, and fit driving
                      around your schedule.
                    </span>
                  </li>
                  <li className="flex flex-col mb-5">
                    <h3 className="text-[#2D67D5] text-[18px] mb-[5px] font-[700] leading-6">
                      2Earning potential
                    </h3>
                    <span>
                      With our competitive pricing and rewards program, you can
                      earn a good income as a driver.
                    </span>
                  </li>
                  <li className="flex flex-col mb-5">
                    <h3 className="text-[#2D67D5] text-[18px] mb-[5px] font-[700] leading-6">
                      3Support
                    </h3>
                    <span>
                      We offer a range of support services to help you succeed,
                      including training and technical assistance.
                    </span>
                  </li>
                  <li className="flex flex-col mb-5">
                    <h3 className="text-[#2D67D5] text-[18px] mb-[5px] font-[700] leading-6">
                      4Community
                    </h3>
                    <span>
                      Join a community of like-minded drivers and connect with
                      other professionals in the industry.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
