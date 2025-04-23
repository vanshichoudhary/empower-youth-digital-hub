
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-youth-purple to-youth-blue bg-clip-text text-transparent">
            Youth Empire
          </h1>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-gray-700 hover:text-youth-purple transition">Home</Link>
          <Link to="/id-card" className="text-gray-700 hover:text-youth-purple transition">ID Card</Link>
          <Link to="/highlights" className="text-gray-700 hover:text-youth-purple transition">Highlights</Link>
          <Link to="/partners" className="text-gray-700 hover:text-youth-purple transition">Partners</Link>
          <Link to="/backers" className="text-gray-700 hover:text-youth-purple transition">Backers</Link>
          <Link to="/opportunities" className="text-gray-700 hover:text-youth-purple transition">Opportunities</Link>
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Join Us</Link>
          </Button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link to="/" className="text-gray-700 py-2 hover:text-youth-purple transition">Home</Link>
            <Link to="/id-card" className="text-gray-700 py-2 hover:text-youth-purple transition">ID Card</Link>
            <Link to="/highlights" className="text-gray-700 py-2 hover:text-youth-purple transition">Highlights</Link>
            <Link to="/partners" className="text-gray-700 py-2 hover:text-youth-purple transition">Partners</Link>
            <Link to="/backers" className="text-gray-700 py-2 hover:text-youth-purple transition">Backers</Link>
            <Link to="/opportunities" className="text-gray-700 py-2 hover:text-youth-purple transition">Opportunities</Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Join Us</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
