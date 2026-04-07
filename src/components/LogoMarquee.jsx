"use client";

const logos = [
  { name: "Amity University", src: "/logos/Amity.png" },
  { name: "HDFC Bank", src: "/logos/Hdfc.png" },
  { name: "I-PAC", src: "/logos/I-PAC.png" },
  { name: "Income-Tax", src: "/logos/income-tax.png" },
];

export default function LogoMarquee() {
  const tripled = [...logos, ...logos, ...logos];

  return (
    <section
      className="w-full overflow-hidden py-10"
      style={{ background: "#f8f7f6" }}
    >
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track {
          animation: marquee 22s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
        .logo-img {
          height: clamp(52px, 8vw, 76px);
          max-width: clamp(120px, 20vw, 180px);
          mix-blend-mode: multiply;
        }
        @media (max-width: 768px) {
          .logo-img {
            height: clamp(40px, 7vw, 50px);
            max-width: clamp(75px, 18vw, 130px);
          }
        }
      `}</style>

      {/* Heading */}
      <p
        className="text-center mb-9 px-4"
        style={{
          fontSize: "clamp(14px, 1.5vw, 17px)",
          color: "#5a2d0c",
          fontFamily: "Georgia, serif",
          lineHeight: "1.7",
        }}
      >
        Trusted by Top Workplaces and Campuses
      </p>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade — removed */}
        {/* Right fade — removed */}

        {/* Scrolling track */}
        <div className="marquee-track flex items-center w-max select-none">
          {tripled.map((logo, i) => (
            <div key={i} className="flex items-center pr-9">
              {/* Logo + Name */}
              <div className="flex flex-col items-center gap-2">
                <img
                  src={logo.src}
                  alt={logo.name}
                  draggable={false}
                  className="logo-img w-auto object-contain block bg-transparent"
                />
                <span
                  className="text-xs font-medium tracking-wide text-center"
                  style={{
                    color: "#7a4a2a",
                    fontFamily: "Georgia, serif",
                    maxWidth: "clamp(100px, 16vw, 160px)",
                  }}
                >
                  {logo.name}
                </span>
              </div>

              {/* Separator dot */}
              <span
                className="inline-block rounded-full flex-shrink-0 ml-9"
                style={{ width: "5px", height: "5px", background: "#d4a06a" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}