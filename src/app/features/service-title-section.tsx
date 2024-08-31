import { Flex } from "@/components/flex";
import { Icon } from "@/components/icon";

export const ServiceTitleSection = ({
  title,
  icon,
  size,
}: {
  title: string;
  icon: string;
  size?: number;
}) => {
  const serviceTitleClass = "items-center gap-4  text-lg max-w-64";

  return (
    <Flex className={serviceTitleClass}>
      <Icon imagePath={icon} size={size} />

      <h3 className="text-primary font-semibold ">{title}</h3>
    </Flex>
  );
};
