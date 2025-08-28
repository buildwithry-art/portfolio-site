import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, NovaTech Solutions",
    company: "NovaTech Solutions",
    content: "Adrian's automation expertise transformed our lead management process. The Make.com workflows he built reduced our manual work by 80% and improved our response time dramatically.",
    avatar: "SM",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Operations Director",
    company: "BrightPath Automation",
    content: "The AI-powered proposal generator Adrian created is a game-changer. What used to take hours now takes minutes, and the quality is consistently excellent. Highly recommended!",
    avatar: "MC",
    rating: 5
  },
  {
    name: "Jennifer Rodriguez",
    role: "Marketing Manager",
    company: "Cookware Company",
    content: "Adrian's GoHighLevel setup and email automation increased our customer retention by 45%. His attention to detail and mobile-responsive designs exceeded our expectations.",
    avatar: "JR",
    rating: 5
  },
  {
    name: "David Park",
    role: "Founder",
    company: "AI Software",
    content: "Working with Adrian on our LinkedIn lead generation was fantastic. His empathetic messaging approach and systematic automation doubled our qualified leads.",
    avatar: "DP",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground">
            What my clients say about working with me
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass hover:scale-[1.02] smooth-animation relative">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>
                
                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
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

export default Testimonials;