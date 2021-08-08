import Head from "next/head";
import { LayoutRoot } from "~/components/layout/home";
import { ContentBoard } from "~/components/ui/board/content-board/content-board";

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
      <ContentBoard className="p-8 my-4">A</ContentBoard>
    </LayoutRoot>
  );
}
