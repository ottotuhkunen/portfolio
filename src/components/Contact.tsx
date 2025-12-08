import { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import '../styles/slider.css';

export default function Contact() {
  const iconClasses =
    'z-20 text-3xl transition-transform transform hover:scale-106 hover:text-yellow-300';

  const currentYear = new Date().getFullYear();

  const [value, setValue] = useState(0);
  const rangeValueRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const el = rangeValueRef.current;
    if (!el) return;

    const progress = value / 105;

    el.style.maskImage = `linear-gradient(to top,
      black ${Math.max(6, progress * 100 - 5)}%,
      transparent ${progress * 100 - 5}%
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
      className="min-h-[400px] flex justify-center items-center py-20 bg-gradient-to-r from-purple-900 via-pink-700 to-yellow-700 text-white relative overflow-hidden"
    >
      <p className="absolute left-auto md:left-30 text-[220pt] font-mono font-bold opacity-8 text-pink-500 select-none overflow-hidden leading-[240px]">
        {value.toFixed(0)}
      </p>
      <div className="flex flex-col md:flex-row gap-12 flex-1 max-w-[700px] items-center justify-center mx-10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300 z-10">
            Let’s Work Together!
          </h2>

          <p className="mb-4 z-10">
            You can reach me by sending a message in one of the media below
          </p>

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

          <p className="mt-6 text-sm z-10">© Otto Tuhkunen {currentYear}</p>
        </div>

        {/* Slider */}
        <div className="z-10 flex flex-col items-center gap-3">
          <div className="range-wrapper relative">
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
            <div className="range-value" ref={rangeValueRef}></div>
          </div>
          <p className="text-yellow-300 font-semibold select-none text-sm">Back to top</p>
        </div>
      </div>
    </section>
  );
}
