import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    school: 'Kyrkslätts Gymnasium',
    type: 'Upper Secondary School',
    period: '2017–2020',
    description:
      'General Upper Secondary Education (lukio), gaining a strong academic foundation. Entrepreneurial class.',
  },
  {
    school: 'Tampere University of Applied Sciences (TAMK)',
    type: 'Bachelor of Business Administration',
    period: '2021–2025',
    description:
      'Completed the Business Information Technologies studies (tietojenkäsittelyn tutkinto-ohjelma) with a focus on Software Development (ohjelmistotuotanto).',
  },
];

const courses = [
  {
    name: 'CCNA: Introduction to Networks (ITN)',
    provider: 'Cisco Networking Academy',
  },
  {
    name: 'Agile ICT Project Management',
    provider: 'Tampere University of Applied Sciences',
  },
  {
    name: 'Frontend Development',
    provider: 'Tampere University of Applied Sciences',
  },
  {
    name: 'Backend Development',
    provider: 'Tampere University of Applied Sciences',
  },
  {
    name: 'Mobile Development',
    provider: 'Tampere University of Applied Sciences',
  },
  {
    name: 'Multidimensional Project Work',
    provider: 'Tampere University of Applied Sciences',
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-300">
          E d u c a t i o n
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="p-6 rounded-[20px] corner-scoop bg-white/5 border border-white/10 shadow-lg hover:shadow-xl hover:scale-102 transition transform"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-400/20 rounded-full text-yellow-300">
                  <FaGraduationCap size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.school}</h3>
                  <p className="text-sm text-gray-400 mb-1">{item.type}</p>
                  <p className="text-sm text-gray-400 mb-2">{item.period}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold mt-14 mb-6 text-center">Key Courses</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 rounded-[50px] corner-squircle bg-white/5 border border-white/10 shadow-md hover:shadow-lg hover:scale-102 transition transform text-center"
            >
              <h4 className="text-lg font-semibold mb-1">{course.name}</h4>
              <p className="text-sm text-gray-400">{course.provider}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
