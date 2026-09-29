"use client";

const LogoSlider = () => {
  const initiatives = [
    "Slum Art Foundation",
    "Ecole de Dessin",
    "GoCycle",
    "Animation Hub",
    "Community Art Education",
    "Circular Economy",
  ];
  const doubled = [...initiatives, ...initiatives];

  return (
    <section className="w-full bg-black py-12 mt-20 overflow-hidden relative">
      {/* Left fade overlay */}
      <div
        className="absolute left-0 top-0 h-full w-50 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #000000 0%, transparent 100%)",
        }}
      />

      {/* Right fade overlay */}
      <div
        className="absolute right-0 top-0 h-full w-50 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, #000000 0%, transparent 100%)",
        }}
      />

      {/* Sliding track */}
      <div className="flex w-max animate-logo-slide">
        {doubled.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-10 shrink-0"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">{logo}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSlider;
