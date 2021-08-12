import create from "zustand";

export interface DashboardStore {
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
  toggleSidebar: () => void;
}

export const useDashboardStore = create<DashboardStore>(set => ({
  sidebarOpen: false,
  setSidebarOpen: sidebarOpen => set(() => ({ sidebarOpen })),
  toggleSidebar: () => set(state => ({ sidebarOpen: !state.sidebarOpen })),
}));
