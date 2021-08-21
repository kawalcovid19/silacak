import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { DashboardPage, DashboardPageContent } from "~/components/layout/dashboard";
import { MainInformationBoard } from "~/components/tracing/main-information-board";
import { ContentBoard } from "~/components/ui/board/content-board";

export default function TracingCaseDetail() {
  const router = useRouter();

  console.log(router.query.caseId);

  return (
    <DashboardPage>
      <div className="flex flex-row space-x-4 p-4">
        <div className="flex w-8 h-8 items-center justify-center">
          <Link href="/dashboard/tracing">
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
          <h1 className="text-2xl font-semibold">Detail Kasus Konfirmasi</h1>
        </div>
      </div>
      <DashboardPageContent>
        <ContentBoard className="max-w-full mb-4">
          <MainInformationBoard />
        </ContentBoard>
        Content (Daftar Kontak Erat, etc.)
      </DashboardPageContent>
    </DashboardPage>
  );
}
