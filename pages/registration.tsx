import Head from "next/head";
import { LayoutRoot } from "~/components/layout/home";
import { ContentBoard } from "~/components/ui/board/content-board";
import { ContentBoardTitle } from "~/components/ui/board/content-board-title";
import { ContentBoardSubtitle } from "~/components/ui/board/content-board-subtitle";

import { RegistrationInfoMessage } from "~/components/registration/registration-info-message";
import { RegistrationForm } from "~/components/registration/registration-form";
import { HomePageContent } from "~/components/layout/home/home-content";

export default function RegistrationPage() {
  return (
    <LayoutRoot>
      <Head>
        <title>Silacak 3.0 - Registration</title>
        <meta
          content="Sistem Informasi Pelacakan (Silacak) COVID-19 - Pendaftaran Tracer"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <HomePageContent className="bg-gray-100">
        <ContentBoard className="p-8 my-6 lg:my-12 space-y-6">
          <div className="space-y-3">
            <ContentBoardTitle>Pendaftaran Tracer</ContentBoardTitle>
            <ContentBoardSubtitle>
              Isi dengan lengkap dan ingat Nama ID dan Kata Sandi Anda
            </ContentBoardSubtitle>
          </div>
          <RegistrationForm />
          <RegistrationInfoMessage />
        </ContentBoard>
      </HomePageContent>
    </LayoutRoot>
  );
}
