import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Airspace Reservation Tool',
    image: 'images/vlara.png',
    description:
      'Web-based tool for Simulating Airspace Reservations, inspired by its real-life counterpart. It provides VATSIM controllers, pilots, and vSO organizations with interactive Area Reservations, combining features of the LARA Web Booking Client (WBC) and the Airspace Management Cell (AMC) Working Position into a single application.',
    tech: ['React', 'MUI', 'Node.js', 'Mapbox'],
    live: 'https://lara.lusep.fi/',
    repo: 'https://github.com/ottotuhkunen/virtual-lara-airspace-data/tree/main',
  },
  {
    title: 'Airport Weather Display',
    image: 'images/awos.png',
    description:
      "The Automatic Weather Observing System (AWOS) displays weather information useful for air traffic controllers connected to the VATSIM network in Finland. The app utilizes OAuth2 Authentication method which verifies user's VATSIM status.",
    tech: ['React', 'Node.js', 'OAuth2'],
    live: 'https://wx.lusep.fi/',
    repo: 'https://github.com/ottotuhkunen/awos-frontend',
  },
  {
    title: 'Sailing App',
    image: 'images/sailing.png',
    description:
      'Particularly useful tool for sailing races, or any other sea activity, with all the necessary information for safe navigation. The map base is Mapbox GL and the data is fetched from several Open Data sources such as Väylävirasto, Maanmittauslaitos, Fintraffic and Traficom.',
    tech: ['React', 'Mapbox', 'GeoJSON'],
    live: 'https://ottotuhkunen.github.io/sailing-app/',
    repo: 'https://github.com/ottotuhkunen/sailing-app',
  },
  {
    title: 'General Information Display',
    image: 'images/gid.png',
    description:
      'The General Information Display (GID) displays various data useful for Air Traffic Controllers in Finland on VATSIM network. It provides live air traffic, weather information, NOTAMs, live D-ATIS broadcasts, SIGMETs and active Danger and Restriction areas to name a few. The app is used on a daily basis.',
    tech: ['React', 'Mapbox', 'Node.js'],
    live: 'https://gid.lusep.fi/',
    repo: 'https://github.com/ottotuhkunen/gid-finland',
  },
  {
    title: 'Airport De-ice Manager',
    image: 'images/ice.png',
    description:
      'With this Web Application, pilots can simulate realistic de-icing operations on VATSIM network. There are two different views depending on the role - de-icing operator and pilot. The operator can manage all active Deice requests in an intuitive and orderly way. Pilots can check the weather and manage their de-ice request with a few clicks.',
    tech: ['React', 'Node.js', 'Socket IO'],
    live: 'https://ice.lusep.fi/',
    repo: 'https://github.com/ottotuhkunen/ice',
  },
  {
    title: 'Event Statistics Page',
    image: 'images/stats.png',
    description:
      "This Web Application displays interesting statistics for the 'Welcome to HEL' event by VATSIM Scandinavia. The app shows various statistics including global movements, activity history, busiest days, runway usage, trendline, traffic peaks, ATCO activity and more.",
    tech: ['React', 'Chart.js', 'JSON'],
    live: 'https://wth.lusep.fi/',
    repo: 'https://github.com/ottotuhkunen/wth-statistics',
  },
  {
    title: 'Wiki User Manuals',
    image: 'images/wiki.png',
    description:
      'In my free time I volunteer as the head of ATC training for Finland in VATSIM Scandinavia. I have years of experience in creating extensive manuals and software documentation to support virtual aviation in Finland.',
    tech: ['Documentation'],
    live: 'https://wiki.vatsim-scandinavia.org/shelves/atc-finland',
  },
  {
    title: 'Tampere Public Transport Map',
    image: 'images/nysse.png',
    description:
      "'Nysse Live' is used to track the public transportation system in Tampere, Finland. View timetables, alerts, save favourite stops, show routes on the map, filter by operator or line number and much more! This app is more directed towards Public Transport operators and staff.",
    tech: ['React', 'Mapbox', 'GraphQL'],
    live: 'https://ottotuhkunen.github.io/nysse-live/',
    repo: 'https://github.com/ottotuhkunen/nysse-live',
  },
  {
    title: 'Homepage',
    image: 'images/lusep.png',
    description:
      'Simplistic and modern single-page multi-language website for the Virtual Aviation Community in Finland.',
    tech: ['React', 'CSS'],
    live: 'https://hold.lusep.fi/',
  },
  {
    title: 'Air Traffic Control Sectors',
    image: 'images/sectors.png',
    description:
      'This app is designed to display various sectorization options and combinations for the Helsinki Area Control Centre in an intuitive manner. It is intended for simulation purposes only. I have also created a similar application for the Swedish community.',
    tech: ['React', 'Mapbox'],
    live: 'https://esaa-sectors.lusep.fi/',
    repo: 'https://github.com/ottotuhkunen/esaa-sectors',
  },
  {
    title: 'Runway Condition Reports',
    image: 'images/rcr.png',
    description:
      'This tool is used to generate a realistic Runway Condition Report for Finnish aerodromes. The app will generate a report based on the fetched SNOWTAM or during summer based on the latest METAR reports. The generated RCR report is used in the airport ATIS broadcast.',
    tech: ['HTML', 'CSS'],
    live: 'https://rcr.lusep.fi/',
    repo: 'https://github.com/ottotuhkunen/rcr-maker',
  },
  {
    title: 'Swift Prototype App',
    image: 'images/swift.png',
    description:
      'This is a prototype application made with Swift for iOS devices. The app contains a connection to backend and possibility to add, change or remove data. The user interface is designed to be plain, modern and accessible.',
    tech: ['Swift', 'iOS', 'SQL'],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-300">
          M y &ensp;P r o j e c t s
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-[50px] corner-squircle overflow-hidden shadow-lg bg-white/5 backdrop-blur-md border border-white/10 hover:scale-102 transition"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/20 text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-800 border border-white/10 text-xs font-semibold hover:bg-blue-900 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 3h7v7m0 0L10 21l-7-7 11-11z"
                        />
                      </svg>
                      Live
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-800 border border-white/10 text-xs font-semibold hover:bg-blue-900 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.773 8.205 11.365.6.111.82-.261.82-.58 0-.287-.01-1.046-.016-2.054-3.338.727-4.042-1.608-4.042-1.608-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.467-2.381 1.235-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.553 3.295-1.23 3.295-1.23.655 1.653.242 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.625-5.48 5.921.43.372.813 1.102.813 2.222 0 1.604-.015 2.896-.015 3.289 0 .321.216.694.825.576C20.565 22.27 24 17.788 24 12.5 24 5.87 18.63.5 12 .5z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
