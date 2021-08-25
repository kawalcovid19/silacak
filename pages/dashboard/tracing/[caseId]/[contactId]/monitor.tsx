import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { DashboardPage, DashboardPageContent } from "~/components/layout/dashboard";
import { ConfirmedCasesHeader } from "~/components/tracing/confirmed-cases-header";

export default function Monitor() {
  const router = useRouter();

  return (
    <DashboardPage>
      <ConfirmedCasesHeader>
        <div className="flex flex-row space-x-4">
          <div className="flex w-8 h-8 items-center justify-center">
            <Link
              as={`/dashboard/tracing/${router.query.caseId}/${router.query.contactId}`}
              href="/dashboard/tracing/[caseId]/[contactId]"
            >
              <a
                aria-label="Kembali"
                className="text-silacak-500 hover:text-silacak-700"
                title="Kembali"
              >
                <ArrowCircleLeftIcon aria-hidden className="w-8 h-8" />
              </a>
            </Link>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Tambah Pemantauan</h1>
          </div>
        </div>
      </ConfirmedCasesHeader>
      <DashboardPageContent>Content</DashboardPageContent>
    </DashboardPage>
  );
}
