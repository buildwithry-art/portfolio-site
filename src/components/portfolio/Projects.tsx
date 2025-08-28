import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Zap, Eye } from "lucide-react";
import { useState } from "react";
import ghlAutomation from "@/assets/ghl-automation.jpg";
import makeAutomation from "@/assets/make-automation.jpg";
import n8nAutomation from "@/assets/n8n-automation.jpg";
const projects = [{
  title: "Automating Lead Capture & Follow-Up",
  description: "Digital Marketing Agency: Automated Facebook Lead Ads integration with GoHighLevel CRM, eliminating manual data entry and improving response times.",
  technologies: ["GoHighLevel", "Zapier", "Facebook Lead Ads", "SMS/Email"],
  features: ["100% of leads captured automatically", "Response time reduced from 6 hours to under 1 minute", "Lead-to-call booking rate increased by 35%", "Automated follow-up SMS/email sequences"],
  category: "Lead Generation",
  client: "Digital Marketing Agency",
  problem: "Leads from Facebook Ads were being manually entered into CRM, causing delays and missed opportunities.",
  solution: "Integrated Facebook Lead Ads → Zapier → GoHighLevel CRM with automated follow-up sequences and pipeline tracking.",
  automationImage: ghlAutomation,
  platform: "GoHighLevel + Zapier",
  detailedWorkflow: ["Facebook Lead Ad captures prospect information", "Zapier instantly triggers and sends data to GoHighLevel CRM", "Contact is automatically tagged and assigned to sales pipeline", "SMS sequence launches within 1 minute of form submission", "Email nurture sequence begins simultaneously", "Sales team receives real-time Slack notification", "Follow-up tasks automatically created in CRM"]
}, {
  title: "E-commerce Order Management System",
  description: "Online Store: Built comprehensive order tracking system connecting Shopify with Google Sheets and Slack for real-time inventory management.",
  technologies: ["Shopify", "Make", "Google Sheets", "Slack"],
  features: ["Saved 10+ hours/week in manual work", "Inventory errors reduced to zero", "Real-time sales performance visibility", "Automated low-stock alerts"],
  category: "E-commerce",
  client: "Online Store Owner",
  problem: "Orders were being tracked manually, making it difficult to manage inventory and reporting.",
  solution: "Built Make scenario: Shopify → Google Sheets → Slack with daily sales updates and inventory alerts.",
  automationImage: makeAutomation,
  platform: "Make.com + Shopify",
  detailedWorkflow: ["New order placed on Shopify store", "Make.com scenario automatically triggered", "Order details instantly logged to Google Sheets", "Inventory levels updated in real-time", "Slack notification sent to fulfillment team", "Daily sales report generated automatically", "Low stock alerts trigger when inventory < 10 units", "Weekly performance summary emailed to owner"]
}, {
  title: "Multi-Platform SaaS Workflow",
  description: "SaaS Startup: Streamlined customer onboarding by connecting payments, team notifications, and documentation across multiple platforms.",
  technologies: ["n8n", "Slack", "Notion", "Stripe"],
  features: ["Onboarding process went from 30 minutes manual → 100% automated", "Customer experience improved with instant onboarding emails", "Scaled to handle 5x more customers without extra staff", "Automated documentation creation"],
  category: "SaaS Automation",
  client: "SaaS Founder",
  problem: "Customer onboarding was messy—payments, team notifications, and documentation were handled separately.",
  solution: "Built n8n workflow: Stripe payment → Notion database → Slack channel → Welcome email automation.",
  automationImage: n8nAutomation,
  platform: "n8n + Stripe",
  detailedWorkflow: ["Customer completes Stripe payment successfully", "n8n webhook receives payment confirmation", "New customer record created in Notion database", "Welcome email with login credentials sent automatically", "Slack notification posted to #new-customers channel", "Onboarding task list generated in Notion", "Customer added to appropriate email sequences", "Account provisioning completed automatically"]
}];
const Projects = () => {
  return <section id="projects" className="py-20 px-4 bg-muted/50">
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
        
        
      </div>
    </section>;
};
export default Projects;