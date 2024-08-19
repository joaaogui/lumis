import { titleClass } from "./classes";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-primary text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className={titleClass}>O que Nossos Clientes Dizem</h2>
        <div className="flex flex-col md:flex-row justify-around gap-4">
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
  );
};
