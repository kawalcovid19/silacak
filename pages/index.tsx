import Head from "next/head";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { Container } from "~/components/ui/container";
import { LayoutRoot, LoginForm } from "~/components/layout/home";
import { HomePageContent } from "~/components/layout/home/home-content";

export default function Home() {
  const router = useRouter();

  const handleSubmit = () => {
    void router.push("/dashboard");
  };

  return (
    <LayoutRoot>
      <Head>
        <title>Silacak 3.0</title>
        <meta content="Sistem Informasi Pelacakan (Silacak) COVID-19" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <HomePageContent>
        <Container className="flex flex-row py-12">
          <div className="flex-1">
            <div className="w-full max-w-md mx-auto space-y-6 md:space-y-12">
              <header className="space-y-1">
                <span className="text-gray-600 uppercase">Selamat datang di layanan</span>
                <h1 className="text-6xl text-silacak-600 font-bold">Silacak 3.0</h1>
              </header>
              <div className="space-y-4">
                <LoginForm onSubmit={handleSubmit} />

                <div className="space-y-4">
                  <div className="bg-silacak-50 border-l-4 border-silacak-400 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <ExclamationCircleIcon
                          aria-hidden="true"
                          className="h-5 w-5 text-silacak-400"
                        />
                      </div>
                      <div className="ml-3 space-y-1">
                        <p className="text-sm text-silacak-700">
                          Mengalami kesulitan dalam login?{" "}
                          <a
                            className="font-medium underline text-silacak-700 hover:text-silacak-600"
                            href="#"
                          >
                            Hubungi Help Desk.
                          </a>
                        </p>
                        <p className="text-sm text-silacak-700">
                          Jam Operasional Helpdesk:{" "}
                          <span className="font-medium">08:00 - 17:00 WIB</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block ml-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Ilustrasi Silacak" src="/images/silacak-illust.svg" />
          </div>
        </Container>
      </HomePageContent>
    </LayoutRoot>
  );
}
