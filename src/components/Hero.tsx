import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="about"
      className="p-10 min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white scroll-smooth"
    >
      <motion.img
        src="images/me.png"
        alt="Your portrait"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl ring-2 ring-yellow-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I’m <span className="bg-clip-text text-transparent text-yellow-300">Otto</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          I am a passionate developer with a focus on modern web applications, particularly those
          utilizing <b>React</b> and map-based tools like <b>Leaflet</b> and <b>Mapbox</b>. I also
          have experience with <b>Node.js</b> for backend development and handling SQL requests to{' '}
          <b>PostgreSQL</b>. Many of my projects are published on Heroku.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          The aviation industry holds a special place in my heart, which is why many of my
          non-profit projects are related to flight operations and Air Traffic Services.
        </p>
        <p className="text-lg text-gray-300 mb-10">
          I have a strong interest in designing and developing modern User Interfaces, which has led
          me to gain significant experience in frontend development.
        </p>

        <div className="flex flex-wrap gap-6 gap-y-3">
          <a
            href="#projects"
            className="text-yellow-300 font-medium hover:underline underline-offset-4"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-yellow-300 font-medium hover:underline underline-offset-4"
          >
            Skills
          </a>
          <a
            href="#work"
            className="text-yellow-300 font-medium hover:underline underline-offset-4"
          >
            Experience
          </a>
          <a
            href="#education"
            className="text-yellow-300 font-medium hover:underline underline-offset-4"
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-yellow-300 font-medium hover:underline underline-offset-4"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}
