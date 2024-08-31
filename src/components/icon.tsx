export const Icon = ({
  imagePath,
  size = 60,
  color,
}: {
  imagePath: string;
  size?: number;
  color?: string;
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${imagePath})`,
        backgroundSize: "cover",
        filter: color ? `opacity(0.5) drop-shadow(0 0 0 ${color})` : "none",
      }}
      aria-label="Icon"
    />
  );
};
