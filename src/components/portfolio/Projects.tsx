import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Proposal Generator",
    description: "Automated proposal creation system using n8n, Google Slides, and OpenAI integration. Generates client-ready proposals in minutes with custom branding and content.",
    technologies: ["n8n", "OpenAI", "Google Slides API", "Automation"],
    features: [
      "AI content generation based on client requirements",
      "Automatic branding and template application",
      "Client data integration from CRM",
      "70% reduction in proposal creation time"
    ],
    category: "Workflow Automation"
  },
  {
    title: "Lead Management Automation Hub",
    description: "Complete lead management system using Make.com with Google Sheets, Gmail, and Calendar integration for seamless client follow-ups.",
    technologies: ["Make.com", "Google Sheets", "Gmail API", "Calendar Integration"],
    features: [
      "Automated lead scoring and qualification",
      "Multi-channel follow-up sequences",
      "Real-time CRM updates",
      "Performance tracking and analytics"
    ],
    category: "Lead Generation"
  },
  {
    title: "E-commerce Automation Suite",
    description: "Comprehensive automation system for cookware company including abandoned cart recovery, inventory management, and customer communication.",
    technologies: ["GoHighLevel", "Shopify", "Email Marketing", "CRM"],
    features: [
      "Abandoned cart email sequences",
      "Inventory level monitoring",
      "Customer support ticket automation",
      "Mobile-responsive email templates"
    ],
    category: "E-commerce"
  },
  {
    title: "LinkedIn Lead Generation System",
    description: "Automated LinkedIn outreach campaigns with personalized messaging and connection tracking for B2B lead generation.",
    technologies: ["LinkedIn Sales Navigator", "CRM Integration", "Email Automation"],
    features: [
      "Personalized connection requests",
      "Follow-up message sequences",
      "Lead qualification scoring",
      "CRM automatic data sync"
    ],
    category: "Lead Generation"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Automation solutions that deliver real business impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass hover:scale-[1.02] smooth-animation group">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-primary smooth-animation">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="glass">
                    <ExternalLink className="h-4 w-4" />
                    View Details
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