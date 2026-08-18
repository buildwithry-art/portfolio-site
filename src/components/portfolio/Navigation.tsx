import { useState } from "react";

const navItems = [
  { href: "#projects", label: "Archive" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Stack" },
  { href: "#experience", label: "Experience" }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="label">
          build with ry
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="label text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://calendly.com/buildwithry/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="label-bold hover:opacity-70 transition-opacity"
          >
            Get in touch
          </a>
        </div>

        <button className="md:hidden label-bold" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="label block w-full text-left text-muted-foreground"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://calendly.com/buildwithry/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="label-bold block"
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
