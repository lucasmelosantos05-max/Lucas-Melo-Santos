
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home', id: 'home' },
    { name: 'Sobre', href: '#sobre', id: 'sobre' },
    { name: 'Experiência', href: '#experiencia', id: 'experiencia' },
    { name: 'Serviços', href: '#servicos', id: 'servicos' },
    { name: 'Tecnologia', href: '#solucoes-digitais', id: 'solucoes-digitais' },
    { name: 'Contato', href: '#contato', id: 'contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
            LM
          </div>
          <div className={`${scrolled ? 'text-slate-900' : 'text-slate-800'} transition-colors`}>
            <p className="font-bold text-sm leading-none tracking-tight">LUCAS MELO</p>
            <p className="text-[9px] uppercase tracking-widest font-bold text-blue-600">Gestão & Tecnologia</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-all hover:text-blue-600 ${
                activeSection === link.id ? 'text-blue-600' : 'text-slate-500'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
          >
            Orçamento
          </a>
        </nav>

        <button className="lg:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-8 flex flex-col gap-5 shadow-xl">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-sm font-bold text-slate-800 uppercase tracking-widest">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
