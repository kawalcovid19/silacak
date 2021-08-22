import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { CaseInformationItem } from "~/components/cases/case-information-item";
import { CloseContactList } from "~/components/close-contact/close-contact-list";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageContent,
} from "~/components/layout/dashboard";
import { SectionCard, SectionCardHeader } from "~/components/ui/card";

export default function TracingCaseDetail() {
  const router = useRouter();

  console.log(router.query.caseId);

  return (
    <DashboardPage>
      <DashboardPageHeader variant="alternate">
        <div className="flex flex-row space-x-4">
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
      </DashboardPageHeader>
      <DashboardPageContent>
        <div className="space-y-8">
          <SectionCard className="space-y-6">
            <div className="space-y-4">
              <SectionCardHeader title="Informasi Utama" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <CaseInformationItem label="NIK" value="3401230000000001" />
                <CaseInformationItem label="Nama Pasien" value="Muhammad Nuh" />
                <CaseInformationItem label="Tanggal Lahir" value="13 Juni 1995 (26 thn 1 bln)" />
                <CaseInformationItem label="Jenis Kelamin" value="Laki-laki" />
                <CaseInformationItem label="No Telp/HP" value="085847475454" />
                <CaseInformationItem label="Alamat" value="Jl HR Rasuna Said Kav C17" />
              </div>
            </div>
          </SectionCard>
          <CloseContactList />
        </div>
      </DashboardPageContent>
    </DashboardPage>
  );
}
