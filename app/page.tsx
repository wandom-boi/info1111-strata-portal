require('dotenv').config();
//import { ADDRESS } from "./config/config";
import Image from "next/image";
const address = process.env.ADDRESS || "34 Lorem St, Ultimo, NSW 2007"
console.log(process.env.ADDRESS);

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/the-strata-portal.png"
          alt="Logo"
          width={869}
          height={144}
          priority
        />
        <p>The internet portal related to management of the Strata Estate.</p>
        <p>{address}</p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto md:w-[200px]"
            href="/login"
          >
            Login to portal
          </a>
          
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[200px]"
            href="/strata-estate-about.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Strata Estate
          </a>
        </div>
      </main>
    </div>
  );
}