import Image from "next/image";

function HeroSection() {
  return (
    <section
      id="city-hub"
      aria-label="Hero"
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat opacity-50"
          role="img"
          aria-label="Cyberpunk neon-noir cityscape at night"
        />

        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Main Layout */}
      <div className="relative z-20 container mx-auto min-h-screen px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col justify-start md:justify-center items-start text-left pt-20 md:pt-0">
          {/* Name */}
          <h1 className="font-bold text-[38px] sm:text-[48px] md:text-[64px] text-primary-container uppercase tracking-wide leading-tight neon-text">
            Jawad Ahmad
          </h1>

          {/* Subtitle */}
          <div className="mt-3 glass-panel neon-border px-4 py-2">
            <p className="text-xs sm:text-sm md:text-base text-primary-fixed-dim uppercase tracking-[0.2em] leading-relaxed">
              Frontend Web Developer // UI Designer
              <span className="terminal-cursor" aria-hidden="true" />
            </p>
          </div>
        </div>

        {/* RIGHT CHARACTER */}
        <div className="w-full md:w-1/2 flex justify-around md:justify-end items-center -translate-y-50 md:translate-y-0">
          <div
            className="w-60 sm:w-75 md:w-115 pointer-events-none"
            aria-hidden="true"
          >
            <Image
              src="/images/character.png"
              alt="Cyberpunk character silhouette"
              width={460}
              height={600}
              className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(132,5,207,0.35)]"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;