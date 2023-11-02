import { getAuthSession } from "@/src/lib/auth";
import { signIn } from "next-auth/react";

export default async function Home() {
  const session = await getAuthSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
    </main>
  );
}
