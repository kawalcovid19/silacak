import { PlusIcon } from "@heroicons/react/outline";
import { OutlineButton, PrimaryButton } from "../ui/button";

export function ConfirmedCasesCard() {
  return (
    <div className="md:flex md:items-center px-4 py-4 sm:px-6">
      <div className="space-y-2 md:flex-1">
        <p className="text-sm font-semibold text-silacak-500">Muhammad Nuh</p>
        <p className="text-sm text-gray-500">
          No. HP: <strong className="font-bold text-gray-900">+62876085357</strong>
        </p>
      </div>
      <div className="flex flex-none items-start mt-4 lg:mt-0 lg:ml-4 space-x-4">
        <PrimaryButton icon={PlusIcon}>Kontak Erat</PrimaryButton>
        <OutlineButton>Lihat Detil</OutlineButton>
      </div>
    </div>
  );
}
