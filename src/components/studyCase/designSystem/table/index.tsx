import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
};

const Table = ({ title, subtitle, className, children }: Props) => {
  return (
    <div
      className={`w-full md:w-1/2 border-[1px] border-gray rounded-10 p-mobile flex flex-col gap-50 md:gap-20 justify-between ${
        className && className
      } overflow-y-scroll`}
    >
      <div className="flex justify-between w-full">
        <p className="text-white text-text">{title}</p>
        {subtitle && <p className="text-text text-main">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
};

export default Table;
