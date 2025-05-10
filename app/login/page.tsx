import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Fixed Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 bg-background border-b border-black/[.08] dark:border-white/[.145] z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Image
              src="/the-strata-portal.png"
              alt="Logo"
              width={200}
              height={40}
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="pt-24 px-8 pb-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center mb-8">LOGIN</h1>

          <div className="flex flex-col items-center gap-4">
            <label htmlFor="username" className="text-left">Username</label>
            <input
              type="text"
              id="username"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#7a7a7a] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto md:w-[400px]"
            />

            <label htmlFor="pw" className="text-left">Password</label>
            <input
              type="password"
              id="pw"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#7a7a7a] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto md:w-[400px]"
            />

            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto md:w-[200px]"
              href="/dashboard"
            >
              Login to portal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}