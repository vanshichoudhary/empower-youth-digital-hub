
import { useState } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Youth Empire gave me the confidence and skills I needed to start my community recycling initiative. The mentorship I received was invaluable.",
    name: "Priya Sharma",
    role: "Environmental Activist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The AI Opportunities Connector helped me find the perfect internship that matched my skills and interests. Today, I'm working with a tech company I admire.",
    name: "Alex Johnson",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Through Youth Empire's Life Lab, I learned how to tackle real-world challenges and developed leadership skills that have transformed my approach to problem-solving.",
    name: "Mia Rodriguez",
    role: "Student Leader",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gradient-to-r from-youth-purple/5 to-youth-teal/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">What Our Community Says</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-youth-purple to-youth-teal mx-auto mt-4 mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <svg 
              className="absolute top-6 left-6 w-12 h-12 text-youth-purple/10" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h10zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
            </svg>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg text-gray-700 italic mb-6">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mb-1">{testimonials[currentTestimonial].name}</h4>
              <p className="text-youth-purple">{testimonials[currentTestimonial].role}</p>
            </div>
            
            <div className="flex justify-center mt-10 space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="rounded-full"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentTestimonial ? "bg-youth-purple" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="rounded-full"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
