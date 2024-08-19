export const Header = () => {
  return (
    <header
      className="bg-primary text-primary py-12 "
      style={{
        backgroundImage: "url(/spa.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "2rem ",
        width: "100%",
      }}
    >
      <div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col ml-2 ">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Lumis
            </h1>
            <p className="text-lg  mb-8">
              Realçando sua Beleza Natural com Cuidados Profissionais
            </p>
          </div>

          <a
            href="#contact"
            className="bg-white text-primary py-2 px-6 rounded-lg font-semibold text-lg"
          >
            Agende uma Consulta
          </a>
        </div>
      </div>
    </header>
  );
};
