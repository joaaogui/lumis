import { Flex } from "@/components/flex";
import { About } from "./features/about";
import { Contact } from "./features/contact";
import { Footer } from "./features/footer";
import { Header } from "./features/header";
import { Navbar } from "./features/navbar";
import { Services } from "./features/services";

export default function Home() {
  return (
    <Flex className="min-h-screen flex-col items-center justify-between bg-white">
      <Navbar />
      <Header />
      <Services />
      {/* <Testimonials /> */}
      <About />
      <Contact />
      <Footer />
    </Flex>
  );
}
