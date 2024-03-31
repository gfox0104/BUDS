import Image from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

export default function Testimonials() {
  return (
    <section className="bg-[#F9F9F9] py-[60px] px-[20px]">
      <div className="max-w-[1170px] mx-auto p-[10px]">
        <div className="pb-[40px]">
          {/* Section header */}
          <div className="mx-auto text-center pb-[80px]">
            <h2 className="h2 mb-4 text-[34px] text-[#2D67D5]">How it Works</h2>
            <p className="text-[16px] text-[#7A7A7A] mb-6 font-[400]">
              you can feel confident in the quality of service you’ll receive.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start text-center lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col p-[10px] items-center align-middle"
              data-aos="fade-up"
            >
              <span className="bg-[#FFFFFF] w-[110px] h-[110px] p-[30px] rounded-full mb-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#2D67D5">
                  <path d="M30.2 42v-6.25h-7.7v-20.5h-4.65v6.5H4V6h13.85v6.25H30.2V6H44v15.75H30.2v-6.5h-4.7v17.5h4.7v-6.5H44V42ZM7 9v9.75Zm26.2 20.25V39ZM33.2 9v9.75Zm0 9.75H41V9h-7.8Zm0 20.25H41v-9.75h-7.8ZM7 18.75h7.85V9H7Z"></path>
                </svg>
              </span>
              <h2 className="text-[#2D67D5] text-[20px] font-[600] mb-[10px]">
                <span>3 Step Process</span>
              </h2>
              <p className="text-[#7A7A7A] text-[15px]">
                To receiving an accurate quote
              </p>
            </div>

            {/* 2nd testimonial */}
            <div
              className="flex flex-col p-[10px] items-center align-middle"
              data-aos="fade-up"
            >
              <span className="bg-[#FFFFFF] w-[110px] h-[110px] p-[30px] rounded-full mb-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#2D67D5">
                  <path d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z"></path>
                </svg>
              </span>
              <h2 className="text-[#2D67D5] text-[20px] font-[600] mb-[10px]">
                <span>Social Sign Up</span>
              </h2>
              <p className="text-[#7A7A7A] text-[15px]">
                Using either Facebook or Google logins.
              </p>
            </div>
            {/* 3rd testimonial */}
            <div
              className="flex flex-col p-[10px] items-center align-middle"
              data-aos="fade-up"
            >
              <span className="bg-[#FFFFFF] w-[110px] h-[110px] p-[30px] rounded-full mb-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#2D67D5">
                  <path d="M22.55 38.35h2.75v-2.6q3.05-.35 4.75-1.875 1.7-1.525 1.7-4.075 0-2.55-1.45-4.15-1.45-1.6-4.9-3.05-2.9-1.2-4.2-2.15-1.3-.95-1.3-2.55 0-1.55 1.125-2.45 1.125-.9 3.075-.9 1.5 0 2.6.7t1.85 2.1l2.4-1.15q-.85-1.75-2.25-2.75t-3.3-1.2V9.7h-2.75v2.55q-2.55.35-4.025 1.875Q17.15 15.65 17.15 17.9q0 2.45 1.5 3.9 1.5 1.45 4.5 2.7 3.35 1.4 4.6 2.525Q29 28.15 29 29.8q0 1.6-1.325 2.575-1.325.975-3.325.975-1.95 0-3.475-1.1-1.525-1.1-2.125-3l-2.55.85q1.05 2.3 2.575 3.625Q20.3 35.05 22.55 35.65ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"></path>
                </svg>
              </span>
              <h2 className="text-[#2D67D5] text-[20px] font-[600] mb-[10px]">
                <span>Paperless Payment</span>
              </h2>
              <p className="text-[#7A7A7A] text-[15px]">
                Input multiple credit cards and easily switch between them
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
