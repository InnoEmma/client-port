import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Magnetic({
  children,
  strength = 28,      // How far the outer element pulls (px)
  textStrength = 42,  // Parallax pull for inner content (0 to disable)
  className = '',
}) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const content = contentRef.current;
      if (!container || !content) return;

      const inner = content.firstElementChild;

      const handleMouseMove = (e) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        // Calculate distance from center: -0.5 (far left/top) to +0.5 (far right/bottom)
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        // Animate the button body
        gsap.to(content, {
          x: x * strength,
          y: y * strength,
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        // Parallax depth for the inner text / content (if exists)
        if (inner && textStrength > 0) {
          gsap.to(inner, {
            x: x * textStrength,
            y: y * textStrength,
            duration: 0.35,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      };

      const handleMouseLeave = () => {
        // Elastic spring-back to natural position
        gsap.to(content, {
          x: 0,
          y: 0,
          duration: 0.75,
          ease: 'elastic.out(1.1, 0.4)',
          overwrite: 'auto',
        });

        if (inner && textStrength > 0) {
          gsap.to(inner, {
            x: 0,
            y: 0,
            duration: 0.75,
            ease: 'elastic.out(1.1, 0.4)',
            overwrite: 'auto',
          });
        }
      };

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    },
    { scope: containerRef }
  );

  return (
    // p-2 gives a magnetic trigger threshold right before touching the element
    <div ref={containerRef} className={`inline-block p-2 ${className}`}>
      <div ref={contentRef} className="inline-block will-change-transform">
        {children}
      </div>
    </div>
  );
}