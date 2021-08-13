import { DashboardPage, DashboardPageContent } from "~/components/layout/dashboard";
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
            <p className="text-lg font-semibold leading-[38px]">Nama Kecamatan, DKI JAKARTA</p>
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
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
      </DashboardPageContent>
    </DashboardPage>
  );
}
