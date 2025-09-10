import { motion } from "framer-motion";
import { FaVideo } from "react-icons/fa";

export default function Skills() {
  const skills = [
    "React 🔥", "TypeScript", "TailwindCSS", "Node.js",
    "OAuth2", "Express JS", "PostgreSQL", "Leaflet/Mapbox"
  ];
  const designSkills = [
    "Figma", "Photoshop", "Illustrator", "Premiere Pro"
  ];
  const designs = [
    { title: "Event Banners", image: "images/wth.jpg" },
    { title: "Charts", image: "images/charts.png" },
    { title: "SVG Images", image: "images/svgs.png" },
  ]
  const videos = [
    { title: "DJI Waypoint Flight", image: "images/wpt_flight.jpg", url: "https://youtu.be/F3OTJYvYf9k" },
    { title: "DJI Mini 4 Pro", image: "images/dji.jpg", url: "https://youtu.be/fayRW1m8b7c" },
    { title: "Mission Planner", image: "images/mission_planner.jpg", url: "https://youtu.be/SA_h5dvUuN8" },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-950 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-300">S k i l l s</h2>
        <h3 className="text-3xl md:text-2xl font-bold mt-10 mb-6">Programming</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span key={skill}
              className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm shadow-md hover:bg-white/20 transition"
            >
              {skill}
            </span>
          ))}
        </div>
        <h3 className="text-3xl md:text-2xl font-bold mt-12 mb-6">Design & User Experience</h3>

        <div className="flex flex-wrap justify-center gap-4">
          {designSkills.map((skill) => (
            <span key={skill}
              className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm shadow-md hover:bg-white/20 transition"
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="mb-8 mt-10 text-lg text-white/70">In my free time, I volunteer with VATSIM Scandinavia as part of the staff, where I contribute to designing event banners, posters, and various visual elements. I also have experience creating custom icons, color profiles, and vector graphics.</p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {designs.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-6 flex flex-col gap-4">
                <h3 className="font-semibold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="text-3xl md:text-2xl font-bold mt-12 mb-6">Video Projects</h3>
        <p className="mb-8 text-lg text-white/70">I led a project at Tampere University of Applied Sciences focused on creating video tutorials for teaching drone operations. We produced 10 detailed videos in both Finnish and English, including versions with subtitles.</p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((project, idx) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
                <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition"
            >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                <div className="p-6 flex flex-col gap-4">
                    <h3 className="font-semibold flex items-center gap-3">
                        <FaVideo />
                        {project.title}
                    </h3>
                </div>
                </motion.div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
