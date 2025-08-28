import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const toolLogos: Array<{ name: string; logo: string; isImage?: boolean; color?: string }> = [
  { name: "Make", logo: "/lovable-uploads/f15c7435-1271-49b9-bdad-f8a3d32a0d96.png", isImage: true },
  { name: "Zapier", logo: "/lovable-uploads/30c27be1-6af6-4eab-90b2-91c98060f650.png", isImage: true },
  { name: "GoHighLevel", logo: "/lovable-uploads/0340a356-7341-4d91-862e-5c9c3cab01a6.png", isImage: true },
  { name: "n8n", logo: "/lovable-uploads/6e12685c-34f7-44fe-bef9-12d0c1765d6f.png", isImage: true },
  { name: "Supabase", logo: "/lovable-uploads/28e33830-2f7f-4317-8769-e4b54b84f5f9.png", isImage: true },
  { name: "Airtable", logo: "/lovable-uploads/9d61a20f-77c0-4679-a084-d08f05736bff.png", isImage: true },
  { name: "Shopify", logo: "/lovable-uploads/1ff04e66-8787-43cc-8330-a31015e5fb5f.png", isImage: true },
  { name: "Stripe", logo: "/lovable-uploads/b5921b0a-1425-4503-9614-12d902642cf8.png", isImage: true },
  { name: "Twilio", logo: "/lovable-uploads/32132918-0f6f-4ca8-bd1e-41fca3828fe0.png", isImage: true },
  { name: "Canva", logo: "/lovable-uploads/b69b54a6-4046-48ad-b1c8-1709499985e7.png", isImage: true },
  { name: "Slack", logo: "/lovable-uploads/729b14df-7b5c-478f-a162-f79980da1ac1.png", isImage: true },
  { name: "Asana", logo: "/lovable-uploads/0430b2e9-867b-484e-b727-9f05b427238a.png", isImage: true }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            Skills and Tools
          </h2>
          <p className="text-xl text-muted-foreground">
            Tools and platforms I use to deliver exceptional automation solutions
          </p>
        </div>

        {/* Animated Tools Logos */}
        <div className="mb-16">
          <div className="relative overflow-hidden py-8">
            <div className="flex animate-scroll-right space-x-8 w-max">
              {[...toolLogos, ...toolLogos].map((tool, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="bg-white rounded-xl p-6 hover:shadow-lg smooth-animation hover:scale-110 border border-gray-200/20">
                    <div className="flex items-center justify-center">
                      <div className="h-16 w-16 group-hover:scale-125 smooth-animation flex items-center justify-center">
                        {tool.isImage ? (
                          <img 
                            src={tool.logo} 
                            alt={tool.name} 
                            className="h-full w-full object-contain"
                            style={{ 
                              imageRendering: 'crisp-edges',
                              background: 'transparent'
                            }}
                          />
                        ) : (
                          <div className={`text-4xl ${tool.color}`}>
                            {tool.logo}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass hover:scale-105 smooth-animation">
              <CardHeader>
                <CardTitle className="text-lg text-primary">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground smooth-animation cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;