import React from 'react';
import { X, Trash2, Minus, Plus, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUPPLIER_PHONE = "8107045638787"; // Substitua pelo número real

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const generateMessage = () => {
    let message = "*NOVO PEDIDO - BRUTUS VEGETABLES*\n\n";
    message += "Olá! Gostaria de fazer o seguinte pedido:\n\n";
    
    cart.forEach((item) => {
      message += `• *${item.name}* (${item.japaneseName})\n`;
      message += `  Qtd: ${item.quantity} ${item.unit} | Subtotal: ¥${item.price * item.quantity}\n\n`;
    });
    
    message += `*TOTAL: ¥${totalPrice}*\n\n`;
    message += "Por favor, confirme a disponibilidade e o valor do frete.";
    return message;
  };

  const handleWhatsAppOrder = () => {
    const encodedMessage = encodeURIComponent(generateMessage());
    window.open(`https://wa.me/${SUPPLIER_PHONE}?text=${encodedMessage}`, '_blank');
  };

  const handleLineOrder = () => {
    const encodedMessage = encodeURIComponent(generateMessage());
    // No LINE, podemos usar line://msg/text/ para abrir o app ou https://line.me/R/msg/text/
    window.open(`https://line.me/R/msg/text/?${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Seu Carrinho</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="bg-gray-50 p-6 rounded-full mb-4">
                    <MessageCircle className="h-12 w-12 text-gray-300" />
                  </div>
                  <p className="text-gray-500 font-medium">Seu carrinho está vazio.</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 text-green-600 font-bold hover:underline"
                  >
                    Começar a comprar
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img src={item.image} alt={item.name} className="h-20 w-20 object-cover rounded-lg border border-gray-100" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                          <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">{item.japaneseName}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 hover:bg-gray-50 text-gray-500"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-3 py-1 text-sm font-bold text-gray-900 border-x border-gray-200">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 hover:bg-gray-50 text-gray-500"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <p className="font-bold text-gray-900">¥{item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t bg-gray-50 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Total do Pedido</span>
                  <span className="text-2xl font-black text-gray-900">¥{totalPrice}</span>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  <button 
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-100"
                  >
                    <MessageCircle className="h-6 w-6" />
                    Pedido via WhatsApp
                  </button>
                  <button 
                    onClick={handleLineOrder}
                    className="w-full bg-[#06C755] hover:bg-[#05b34d] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-100"
                  >
                    <div className="h-6 w-6 flex items-center justify-center font-black text-xs border-2 border-white rounded-md">L</div>
                    Pedido via LINE
                  </button>
                </div>
                
                <button 
                  onClick={clearCart}
                  className="w-full text-gray-400 text-sm font-medium hover:text-red-500 transition-colors"
                >
                  Limpar Carrinho
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
