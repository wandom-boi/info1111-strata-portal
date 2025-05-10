import Image from "next/image";

export default function Home() {
  // Sample events data - you can replace these with real events
  const events = [
    {
      id: 1,
      title: "Annual General Meeting",
      date: "2025-07-15",
      description: "Join us for the yearly AGM to discuss building improvements and budget planning.",
      image: "/events/meeting.jpg", // You'll need to add these images to your public folder
      type: "upcoming"
    },
    {
      id: 2,
      title: "Fire Safety Inspection",
      date: "2025-05-10",
      description: "Regular fire safety inspection will be conducted. Please ensure access to your unit.",
      image: "/events/fire-safety.jpg",
      type: "upcoming"
    },
    {
      id: 3,
      title: "Building Maintenance Day",
      date: "2025-02-28",
      description: "General maintenance and cleaning of common areas.",
      image: "/events/maintenance-work.jpg",
      type: "past"
    },
    {
      id: 4,
      title: "Community Social Event",
      date: "2025-01-05",
      description: "Successful community gathering in the rooftop garden.",
      image: "/events/gathering.jpg",
      type: "past"
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
        <main className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Welcome to The Strata Estate</h1>
          
          {/* Region Information */}
          <div className="mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Server Information</h2>
            <div id="region-info" className="text-gray-600 dark:text-gray-400">
              Loading region information...
            </div>
          </div>

          {/* Bulletin Board Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Community Events</h2>
            
            {/* Upcoming Events */}
            <div className="mb-12">
              <h3 className="text-2xl font-medium mb-4 text-green-600">Upcoming Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events
                  .filter(event => event.type === "upcoming")
                  .map(event => (
                    <div 
                      key={event.id} 
                      className="group flex flex-col rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6 bg-white dark:bg-gray-800">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{event.title}</h4>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {new Date(event.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Past Events */}
            <div>
              <h3 className="text-2xl font-medium mb-4 text-gray-600">Past Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events
                  .filter(event => event.type === "past")
                  .map(event => (
                    <div 
                      key={event.id} 
                      className="group flex flex-col rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-[1.02] opacity-75 hover:opacity-100"
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6 bg-white dark:bg-gray-800">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{event.title}</h4>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {new Date(event.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Existing Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ... existing grid items ... */}
          </div>
        </main>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          fetch('/api/region')
            .then(response => response.json())
            .then(data => {
              document.getElementById('region-info').innerHTML = 
                \`<p>Region: \${data.region}</p>
                 <p>Message: \${data.message}</p>
                 <p>Environment: \${data.environment}</p>
                 <p>Last Updated: \${data.timestamp}</p>\`;
            })
            .catch(error => {
              document.getElementById('region-info').innerHTML = 
                'Error loading region information';
            });
        `
      }} />
    </div>
  );
}