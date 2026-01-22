
import React from 'react';
import { Receipt, PieChart, ShieldCheck, ClipboardList, Layers, TrendingUp } from 'lucide-react';

const Services: React.FC = () => {
  const financeServices = [
    { title: "BPO Financeiro", desc: "Terceirização completa de Contas a Pagar, Receber e Conciliação.", icon: <Receipt /> },
    { title: "Gestão Contábil", desc: "Apoio no fechamento mensal, tributos e integração contábil.", icon: <ShieldCheck /> },
    { title: "Fluxo de Caixa", desc: "Monitoramento e projeções financeiras para evitar surpresas.", icon: <TrendingUp /> },
    { title: "Relatórios Gerenciais", desc: "KPIs e indicadores de desempenho para apoio à diretoria.", icon: <PieChart /> },
    { title: "Padronização Administrativa", desc: "Criação de POPs e fluxogramas operacionais eficientes.", icon: <Layers /> },
    { title: "Prestação de Contas", desc: "Transparência total em auditorias e conselhos fiscais.", icon: <ClipboardList /> }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Especialidades</span>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mt-4 leading-tight">Soluções em <i className="text-blue-600">Finanças</i> e Operações.</h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm leading-relaxed mb-2">
            Minha abordagem une a precisão dos números com processos desenhados para a escala do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {financeServices.map((s, idx) => (
            <div key={idx} className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
