import * as React from "react";
import { FormEventHandler, ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children?: ReactNode;
  className?: string;
  placeholder?: string;
  onInput?: FormEventHandler<string> | undefined;
}

export const TextInput = (props: Props) => {
  const { className, placeholder } = props;
  return (
    <input
      className={clsx("border border-gray-300 rounded-sm p-3 w-full", className)}
      placeholder={placeholder}
    />
  );
};
