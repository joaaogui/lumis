export const Flex = ({
  children,
  className = "",
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <div className={`flex ${className}`} {...props}>
      {children}
    </div>
  );
};
