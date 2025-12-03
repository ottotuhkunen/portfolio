import { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import '../button.css';

export default function Contact() {
  const iconClasses =
    'text-3xl transition-transform transform hover:scale-106 hover:text-yellow-300';

  const currentYear = new Date().getFullYear();

  const [value, setValue] = useState(0);
  const rangeValueRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const el = rangeValueRef.current;
    if (!el) return;

    const progress = value / 100;

    el.style.maskImage = `linear-gradient(to top,
      black ${Math.max(2, progress * 100 - 6)}%,
      transparent ${progress * 100 - 6}%
    )`;
  }, [value]);

  useEffect(() => {
    const handleGlobalRelease = () => {
      if (isDragging.current) {
        isDragging.current = false;
        handleRelease();
      }
    };

    window.addEventListener('mouseup', handleGlobalRelease);
    window.addEventListener('touchend', handleGlobalRelease);

    return () => {
      window.removeEventListener('mouseup', handleGlobalRelease);
      window.removeEventListener('touchend', handleGlobalRelease);
    };
  }, [value]);

  // Smooth animation back to zero
  const animateToZero = () => {
    const start = value;
    const duration = 600;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      if (isDragging.current) return;

      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(t);
      const current = start * (1 - eased);

      setValue(current);

      if (t < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const handleRelease = () => {
    if (value === 100) {
      const section = document.querySelector('#about');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(animateToZero, 400);
    } else {
      animateToZero();
    }
  };

  return (
    <section
      id="contact"
      className="flex justify-center py-20 bg-gradient-to-r from-purple-900 via-pink-700 to-yellow-700 text-white"
    >
      <div className="flex flex-col md:flex-row gap-12 flex-1 mx-10 max-w-[700px] items-center justify-center">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300">
            Let’s Work Together!
          </h2>

          <p className="mb-4">You can reach me by sending a message in one of the media below</p>

          <div className="flex justify-center md:justify-start gap-6">
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

          <p className="mt-6 text-sm">© Otto Tuhkunen {currentYear}</p>
        </div>

        {/* Slider */}
        <div className="flex flex-col items-center gap-3">
          <div className="range-wrapper relative w-[42px]">
            <input
              id="range"
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={e => setValue(Number(e.target.value))}
              onMouseDown={() => (isDragging.current = true)}
              onTouchStart={() => (isDragging.current = true)}
              className="vertical-range lg:vertical-range"
            />
          </div>
          <span className="text-yellow-300 font-semibold select-none text-sm">Back to top</span>
        </div>
      </div>
    </section>
  );
}
