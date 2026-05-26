import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative z-20 border-t border-primary/10 bg-surface-container-low/40 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/5 blur-3xl rounded-full" />
      </div>

      <div className="relative container mx-auto px-margin-mobile md:px-margin-desktop py-10">

        {/* Top Area */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Branding */}
          <div className="text-center md:text-left">

            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.25em] text-primary neon-text">
              Jawad Ahmad
            </h2>

            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-on-surface-variant">
              Frontend Web Developer // UI Designer
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com/ijawadahmadcs"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12 h-12 rounded-2xl
                border border-primary/20
                bg-primary/5
                flex items-center justify-center
                hover:bg-primary hover:text-black
                transition-all duration-300 hover:-translate-y-1
              "
            >
              <FaGithub className="text-lg" />
            </a>

            <a
              href="https://www.linkedin.com/in/ijawadahmadcs/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12 h-12 rounded-2xl
                border border-secondary/20
                bg-secondary/5
                flex items-center justify-center
                hover:bg-secondary hover:text-white
                transition-all duration-300 hover:-translate-y-1
              "
            >
              <FaLinkedin className="text-lg" />
            </a>

            <a
              href="https://instagram.com/ijawadahmad_"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12 h-12 rounded-2xl
                border border-secondary/20
                bg-secondary/5
                flex items-center justify-center
                hover:bg-secondary hover:text-white
                transition-all duration-300 hover:-translate-y-1
              "
            >
              <FaInstagram className="text-lg" />
            </a>

            {/* Scroll Top */}
            <a
              href="#home"
              className="
                w-12 h-12 rounded-2xl
                border border-tertiary/20
                bg-tertiary/5
                flex items-center justify-center
                hover:bg-tertiary hover:text-black
                transition-all duration-300 hover:-translate-y-1
              "
            >
              <FaArrowUp className="text-lg" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

          <p className="text-on-surface-variant uppercase tracking-[0.15em] text-center mt-4 md:text-left">
            © {new Date().getFullYear()} Jawad Ahmad. All Rights Reserved.
          </p>

        
        </div>
      </div>
    </footer>
  );
}

export default Footer;