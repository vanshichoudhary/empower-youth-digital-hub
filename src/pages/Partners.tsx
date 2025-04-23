
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const partnerLogos = [
  {
    name: "Tech Innovate",
    logo: "https://placehold.co/200x80/eee/aaa?text=Tech+Innovate",
    description: "Supporting youth in technology through mentorship and resources."
  },
  {
    name: "Global Education Fund",
    logo: "https://placehold.co/200x80/eee/aaa?text=Global+Education",
    description: "Providing scholarships and educational opportunities worldwide."
  },
  {
    name: "Future Leaders",
    logo: "https://placehold.co/200x80/eee/aaa?text=Future+Leaders",
    description: "Developing leadership skills among young people."
  },
  {
    name: "Green Earth Initiative",
    logo: "https://placehold.co/200x80/eee/aaa?text=Green+Earth",
    description: "Promoting environmental awareness and sustainability."
  },
  {
    name: "Digital Access",
    logo: "https://placehold.co/200x80/eee/aaa?text=Digital+Access",
    description: "Bridging the digital divide through technology donations."
  },
  {
    name: "Arts United",
    logo: "https://placehold.co/200x80/eee/aaa?text=Arts+United",
    description: "Supporting creative expression through arts education."
  },
  {
    name: "Health Forward",
    logo: "https://placehold.co/200x80/eee/aaa?text=Health+Forward",
    description: "Promoting physical and mental wellbeing among youth."
  },
  {
    name: "Community Builders",
    logo: "https://placehold.co/200x80/eee/aaa?text=Community+Builders",
    description: "Creating spaces for youth engagement and community service."
  },
];

const formSchema = z.object({
  organizationName: z.string().min(2, { message: "Organization name is required" }),
  contactName: z.string().min(2, { message: "Contact name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number is required" }),
  website: z.string().url({ message: "Must be a valid URL" }).optional().or(z.literal('')),
  partnershipType: z.string().min(2, { message: "Please select a partnership type" }),
  message: z.string().min(10, { message: "Please provide more details about your interest" }),
});

const PartnersPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organizationName: "",
      contactName: "",
      email: "",
      phone: "",
      website: "",
      partnershipType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would connect to a backend API
    console.log(values);
    setFormSubmitted(true);
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Partners</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We collaborate with organizations that share our vision of empowering youth
          and creating positive change in communities worldwide.
        </p>
      </div>

      <section className="mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partnerLogos.map((partner, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition border border-gray-100"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="mb-4 h-16 w-auto object-contain"
              />
              <h3 className="font-semibold text-gray-800 mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-youth-purple/5 to-youth-teal/5 rounded-3xl">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Partnership Opportunities</h2>
          <p className="text-gray-600 mb-12">
            We offer various partnership opportunities for organizations looking to make a positive impact
            on youth empowerment. Join us in our mission to support the next generation of leaders.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="w-12 h-12 bg-youth-purple/10 rounded-lg flex items-center justify-center text-youth-purple mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Financial Support</h3>
              <p className="text-gray-600">
                Fund our programs and initiatives to directly impact youth development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <div className="w-12 h-12 bg-youth-purple/10 rounded-lg flex items-center justify-center text-youth-purple mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Mentorship</h3>
              <p className="text-gray-600">
                Provide expertise and guidance to help young people reach their potential.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <div className="w-12 h-12 bg-youth-purple/10 rounded-lg flex items-center justify-center text-youth-purple mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Resource Sharing</h3>
              <p className="text-gray-600">
                Share your facilities, technologies, or materials to enhance our programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="partner-application">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Become a Partner</h2>
            <p className="text-gray-600">
              Interested in partnering with Youth Empire? Fill out the form below and our team will
              get back to you within 3 business days.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Application Received!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in partnering with Youth Empire. Our team will review your application 
                and get back to you within 3 business days.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setFormSubmitted(false)}
              >
                Submit Another Application
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="organizationName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your organization name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Person</FormLabel>
                          <FormControl>
                            <Input placeholder="Full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="contact@organization.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://yourorganization.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="partnershipType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Partnership Type</FormLabel>
                        <FormControl>
                          <select 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            {...field}
                          >
                            <option value="">Select partnership type</option>
                            <option value="financial">Financial Support</option>
                            <option value="mentorship">Mentorship</option>
                            <option value="resources">Resource Sharing</option>
                            <option value="events">Event Hosting</option>
                            <option value="other">Other</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell us about your organization and partnership interest</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Share more details about your organization and how you'd like to partner with Youth Empire..."
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="text-center">
                    <Button type="submit" size="lg" className="px-8">
                      Submit Application
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
