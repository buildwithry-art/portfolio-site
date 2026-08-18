const experiences = [
  {
    title: "GHL Specialist & Automation Consultant",
    company: "Romea.AI",
    period: "Oct 2025 - Jan 2026",
    location: "Remote",
    type: "Full-Time",
    achievements: [
      "GHL onboarding setup and GHL workflow automations",
      "Conducted GHL training for clients needing to learn more about the CRM",
      "Webhook entry points automation in GHL",
      "Calendars and chat widget setup",
      "Pipeline setup and configuration"
    ],
    technologies: ["GoHighLevel", "Webhooks", "CRM Training", "Workflow Automation"]
  },
  {
    title: "Outreach & Automation Specialist",
    company: "DPX AI Solutions",
    period: "Mar 2025 - Dec 2025",
    location: "Remote",
    type: "Part-Time",
    achievements: [
      "Manual outreach on Facebook and LinkedIn",
      "Instantly cold email setup and management",
      "Automation via GoHighLevel"
    ],
    technologies: ["Facebook", "LinkedIn", "Instantly", "GoHighLevel"]
  },
  {
    title: "E-Commerce/GHL Admin",
    company: "Cookware Company",
    period: "Dec 2023 - Mar 2025",
    location: "Los Angeles, US",
    type: "Full-Time",
    achievements: [
      "Built and optimized HighLevel email campaigns and abandoned cart sequences",
      "Created and managed funnels, forms, and tagging systems for targeted marketing",
      "Set up and maintained pipelines and appointment calendars for sales teams",
      "Configured automation workflows to streamline order follow-ups and returns",
      "Ensured all assets were mobile-responsive and client-ready",
      "Managed inventory shipment coordination and customer order resolution"
    ],
    technologies: ["GoHighLevel", "Email Marketing", "Funnel Creation", "CRM Management"]
  },
  {
    title: "Lead Gen/Appointment VA",
    company: "AI Software",
    period: "2022 - 2023",
    location: "Singapore",
    type: "Virtual Assistant",
    achievements: [
      "Coordinated calendars and scheduled discovery calls, webinars, and coaching sessions",
      "Generated leads from LinkedIn Sales Navigator",
      "Set up and managed LinkedIn outreach campaigns",
      "Organized client materials, intake forms, and progress tracking documents",
      "Applied empathetic messaging strategies to improve connection rates",
      "Assisted in CRM migrations and tool integrations",
      "Supported social media content scheduling"
    ],
    technologies: ["LinkedIn Sales Navigator", "CRM Systems", "Social Media Management"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-4">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-16">
        <h2 className="section-heading">Experience</h2>
        <span className="label text-muted-foreground">03 / Track record</span>
      </div>

      <div className="hairline">
        {experiences.map((exp, index) => (
          <div key={index} className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-16 py-12 border-b border-border">
            <div>
              <h3 className="archive-title">{exp.company}</h3>
              <p className="label text-muted-foreground mt-4">{exp.title}</p>
              <div className="flex flex-wrap gap-6 mt-4">
                <span className="label text-muted-foreground">{exp.period}</span>
                <span className="label text-muted-foreground">{exp.location}</span>
                <span className="label text-muted-foreground">{exp.type}</span>
              </div>
            </div>

            <div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="caption text-muted-foreground normal-case tracking-normal">
                    {achievement}
                  </li>
                ))}
              </ul>
              <p className="label text-muted-foreground mt-6">{exp.technologies.join(" / ")}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
