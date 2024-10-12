import { Flex } from "@/components/flex";
import Image from "next/image";

export const Navbar = () => {
  return (
    <Flex
      className="bg-primary text-primary py-4 h-20 px-4 sm:px-10 lg:px-24 
     flex justify-between items-center w-full"
    >
      <Image
        src="logo.svg"
        width={100}
        height={100}
        alt="Lumis Logo"
        color="black"
      />
      <ul className="flex space-x-2 lg:space-x-8 font-bold text-sm lg:text-base">
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#location">Localização</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </Flex>
  );
};
