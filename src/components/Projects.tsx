import { motion } from 'framer-motion';
import '../styles/button.css';

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
    title: 'Cold Temperature Error Correction Calculator',
    image: 'images/temp_corr.png',
    description:
      'This app helps virtual Air Traffic Controllers in Finland to calculate Cold Temperature Error Corrections to Assigned Altitudes for obstacle clearance separation. Calculations are based on the official ICAO formula.',
    tech: ['React', 'TailwindCSS'],
    live: 'https://tempcorr.lusep.fi/',
    repo: 'https://github.com/ottotuhkunen/temp-corr',
  },
];

export default function Projects() {
  const handleLinkClick = (e: React.MouseEvent<HTMLButtonElement>, url: string) => {
    e.preventDefault();

    const btn = e.currentTarget.querySelector('div:first-child');
    btn?.classList.add('active');

    setTimeout(() => {
      window.open(url, '_blank');
    }, 200);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-950 text-white"
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
              className="flex flex-col justify-between rounded-[50px] corner-squircle overflow-hidden shadow-lg bg-white/5 backdrop-blur-md border border-white/10 hover:scale-102 transition"
            >
              <div>
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
                </div>
              </div>
              <div className="m-6 mb-8 mt-0 flex flex-wrap items-center gap-4 select-none">
                {project.live && (
                  <div className="w-22 h-7 relative custom-button before:bg-slate-900 before:outline-slate-400">
                    <button
                      type="button"
                      onClick={e => handleLinkClick(e, project.live)}
                      className="cursor-pointer w-full h-full bg-slate-400 text-black text-xs font-bold flex items-center justify-center rounded-full border-2 border-black overflow-hidden"
                    >
                      <span>Live</span>
                    </button>
                    <div className="pseudo-elements absolute top-[8px] w-full h-full z-[-1] bg-slate-700 text-base flex items-center justify-center rounded-full border-2 border-black before:bg-black after:bg-black"></div>
                  </div>
                )}
                {project.repo && (
                  <div className="w-22 h-7 relative custom-button before:bg-slate-900 before:outline-slate-400">
                    <button
                      type="button"
                      onClick={e => handleLinkClick(e, project.repo)}
                      className="cursor-pointer w-full h-full bg-slate-400 text-black text-xs font-bold flex items-center justify-center rounded-full border-2 border-black overflow-hidden"
                    >
                      <span>GitHub</span>
                    </button>
                    <div className="pseudo-elements absolute top-[8px] w-full h-full z-[-1] bg-slate-700 text-base flex items-center justify-center rounded-full border-2 border-black before:bg-black after:bg-black"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
