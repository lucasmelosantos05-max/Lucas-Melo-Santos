
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="bg-white text-slate-900 p-2 rounded-lg inline-block">
              <span className="font-bold text-xl leading-none">LS</span>
            </div>
            <p className="text-sm font-medium text-slate-300">Lucas Melo dos Santos</p>
            <p className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">Gestão Financeira & BPO</p>
          </div>

          <div className="flex gap-8 text-sm">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm">Desenvolvido com foco em resultados.</p>
            <p className="text-xs text-slate-500 mt-1">Florianópolis - SC</p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest">
          <p>© {currentYear} Lucas Melo dos Santos. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
