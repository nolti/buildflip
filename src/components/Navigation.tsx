import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Servicios', href: '#services' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Equipo', href: '#team' },
  ];

  return (
    <nav className="fixed w-full bg-mdsecondary dark:bg-dark z-50 shadow-sm transition-colors duration-200">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-onsurface dark:text-primary">
            BuildFlip
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors text-onsurface hover:text-onprimary dark:text-secondary dark:hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary">
              Contactanos
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-dracula-current transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-onsurface hover:text-onprimary" />
              ) : (
                <Sun className="w-5 h-5 text-secondary hover:text-draculayellow" />
              )}
            </button>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-dracula-current transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-secondary" />
              ) : (
                <Sun className="w-5 h-5 text-secondary" />
              )}
            </button>
            <button
              className="text-secondary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#282a36] border-t border-dracula-current">
            <div className="container py-4 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Contactanos
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};