
import React from 'react';
import { ArrowRight, Terminal, TrendingUp, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-6 translate-x-12 hidden lg:block"></div>
      <div className="absolute top-40 right-20 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-100">
              <Cpu size={14} /> Soluções 4.0: Finanças & IA
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl text-slate-900 leading-[1.1] tracking-tight">
              Gestão Financeira e <span className="text-blue-600">Tecnologia</span> para Negócios de Elite.
            </h1>
            
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              De contas a pagar ao desenvolvimento de aplicativos internos e automações com IA. Unindo <span className="font-semibold text-slate-900">8 anos de experiência financeira</span> com a vanguarda tecnológica.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#servicos" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-3">
                Serviços Financeiros <ArrowRight size={18} />
              </a>
              <a href="#solucoes-digitais" className="px-8 py-4 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center gap-3">
                <Terminal size={18} /> Soluções Digitais
              </a>
            </div>

            <div className="flex items-center gap-12 pt-10">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">8+</span>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-widest">Anos de Experiência</span>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">IA</span>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-widest">Automação Nativa</span>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">BPO</span>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-widest">Gestão de Processos</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 p-4 bg-white rounded-3xl shadow-2xl border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" 
                alt="Gestão Financeira e Tech" 
                className="rounded-2xl w-full grayscale-[0.5] contrast-125"
              />
            </div>
            {/* Float Element */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 uppercase">Sistema BPO</p>
                <p className="text-[10px] text-slate-400">Eficiência e Ordem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
