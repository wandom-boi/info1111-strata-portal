import Image from "next/image";

export default function ManagementTeam() {
  const teamMembers = [
    {
      role: "Chairman",
      name: "John Wilkinson",
      email: "chairman@highrise.com",
      phone: "(02) 9123 4567",
      responsibilities: "Oversees all strata operations and represents the owners corporation"
    },
    {
      role: "Treasurer",
      name: "Sarah Portersbourne",
      email: "treasurer@highrise.com",
      phone: "(02) 9123 4568",
      responsibilities: "Manages financial matters and budget planning"
    },
    {
      role: "Secretary",
      name: "Michael Chen",
      email: "secretary@highrise.com",
      phone: "(02) 9123 4569",
      responsibilities: "Handles administrative tasks and communication"
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
                href="/properties"
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
          <h1 className="text-4xl font-bold text-center mb-12">Management Team</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.role} className="flex flex-col p-6 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]">
                <h2 className="text-2xl font-semibold mb-2">{member.role}</h2>
                <h3 className="text-xl mb-4">{member.name}</h3>
                <div className="space-y-2">
                  <p><strong>Email:</strong> {member.email}</p>
                  <p><strong>Phone:</strong> {member.phone}</p>
                  <p className="mt-4"><strong>Responsibilities:</strong></p>
                  <p>{member.responsibilities}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}