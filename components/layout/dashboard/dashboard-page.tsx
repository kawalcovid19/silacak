import { DashboardNav } from "./dashboard-nav";
import { DashboardMain } from "./dashboard-main";
import { DashboardRoot } from "./dashboard-root";
import { DashboardSidebar } from "./dashboard-sidebar";

export const DashboardPage: React.FC = ({ children }) => {
  return (
    <DashboardRoot>
      <DashboardSidebar />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <DashboardNav />
        <DashboardMain>{children}</DashboardMain>
      </div>
    </DashboardRoot>
  );
};
