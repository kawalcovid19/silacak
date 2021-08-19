import Head from "next/head";
import Link from "next/link";
import { LayoutRoot } from "~/components/layout/home";
import { HomePageContent } from "~/components/layout/home/home-content";

export default function FourOhFour() {
  return (
    <LayoutRoot>
      <Head>
        <title>Silacak 3.0 - Halaman Tidak Ditemukan</title>
        <meta
          content="Sistem Informasi Pelacakan (Silacak) COVID-19 - Halaman Tidak Ditemukan"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <HomePageContent>
        <div className="px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="py-16 sm:py-24 max-w-max mx-auto">
            <div className="sm:flex">
              <p className="text-4xl font-extrabold text-silacak-600 sm:text-5xl">404</p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-extrabold text-silacak-900 tracking-tight sm:text-5xl">
                    Halaman tidak ditemukan
                  </h1>
                  <p className="mt-1 text-base text-gray-500">
                    Coba periksa kembali URL yang dimasukkan dan coba lagi.
                  </p>
                </div>
                <div className="mt-6 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                  <Link href="/">
                    <a className="text-base font-medium text-silacak-600">
                      <span aria-hidden="true"> &larr;</span> Kembali ke halaman utama
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomePageContent>
    </LayoutRoot>
  );
}
