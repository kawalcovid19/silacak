import {
  DashboardPage,
  DashboardPageContent,
  DashboardPageHeader,
} from "~/components/layout/dashboard";

export default function TracingDashboardIndex() {
  return (
    <DashboardPage>
      <DashboardPageHeader pageTitle="Dashboard" />
      <DashboardPageContent>
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
      </DashboardPageContent>
    </DashboardPage>
  );
}
