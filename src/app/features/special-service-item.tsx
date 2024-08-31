import { Flex } from "@/components/flex";
import { FaStar } from "react-icons/fa";

export const SpecialServiceItem = ({
  label,
  description,
}: {
  label: string;
  description: string;
}) => {
  return (
    <Flex className="flex-col">
      <Flex className="items-center gap-2">
        <FaStar color="gold" />
        <p className="text-lg font-bold">{label}</p>
      </Flex>
      <p className="text-sm text-gray-700 py-2">{description}</p>
    </Flex>
  );
};
