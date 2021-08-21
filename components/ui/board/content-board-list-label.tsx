import React, { ReactNode } from "react";

export function ContentBoardListLabel(props: { children?: ReactNode; label: String }) {
  const { children, label } = props;
  return (
    <div className="md:flex">
      <div className="flex md:justify-between md:w-4/12 mr-4">
        <div className="w-max font-extralight">{label}</div>
        <div className="md:visible invisible">:</div>
      </div>
      <div className="justify-start md:w-max sm:w-full pb-4 sm:pb-2 font-semibold">{children}</div>
    </div>
  );
}
