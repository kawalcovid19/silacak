import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { CloseContactDetailCard } from "~/components/close-contact/close-contact-detail-card";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageContent,
} from "~/components/layout/dashboard";

export default function TracingCaseContactDetail() {
  const router = useRouter();

  return (
    <DashboardPage>
      <DashboardPageHeader>
        <div className="flex flex-row space-x-4">
          <div className="flex w-8 h-8 items-center justify-center">
            <Link
              as={`/dashboard/tracing/${router.query.caseId}`}
              href="/dashboard/tracing/[caseId]"
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
            <h1 className="text-2xl font-semibold">Detail Kontak Erat</h1>
          </div>
        </div>
      </DashboardPageHeader>
      <DashboardPageContent>
        <CloseContactDetailCard />
      </DashboardPageContent>
    </DashboardPage>
  );
}
