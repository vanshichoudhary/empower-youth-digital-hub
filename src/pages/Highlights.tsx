
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const highlights = [
  {
    id: 1,
    category: "Leadership",
    title: "Community Clean-up Initiative",
    name: "Amara Patel",
    location: "Mumbai, India",
    description: "Organized a team of 30 volunteers to clean local beaches, removing over 500kg of plastic waste in a single day.",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    impact: "Environmental protection and community mobilization"
  },
  {
    id: 2,
    category: "Innovation",
    title: "Low-cost Water Filter Design",
    name: "Liam Johnson",
    location: "Nairobi, Kenya",
    description: "Developed an affordable water filtration system using locally available materials, bringing clean water to rural communities.",
    image: "https://images.unsplash.com/photo-1593526613712-7b4b8bd269b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    impact: "Access to clean water for over 200 families"
  },
  {
    id: 3,
    category: "Education",
    title: "Peer Tutoring Network",
    name: "Sofia Gonzalez",
    location: "Mexico City, Mexico",
    description: "Created a volunteer network of student tutors to help peers struggling with academics during pandemic school closures.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    impact: "Academic support for over 150 students"
  },
  {
    id: 4,
    category: "Technology",
    title: "Mental Health App for Teens",
    name: "Alex Chen",
    location: "Singapore",
    description: "Developed a mobile app providing mental health resources, anonymous peer support, and professional guidance for teenagers.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    impact: "Over 5,000 downloads with positive user feedback"
  },
  {
    id: 5,
    category: "Social Change",
    title: "Gender Equality Workshop Series",
    name: "Maya Williams",
    location: "Cape Town, South Africa",
    description: "Organized a series of workshops in schools addressing gender stereotypes and promoting equality among young people.",
    image: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    impact: "Reached over 500 students across 10 schools"
  },
  {
    id: 6,
    category: "Arts & Culture",
    title: "Cultural Heritage Preservation Project",
    name: "David Kim",
    location: "Seoul, South Korea",
    description: "Led a digital documentation project to preserve local cultural traditions and stories from elders in the community.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    impact: "Preserved 25 oral histories and cultural practices"
  },
];

const categories = [
  "All",
  "Leadership",
  "Innovation",
  "Education",
  "Technology",
  "Social Change",
  "Arts & Culture"
];

const HighlightsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedHighlight, setSelectedHighlight] = useState<number | null>(null);

  const filteredHighlights = selectedCategory === "All" 
    ? highlights 
    : highlights.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Youth Highlights</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Celebrating young leaders who are making a difference through innovation,
          leadership, and community service around the world.
        </p>
      </div>

      <Tabs defaultValue="grid" className="mb-8">
        <div className="flex justify-between items-center mb-8">
          <div className="overflow-x-auto pb-2">
            <TabsList className="h-10">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "text-youth-purple" : ""}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <div>
            <TabsList>
              <TabsTrigger value="grid">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </TabsTrigger>
              <TabsTrigger value="list">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="grid" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHighlights.map((item) => (
              <Card 
                key={item.id} 
                className="overflow-hidden border border-gray-200 transition-all hover:shadow-lg"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-youth-purple text-white text-xs px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <span>{item.name}</span>
                    <span className="mx-2">•</span>
                    <span>{item.location}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-gray-700 line-clamp-3">{item.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-2">
                  <div className="text-sm font-medium text-youth-teal">
                    Impact: {item.impact.split(" ")[0]}
                  </div>
                  <Button 
                    variant="ghost" 
                    onClick={() => setSelectedHighlight(item.id)}
                    className="text-youth-purple hover:text-youth-purple/80 hover:bg-youth-purple/5"
                  >
                    Read Story
                    <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list" className="mt-0">
          <div className="space-y-6">
            {filteredHighlights.map((item) => (
              <Card key={item.id} className="overflow-hidden border border-gray-200">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 h-60 md:h-auto overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/4 p-6">
                    <div className="mb-4">
                      <span className="bg-youth-purple/10 text-youth-purple text-xs px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.name} • {item.location}
                    </p>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-medium text-youth-teal">
                        Impact: {item.impact}
                      </div>
                      <Button 
                        variant="ghost" 
                        onClick={() => setSelectedHighlight(item.id)}
                        className="text-youth-purple hover:text-youth-purple/80 hover:bg-youth-purple/5"
                      >
                        Read Story
                        <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Want to be featured?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Are you making a positive impact in your community? Share your story for a chance
          to be featured in our highlights section.
        </p>
        <Button size="lg" variant="outline" className="mx-auto">
          Submit Your Story
        </Button>
      </div>

      {selectedHighlight && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {highlights.filter(h => h.id === selectedHighlight).map((item) => (
              <div key={item.id} className="relative">
                <button 
                  onClick={() => setSelectedHighlight(null)}
                  className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 z-10 hover:bg-white transition"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="h-80 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="bg-youth-purple/10 text-youth-purple text-sm px-4 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
                  <p className="text-gray-600 mb-6">
                    {item.name} • {item.location}
                  </p>
                  <div className="prose max-w-none text-gray-700">
                    <p className="mb-4">{item.description}</p>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur
                      interdum, nisl nisi consectetur purus, eget porttitor nisl nisl sit amet magna. Donec euismod, 
                      nisl vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl sit amet magna.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">The Challenge</h3>
                    <p className="mb-4">
                      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                      Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                      Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">The Solution</h3>
                    <p className="mb-4">
                      Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor
                      volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                      Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Impact</h3>
                    <p className="mb-4">{item.impact}</p>
                  </div>
                  <div className="mt-8 border-t pt-6 flex justify-between items-center">
                    <span className="text-gray-500">Share this story:</span>
                    <div className="flex space-x-4">
                      <button className="text-gray-500 hover:text-youth-purple transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                        </svg>
                      </button>
                      <button className="text-gray-500 hover:text-youth-purple transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                        </svg>
                      </button>
                      <button className="text-gray-500 hover:text-youth-purple transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A6.94 6.94 0 0 1 16.98 24H7.02a6.9 6.9 0 0 1-5.05-1.89A6.94 6.94 0 0 1 0 16.98V7.02C0 4.94.68 3.2 1.95 1.93 3.22.65 4.94 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm7.7-3.47a1.41 1.41 0 1 1 0 2.82 1.41 1.41 0 0 1 0-2.82z"/>
                        </svg>
                      </button>
                      <button className="text-gray-500 hover:text-youth-purple transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v15.856c0 1.368-1.104 2.472-2.46 2.472H2.46C1.104 20.8 0 19.696 0 18.328V2.472C0 1.104 1.104 0 2.46 0h17.08zM6.23 17.52h-4.31V7.627h4.31v9.893zM4.068 6.342c-1.368 0-2.484-1.116-2.484-2.484 0-1.368 1.116-2.484 2.484-2.484 1.368 0 2.484 1.116 2.484 2.484 0 1.368-1.116 2.484-2.484 2.484zM17.52 17.52h-4.342v-5.09c0-1.102-.026-2.52-1.536-2.52-1.536 0-1.77 1.198-1.77 2.436v5.174h-4.32V7.627h4.17v1.904h.06c.384-.726 1.32-1.5 2.724-1.5 2.92 0 3.456 1.92 3.456 4.416v5.073z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HighlightsPage;
