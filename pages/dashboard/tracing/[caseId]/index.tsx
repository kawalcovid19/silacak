import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { CaseInformationItem } from "~/components/cases/case-information-item";
import { AddCloseContactButton } from "~/components/close-contact/add-close-contact-button";
import { CloseContactCard } from "~/components/close-contact/close-contact-card";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageContent,
} from "~/components/layout/dashboard";
import { SectionCard, SectionCardHeader } from "~/components/ui/card";

export default function TracingCaseDetail() {
  const handleAddCloseContact = () => {
    console.log("clicked");
  };

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
          <div className="space-y-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-semibold leading-7 text-gray-900 sm:text-2xl sm:truncate">
                  Daftar Kontak Erat Pasien
                </h2>
              </div>
              <div className="hidden md:flex md:ml-4">
                {/* TODO: add floating version for mobile */}
                <AddCloseContactButton onClick={handleAddCloseContact} />
              </div>
            </div>
            <div>
              <div className="overflow-hidden rounded-md shadow bg-white">
                <ul className="divide-y divide-gray-200">
                  <li>
                    <CloseContactCard />
                  </li>
                  <li>
                    <CloseContactCard />
                  </li>
                  <li>
                    <CloseContactCard />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DashboardPageContent>
    </DashboardPage>
  );
}
