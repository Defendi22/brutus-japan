import React from 'react';
import { Leaf, Globe, Share2, Phone, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3E2723] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-amber-600 p-2 rounded-lg">
                <Leaf className="text-white h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">BRUTUS</h1>
                <p className="text-[10px] text-amber-500 font-bold uppercase tracking-widest leading-none">Japão</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Levando o melhor da agricultura japonesa para sua mesa. Qualidade, frescor e respeito à terra.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg hover:bg-amber-600 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="p-2  rounded-lg hover:bg-amber-600 transition-colors">
                <Share2 className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Início</a></li>
              <li><a href="#catalogo" className="hover:text-amber-500 transition-colors">Produtos</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Como Comprar</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-amber-500 shrink-0" />
                <span>+81 90-1234-5678</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                <span>contato@brutusveg.jp</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 shrink-0" />
                <span>Gunma-ken, Oizumi-machi, Sakada 123</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Receba ofertas exclusivas e dicas de culinária.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="border-none rounded-lg px-4 py-2 w-full text-sm focus:ring-2 focus:ring-amber-900 outline-"
              />
              <button className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                Ok
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Brutus Japão. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
