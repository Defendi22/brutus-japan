import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        <main>
          <Hero />
          <Catalog />
          
          {/* Why Choose Us Section */}
          <section id="sobre" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-green-600 rounded-[40px] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full -mr-32 -mt-32 opacity-50" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-700 rounded-full -ml-16 -mb-16 opacity-50" />
                
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                      Por que escolher os <br /> legumes da Brutus?
                    </h2>
                    <ul className="space-y-6">
                      {[
                        { title: 'Qualidade Premium', desc: 'Selecionamos apenas o melhor de cada colheita.' },
                        { title: 'Preço Justo', desc: 'Negociação direta com produtores locais no Japão.' },
                        { title: 'Entrega Própria', desc: 'Garantimos que o frescor chegue intacto até você.' }
                      ].map((item, i) => (
                        <li key={i} className="flex gap-4">
                          <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-1">
                            <span className="text-green-600 text-xs font-bold">{i+1}</span>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-lg">{item.title}</h4>
                            <p className="text-green-100 text-sm">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=400&auto=format&fit=crop" alt="Vegetal" className="rounded-3xl shadow-xl rotate-3" />
                    <img src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=400&auto=format&fit=crop" alt="Vegetal" className="rounded-3xl shadow-xl -rotate-6 mt-8 md:mt-12" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
        />

        {/* Floating Contact Buttons */}
        <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3 md:hidden">
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.656zm6.757-4.791c1.512.897 2.997 1.347 4.775 1.348 5.409 0 9.809-4.4 9.812-9.81 0-2.618-1.02-5.08-2.871-6.932-1.851-1.852-4.311-2.872-6.93-2.873-5.41 0-9.809 4.401-9.812 9.811-.001 1.788.479 3.534 1.391 5.034l-1.029 3.777 3.864-1.014zm11.366-7.327c-.314-.157-1.854-.915-2.142-1.02-.289-.105-.499-.157-.709.157-.21.314-.813 1.02-.996 1.23-.183.21-.367.236-.681.079-.314-.157-1.325-.488-2.524-1.558-.933-.832-1.563-1.859-1.746-2.173-.183-.314-.02-.485.137-.642.141-.141.314-.367.471-.55.157-.183.21-.314.314-.524.105-.21.052-.393-.026-.55-.079-.157-.709-1.706-.97-2.335-.255-.618-.512-.534-.709-.544-.183-.01-.393-.012-.603-.012s-.55.079-.839.42c-.289.314-1.101 1.076-1.101 2.625s1.127 3.041 1.284 3.251c.157.21 2.218 3.388 5.373 4.749.75.324 1.336.518 1.792.663.753.239 1.438.205 1.98.123.604-.091 1.854-.759 2.116-1.468.262-.708.262-1.31.183-1.44-.078-.127-.288-.205-.602-.362z" />
            </svg>
          </a>
          <a 
            href="https://line.me/R/ti/p/@brutusveg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#06C755] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center font-black text-xl"
          >
            L
          </a>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
