import { ShieldCheckIcon, ViewGridIcon } from "@heroicons/react/outline";

export interface SidebarMenuItem {
  name: string;
  href: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  exact?: boolean;
  external?: boolean;
}

export const sidebarMenu: SidebarMenuItem[] = [
  {
    name: "Daftar Tracing",
    href: "/dashboard/tracing",
    icon: ViewGridIcon,
  },
  {
    name: "Daftar Pemantauan",
    href: "/dashboard/monitoring",
    icon: ShieldCheckIcon,
  },
];
