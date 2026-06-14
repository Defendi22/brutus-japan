import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-orange-100">
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full  rounded-bl-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-orange-400 text-amber-100 text-sm font-semibold mb-6">
              🇯🇵 Produtos Locais no Japão
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              O Sabor do <span className="text-yellow-500">Brasil</span>, Cultivado no <span className="text-red-600">Japão</span>.
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              Qualidade Brutus: Cultivados com carinho em solo japonês, entregues frescos na sua porta ou comércio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#catalogo" 
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-900 text-white font-bold rounded-xl hover:bg-amber-00 transition-all"
              >
                Ver Catálogo
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#contato" 
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-100 text-gray-900 border-2 border-gray-100 font-bold rounded-xl hover:border-amber-600 transition-all"
              >
                Saiba Mais
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-gray-100 pt-8">
              <div>
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-500">Orgânico</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">24h</p>
                <p className="text-sm text-gray-500">Colheita p/ Entrega</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">1k+</p>
                <p className="text-sm text-gray-500">Clientes Felizes</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop" 
                alt="Legumes frescos Japão" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <span className="text-2xl">🚚</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Entrega Rápida</p>
                  <p className="text-xs text-gray-500">Em toda região central</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
