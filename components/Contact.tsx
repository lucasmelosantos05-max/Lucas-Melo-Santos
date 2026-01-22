
import React from 'react';
import { Mail, MessageSquare, Linkedin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-32 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 space-y-10">
            <div className="space-y-4">
              <span className="text-emerald-600 font-bold text-xs uppercase tracking-[0.3em]">Contato Executivo</span>
              <h2 className="font-serif text-4xl md:text-5xl text-slate-900 leading-tight">Inicie sua <i className="text-slate-500">Transformação</i> Financeira.</h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed font-light">
              Seja para uma proposta de BPO ou uma parceria estratégica, respondo pessoalmente a cada contato em até 24 horas úteis.
            </p>

            <div className="space-y-8 pt-8 border-t border-slate-200">
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">E-mail</p>
                  <p className="text-slate-900 font-bold">contato@sistemabpo.com.br</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">WhatsApp</p>
                  <p className="text-slate-900 font-bold">(48) 9 9999-9999</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">LinkedIn</p>
                  <p className="text-slate-900 font-bold">/in/lucasmelosantos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest ml-2">Nome Completo</label>
                    <input className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-300" placeholder="Ex: Lucas Melo" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest ml-2">E-mail Corporativo</label>
                    <input className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-300" placeholder="lucas@empresa.com.br" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest ml-2">Qual seu principal desafio financeiro?</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 transition-all text-slate-500">
                    <option>BPO Financeiro Completo</option>
                    <option>Estruturação de Processos</option>
                    <option>Assessoria para PMEs</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest ml-2">Mensagem</label>
                  <textarea rows={4} className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-300" placeholder="Conte-me um pouco sobre sua empresa..."></textarea>
                </div>
                <button className="w-full py-5 bg-emerald-500 text-slate-900 font-bold rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/20">
                  Enviar Solicitação de Diagnóstico <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
