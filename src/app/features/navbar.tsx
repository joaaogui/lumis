import { Flex } from "@/components/flex";

export const Navbar = () => {
  return (
    <Flex
      className="bg-primary text-primary py-4 h-20 px-10
    container mx-auto flex justify-between items-center w-full"
    >
      <a href="/" className=" font-heading text-5xl ">
        Lumis
      </a>
      <ul className="flex space-x-8 font-bold text-base">
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#testimonials">Depoimentos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </Flex>
  );
};
