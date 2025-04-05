import Image from "next/image";

export default function Home() {
  return (
    
        
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>LOGIN</h1>

        <div className="flex gap-3 items-center flex-col sm:flex-row">
        
          <p>Username</p>

          <input 
            type="text" id="username" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#0a0a0a] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto md:w-[100px]">
          </input>

          <p>Password</p>
          <input
            type='password' id='pw' className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#0a0a0a] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto md:w-[100px]">

          </input>

          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto md:w-[200px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login to portal
          </a>
          
        </div>
      </main>
    </div>
  );
}
