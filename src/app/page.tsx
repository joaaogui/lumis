import { Flex } from "@/components/flex";
import { About } from "./features/about";
import { Contact } from "./features/contact";
import { Footer } from "./features/footer";
import { Header } from "./features/header";
import { Location } from "./features/location";
import { Navbar } from "./features/navbar";
import { Services } from "./features/services";
import { WhatsAppButton } from "./features/whatsapp";

export default function Home() {
  return (
    <Flex className="min-h-screen flex-col items-center justify-between bg-white">
      <Navbar />
      <Header />
      <Services />
      <Location />
      {/* <Testimonials /> */}
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton
        phoneNumber="5561991919063"
        message="Oi! Gostaria de conhecer a Lumis."
        style={{ fontSize: "16px" }}
      />
    </Flex>
  );
}
