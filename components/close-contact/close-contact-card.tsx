import { PlusIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { OutlineAnchorButton, PrimaryButton } from "../ui/button";

export function CloseContactCard() {
  const router = useRouter();

  return (
    <div className="lg:flex lg:items-center px-4 py-4 sm:px-6">
      <div className="flex-1 lg:grid lg:grid-cols-2 lg:gap-4">
        <div>
          <p className="text-sm font-semibold text-silacak-500">Chairul Amar</p>
          <p className="text-sm text-gray-900 font-semibold">PKM. KEL. PETOJO UTARA</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            No. HP: <strong className="font-bold text-gray-900">+62876085357</strong>
          </p>
          <p className="text-sm text-gray-500">
            Karantina Hari Ke: <strong className="font-bold text-gray-900">0</strong>
          </p>
        </div>
      </div>
      <div className="flex flex-none items-start mt-4 lg:mt-0 lg:ml-4 space-x-4">
        <PrimaryButton icon={PlusIcon}>Pemantauan</PrimaryButton>
        <Link
          as={`/dashboard/tracing/${router.query.caseId}/def`}
          href="/dashboard/tracing/[caseId]/[contactId]"
          passHref
        >
          <OutlineAnchorButton>Lihat Detil</OutlineAnchorButton>
        </Link>
      </div>
    </div>
  );
}
