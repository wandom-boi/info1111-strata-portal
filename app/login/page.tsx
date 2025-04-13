export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <img src="/the-strata-portal.png" className="absolute top-5 left-5 w-108 h-16" />
      <h1 className="text-center mt-8 text-4xl font-bold">LOGIN</h1>

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
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login to portal
          </a>
      </div>
    </div>
  );
}