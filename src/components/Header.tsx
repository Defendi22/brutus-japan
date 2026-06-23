import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { totalItems } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 bg-orange-100 backdrop-blur-md z-50 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="assets/logobrutussemfundo.png"
            alt="Logo Brutus" 
            className="h-25 w-auto"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">BRUTUS</h1>
            <p className="text-[10px] text-orange-500 font-bold uppercase tracking-widest leading-none">Japão</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a href="#" className="hover:text-amber-600 transition-colors">Início</a>
          <a href="#catalogo" className="hover:text-amber-600 transition-colors">Produtos</a>
          <a href="#sobre" className="hover:text-amber-600 transition-colors">Sobre Nós</a>
        </nav>

        <button 
          onClick={onCartClick}
          className="relative p-2 text-gray-600 hover:text-green-600 transition-colors"
        >
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
