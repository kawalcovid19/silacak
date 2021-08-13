import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DashboardIndex() {
  const router = useRouter();

  useEffect(() => {
    void router.push("/dashboard/tracing");
  }, [router]);

  return <div />;
}
