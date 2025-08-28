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

const toolLogos = [
  { name: "Make", logo: "🔧", color: "text-purple-500" },
  { name: "Zapier", logo: "⚡", color: "text-orange-500" },
  { name: "GoHighLevel", logo: "🚀", color: "text-blue-500" },
  { name: "n8n", logo: "🔗", color: "text-red-500" },
  { name: "Supabase", logo: "⚡", color: "text-green-500" },
  { name: "Airtable", logo: "📊", color: "text-yellow-500" },
  { name: "Shopify", logo: "🛒", color: "text-green-600" },
  { name: "Stripe", logo: "💳", color: "text-purple-600" },
  { name: "Twilio", logo: "📱", color: "text-red-600" },
  { name: "Canva", logo: "🎨", color: "text-cyan-500" },
  { name: "Slack", logo: "💬", color: "text-purple-400" },
  { name: "Asana", logo: "✅", color: "text-pink-500" }
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
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg smooth-animation hover:scale-110 glass">
                    <div className="text-center">
                      <div className={`text-4xl mb-2 ${tool.color} group-hover:scale-125 smooth-animation`}>
                        {tool.logo}
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary smooth-animation">
                        {tool.name}
                      </span>
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