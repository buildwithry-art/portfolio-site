import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import ParticleBackground from "../ParticleBackground";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with particles */}
      <div className="absolute inset-0 hero-bg-light dark:hero-bg-dark">
        <ParticleBackground isDark={false} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center justify-center gap-2">
            Build with RY
            <Zap className="h-8 w-8 text-primary" />
          </h1>
        </div>
        
        {/* Glassmorphism container */}
        <div className="glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient">
            Adrian Agdan
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            GoHighLevel & Automation Specialist
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforming businesses through intelligent automation workflows, 
            lead generation systems, and seamless integrations with cutting-edge tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 glass">
              Get In Touch
            </Button>
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