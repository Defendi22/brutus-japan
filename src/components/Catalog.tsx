import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const categories = ['Todos', 'Legumes', 'Raízes', 'Folhas', 'Frutas'];

import { Search } from 'lucide-react';

const Catalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'Todos' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.japaneseName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalogo" className="py-20 bg-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Nosso Catálogo</h2>
            <p className="text-gray-500">Selecione os melhores produtos da época.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 flex-1 justify-end">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Buscar legumes..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-full text-sm focus:ring-2 focus:ring-amber-500 outline-none w-full sm:w-64"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${
                    activeCategory === cat 
                      ? 'bg-amber-900 text-white shadow-lg shadow-amber-100' 
                      : 'bg-white text-gray-600 border border-gray-100 hover:border-amber-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 italic">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
