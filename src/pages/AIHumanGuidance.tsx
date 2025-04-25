// src/pages/AIHumanGuidance.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Placeholder for Chatbot Component (implementation required)
const Chatbot: React.FC = () => {
  return <div className="p-4 border rounded-lg">AI Chatbot Placeholder</div>;
};

// Placeholder for Testimonials Component (implementation required)
const Testimonials: React.FC = () => {
  return <div className="p-4 border rounded-lg">Testimonials Placeholder</div>;
};

// Placeholder for Roadmap Component (implementation required)
const Roadmap: React.FC = () => {
    return <div className="p-4 border rounded-lg">Roadmap Placeholder</div>;
  };

// Sample FAQs (fetch from backend in real app)
interface FAQ {
  category: string;
  question: string;
  answer: string;
}

const sampleFAQs: FAQ[] = [
  {
    category: 'AI',
    question: 'Best roadmap for a career in AI?',
    answer:
      'Start with foundational courses in mathematics and programming, then specialize in Machine Learning, Deep Learning, and Natural Language Processing.',
  },
  {
    category: 'Exams',
    question: 'How to prepare for CAT?',
    answer:
      'Focus on building strong analytical and quantitative skills. Practice with mock tests and past papers.',
  },
  {
    category: 'Commerce',
    question: 'What to do after 12th Commerce?',
    answer:
      'Explore options like B.Com, BBA, or specialized courses in finance, accounting, or economics.',
  },
  // Add more FAQs...
];

// Sample Mentor (fetch from backend in real app)
interface Mentor {
  name: string;
  university: string;
}

const sampleMentor: Mentor = {
    name: 'Dr. Jane Doe',
    university: 'Harvard University',
  };

const AIHumanGuidance: React.FC = () => {
    const [faqs, setFaqs] = useState<FAQ[]>(sampleFAQs);

    useEffect(() => {
        // in real app we will use this function to fecth data from backend
      // Fetch FAQs from the backend
    //   fetch('/api/faqs')
    //     .then(res => res.json())
    //     .then(data => setFaqs(data));
    }, []);
  
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-100 text-gray-800"
    >
      <div className="container mx-auto p-4">
        {/* Hero Section */}
        <section className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            AI & Human Guidance for Your Career
          </h1>
          <p className="text-lg mb-6">
            Navigate your career path with the power of AI and expert human guidance.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
            Ask Your Doubt Now
          </button>
        </section>

        {/* AI Chatbot Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">AI Chatbot</h2>
          <p className="text-gray-600 mb-4">
            Get instant answers to your career-related questions with our AI chatbot.
          </p>
          <Chatbot />
        </section>

        {/* FAQs Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-500">{faq.category}</h3>
                <h4 className="text-lg font-medium">{faq.question}</h4>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Talk to a Top Mentor Section */}
        <section className="mb-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Talk to a Top Mentor
          </h2>
          <p className="text-gray-600 mb-4">
            Get 1:1 guidance from mentors from top global universities like Harvard, Stanford, IITs, etc. Our mentor {sampleMentor.name} from {sampleMentor.university} is ready to assist you.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
              Book a Session
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50">
              Request a Callback
            </button>
          </div>
          <p className="text-gray-600 mt-4">
            Real-time chat or scheduled video call available.
          </p>
        </section>

        {/* Roadmap Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Explore Your Career Roadmap
          </h2>
          <p className="text-gray-600 mb-4">
            Discover the steps, skills, and opportunities on your career path.
          </p>
          <Roadmap />
          <Link to="/roadmap" className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
            Explore Your Career Roadmap
          </Link>
        </section>

        {/* Testimonials Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Testimonials</h2>
          <Testimonials />
        </section>
      </div>
      {/* Floating Chatbot Icon */}
      <div
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-colors duration-300"
        onClick={toggleChatbot}
      >
        {/* Add your chatbot icon here */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </div>
       {/* Chatbot Open */}
        {isChatbotOpen && (
          <div className="fixed bottom-24 right-8 bg-white p-4 rounded-lg shadow-lg w-80">
            <Chatbot />
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={toggleChatbot}
            >
              X
            </button>
          </div>
        )}
    </motion.div>
  );
};

export default AIHumanGuidance;