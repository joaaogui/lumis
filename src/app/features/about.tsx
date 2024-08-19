import { titleClass } from "./classes";

export const About = () => {
  return (
    <section id="mission-values-vision" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className={titleClass}>Missão, Valores e Visão</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">Missão</h3>
            <p>
              Temos como missão promover o bem estar e em parceria com
              nossos(as) pacientes encontrar e fazer manifestar-se a sua melhor
              versão cobrindo níveis físicos e psicológicos. Oferecendo
              tratamentos de saúde e beleza de alta alta qualidade executados
              por profissionais treinados e qualificados com toda a dedicação
              que você merecem.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">Valores</h3>
            <p>
              Ressaltamos que os principais princípios éticos da honestidade,
              confiabilidade, objetividade, cuidado, respeito, veracidade e
              responsabilidade são norteados no nosso atendimento. A excelência
              no atendimento, treinamentos constantes, inovações nos
              procedimentos, nos faz garantir a segurança e satisfação dos
              nossos clientes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">Visão</h3>
            <p>
              pretendemos nos tornar referência na aplicação e realizações de
              procedimentos de alta qualidade que evoquem a beleza e a
              autoestima que habitam em cada um. Possibilitando o
              desenvolvimento do amor próprio, cuidado com a aparência e,
              sobretudo, o bem-estar e saúde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
