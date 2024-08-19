import { About } from "./features/about";
import { Contact } from "./features/contact";
import { Footer } from "./features/footer";
import { Header } from "./features/header";
import { Navbar } from "./features/navbar";
import { Services } from "./features/services";
import { Testimonials } from "./features/testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 bg-white">
      <Navbar />
      <Header />
      <Services />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
