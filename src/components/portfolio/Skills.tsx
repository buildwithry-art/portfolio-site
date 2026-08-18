const BASE = import.meta.env.BASE_URL;

const skillCategories = [
  {
    category: "Automation Platforms",
    skills: ["GoHighLevel", "Make.com", "Zapier", "n8n", "ActiveCampaign"]
  },
  {
    category: "CRM & Marketing",
    skills: ["Kajabi", "MyCRMsim", "Mailgun", "Instantly.ai", "Email Marketing"]
  },
  {
    category: "Communication & Support",
    skills: ["Twilio", "Slack", "Google Suite", "Customer Support"]
  },
  {
    category: "E-commerce & Analytics",
    skills: ["Shopify", "Stripe", "Fulfil.io", "Inventory Management"]
  },
  {
    category: "Design & Productivity",
    skills: ["Canva", "Airtable", "Miro", "Social Media Management"]
  },
  {
    category: "Lead Generation",
    skills: ["LinkedIn Sales Navigator", "Lead Scoring", "Outreach Campaigns"]
  }
];

const toolLogos: Array<{ name: string; logo: string }> = [
  { name: "Make", logo: `${BASE}lovable-uploads/f15c7435-1271-49b9-bdad-f8a3d32a0d96.png` },
  { name: "Zapier", logo: `${BASE}lovable-uploads/30c27be1-6af6-4eab-90b2-91c98060f650.png` },
  { name: "GoHighLevel", logo: `${BASE}lovable-uploads/0340a356-7341-4d91-862e-5c9c3cab01a6.png` },
  { name: "n8n", logo: `${BASE}lovable-uploads/c63b961b-4b50-4cb6-b67f-81379d4ddf08.png` },
  { name: "Supabase", logo: `${BASE}lovable-uploads/9350b8c6-c661-4b02-83e9-104503868b53.png` },
  { name: "Airtable", logo: `${BASE}lovable-uploads/07fe4fb3-fe96-49d0-b139-0661d025aac4.png` },
  { name: "Shopify", logo: `${BASE}lovable-uploads/1ff04e66-8787-43cc-8330-a31015e5fb5f.png` },
  { name: "Stripe", logo: `${BASE}lovable-uploads/b5921b0a-1425-4503-9614-12d902642cf8.png` },
  { name: "Twilio", logo: `${BASE}lovable-uploads/5e34f1ab-63df-40f7-a73c-06850eeaefc7.png` },
  { name: "Canva", logo: `${BASE}lovable-uploads/b69b54a6-4046-48ad-b1c8-1709499985e7.png` },
  { name: "Slack", logo: `${BASE}lovable-uploads/729b14df-7b5c-478f-a162-f79980da1ac1.png` },
  { name: "Asana", logo: `${BASE}lovable-uploads/0430b2e9-867b-484e-b727-9f05b427238a.png` }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 overflow-hidden">
      <div className="px-4 flex flex-wrap items-baseline justify-between gap-4 mb-16">
        <h2 className="section-heading">Stack</h2>
        <span className="label text-muted-foreground">02 / Tools & platforms</span>
      </div>

      {/* Full-bleed marquee of tool marks — flat, achromatic, no radius */}
      <div className="relative py-8">
        <div className="flex animate-scroll-right w-max">
          {[...toolLogos, ...toolLogos].map((tool, index) => (
            <div
              key={index}
              title={tool.name}
              className="flex-shrink-0 w-40 h-32 flex flex-col items-center justify-center gap-3 border-l border-border"
            >
              <img
                src={tool.logo}
                alt={`${tool.name} logo`}
                loading="lazy"
                className="max-h-10 max-w-[60%] object-contain grayscale brightness-0 invert opacity-80"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="label text-muted-foreground">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 mt-16 hairline">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="grid gap-2 md:grid-cols-[4rem_minmax(0,28ch)_1fr] md:gap-8 py-8 border-b border-border"
          >
            <span className="label text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-subheading uppercase tracking-tight">{category.category}</h3>
            <p className="caption text-muted-foreground">{category.skills.join(" / ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
