
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <HeroSection />
      
      <ServicesSection />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-youth-purple to-youth-teal rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Get Your Youth Empire ID Card</h2>
                <p className="mb-8 text-white/90 leading-relaxed">
                  Join our growing community of changemakers by registering for your official Youth Empire ID card. 
                  Unlock exclusive opportunities, resources, and events.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/id-card" className="font-medium">Apply Now</Link>
                </Button>
              </div>
              <div className="lg:w-1/2 bg-white/10 backdrop-blur-sm p-8 md:p-12 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="ID Card" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      <section className="py-20 bg-youth-teal/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Shape Your Future?</h2>
            <p className="text-gray-600 mb-10 text-lg">
              Join thousands of young leaders who are making a difference in their communities 
              and building valuable skills for the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/signup">Join Youth Empire</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/opportunities">Explore Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
