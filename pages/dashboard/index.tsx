import {
  DashboardHeader,
  DashboardMain,
  DashboardRoot,
  DashboardSidebar,
} from "~/components/layout/dashboard";

export default function DashboardIndex() {
  return (
    <DashboardRoot>
      <DashboardSidebar />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <DashboardHeader />
        <DashboardMain>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
          </div>
        </DashboardMain>
      </div>
    </DashboardRoot>
  );
}
