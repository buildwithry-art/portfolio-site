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

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground">
            Tools and platforms I use to deliver exceptional automation solutions
          </p>
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