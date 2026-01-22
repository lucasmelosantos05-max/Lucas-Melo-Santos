
import React from 'react';
import { Building2, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "CEO & Fundador",
      company: "Sistema BPO & Gestão Financeira",
      desc: "Liderança estratégica em terceirização financeira, unindo controle rigoroso e automação tech.",
      tasks: ["BPO Financeiro de Elite", "Padronização de Processos", "Criação de Dashboards Gerenciais"]
    },
    {
      role: "Assistente Financeiro",
      company: "ACAERT",
      desc: "Atuação em entidade de classe estadual, gerindo fluxos complexos de tesouraria e prestação de contas.",
      tasks: ["Conciliação de Alto Volume", "Fechamento Mensal", "Relatórios para Diretoria"]
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Experiência Profissional</span>
          <h2 className="font-serif text-4xl text-slate-900">Autoridade em <i className="text-slate-500">Gestão</i>.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <Building2 size={24} />
                </div>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Histórico Consolidado</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
              <p className="text-blue-600 font-bold text-sm mb-4">{exp.company}</p>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed">{exp.desc}</p>
              <div className="space-y-3">
                {exp.tasks.map((task, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-blue-600" />
                    <span className="text-xs font-bold text-slate-700">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
