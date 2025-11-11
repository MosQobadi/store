import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Container = ({
  children,
  className = "",
  id,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`w-full max-w-[1500px] mx-auto px-6 lg:px-10  ${className}`}
    >
      {children}
    </section>
  );
};
