
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-youth-purple/5 to-youth-blue/5 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-youth-purple to-youth-blue bg-clip-text text-transparent">
                Empowering Youth 
              </span>
              <br /> 
              <span className="text-gray-800">For a Better Tomorrow</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Youth Empire brings together resources, mentorship, and opportunities 
              to help young leaders thrive in a rapidly changing world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/opportunities">Explore Opportunities</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-youth-purple/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-youth-teal/10 rounded-full z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Diverse group of youth collaborating" 
                className="rounded-lg shadow-xl relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
