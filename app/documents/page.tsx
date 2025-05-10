import Image from "next/image";

export default function Documents() {
  const meetings = [
    {
      id: 1,
      title: "March 2025 Management Meeting",
      date: "2025-03-01",
      document: "/documents/minutes.txt"
    },
    {
      id: 2,
      title: "February 2025 Management Meeting",
      date: "2025-02-01",
      document: "/documents/minutes.txt"
    },
    {
      id: 3,
      title: "January 2025 Management Meeting",
      date: "2025-01-01",
      document: "/documents/minutes.txt"
    }
  ];

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
              className="h-8 w-auto ml-2"
            />
            <div className="flex items-center space-x-4">
            <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm px-4 py-2"
                href="/dashboard"
              >
                Home
              </a>
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm px-4 py-2"
                href="/maintenance"
              >
                Maintenance
              </a>
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm px-4 py-2"
                href="/property"
              >
                Properties
              </a>
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm px-4 py-2"
                href="/management"
              >
                Team
              </a>
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm px-4 py-2"
                href="/documents"
              >
                Documents
              </a>
              <a
                className="rounded-full border border-solid border-white transition-colors flex items-center justify-center bg-black text-white gap-2 hover:bg-[#383838] font-medium text-sm px-4 py-2 ml-4"
                href="/"
              >
                Log Out
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Documents</h1>

          <div className="space-y-4">
            {meetings.map((meeting) => (
              <a
                key={meeting.id}
                href={meeting.document}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full"
              >
                <div className="flex items-center justify-between p-6 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-[1.02] bg-white dark:bg-gray-800">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {meeting.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {new Date(meeting.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <div className="ml-4">
                    <svg 
                      className="w-6 h-6 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}