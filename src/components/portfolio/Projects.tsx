import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Automating Lead Capture & Follow-Up",
    description: "Digital Marketing Agency: Automated Facebook Lead Ads integration with GoHighLevel CRM, eliminating manual data entry and improving response times.",
    technologies: ["GoHighLevel", "Zapier", "Facebook Lead Ads", "SMS/Email"],
    features: [
      "100% of leads captured automatically",
      "Response time reduced from 6 hours to under 1 minute",
      "Lead-to-call booking rate increased by 35%",
      "Automated follow-up SMS/email sequences"
    ],
    category: "Lead Generation",
    client: "Digital Marketing Agency",
    problem: "Leads from Facebook Ads were being manually entered into CRM, causing delays and missed opportunities.",
    solution: "Integrated Facebook Lead Ads → Zapier → GoHighLevel CRM with automated follow-up sequences and pipeline tracking."
  },
  {
    title: "E-commerce Order Management System",
    description: "Online Store: Built comprehensive order tracking system connecting Shopify with Google Sheets and Slack for real-time inventory management.",
    technologies: ["Shopify", "Make", "Google Sheets", "Slack"],
    features: [
      "Saved 10+ hours/week in manual work",
      "Inventory errors reduced to zero",
      "Real-time sales performance visibility",
      "Automated low-stock alerts"
    ],
    category: "E-commerce",
    client: "Online Store Owner",
    problem: "Orders were being tracked manually, making it difficult to manage inventory and reporting.",
    solution: "Built Make scenario: Shopify → Google Sheets → Slack with daily sales updates and inventory alerts."
  },
  {
    title: "Multi-Platform SaaS Workflow",
    description: "SaaS Startup: Streamlined customer onboarding by connecting payments, team notifications, and documentation across multiple platforms.",
    technologies: ["n8n", "Slack", "Notion", "Stripe"],
    features: [
      "Onboarding process went from 30 minutes manual → 100% automated",
      "Customer experience improved with instant onboarding emails",
      "Scaled to handle 5x more customers without extra staff",
      "Automated documentation creation"
    ],
    category: "SaaS Automation",
    client: "SaaS Founder",
    problem: "Customer onboarding was messy—payments, team notifications, and documentation were handled separately.",
    solution: "Built n8n workflow: Stripe payment → Notion database → Slack channel → Welcome email automation."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            ⚡ Case Studies
          </h2>
          <p className="text-xl text-muted-foreground">
            Real automation solutions that transformed businesses
          </p>
        </div>
        
        {/* Moving banner with lightning effect */}
        <div className="overflow-hidden mb-12">
          <div className="animate-scroll-right whitespace-nowrap py-4">
            <span className="text-6xl md:text-8xl font-bold text-primary/10 mr-8">⚡ AUTOMATION SUCCESS STORIES</span>
            <span className="text-6xl md:text-8xl font-bold text-primary/10 mr-8">⚡ REAL RESULTS</span>
            <span className="text-6xl md:text-8xl font-bold text-primary/10 mr-8">⚡ PROVEN SYSTEMS</span>
          </div>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass hover:scale-[1.01] smooth-animation group cursor-pointer transform hover:shadow-2xl">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">⚡</span>
                      <Badge variant="outline" className="mb-0">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl group-hover:text-primary smooth-animation mb-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Client:</strong> {project.client}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-destructive">❌ Problem:</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-green-500">✅ Solution:</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-3 text-primary">🎯 Results:</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground p-2 rounded-md hover:bg-muted/50 smooth-animation">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">🛠️ Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground smooth-animation">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="glass group-hover:border-primary smooth-animation">
                    <ExternalLink className="h-4 w-4" />
                    View Full Case Study
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;