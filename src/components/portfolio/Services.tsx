const services = [
  {
    title: "GoHighLevel Setup & Optimization",
    description: "Complete GHL funnel creation, email campaigns, and pipeline management to maximize your conversion rates."
  },
  {
    title: "Workflow Automation",
    description: "Custom automation workflows using Make.com, Zapier, and n8n to streamline your business processes."
  },
  {
    title: "CRM Integration",
    description: "Seamless integration between your CRM, email marketing, and communication tools for unified operations."
  },
  {
    title: "Lead Generation Systems",
    description: "LinkedIn outreach campaigns, lead scoring, and automated follow-up sequences that convert."
  },
  {
    title: "E-commerce Automation",
    description: "Abandoned cart sequences, inventory management, and customer communication automation for online stores."
  },
  {
    title: "Email Marketing Campaigns",
    description: "Strategic email sequences, newsletters, and automated campaigns that engage and convert your audience."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-4">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-16">
        <h2 className="section-heading">Services</h2>
        <span className="label text-muted-foreground">01 / What I build</span>
      </div>

      <div className="hairline">
        {services.map((service, index) => (
          <div
            key={index}
            className="group grid gap-2 md:grid-cols-[4rem_minmax(0,28ch)_1fr] md:gap-8 py-8 border-b border-border"
          >
            <span className="label text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-subheading uppercase tracking-tight">{service.title}</h3>
            <p className="caption text-muted-foreground max-w-[60ch]">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
