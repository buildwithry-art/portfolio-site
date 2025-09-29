import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Zap, Eye } from "lucide-react";
import { useState } from "react";
import zapierCaseStudy from "/lovable-uploads/2f07a1c7-8827-4169-9c4d-6353aa824503.png";
import makeCaseStudy from "/lovable-uploads/833c006f-8a7a-4522-8686-83e73cd9afa2.png";
import n8nCaseStudy from "/lovable-uploads/7d1106cf-f77a-469f-9c81-5dbbcf6626a8.png";
import ghlCaseStudy from "/lovable-uploads/0382c638-b3db-4b63-806e-a772fbaeb008.png";
const projects = [{
  title: "AI-Powered Content Creation Workflow",
  description: "Marketing Agency: Automated content creation pipeline that transforms Google Drive files into AI-generated content distributed across multiple social platforms.",
  technologies: ["Zapier", "Google Drive", "AI by Zapier", "LinkedIn", "Instagram", "Facebook"],
  features: ["Automated content generation from uploaded files", "Multi-platform distribution", "Content filtering and optimization", "Cross-platform scheduling"],
  category: "Content Marketing",
  client: "Digital Marketing Agency",
  problem: "Manual content creation and distribution across multiple social platforms was time-consuming and inconsistent.",
  solution: "Built Zapier workflow: Google Drive upload → AI content generation → automated posting to LinkedIn, Instagram, and Facebook.",
  automationImage: zapierCaseStudy,
  platform: "Zapier + AI",
  detailedWorkflow: ["File uploaded to Google Drive triggers workflow", "Zapier filters by file type (mp4 format)", "AI by Zapier transcribes video content", "Second AI step creates optimized social media posts", "Content splits into platform-specific paths", "LinkedIn post created with professional tone", "Instagram content formatted with hashtags", "Facebook page post published automatically"]
}, {
  title: "Client Onboarding Automation System", 
  description: "Professional Services: Streamlined client intake process connecting Google Forms to comprehensive onboarding workflow with automated task management.",
  technologies: ["Make.com", "Google Forms", "Google Sheets", "Gmail", "Telegram", "Tools Integration"],
  features: ["Complete onboarding automation", "Multi-step conditional workflows", "Automated client communication", "Task assignment and tracking"],
  category: "Client Management",
  client: "Consulting Firm",
  problem: "New client onboarding required manual coordination across multiple tools and team members.",
  solution: "Created Make.com automation: Google Forms → client database → automated email sequences → team notifications.",
  automationImage: makeCaseStudy,
  platform: "Make.com",
  detailedWorkflow: ["Client submits Google Form", "Tools integration creates client folder", "Information added to client tracking sheet", "Automated welcome email sent via Gmail", "Team notification sent through Telegram", "Router determines client type and workflow path", "Conditional branches trigger appropriate onboarding sequences", "Follow-up tasks automatically assigned to team members"]
}, {
  title: "Telegram Expense Reporting System",
  description: "Small Business: Automated expense tracking through Telegram bot integration with Google Sheets for daily, weekly, and monthly reporting.",
  technologies: ["n8n", "Telegram", "Google Sheets", "Automated Reporting"],
  features: ["Daily expense logging via Telegram", "Automated report generation", "Multi-timeframe reporting", "Real-time expense tracking"],
  category: "Business Operations", 
  client: "Small Business Owner",
  problem: "Manual expense tracking was leading to missed deductions and poor financial visibility.",
  solution: "Built n8n workflow: Telegram expense input → Google Sheets logging → automated daily/weekly/monthly reports.",
  automationImage: n8nCaseStudy,
  platform: "n8n + Telegram",
  detailedWorkflow: ["Expense submitted via Telegram message", "n8n extracts expense data and categorizes", "Data mapped and added to Google Sheets", "Daily expense summary generated at 8PM", "Weekly reports compiled every Sunday", "Monthly reports created on 1st of each month", "Automated Telegram notifications sent with summaries", "Budget alerts triggered when limits exceeded"]
}, {
  title: "GHL No Show Workflow",
  description: "Sales Team: Automated lead qualification and opportunity tracking system with conditional workflows based on appointment status.",
  technologies: ["GoHighLevel", "CRM Automation", "Conditional Logic", "Opportunity Management"],
  features: ["Automated opportunity creation", "Conditional workflow branching", "Lead status tracking", "Follow-up automation"],
  category: "Sales Automation",
  client: "Sales Organization",
  problem: "Inconsistent lead follow-up and manual opportunity management was causing lost deals.",
  solution: "Designed GHL workflow: Appointment triggers → conditional logic → automated opportunity management and follow-up.",
  automationImage: ghlCaseStudy,
  platform: "GoHighLevel",
  detailedWorkflow: ["Appointment status trigger activates workflow", "Conditional logic checks if tags include no show", "Branch A: Lost tag added for no-shows", "Branch B: Opportunity created for attended appointments", "Opportunity status updated automatically", "Follow-up sequences triggered based on outcome", "Date formatting applied for tracking", "Workflow ends with appropriate next actions"]
}];
const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent))_0%,transparent_50%)] opacity-5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with improved layout */}
        <div className="text-center mb-20">
          <h2 className="section-heading mb-6">
            Case Studies
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real automation solutions that transformed businesses
          </p>
          
          {/* Success metrics - horizontal layout */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 pt-8 border-t border-border/30">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">4+</div>
              <div className="text-muted-foreground font-medium text-sm md:text-base">Automation Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">100%</div>
              <div className="text-muted-foreground font-medium text-sm md:text-base">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">80%+</div>
              <div className="text-muted-foreground font-medium text-sm md:text-base">Time Saved</div>
            </div>
          </div>
        </div>
        
        {/* Project cards - alternating layout */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image section */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 cursor-pointer">
                      <img 
                        src={project.automationImage} 
                        alt={`${project.title} workflow diagram`}
                        className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <Eye className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="absolute top-6 left-6">
                        <Badge variant="secondary" className="bg-background/95 text-foreground backdrop-blur-sm">
                          {project.platform}
                        </Badge>
                      </div>
                      <div className="absolute bottom-6 right-6">
                        <Badge variant="outline" className="bg-background/95 backdrop-blur-sm">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden p-2">
                    <DialogHeader className="p-4">
                      <DialogTitle className="text-xl">{project.title} - Workflow Diagram</DialogTitle>
                    </DialogHeader>
                    <div className="relative bg-muted/20 rounded-lg overflow-hidden">
                      <img 
                        src={project.automationImage} 
                        alt={`${project.title} full workflow diagram`}
                        className="w-full max-h-[70vh] object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              
              {/* Content section */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-base mb-3 text-foreground/90">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-sm px-3 py-1 bg-muted/60 hover:bg-muted transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-base mb-3 text-foreground/90">Key Results</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-muted-foreground">
                          <span className="text-primary mr-3 text-lg">•</span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="lg" className="mt-6 group">
                        <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        View Full Case Study
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                        <DialogDescription className="text-base">
                          {project.client} - {project.category}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-bold text-lg mb-2">Challenge</h4>
                            <p className="text-muted-foreground">{project.problem}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-bold text-lg mb-2">Solution</h4>
                            <p className="text-muted-foreground">{project.solution}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-bold text-lg mb-2">Results Achieved</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start text-sm">
                                  <span className="text-primary mr-2">✓</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-bold text-lg mb-2">Workflow Process</h4>
                            <ol className="space-y-2">
                              {project.detailedWorkflow.map((step, stepIndex) => (
                                <li key={stepIndex} className="flex items-start text-sm">
                                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                                    {stepIndex + 1}
                                  </span>
                                  {step}
                                </li>
                              ))}
                            </ol>
                          </div>
                          
                          <div className="bg-muted/30 p-4 rounded-lg">
                            <img 
                              src={project.automationImage} 
                              alt={`${project.title} workflow diagram`}
                              className="w-full rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;