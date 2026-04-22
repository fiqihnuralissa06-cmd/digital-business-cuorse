import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Kursus', href: '/courses' },
    { name: 'Tentang Kami', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-slate-900">Akademi Bisnis</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.href ? "text-primary" : "text-slate-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/courses"
              className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary-light transition-all"
            >
              Mulai Belajar
            </Link>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 flex flex-col gap-4 shadow-lg">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-base font-medium py-2 px-4 rounded-lg transition-colors",
                location.pathname === item.href ? "bg-slate-50 text-primary" : "text-slate-600 hover:bg-slate-50 hover:text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/courses"
            className="bg-primary text-white px-4 py-3 rounded-xl text-center font-bold"
            onClick={() => setIsOpen(false)}
          >
            Mulai Belajar
          </Link>
        </div>
      )}
    </nav>
  );
}
