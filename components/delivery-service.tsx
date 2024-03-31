import Image from "next/image";

import BudsVanImage from "@/public/images/buds-deliver-van.png";

export default function DeliveryService() {
  return (
    <section className="my-[60px]">
      <div className="max-w-[1170px] mx-auto ">
        <div className="grid gap-20">
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Image */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="fade-up"
            >
              <Image
                className="max-w-full mx-auto md:max-w-none h-auto float-right"
                src={BudsVanImage}
                width={408}
                height={253}
                alt="Features 02"
              />
            </div>
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <h2 className="text-[34px] text-[#2d67d5] mb-2 font-[700] leading-[50px]">
                  Delivery Service for All
                </h2>
                <p className="text-[16px] text-[#7A7A7A] mb-6">
                  BUDS is more than just a ride-hailing service – we also offer
                  delivery services for a variety of businessesWhether you’re a
                  pharmacy in need of transporting medication, a law firm with
                  important documents to deliver, or a retailer looking to get
                  products to your customers, we’ve got you covered.
                </p>
                <p className="text-[16px] text-[#7A7A7A] mb-6">
                  Our fleet of professional drivers can handle same-day delivery
                  for your flower shop, restaurant, gift shop, bakery, or
                  ecommerce storeAnd with GPS tracking and real-time updates,
                  you can always stay up-to-date on the status of your delivery.
                </p>
                <p className="text-[16px] text-[#7A7A7A] mb-6">
                  Let BUDS take care of the logistics for you and focus on what
                  you do best – running your businessContact us today to learn
                  more about our delivery services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
