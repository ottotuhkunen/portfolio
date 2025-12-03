import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experience = [
  {
    company: 'Task Hire Oy',
    role: 'Frontend Developer Intern',
    period: 'Oct 2025 – Dec 2025',
    location: 'Tampere, Finland',
    tech: 'React Native, Expo, Firebase, UI/UX',
    description:
      'Developed a React Native mobile application from scratch, focusing on modern UI/UX flows, reusable cross-platform components, and Firebase integration.',
    image: '/images/taskhire.png',
    image2: '/images/taskhire2.png',
  },
  {
    company: 'Airpro Oy',
    role: 'Security Officer',
    period: 'May 2022 – Aug 2022',
    location: 'Helsinki Airport, Finland',
    tech: 'Stress resistance, teamwork',
    description:
      'Worked as a Security Officer responsible for conducting security checks for passengers, baggage, staff, and incoming shipments. Ensured compliance with aviation security standards.',
    image: '/images/airport.png',
    image2: '',
  },
];

export default function Experience() {
  return (
    <section
      id="work"
      className="min-h-screen py-24 bg-gradient-to-br from-violet-950 to-slate-950 text-white relative overflow-hidden"
    >
      {/* floating background accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-10 right-10 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-300">
          W o r k &ensp;E x p e r i e n c e
        </h2>

        {experience.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="flex flex-col mb-8 lg:flex-row gap-10 p-8 bg-white/5 border border-white/10 rounded-[50px] corner-squircle shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all"
          >
            {idx === 0 && (
              <div className="rounded-[12px] corner-squircle absolute -top-3 -left-2.5 rotate-[-14deg] px-4 py-1 bg-gradient-to-b from-yellow-300 to-yellow-400 text-black font-bold text-sm uppercase rounded shadow-md z-20">
                New
              </div>
            )}

            {/* image */}
            <div className="flex gap-2 justify-center lg:justify-start">
              {[item.image, item.image2].filter(Boolean).map((img, i, arr) => (
                <motion.div
                  key={i}
                  initial={{ rotate: -2, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`
                    rounded-[1.4rem] bg-white border-black shadow-xl overflow-hidden
                    ${arr.length === 1 ? 'w-80 h-auto border border-gray-700' : 'w-40 h-auto p-1 border-[4px]'}
                  `}
                >
                  <img src={img} alt="mobile screenshot" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-teal-400/20 rounded-full text-teal-300">
                  <FaBriefcase size={22} />
                </div>
                <h3 className="text-2xl font-semibold">{item.role}</h3>
              </div>

              <p className="text-gray-400 text-sm">
                {item.company} • {item.period}
              </p>
              <p className="text-gray-400 text-sm mb-2">{item.location}</p>
              <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 bg-teal-600/20 border border-teal-500/30 rounded-full text-teal-300 text-sm"
              >
                {item.tech}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
