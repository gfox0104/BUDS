"use client";

import Image from "next/image";
import UserImage01 from "@/public/images/user-f-1.png";
import UserImage02 from "@/public/images/user-f-2.png";
import UserImage03 from "@/public/images/user-f-3.png";
import UserImage04 from "@/public/images/user-f-4.png";
import UserImage05 from "@/public/images/user-f-5.png";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

export default function Interfce() {
  return (
    <section className="py-[10px] px-[20px]">
      <div className="max-w-[1170px] mx-auto p-[10px]">
        <div className="pb-[40px]">
          {/* Section header */}
          <div className="mx-auto text-center pb-[80px]">
            <h2 className="h2 mb-4 text-[34px] text-[#2D67D5]">
              User Friendly Interface
            </h2>
            <p className="text-[16px] text-[#7A7A7A] mb-6 font-[400]">
              Are you tired of trying to flag down a taxi on the street, or
              dealing with the hassle of renting a car?
              <br /> With Buds, you can easily book a ride with just a few taps
              on your smartphone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
