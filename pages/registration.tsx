import Head from "next/head";
import { LayoutRoot } from "~/components/layout/home";
import { ContentBoard } from "~/components/ui/board/content-board/content-board";
import { FormTitle } from "~/components/ui/forms/form-title";
import { FormSubtitle } from "~/components/ui/forms/form-subtitle";

import { RegistrationInfoMessage } from "~/components/registration/registration-info-message";
import { RegistrationForm } from "~/components/registration/registration-form";

export default function Home() {
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
      <ContentBoard className="p-8 my-4 w-">
        <FormTitle>Pendaftaran Tracer</FormTitle>
        <FormSubtitle>Isi dengan lengkap dan ingat Nama ID dan Kata Sandi Anda</FormSubtitle>
        <RegistrationForm />
        <RegistrationInfoMessage />
      </ContentBoard>
    </LayoutRoot>
  );
}
