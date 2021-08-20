import { useRouter } from "next/router";
import { DashboardPage, DashboardPageContent } from "~/components/layout/dashboard";
import { ConfirmedCasesHeader } from "~/components/tracing/confirmed-cases-header";

export default function Monitor() {
  const router = useRouter();

  console.log("caseId", router.query.caseId);

  return (
    <DashboardPage>
      <ConfirmedCasesHeader>Header</ConfirmedCasesHeader>
      <DashboardPageContent>Content</DashboardPageContent>
    </DashboardPage>
  );
}
