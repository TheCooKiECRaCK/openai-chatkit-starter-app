// app/page.tsx
import Image from "next/image";
import App from "./App";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-neutral-950 flex flex-col items-center justify-center">
      {/* Logo + title */}
      <div className="mb-6 flex items-center gap-3">
        <Image
          src="/logo.svg"          // put your logo file in /public/logo.svg
          alt="ITKO x KMD logo"
          width={64}
          height={64}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-2xl font-semibold text-white">
            ITKO x KMD
          </span>
          <span className="text-sm text-neutral-400">
            Test løsning til KMD
          </span>
        </div>
      </div>

      {/* Your existing app with ChatKit inside */}
      <App />
    </main>
  );
}
