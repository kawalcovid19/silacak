import { PlusIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";
import { PrimaryButton, ButtonProps } from "../ui/button";

export const AddCloseContactButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...rest }, ref) => {
    return (
      <PrimaryButton block icon={PlusIcon} ref={ref} type="button" {...rest}>
        Tambah Kontak Erat Baru
      </PrimaryButton>
    );
  }
);

AddCloseContactButton.displayName = "AddCloseContactButton";
