import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Automation Specialist (Make.com)",
    company: "NovaTech Solutions",
    period: "Mar 2025 - April 2025",
    location: "Remote",
    type: "Short-Term Project",
    achievements: [
      "Designed and deployed lead management automation workflows using Make.com",
      "Integrated Google Sheets, Gmail, and Calendars for efficient client follow-ups",
      "Built multi-step processes that automatically tracked leads and sent follow-up emails",
      "Updated CRM records to improve conversion tracking"
    ],
    technologies: ["Make.com", "Google Sheets", "Gmail", "Calendar Integration"]
  },
  {
    title: "Workflow Automation Consultant (n8n)",
    company: "BrightPath Automation",
    period: "Nov 2024 - Jan 2025",
    location: "Remote",
    type: "Consulting",
    achievements: [
      "Developed an AI-powered proposal generator workflow in n8n",
      "Integrated Google Slides and OpenAI to create client-ready proposals within minutes",
      "Automated onboarding workflows including data capture and folder creation",
      "Reduced manual tasks and setup time by 70%"
    ],
    technologies: ["n8n", "Google Slides", "OpenAI", "Workflow Automation"]
  },
  {
    title: "E-Commerce/GHL Admin",
    company: "Cookware Company",
    period: "2023 - 2025",
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
    <section id="experience" className="py-20 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            Building automation solutions across diverse industries
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass hover:scale-[1.02] smooth-animation">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl md:text-2xl">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="secondary" className="w-fit">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
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

export default Experience;