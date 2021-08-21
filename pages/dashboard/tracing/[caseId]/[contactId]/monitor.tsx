import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CaseInformationItem } from "~/components/cases/case-information-item";
import {
  DashboardPage,
  DashboardPageContent,
  DashboardPageHeader,
} from "~/components/layout/dashboard";
import { OutlineButton, PrimaryButton } from "~/components/ui/button";
import { SectionCard, SectionCardHeader } from "~/components/ui/card";

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
      <DashboardPageContent>
        <div className="space-y-4">
          <SectionCard className="space-y-6">
            <div className="space-y-4">
              <SectionCardHeader title="INFORMASI UTAMA" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <CaseInformationItem label="NIK" value="3401230000000001" />
                <CaseInformationItem label="Nama Pasien" value="Muhammad Nuh" />
                <CaseInformationItem label="Tanggal Lahir" value="13 Juni 1995 (26 thn 1 bln)" />
                <CaseInformationItem label="Jenis Kelamin" value="Laki-laki" />
                <CaseInformationItem label="No Telp/HP" value="085847475454" />
                <CaseInformationItem label="Alamat" value="Jl HR Rasuna Said Kav C17" />
              </div>
            </div>
            <div className="space-y-6 pt-6">
              <SectionCardHeader title="PEMANTAUAN" />
              <div className="space-y-2">
                <div className="font-light">Tanggal dilakukan kunjungan ulang</div>
                <div className="text-2xl font-bold">Minggu, 08 Agustus 2021</div>
              </div>
              <div className="space-y-4">
                <div>Jenis Karantina</div>
                <div className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
                  <div>
                    <PrimaryButton type="button">Tidak Karantina</PrimaryButton>
                  </div>
                  <div>
                    <OutlineButton type="button">Karantina mandiri di rumah</OutlineButton>
                  </div>
                  <div>
                    <OutlineButton type="button">
                      Karantina mandiri di fasilitas khusus
                    </OutlineButton>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>Hasil Pemantauan</div>
                <div className="lg:flex lg:space-x-2 space-y-4 lg:space-y-0">
                  <div>
                    <PrimaryButton type="button">Sehat</PrimaryButton>
                  </div>
                  <div>
                    <OutlineButton type="button">Bergejala (Suspek)</OutlineButton>
                  </div>
                  <div>
                    <OutlineButton type="button">Rujuk RS</OutlineButton>
                  </div>
                  <div>
                    <OutlineButton type="button">Meninggal</OutlineButton>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="w-full border-t border-gray-300" />
                <PrimaryButton type="button">Simpan Data</PrimaryButton>
              </div>
            </div>
          </SectionCard>
        </div>
      </DashboardPageContent>
    </DashboardPage>
  );
}
