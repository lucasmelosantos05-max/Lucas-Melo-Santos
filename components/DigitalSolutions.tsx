
import React from 'react';
import { Bot, AppWindow, Globe, Zap, Code2, Database } from 'lucide-react';

const DigitalSolutions: React.FC = () => {
  const tools = ["Google AI Studio", "ChatGPT", "Gemini", "Tailwind CSS", "React", "Low-Code/No-Code"];

  const solutions = [
    {
      title: "Automação com IA",
      desc: "Implementação de workflows inteligentes utilizando Gemini e ChatGPT para análise de dados e rotinas administrativas.",
      icon: <Bot className="text-blue-600" />
    },
    {
      title: "Apps e Portais Internos",
      desc: "Desenvolvimento de ferramentas personalizadas para controle de estoque, gestão de equipes e visualização de KPIs.",
      icon: <AppWindow className="text-blue-600" />
    },
    {
      title: "Sites Institucionais",
      desc: "Criação de presenças digitais modernas, focadas em conversão e autoridade de marca para empresas.",
      icon: <Globe className="text-blue-600" />
    }
  ];

  return (
    <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em]">Transformação Digital</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">Tecnologia que <i className="text-blue-400">Escala</i> a Eficiência.</h2>
            </div>
            
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              Não se trata apenas de software, mas de <span className="text-white font-medium">soluções estratégicas</span>. Desenvolvo sistemas que eliminam gargalos operacionais e trazem a inteligência artificial para o dia a dia do seu negócio.
            </p>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool, idx) => (
                <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-slate-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid gap-6">
            {solutions.map((item, idx) => (
              <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-blue-500/50 transition-all group">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalSolutions;
