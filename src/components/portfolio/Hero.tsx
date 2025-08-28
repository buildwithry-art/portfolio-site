import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import ParticleBackground from "../ParticleBackground";
import adrianPhoto from "@/assets/adrian-photo.png";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with particles */}
      <div className="absolute inset-0 hero-bg-light dark:hero-bg-dark">
        <ParticleBackground isDark={false} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-lg font-semibold text-muted-foreground tracking-wide">BUILD WITH RY</span>
            </div>
            
            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-foreground">Automation</span><br />
                <span className="text-gradient">Specialist</span>
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Go High Level | AI Workflow Builder | Process Analyst
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                I build smart automations and scalable systems that save time and boost revenue.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="lg" className="text-lg px-8 py-6">
                See My Work →
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 glass">
                Book a Call
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div>
                  <div className="font-bold text-foreground">+50 automations</div>
                  <div className="text-sm text-muted-foreground">shipped</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div>
                  <div className="font-bold text-foreground">70% avg time</div>
                  <div className="text-sm text-muted-foreground">saved</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div>
                  <div className="font-bold text-foreground">30 pipelines</div>
                  <div className="text-sm text-muted-foreground">optimized</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              
              {/* Photo container with glassmorphism */}
              <div className="glass rounded-3xl p-6 max-w-md">
                <img
                  src={adrianPhoto}
                  alt="Adrian Agdan - Automation Specialist"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6">
                <div className="glass rounded-full p-4 bg-primary/10">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;