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
    name: 'Mandioca',
    japaneseName: 'キャッサバ',
    price: 498,
    unit: 'kg',
    image: 'https://s2-oglobo.glbimg.com/AMuTtwXlZ6hc-62sTAIDD310jJo=/0x0:3456x2453/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/w/T/usfTLPRjGniSAb4MExQA/106338299.jpg',
    category: 'Raízes',
    description: 'Mandioca fresca de alta qualidade, ideal para cozidos, frituras e pratos brasileiros.'
  },
  {
    id: '2',
    name: 'Beterraba',
    japaneseName: '赤ビーツ',
    price: 498,
    unit: 'kg',
    image: 'https://www.acordacidade.com.br/wp-content/uploads/2026/01/Beterraba-Foto-Agencia-Einstein-984x553.jpg',
    category: 'Raízes',
    description: 'Beterraba fresca, rica em nutrientes e perfeita para saladas e sucos.'
  },
  {
    id: '3',
    name: 'Abóbora Kabocha',
    japaneseName: 'カボチャ',
    price: 260,
    unit: 'kg',
    image: 'https://media.istockphoto.com/id/1266764962/pt/foto/fresh-japanese-pumpkin-with-pumpkin-seeds.jpg?s=612x612&w=0&k=20&c=E6wga8qtmIuctYVBkQ2REu9zR8LM_27tXqE4dj7bue8=',
    category: 'Legumes',
    description: 'Abóbora Kabocha doce e cremosa, muito utilizada na culinária japonesa.'
  },
  {
    id: '4',
    name: 'Batata',
    japaneseName: 'じゃがいも',
    price: 348,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=800&auto=format&fit=crop',
    category: 'Raízes',
    description: 'Batata selecionada, versátil para purês, frituras e cozidos.'
  },
  {
    id: '5',
    name: 'Milho Brasileiro',
    japaneseName: 'ブラジルのコーン',
    price: 160,
    unit: 'un',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=800&auto=format&fit=crop',
    category: 'Legumes',
    description: 'Milho brasileiro fresco e doce, vendido por unidade.'
  }
];
