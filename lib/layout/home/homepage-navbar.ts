export interface NavbarItem {
  name: string;
  href: string;
  exact?: boolean;
  external?: boolean;
}

export const homepageNavbarItems: NavbarItem[] = [
  {
    name: "Beranda",
    href: "/",
    exact: true,
  },
  {
    name: "Panduan",
    href: "/panduan",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "Registrasi",
    href: "/registration",
    exact: true,
  },
  {
    name: "Cek Status Pendaftaran",
    href: "/registration-status",
  },
];
