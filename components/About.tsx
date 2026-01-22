
import React from 'react';
import { User, Award, BookOpen, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const trajectory = [
    { stage: "CEO", label: "Liderança & Inovação", period: "Atual", desc: "Fundação da Sistema BPO & Gestão Financeira, focada em terceirização e tecnologia." },
    { stage: "Assistente Financeiro", label: "Especialista em Fluxo", period: "5 Anos", desc: "Controle de grandes contas, conciliação bancária e apoio estratégico à diretoria." },
    { stage: "Assistente Admin", label: "Base de Processos", period: "2 Anos", desc: "Organização estrutural e padronização de rotinas corporativas." },
    { stage: "Jovem Aprendiz", label: "O Início de Tudo", period: "Formação", desc: "Primeiro contato com a cultura empresarial e rotinas administrativas." }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Minha Trajetória</span>
              <h2 className="font-serif text-4xl text-slate-900">Um percurso de <i className="text-blue-600">evolução</i> contínua.</h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg font-light">
              Com formação em <span className="font-semibold text-slate-900">Administração</span> e especialização técnica em <span className="font-semibold text-slate-900">Contabilidade</span>, construí uma base sólida que une o rigor numérico à visão administrativa moderna.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-all">
                <BookOpen className="text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">Formação Acadêmica</h4>
                <p className="text-sm text-slate-500">Graduado em Administração de Empresas com foco em finanças corporativas.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-all">
                <Award className="text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">Técnico Contábil</h4>
                <p className="text-sm text-slate-500">Expertise técnica em normas contábeis, legislação e prestação de contas.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="space-y-4 relative">
              {trajectory.map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border-2 ${idx === 0 ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'bg-white border-slate-200 text-slate-400'}`}>
                      {trajectory.length - idx}
                    </div>
                    {idx !== trajectory.length - 1 && <div className="w-px h-full bg-slate-200"></div>}
                  </div>
                  <div className={`flex-1 pb-10 ${idx === 0 ? 'mt-1' : 'mt-1 opacity-60 group-hover:opacity-100 transition-opacity'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-bold text-slate-900">{item.stage}</h5>
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-tighter">{item.period}</span>
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-2">{item.label}</p>
                    <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
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

export default About;
