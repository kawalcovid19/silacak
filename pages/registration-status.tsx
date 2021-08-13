import { CheckAccountForm } from "~/components/check-account";
import { LayoutRoot } from "~/components/layout/home";
import { HomePageContent } from "~/components/layout/home/home-content";
import { Container } from "~/components/ui/container";

export default function RegistrationStatus() {
  return (
    <LayoutRoot>
      <HomePageContent className="sm:bg-gray-100 bg-white">
        <Container className="w-full max-w-prose mx-auto">
          <div className="bg-white sm:shadow-md rounded-lg px-4 py-8 sm:px-16 sm:py-8 max-w-lg m-auto">
            <div className="space-y-10 ">
              <h1 className="text-xl text-silacak-600 text-center uppercase">
                Cek Status Pendaftaran Tracer
              </h1>
              <CheckAccountForm />
            </div>
          </div>
        </Container>
      </HomePageContent>
    </LayoutRoot>
  );
}
