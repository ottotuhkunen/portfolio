import { FaEnvelope, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

export default function Contact() {
  const iconClasses =
    "text-3xl md:text-4xl transition-transform transform hover:scale-110 hover:text-yellow-300";

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-white text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300">Let’s Work Together!</h2>
      <p className="mb-8 text-lg pl-4 pr-4">
        You can reach me by sending a message in one of the medias below.
      </p>

      {/* Icons */}
      <div className="flex justify-center gap-6 mb-10">
        <a href="mailto:otto.tuhkunen@hotmail.com" className={iconClasses}>
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/ottotuhkunen/"
          target="_blank"
          rel="noopener noreferrer"
          className={iconClasses}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ottotuhkunen"
          target="_blank"
          rel="noopener noreferrer"
          className={iconClasses}
        >
          <FaGithub />
        </a>
        <a
          href="https://discord.com/users/277722172393259009"
          target="_blank"
          rel="noopener noreferrer"
          className={iconClasses}
        >
          <FaDiscord />
        </a>
      </div>

      <p className="mt-10">© Otto Tuhkunen 2025</p>
    </section>
  );
}
