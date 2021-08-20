import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageContent,
} from "~/components/layout/dashboard";

export default function TracingCaseDetail() {
  const router = useRouter();

  console.log(router.query.caseId);

  return (
    <DashboardPage>
      <DashboardPageHeader>
        <div className="space-y-4">
          <div className="flex flex-row space-x-4">
            <div className="flex w-8 h-8 items-center justify-center">
              <Link href="/dashboard/tracing">
                <a className="text-silacak-500 hover:text-silacak-700" title="Kembali">
                  <span className="sr-only">Kembali</span>
                  <ArrowCircleLeftIcon aria-hidden className="w-8 h-8" />
                </a>
              </Link>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Detail Kasus Konfirmasi</h1>
            </div>
          </div>
          <div>Header Sub (Informasi Utama, etc.)</div>
        </div>
      </DashboardPageHeader>
      <DashboardPageContent>Content (Daftar Kontak Erat, etc.)</DashboardPageContent>
    </DashboardPage>
  );
}
