import { LayoutRoot, LoginForm } from "~/components/layout/home";
import { HomePageContent } from "~/components/layout/home/home-content";
import { Container } from "~/components/ui/container";

export default function RegistrationStatus() {
  return (
    <LayoutRoot>
      <HomePageContent className="bg-gray-100">
        <Container className="w-full max-w-prose mx-auto">
          <div className="bg-white shadow-md rounded-lg">
            <div className="w-full max-w-xl mx-auto px-4 py-6 space-y-4">
              <h1 className="text-xl text-silacak-600 text-center">
                CEK STATUS PENDAFTARAN TRACER
              </h1>
              <div className="space-y-4">
                <LoginForm />
              </div>
            </div>
          </div>
        </Container>
      </HomePageContent>
    </LayoutRoot>
  );
}
