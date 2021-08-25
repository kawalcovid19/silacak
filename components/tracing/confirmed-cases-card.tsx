import { PlusIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { OutlineAnchorButton, PrimaryButton } from "../ui/button";

export function ConfirmedCasesCard() {
  return (
    <div className="lg:flex lg:items-center px-4 py-4 sm:px-6">
      <div className="flex-1 lg:grid lg:grid-cols-2 lg:gap-4">
        <div>
          <p className="text-sm font-semibold text-silacak-500">Muhammad Nuh</p>
          <p className="text-sm text-gray-900 font-semibold">PKM. KEL. PETOJO UTARA</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            No. HP: <strong className="font-bold text-gray-900">+62876085357</strong>
          </p>
          <p className="text-sm text-gray-500">
            Jumlah Kontak Erat: <strong className="font-bold text-gray-900">0</strong>
          </p>
        </div>
      </div>
      <div className="flex flex-none items-start mt-4 lg:mt-0 lg:ml-4 space-x-4">
        <PrimaryButton icon={PlusIcon}>Kontak Erat</PrimaryButton>
        <Link href="/dashboard/tracing/123" passHref>
          <OutlineAnchorButton>Lihat Detil</OutlineAnchorButton>
        </Link>
      </div>
    </div>
  );
}
