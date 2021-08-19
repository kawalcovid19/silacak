import { LayoutRoot } from "~/components/layout/home";
import { HomePageContent } from "~/components/layout/home/home-content";

export default function FallbackError() {
  const refreshPage = () => window.location.reload();

  return (
    <LayoutRoot>
      <HomePageContent>
        <div className="pt-16 pb-12 flex flex-col">
          <div className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-16">
              <div className="text-center">
                <h1 className="mt-2 text-4xl font-extrabold text-silacak-900 tracking-tight sm:text-5xl">
                  Ups!
                </h1>
                <p className="mt-2 text-base text-silacak-500">Terjadi kesalahan.</p>
                <div className="mt-6">
                  <button
                    className="text-base font-medium text-silacak-600"
                    onClick={refreshPage}
                    type="button"
                  >
                    Muat ulang halaman
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomePageContent>
    </LayoutRoot>
  );
}
