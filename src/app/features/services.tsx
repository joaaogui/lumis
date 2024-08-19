import { card, titleClass } from "./classes";

export const Services = () => {
  return (
    <section id="services" className="py-12">
      <div className="container mx-auto ">
        <h2 className={titleClass}>Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={card}>
            <h3 className="text-xl text-primary font-semibold mb-4">
              Tratamentos Faciais
            </h3>
            <p>
              Revitalize sua pele com nossos tratamentos faciais luxuosos
              projetados para nutrir e refrescar seu semblante.
            </p>
          </div>
          <div className={card}>
            <h3 className="text-xl text-primary font-semibold mb-4">
              Contorno Corporal
            </h3>
            <p>
              Alcance a forma corporal desejada com nossas soluções avançadas de
              contorno corporal que esculpem e tonificam.
            </p>
          </div>
          <div className={card}>
            <h3 className="text-xl text-primary font-semibold mb-4">
              Remoção de Pelos
            </h3>
            <p>
              Experimente uma pele suave e livre de pelos com nossos tratamentos
              de remoção de pelos seguros e eficazes.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex justify-center gap-4">
            <div className={card}>
              <strong className="text-primary">FACIAL</strong>
              <ul>
                <li>Limpeza de pele</li>
                <li>Peeling químico</li>
                <li>Peeling de diamante</li>
                <li>Drenagem facial</li>
                <li>Drenagem facial pós operatória</li>
                <li>Hidratação facial</li>
                <li>Radiofrequência facial</li>
                <li>Microagulhamento</li>
              </ul>
            </div>
            <div className={card}>
              <strong className="text-primary">CORPORAL</strong>
              <ul>
                <li>Drenagem linfática</li>
                <li>Massagem gestacional</li>
                <li>Massagem pós operatória</li>
                <li>Enzima para gordura localizada e flacidez</li>
                <li>Harmonização corporal (criolipólise aparelho)</li>
                <li>
                  <strong className="text-primary">Aparelhos</strong>
                  <ul>
                    <li>Ultrassom</li>
                    <li>Corrente russa</li>
                    <li>Radiofrequência</li>
                    <li>Endermologia</li>
                  </ul>
                </li>
                <li>Hidrolipoclasia não aspirativa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
