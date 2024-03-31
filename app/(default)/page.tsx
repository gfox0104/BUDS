export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import Hero from "@/components/hero";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";
import ForDriver from "@/components/fordriver";
import Interfce from "@/components/interface";
import DeliveryService from "@/components/deliveryservice";
import AppView from "@/components/appview";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <Zigzag />
      <Testimonials />
      <ForDriver />
      <Interfce />
      <DeliveryService />
      <AppView />
    </>
  );
}
