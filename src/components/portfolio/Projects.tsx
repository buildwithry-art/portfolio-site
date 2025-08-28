import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Zap, Eye } from "lucide-react";
import { useState } from "react";
import zapierCaseStudy from "/lovable-uploads/ab2c0530-63cf-44a4-949f-3587fd666f09.png";
import makeCaseStudy from "/lovable-uploads/2a05dc05-510a-406b-a457-b207a04752df.png";
import n8nCaseStudy from "/lovable-uploads/b9268683-947b-4663-a0d9-1cff7333e78c.png";

const projects = [
  {
    title: "AI-Powered Content Creation Workflow",
    description: "Marketing Agency: Automated video content processing and multi-platform social media posting, transforming manual content creation into a seamless automated pipeline.",
    technologies: ["Zapier", "Google Drive", "AI Transcription", "LinkedIn", "Instagram"],
    features: [
      "90% reduction in content creation time",
      "Eliminated manual video transcription work",
      "Automatic multi-platform content distribution",
      "Consistent social media posting schedule"
    ],
    category: "Content Automation",
    client: "Digital Marketing Agency",
    problem: "Manual video processing, transcription, and social media posting was consuming 15+ hours per week and causing inconsistent posting schedules.",
    solution: "Built Zapier workflow: Google Drive upload → AI transcription → content creation → automated posting to LinkedIn and Instagram with smart scheduling.",
    automationImage: zapierCaseStudy,
    platform: "Zapier + AI Tools",
    detailedWorkflow: [
      "Video file uploaded to Google Drive folder",
      "Zapier detects new file and filters by MP4 format",
      "AI transcription service processes video content",
      "AI generates 2 optimized blog posts from transcription",
      "Content paths split for different social platforms",
      "LinkedIn post created with professional formatting",
      "Instagram post created with engaging copy",
      "Posts scheduled for optimal engagement times",
      "Success notifications sent to marketing team"
    ]
  },
  {
    title: "Advanced CRM & Communication Hub",
    description: "SaaS Company: Built sophisticated customer communication system with multi-channel automation, smart routing, and real-time team notifications.",
    technologies: ["Make.com", "CRM", "SMS", "Email", "Slack", "WhatsApp"],
    features: [
      "Customer response time reduced by 80%",
      "Zero missed customer inquiries",
      "Automated lead scoring and routing",
      "Real-time team collaboration"
    ],
    category: "Customer Success",
    client: "SaaS Startup",
    problem: "Customer inquiries from multiple channels were being handled inconsistently, leading to delayed responses and missed opportunities.",
    solution: "Created Make.com scenarios with complex branching logic for multi-channel customer communication, smart routing, and automated follow-ups.",
    automationImage: makeCaseStudy,
    platform: "Make.com + CRM",
    detailedWorkflow: [
      "Customer inquiry received from any channel (email, form, chat)",
      "Make.com evaluates inquiry type and urgency level",
      "Lead scoring algorithm assigns priority rating",
      "Smart routing assigns to appropriate team member",
      "Automated acknowledgment sent to customer",
      "CRM record created or updated with interaction history",
      "Team notification sent via Slack with context",
      "Follow-up sequences triggered based on inquiry type",
      "Escalation rules activate for high-priority issues"
    ]
  },
  {
    title: "Telegram Expense Reporting System",
    description: "Remote Team: Streamlined expense tracking through Telegram integration with automated Google Sheets reporting and real-time financial dashboards.",
    technologies: ["n8n", "Telegram", "Google Sheets", "Data Processing", "Reporting"],
    features: [
      "Expense reporting time reduced from 30 min to 30 seconds",
      "Real-time expense tracking and budget monitoring",
      "Automated daily, weekly, and monthly reports",
      "Zero manual data entry required"
    ],
    category: "Finance Automation",
    client: "Remote Startup Team",
    problem: "Team members were struggling with manual expense reporting, leading to delayed reimbursements and poor budget visibility.",
    solution: "Built n8n workflow: Telegram bot → data extraction → Google Sheets automation → scheduled reporting with real-time expense monitoring.",
    automationImage: n8nCaseStudy,
    platform: "n8n + Telegram",
    detailedWorkflow: [
      "Team member sends expense photo/receipt to Telegram bot",
      "n8n extracts data from image using OCR",
      "Expense details mapped and validated automatically",
      "Data added to appropriate Google Sheets tab",
      "Budget calculations updated in real-time",
      "Daily expense summaries generated at 8PM",
      "Weekly reports compiled every Sunday",
      "Monthly financial reports sent to management",
      "Budget alerts triggered when thresholds exceeded"
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