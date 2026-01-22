
import React from 'react';
import { Check, Target, Zap, Shield, Microscope } from 'lucide-react';

const Differentials: React.FC = () => {
  const items = [
    {
      title: "Método e Padronização",
      desc: "Não apenas realizamos tarefas, criamos sistemas escaláveis.",
      icon: <Target className="text-emerald-500" />
    },
    {
      title: "Tecnologia Bancária",
      desc: "Integração direta com as melhores ferramentas de gestão do mercado.",
      icon: <Zap className="text-blue-500" />
    },
    {
      title: "Governança e Sigilo",
      desc: "Rigor absoluto na proteção dos dados sensíveis da sua empresa.",
      icon: <Shield className="text-slate-900" />
    },
    {
      title: "Olhar Analítico",
      desc: "Identificamos gargalos financeiros que outros deixam passar.",
      icon: <Microscope className="text-emerald-600" />
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=800&auto=format&fit=crop" 
                alt="Processos Financeiros" 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-emerald-500/20 mix-blend-multiply"></div>
            </div>
            {/* Design accents */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-100 rounded-full -z-10 animate-pulse"></div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-emerald-600 font-bold text-xs uppercase tracking-[0.3em]">Nosso Diferencial</span>
              <h2 className="font-serif text-4xl md:text-5xl text-slate-900 leading-tight">Excelência <i className="text-slate-500">Operacional</i> em cada centavo.</h2>
            </div>

            <div className="grid gap-8">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 transition-colors">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
