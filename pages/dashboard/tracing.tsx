import { DashboardPage, DashboardPageContent } from "~/components/layout/dashboard";
import { ConfirmedCasesHeader } from "~/components/tracing/confirmed-cases-header";

export default function TracingDashboardIndex() {
  return (
    <DashboardPage>
      <ConfirmedCasesHeader>
        <p>Anda terdaftar pada:</p>
      </ConfirmedCasesHeader>
      <DashboardPageContent>
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
      </DashboardPageContent>
    </DashboardPage>
  );
}
