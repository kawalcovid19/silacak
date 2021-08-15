import { DashboardPage, DashboardPageContent } from "~/components/layout/dashboard";
import { ConfirmedCasesCard } from "~/components/tracing/confirmed-cases-card";
import { ConfirmedCasesHeader } from "~/components/tracing/confirmed-cases-header";
import { PrimaryButton } from "~/components/ui/button";
import { FormLabel, InputSelect } from "~/components/ui/forms";

export default function TracingDashboardIndex() {
  return (
    <DashboardPage>
      <ConfirmedCasesHeader>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm">Anda terdaftar pada:</p>
            <h1 className="text-lg font-semibold leading-[38px] lg:text-xl lg:leading-[38px]">
              Nama Kecamatan, DKI JAKARTA
            </h1>
          </div>
          <div className="flex-none w-full mt-4 space-y-2 lg:max-w-xs lg:mt-0 lg:ml-4">
            <FormLabel htmlFor="facility">Pilih PKM</FormLabel>
            <div className="flex items-end space-x-4">
              <InputSelect defaultValue="" id="facility" name="facility">
                <option value="">- Pilih PKM -</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </InputSelect>
              <PrimaryButton type="button">Tetapkan</PrimaryButton>
            </div>
          </div>
        </div>
      </ConfirmedCasesHeader>
      <DashboardPageContent>
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="text-sm lg:text-md text-gray-600">Anda mengakses data</p>
            <h2 className="text-xl lg:text-2xl text-gray-900 font-semibold">
              9911032 - PUSKESMAS SUKA MAJU
            </h2>
          </div>
          {/* TODO: use tabs on both mobile + desktop */}
          <div className="overflow-hidden rounded-md shadow bg-white">
            <ul className="divide-y divide-gray-200">
              <li>
                <ConfirmedCasesCard />
              </li>
              <li>
                <ConfirmedCasesCard />
              </li>
              <li>
                <ConfirmedCasesCard />
              </li>
            </ul>
          </div>
        </div>
      </DashboardPageContent>
    </DashboardPage>
  );
}
