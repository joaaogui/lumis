export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-12 lg:p-24 bg-white">
      <header
        className="bg-primary text-primary py-12 "
        style={{
          width: "100%",
          textAlign: "left",
          height: "400px",
          // backgroundImage: "url(/woman.png)",
          backgroundSize: "contain",
          backgroundPosition: " right ", // Align image to the right and center it vertically
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading mb-4">
              Bem-vindo à Lumis Estética
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Realçando sua Beleza Natural com Cuidados Profissionais
            </p>
            <a
              href="#contact"
              className="bg-white text-primary py-2 px-6 rounded-lg font-semibold text-lg"
            >
              Agende uma Consulta
            </a>
          </div>
        </div>
      </header>

      <section id="services" className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-primary">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Tratamentos Faciais
              </h3>
              <p>
                Revitalize sua pele com nossos tratamentos faciais luxuosos
                projetados para nutrir e refrescar seu semblante.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Contorno Corporal</h3>
              <p>
                Alcance a forma corporal desejada com nossas soluções avançadas
                de contorno corporal que esculpem e tonificam.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Remoção de Pelos</h3>
              <p>
                Experimente uma pele suave e livre de pelos com nossos
                tratamentos de remoção de pelos seguros e eficazes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-primary text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            O que Nossos Clientes Dizem
          </h2>
          <div className="flex flex-col md:flex-row justify-around">
            <div className="bg-white text-primary p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:w-1/3">
              <p>
                O tratamento facial foi incrível! Minha pele nunca esteve tão
                fresca e suave.
              </p>
              <p className="mt-4 font-semibold">- Sarah L</p>
            </div>
            <div className="bg-white text-primary p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:w-1/3">
              <p>
                Estou encantada com os resultados do meu contorno corporal. A
                equipe foi muito profissional e atenciosa.
              </p>
              <p className="mt-4 font-semibold">- Jessica T</p>
            </div>
            <div className="bg-white text-primary p-6 rounded-lg shadow-lg md:w-1/3">
              <p>
                Excelente serviço de remoção de pelos. Me senti confortável e os
                resultados são fantásticos.
              </p>
              <p className="mt-4 font-semibold">- Emily R.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-primary">
            Entre em Contato
          </h2>
          <form className="bg-white p-8 rounded-lg shadow-lg mx-auto max-w-lg">
            <label
              htmlFor="name"
              className="block text-left mb-4 text-lg font-semibold"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              required
            />
            <label
              htmlFor="email"
              className="block text-left mb-4 text-lg font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              required
            />
            <label
              htmlFor="message"
              className="block text-left mb-4 text-lg font-semibold"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white py-2 px-6 rounded-lg font-semibold text-lg"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
