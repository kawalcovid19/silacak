import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  DashboardPage,
  DashboardPageContent,
  DashboardPageHeader,
} from "~/components/layout/dashboard";

export default function Monitor() {
  const router = useRouter();

  return (
    <DashboardPage>
      <DashboardPageHeader variant="alternate">
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
      </DashboardPageHeader>
      <DashboardPageContent>Content</DashboardPageContent>
    </DashboardPage>
  );
}
