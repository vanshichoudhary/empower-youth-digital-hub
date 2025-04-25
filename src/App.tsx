
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import IDCardPage from "./pages/IDCard";
import HighlightsPage from "./pages/Highlights";
import PartnersPage from "./pages/Partners";
import NotFound from "./pages/NotFound";
import AIHumanGuidance from "./pages/AIHumanGuidance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/id-card" element={<IDCardPage />} />
            <Route path="/highlights" element={<HighlightsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/ai-human-guidance" element={<AIHumanGuidance />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
