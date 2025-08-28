import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Zap, Eye } from "lucide-react";
import { useState } from "react";
import ghlAutomation from "@/assets/ghl-automation.jpg";
import makeAutomation from "@/assets/make-automation.jpg";
import n8nAutomation from "@/assets/n8n-automation.jpg";

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
    solution: "Integrated Facebook Lead Ads → Zapier → GoHighLevel CRM with automated follow-up sequences and pipeline tracking.",
    automationImage: ghlAutomation,
    platform: "GoHighLevel + Zapier",
    detailedWorkflow: [
      "Facebook Lead Ad captures prospect information",
      "Zapier instantly triggers and sends data to GoHighLevel CRM",
      "Contact is automatically tagged and assigned to sales pipeline",
      "SMS sequence launches within 1 minute of form submission",
      "Email nurture sequence begins simultaneously",
      "Sales team receives real-time Slack notification",
      "Follow-up tasks automatically created in CRM"
    ]
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
    solution: "Built Make scenario: Shopify → Google Sheets → Slack with daily sales updates and inventory alerts.",
    automationImage: makeAutomation,
    platform: "Make.com + Shopify",
    detailedWorkflow: [
      "New order placed on Shopify store",
      "Make.com scenario automatically triggered",
      "Order details instantly logged to Google Sheets",
      "Inventory levels updated in real-time",
      "Slack notification sent to fulfillment team",
      "Daily sales report generated automatically",
      "Low stock alerts trigger when inventory < 10 units",
      "Weekly performance summary emailed to owner"
    ]
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
    solution: "Built n8n workflow: Stripe payment → Notion database → Slack channel → Welcome email automation.",
    automationImage: n8nAutomation,
    platform: "n8n + Stripe",
    detailedWorkflow: [
      "Customer completes Stripe payment successfully",
      "n8n webhook receives payment confirmation",
      "New customer record created in Notion database",
      "Welcome email with login credentials sent automatically",
      "Slack notification posted to #new-customers channel",
      "Onboarding task list generated in Notion",
      "Customer added to appropriate email sequences",
      "Account provisioning completed automatically"
    ]
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="glass group-hover:border-primary smooth-animation">
                        <Eye className="h-4 w-4" />
                        View Full Case Study
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-2xl">
                          <Zap className="h-6 w-6 text-primary" />
                          {project.title}
                        </DialogTitle>
                        <DialogDescription className="text-base">
                          <Badge variant="outline" className="mr-2">{project.platform}</Badge>
                          Built for {project.client}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        {/* Automation Screenshot */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            <img src="/placeholder.svg" className="w-5 h-5" alt="Platform" />
                            Live Automation Build
                          </h3>
                          <div className="rounded-lg overflow-hidden border border-border">
                            <img 
                              src={project.automationImage} 
                              alt={`${project.platform} automation workflow`}
                              className="w-full h-auto"
                            />
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            Screenshot of the actual automation workflow built on {project.platform}
                          </p>
                        </div>

                        {/* Detailed Workflow */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3">🔄 Step-by-Step Workflow</h3>
                          <div className="space-y-2">
                            {project.detailedWorkflow.map((step, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-3 rounded-md bg-muted/30">
                                <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                  {idx + 1}
                                </div>
                                <span className="text-sm">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Results Highlight */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                            <h4 className="font-semibold text-destructive mb-2">❌ Before Automation</h4>
                            <p className="text-sm">{project.problem}</p>
                          </div>
                          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                            <h4 className="font-semibold text-green-600 mb-2">✅ After Automation</h4>
                            <ul className="text-sm space-y-1">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3">🛠️ Technology Stack</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
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