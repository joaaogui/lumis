import { Flex } from "@/components/flex";

export const ServicesImages = ({ className }: { className?: string }) => {
  return (
    <Flex className={`w-full gap-10 overflow-clip ${className}`}>
      <Flex className="gap-4 justify-center flex-col">
        <Flex
          className="max-w-64 w-40 h-64 rounded-xl"
          style={{
            backgroundImage: "url(/beauty.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Flex
          className="max-w-64 h-72 rounded-xl bg-cover"
          style={{
            backgroundImage: "url(/body.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Flex>
      <Flex className="items-center ">
        <Flex
          className="w-96 h-96 rounded-xl"
          style={{
            backgroundImage: "url(/face.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Flex>
    </Flex>
  );
};
