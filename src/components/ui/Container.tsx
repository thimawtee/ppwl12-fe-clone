import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  size = "default",
}) => {
  const sizes = {
    default: "max-w-[1100px]",
    wide: "max-w-[1300px]",
    narrow: "max-w-[800px]",
  };

  return (
    <div
      className={`mx-auto px-5 md:px-8 lg:px-10 ${sizes[size]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
