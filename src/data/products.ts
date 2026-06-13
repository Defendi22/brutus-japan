export interface Product {
  id: string;
  name: string;
  japaneseName: string;
  price: number;
  unit: string;
  image: string;
  category: 'Legumes' | 'Raízes' | 'Folhas' | 'Frutas';
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Daikon (Rabanete Japonês)',
    japaneseName: '大根',
    price: 150,
    unit: 'unid',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=800&auto=format&fit=crop',
    category: 'Raízes',
    description: 'Rabanete japonês fresco, crocante e versátil para saladas ou cozidos.'
  },
  {
    id: '2',
    name: 'Kabotcha (Abóbora Japonesa)',
    japaneseName: 'カボチャ',
    price: 450,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1506807803488-8eafc15547a6?q=80&w=800&auto=format&fit=crop',
    category: 'Legumes',
    description: 'Abóbora doce e cremosa, perfeita para o tradicional Nimono.'
  },
  {
    id: '3',
    name: 'Shitake Fresh',
    japaneseName: '椎茸',
    price: 300,
    unit: 'bandeja',
    image: 'https://images.unsplash.com/photo-1504672281656-e4981d70414b?q=80&w=800&auto=format&fit=crop',
    category: 'Legumes',
    description: 'Cogumelos Shitake frescos colhidos no dia. Sabor intenso e umami.'
  },
  {
    id: '4',
    name: 'Hakusai (Acelga)',
    japaneseName: '白菜',
    price: 280,
    unit: 'unid',
    image: 'https://images.unsplash.com/photo-1588690466472-a7d57183e9be?q=80&w=800&auto=format&fit=crop',
    category: 'Folhas',
    description: 'Acelga grande e suculenta, ideal para Nabe e conservas.'
  },
  {
    id: '5',
    name: 'Satsumaimo (Batata Doce)',
    japaneseName: 'さつまいも',
    price: 350,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1596003906949-67221c37965c?q=80&w=800&auto=format&fit=crop',
    category: 'Raízes',
    description: 'Batata doce japonesa roxa por fora e amarela por dentro, super doce.'
  },
  {
    id: '6',
    name: 'Nasu (Beringela Japonesa)',
    japaneseName: '茄子',
    price: 200,
    unit: 'pct',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop',
    category: 'Legumes',
    description: 'Beringelas menores e mais macias, perfeitas para grelhar.'
  },
  {
    id: '7',
    name: 'Komatsuna',
    japaneseName: '小松菜',
    price: 180,
    unit: 'maço',
    image: 'https://images.unsplash.com/photo-1614735241165-6756e1df61ab?q=80&w=800&auto=format&fit=crop',
    category: 'Folhas',
    description: 'Espinafre japonês rico em cálcio e ferro.'
  },
  {
    id: '8',
    name: 'Pimentão (Piman)',
    japaneseName: 'ピーマン',
    price: 150,
    unit: 'pct',
    image: 'https://images.unsplash.com/photo-1566116327663-d144e9766946?q=80&w=800&auto=format&fit=crop',
    category: 'Legumes',
    description: 'Pimentões verdes pequenos e crocantes, clássicos do dia a dia.'
  },
  {
    id: '9',
    name: 'Goya (Melão São Caetano)',
    japaneseName: 'ゴーヤ',
    price: 250,
    unit: 'unid',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=800&auto=format&fit=crop',
    category: 'Legumes',
    description: 'O famoso melão amargo de Okinawa, extremamente saudável e refrescante.'
  }
];
