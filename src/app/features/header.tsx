import { Flex } from "@/components/flex";

export const Header = () => {
  return (
    <header
      className="bg-primary text-primary py-12 w-full mb-10"
      style={{
        backgroundImage: "url(/spa.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <Flex className="container px-24 h-80 flex-col justify-center">
        <div className="flex flex-col ml-2 ">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Lumis Estética
          </h1>
          <p className="text-lg  mb-8">
            Realçando sua Beleza Natural com Cuidados Profissionais
          </p>
        </div>

        <a
          href="#contact"
          className="bg-white text-primary py-2 px-6 rounded-lg font-semibold text-lg w-fit"
        >
          Agende sua Consulta
        </a>
      </Flex>
    </header>
  );
};
