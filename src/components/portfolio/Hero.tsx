import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import automationIcon from "@/assets/automation-icon.png";
import adrianPhoto from "@/assets/adrian-photo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                I help businesses 
                <span className="text-gradient block">
                  automate workflows
                </span>
                and scale without extra staff
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Specialist in <span className="font-semibold text-primary">GoHighLevel</span>, <span className="font-semibold text-primary">Zapier</span>, <span className="font-semibold text-primary">Make</span>, and <span className="font-semibold text-primary">n8n</span> — turning manual tasks into seamless, revenue-driving systems.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 hover-lift bg-primary hover:bg-primary-hover text-primary-foreground font-semibold"
              >
                Work With Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 hover-lift border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              >
                Book a Free Strategy Call
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-primary mb-1">500+</h3>
                <p className="text-muted-foreground font-medium">Hours Saved</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-primary mb-1">95%</h3>
                <p className="text-muted-foreground font-medium">Error Reduction</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-primary mb-1">$2M+</h3>
                <p className="text-muted-foreground font-medium">Revenue Generated</p>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              
              {/* Main photo container */}
              <div className="relative">
                <img 
                  src={adrianPhoto}
                  alt="Adrian - Automation Specialist" 
                  className="w-80 h-80 object-cover rounded-3xl shadow-strong hover-glow"
                />
                
                {/* Automation icon overlay */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-strong animate-float">
                  <img 
                    src={automationIcon}
                    alt="Automation workflows" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-medium animate-bounce">
                24/7 Automation
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-medium" style={{animationDelay: '1s'}}>
                Seamless Integration
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;