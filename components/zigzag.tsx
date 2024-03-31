import Image from "next/image";

import WaitImage from "@/public/images/wait-img.png";
import ForridersImage from "@/public/images/forriders.png";
import ConvenienceIcon from "@/public/images/convenience-icon.svg";
import ReliabilityIcon from "@/public/images/reliability-icon.svg";
import AffordabilityIcon from "@/public/images/affordability-icon.svg";
import SafetyIcon from "@/public/images/safety-icon.svg";

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-[1170px] mx-auto py-12 md:py-20 ">
        <div className="grid gap-20">
          {/* 1st item */}
          <div className="md:grid md:grid-cols-12 items-center">
            {/* Image */}
            <div className="relative max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8  md:mb-0 rtl ">
              <div className="wait-image-div1">
                <div data-aos="fade-up">
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src={WaitImage}
                    alt="Features 01"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-left"
            >
              <div className="p-[10px]">
                <h2 className="text-[34px] text-[#2d67d5] mb-2 font-[700] leading-[50px]">
                  So Why Wait?
                </h2>
                <p className="text-[16px] text-[#7A7A7A] mb-6">
                  Download the Buds app today and experience the convenience of
                  on-demand transportation at your fingertips.
                </p>
                <div className="grid grid-cols-2">
                  <div className="p-[10px]">
                    <div className="flex">
                      <div className="w-[30px] mr-[15px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                          width={"30px"}
                          height={"30px"}
                          fill="#2D67D5"
                        >
                          <g id="_01_align_center">
                            <path d="M254.89,512.19l-7.55-3.35C238.93,505.15,42.67,416.51,42.67,256V116.82c0.02-27.47,17.66-51.83,43.75-60.42L256,0.19  l169.58,56.21c26.1,8.58,43.74,32.94,43.75,60.42V256c0,182.98-198.14,250.77-206.59,253.59L254.89,512.19z M256,44.93L99.93,96.68  c-8.71,2.85-14.6,10.97-14.59,20.14V256c0,117.21,137.39,193.24,171.67,210.37c34.22-13.76,169.66-76.76,169.66-210.37V116.82  c0.01-9.16-5.88-17.29-14.59-20.14L256,44.93z"></path>{" "}
                            <path d="M237.03,310.23h-0.7c-10.91-0.17-21.28-4.79-28.69-12.8l-49.19-51.2l30.74-29.48l47.87,49.92l110.53-110.53l30.17,30.17  L265.51,298.54C257.96,306.08,247.71,310.29,237.03,310.23z"></path>
                          </g>
                        </svg>
                      </div>
                      <div className="desc">
                        <h3 className="mb-[5px] leading-[17px] text-[#2d67d5] text-[18px] font-[600]">
                          <span className="">Convenience</span>
                        </h3>
                        <p className="text-[#7A7A7A] text-[15px] font-[400]">
                          With our app, you can easily book a ride from wherever
                          you are, at any time of dayNo more waiting on the side
                          of the road, trying to hail a taxi.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-[10px]">
                    <div className="flex">
                      <div className="w-[30px] mr-[15px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={"30px"}
                          height={"30px"}
                          fill="#2D67D5"
                        >
                          <g id="_01_align_center" data-name="01 align center">
                            <path d="M15,24H9V20.487a9,9,0,0,1-2.849-1.646L3.107,20.6l-3-5.2L3.15,13.645a9.1,9.1,0,0,1,0-3.29L.107,8.6l3-5.2L6.151,5.159A9,9,0,0,1,9,3.513V0h6V3.513a9,9,0,0,1,2.849,1.646L20.893,3.4l3,5.2L20.85,10.355a9.1,9.1,0,0,1,0,3.29L23.893,15.4l-3,5.2-3.044-1.758A9,9,0,0,1,15,20.487Zm-4-2h2V18.973l.751-.194A6.984,6.984,0,0,0,16.994,16.9l.543-.553,2.623,1.515,1-1.732-2.62-1.513.206-.746a7.048,7.048,0,0,0,0-3.75l-.206-.746,2.62-1.513-1-1.732L17.537,7.649,16.994,7.1a6.984,6.984,0,0,0-3.243-1.875L13,5.027V2H11V5.027l-.751.194A6.984,6.984,0,0,0,7.006,7.1l-.543.553L3.84,6.134l-1,1.732L5.46,9.379l-.206.746a7.048,7.048,0,0,0,0,3.75l.206.746L2.84,16.134l1,1.732,2.623-1.515.543.553a6.984,6.984,0,0,0,3.243,1.875l.751.194Zm1-6a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"></path>
                          </g>
                        </svg>
                      </div>
                      <div className="desc">
                        <h3 className="mb-[5px] leading-[17px] text-[#2d67d5] text-[18px] font-[600]">
                          <span className="">Reliability</span>
                        </h3>
                        <p className="text-[#7A7A7A] text-[15px] font-[400]">
                          Our extensive network of drivers ensures that you'll
                          always be able to find a ride when you need onePlus,
                          with our top-rated drivers, you can trust that you'll
                          have a safe and comfortable journey.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-[10px]">
                    <div className="flex">
                      <div className="w-[30px] mr-[15px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 24 24"
                          width={"30px"}
                          height={"30px"}
                          fill="#2D67D5"
                        >
                          <g id="_01_align_center" data-name="01 align center">
                            <path d="M21,0H3A3,3,0,0,0,0,3V20H6.9l3.808,3.218a2,2,0,0,0,2.582,0L17.1,20H24V3A3,3,0,0,0,21,0Zm1,18H16.366L12,21.69,7.634,18H2V3A1,1,0,0,1,3,2H21a1,1,0,0,1,1,1Z"></path>
                            <rect x="6" y="5" width="6" height="2"></rect>
                            <rect x="6" y="9" width="12" height="2"></rect>
                            <rect x="6" y="13" width="12" height="2"></rect>
                          </g>
                        </svg>
                      </div>
                      <div className="desc">
                        <h3 className="mb-[5px] leading-[17px] text-[#2d67d5] text-[18px] font-[600]">
                          <span className="">Affordability</span>
                        </h3>
                        <p className="text-[#7A7A7A] text-[15px] font-[400]">
                          We offer competitive pricing to make sure you're
                          getting the best value for your moneyPlus, with our
                          transparent pricing system, you'll always know exactly
                          how much your ride will cost before you book.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-[10px]">
                    <div className="flex">
                      <div className="w-[30px] mr-[15px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 24 24"
                          width={"30px"}
                          height={"30px"}
                          fill="#2D67D5"
                        >
                          <path d="m24 3v3a3 3 0 0 1 -3 3h-3v-2h2.636a9.991 9.991 0 1 0 -11.636 14.539v2.066a11.993 11.993 0 1 1 13-18.231v-2.374zm-7 15a3 3 0 0 0 -6 0h2a1 1 0 0 1 2 0c0 .5-.85 1.138-1.6 1.7-1.125.844-2.4 1.8-2.4 3.3v1h6v-2h-3.29c.271-.236.589-.474.89-.7 1.125-.844 2.4-1.8 2.4-3.3zm5 1h-2v-4h-2v4a2 2 0 0 0 2 2h2v3h2v-9h-2zm-9-13h-2v5h-4v2h6z"></path>
                        </svg>
                      </div>
                      <div className="desc">
                        <h3 className="mb-[5px] leading-[17px] text-[#2d67d5] text-[18px] font-[600]">
                          <span className="">Safety</span>
                        </h3>
                        <p className="text-[#7A7A7A] text-[15px] font-[400]">
                          Your safety is our top priorityAll of our drivers
                          undergo thorough background checks and training to
                          ensure that you have a safe and secure ride.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd item */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Image */}
            <div className="relative max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="wait-image-div1">
                <div data-aos="fade-up"></div>
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={ForridersImage}
                  alt="Features 02"
                />
              </div>
            </div>
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 h-full"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <h2 className="text-[34px] text-[#2d67d5] mb-2 font-[700] leading-[50px]">
                  For Riders
                </h2>
                <p className="text-[16px] text-[#7A7A7A] mb-6">
                  Our drivers are all carefully screened and trained to ensure
                  your safety and comfort during your ride
                </p>
                <ul className="text-[#616161] text-[15px] font-[400] mb-2">
                  <li className="flex flex-col mb-5 mt-5">
                    <h3 className="text-[#2D67D5] text-[18px] mb-[5px] font-[700] leading-6">
                      1Easy booking
                    </h3>
                    <span>
                      With just a few taps on your phone, you can quickly and
                      easily book a ride through our app.
                    </span>
                  </li>
                  <li className="flex flex-col mb-5">
                    <h3 className="text-[#2D67D5] text-[18px] mb-[5px] font-[700] leading-6">
                      2Real-time tracking
                    </h3>
                    <span>
                      See your driver's location in real-time and know exactly
                      when they'll arrive to pick you up.
                    </span>
                  </li>
                  <li className="flex flex-col mb-5">
                    <h3 className="text-[#2D67D5] text-[18px] mb-[5px] font-[700] leading-6">
                      3Payment options
                    </h3>
                    <span>
                      Choose from a variety of payment options, including credit
                      card, debit card, or mobile wallet.
                    </span>
                  </li>
                  <li className="flex flex-col mb-5">
                    <h3 className="text-[#2D67D5] text-[18px] mb-[5px] font-[700] leading-6">
                      4Driver ratings
                    </h3>
                    <span>
                      See ratings and reviews from other riders to help you
                      choose the best driver for your needs.
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
