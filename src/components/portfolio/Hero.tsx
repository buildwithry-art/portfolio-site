const adrianPhoto = `${import.meta.env.BASE_URL}lovable-uploads/892fb2d8-1fb5-4b9c-9831-7db3e194f5e9.png`;

const Hero = () => {
  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden">
      {/* Locale-switcher-style meta row */}
      <div className="flex justify-between px-4">
        <span className="label text-muted-foreground">Automation Studio / GHL · n8n · VAPI</span>
        <span className="label text-muted-foreground">PH / US / WW</span>
      </div>

      {/* Display headline wall — bleeds past the viewport edges by design */}
      <div className="relative">
        <h1 className="display-wall px-4">
          <span className="block whitespace-nowrap -ml-[2vw]">Automate</span>
          <span className="block whitespace-nowrap ml-[6vw] text-muted-foreground">Workflows</span>
          <span className="block whitespace-nowrap -ml-[1vw]">Scale</span>
        </h1>

        {/* Portrait as the single sculptural object, overlapping the type */}
        <img
          src={adrianPhoto}
          alt="Adrian Agdan, automation specialist"
          className="pointer-events-none absolute right-0 bottom-0 hidden lg:block w-[30vw] max-w-[420px] object-contain grayscale mix-blend-luminosity opacity-90"
        />
      </div>

      {/* Gallery wall label + actions */}
      <div className="px-4 grid gap-8 lg:grid-cols-[minmax(0,32ch)_1fr] lg:items-end">
        <p className="caption text-muted-foreground max-w-[36ch]">
          Automation and AI systems design studio. GoHighLevel builds, n8n and Make workflows,
          voice and conversational AI receptionists for service businesses.
        </p>

        <div className="flex flex-wrap items-end justify-start lg:justify-end gap-8">
          <div className="flex gap-8">
            <div>
              <div className="section-heading">500+</div>
              <div className="label text-muted-foreground mt-2">Hours saved</div>
            </div>
            <div>
              <div className="section-heading">95%</div>
              <div className="label text-muted-foreground mt-2">Error reduction</div>
            </div>
            <div>
              <div className="section-heading">$2M+</div>
              <div className="label text-muted-foreground mt-2">Revenue driven</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollTo("#contact")} className="flat-action">
              Work with me
            </button>
            <a
              href="https://calendly.com/buildwithry/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flat-action-ghost"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>

      <div className="px-4">
        <a
          href="https://directory.gohighlevel.com/pila/certified-admins/adrian-agdan?from=badge"
          title="Find me on HighLevel Directory"
          target="_blank"
          rel="noopener noreferrer"
          className="label text-muted-foreground hover:text-foreground transition-colors"
        >
          HighLevel Certified Admin
        </a>
      </div>
    </section>
  );
};

export default Hero;
