import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Film, Search, Bell, User } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
      isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/75 to-transparent'
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-netflix-red">
            <Film className="h-8 w-8" />
          </Link>
          <div className="hidden space-x-4 text-sm font-medium text-white md:flex">
            <Link to="/browse" className="hover:text-gray-300">Home</Link>
            <Link to="/browse/tv" className="hover:text-gray-300">TV Shows</Link>
            <Link to="/browse/movies" className="hover:text-gray-300">Movies</Link>
            <Link to="/browse/new" className="hover:text-gray-300">New & Popular</Link>
            <Link to="/browse/my-list" className="hover:text-gray-300">My List</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-white">
          <button className="hover:text-gray-300">
            <Search className="h-5 w-5" />
          </button>
          <button className="hover:text-gray-300">
            <Bell className="h-5 w-5" />
          </button>
          <Link to="/profile" className="hover:text-gray-300">
            <User className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}