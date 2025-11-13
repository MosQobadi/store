"use client";

import React from "react";

type Align = "left" | "center" | "right";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align?: Align;
  className?: string;
}

export const Header: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  variant = "h2",
  align = "center",
  className = "",
}) => {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  //   FIXME: change any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Heading = variant as any; // to use variable tag names

  return (
    <div className={`flex flex-col ${alignment} mb-8 ${className}`}>
      <Heading className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
        {title}
      </Heading>

      {subtitle && (
        <p className="mt-2 text-sm text-gray-500 max-w-prose">{subtitle}</p>
      )}
    </div>
  );
};

export default Header;
