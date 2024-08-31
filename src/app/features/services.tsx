import { Flex } from "@/components/flex";
import { titleClass } from "./classes";
import { ServiceTitleSection } from "./services/service-title-section";
import { ServicesImages } from "./services/services-images";
import { SpecialServiceItem } from "./services/special-service-item";

export const Services = () => {
  const serviceSectionClass = "flex-col max-w-96 ";

  return (
    <section id="services" className="my-12 pl-10 w-full text-primary">
      <h2 className={titleClass}>Nossos Serviços</h2>
      <Flex>
        <Flex className="w-2/3 justify-center gap-4">
          <Flex className={serviceSectionClass}>
            <ServiceTitleSection
              title="Tratamentos Faciais"
              icon="/icons/facial.png"
            />
            <Flex className="flex-col mt-6">
              <SpecialServiceItem
                label="Limpeza de pele"
                description="Tratamento essencial que remove impurezas, desobstrui os poros e renova a vitalidade da pele."
              />

              <SpecialServiceItem
                label="Peeling de diamante"
                description="Esfoliação avançada que suaviza a pele, removendo células mortas e promovendo uma textura mais uniforme."
              />

              <SpecialServiceItem
                label="Drenagem facial"
                description="Técnica de massagem que reduz o inchaço, melhora a circulação e deixa a pele mais firme e tonificada."
              />
              <p className="font-bold">E mais: </p>
              <p>Peeling químico</p>
              <p>Drenagem facial pós operatória</p>
              <p>Hidratação facial</p>
              <p>Radiofrequência facial</p>
              <p>Microagulhamento</p>
            </Flex>
          </Flex>
          <Flex className={serviceSectionClass}>
            <ServiceTitleSection
              title="Tratamentos Corporais"
              icon="/icons/massage.png"
            />
            <Flex className="flex-col mt-6">
              <SpecialServiceItem
                label="Drenagem Linfática"
                description="Massagem suave que melhora a circulação e ajuda a eliminar toxinas, reduzindo inchaços e promovendo bem-estar."
              />

              <SpecialServiceItem
                label="Harmonização Corporal (Criolipólise)"
                description="Tratamento que congela e elimina a gordura localizada, redefinindo o contorno corporal sem cirurgia."
              />

              <SpecialServiceItem
                label="Radiofrequência"
                description="Tecnologia que aquece a pele para estimular colágeno, melhorando a firmeza e combatendo flacidez e celulite."
              />
              <p className="font-bold">E mais: </p>
              <p>Massagem gestacional</p>
              <p>Massagem pós operatória</p>
              <p>Enzima para gordura localizada e flacidez</p>
              <p>Hidrolipoclasia não aspirativa</p>

              <Flex className="flex-col pt-4">
                <ServiceTitleSection
                  title="Aparelhos"
                  icon="/icons/device.png"
                  size={36}
                />
                <Flex className="flex-col mt-4">
                  <p>Ultrassom</p>
                  <p>Corrente russa</p>
                  <p>Endermologia</p>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <ServicesImages className="w-1/3" />
      </Flex>
    </section>
  );
};
