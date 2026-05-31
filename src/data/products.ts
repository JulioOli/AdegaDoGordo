import type { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Heineken Long Neck',
    description: '330ml — gelada e pronta pra servir.',
    price: 8,
    image:
      'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=400&fit=crop',
    category: 'cervejas',
    available: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Brahma Duplo Malte',
    description: '350ml — leve e refrescante.',
    price: 5.5,
    image:
      'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400&h=400&fit=crop',
    category: 'cervejas',
    available: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Spaten 600ml',
    description: 'Puro malte, sabor marcante.',
    price: 12,
    image:
      'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=400&fit=crop',
    category: 'cervejas',
    available: true,
  },
  {
    id: '4',
    name: 'Whisky Red Label',
    description: 'Garrafa 750ml — Johnnie Walker.',
    price: 89.9,
    image:
      'https://images.unsplash.com/photo-1527281800647-7aab8a34f324?w=400&h=400&fit=crop',
    category: 'destilados',
    available: true,
    featured: true,
  },
  {
    id: '5',
    name: 'Vodka Absolut',
    description: 'Garrafa 750ml — original.',
    price: 69.9,
    image:
      'https://images.unsplash.com/photo-1569529465841-df137b457a2f?w=400&h=400&fit=crop',
    category: 'destilados',
    available: true,
  },
  {
    id: '6',
    name: 'Gin Tanqueray',
    description: 'Garrafa 750ml — London Dry.',
    price: 99.9,
    image:
      'https://images.unsplash.com/photo-1527281800647-7aab8a34f324?w=400&h=400&fit=crop',
    category: 'destilados',
    available: true,
  },
  {
    id: '7',
    name: 'Vinho Quinta do Morgado',
    description: 'Tinto suave — garrafa 750ml.',
    price: 28,
    image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=400&fit=crop',
    category: 'vinhos',
    available: true,
    featured: true,
  },
  {
    id: '8',
    name: 'Vinho Branco Suave',
    description: 'Ideal para o dia a dia — 750ml.',
    price: 22,
    image:
      'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=400&h=400&fit=crop',
    category: 'vinhos',
    available: true,
  },
  {
    id: '9',
    name: 'Refrigerante 2L',
    description: 'Coca-Cola, Guaraná ou Fanta.',
    price: 10,
    image:
      'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=400&fit=crop',
    category: 'naoAlcoolicos',
    available: true,
  },
  {
    id: '10',
    name: 'Água Mineral 1,5L',
    description: 'Com ou sem gás.',
    price: 4,
    image:
      'https://images.unsplash.com/photo-1548839140-29a7492991df?w=400&h=400&fit=crop',
    category: 'naoAlcoolicos',
    available: true,
  },
  {
    id: '11',
    name: 'Energético Red Bull',
    description: '250ml — lata gelada.',
    price: 12,
    image:
      'https://images.unsplash.com/photo-1622547748225-3a4e5a7365a7?w=400&h=400&fit=crop',
    category: 'naoAlcoolicos',
    available: true,
  },
  {
    id: '12',
    name: 'Amendoim Japonês',
    description: 'Porção 200g — crocante e salgado.',
    price: 8,
    image:
      'https://images.unsplash.com/photo-1599599810764-3c8a0a0a0a0a?w=400&h=400&fit=crop',
    category: 'petiscos',
    available: true,
  },
  {
    id: '13',
    name: 'Batata Ruffles',
    description: 'Elma Chips 96g — vários sabores.',
    price: 9.5,
    image:
      'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=400&fit=crop',
    category: 'petiscos',
    available: true,
  },
  {
    id: '14',
    name: 'Salgadinho Doritos',
    description: 'Nacho Cheese 84g.',
    price: 9.5,
    image:
      'https://images.unsplash.com/photo-1613919113640-257661088c3a?w=400&h=400&fit=crop',
    category: 'petiscos',
    available: true,
  },
  {
    id: '15',
    name: 'Calabresa Acebolada',
    description: 'Porção individual — quentinha.',
    price: 18,
    image:
      'https://images.unsplash.com/photo-1529042410759-befb1204b768?w=400&h=400&fit=crop',
    category: 'petiscos',
    available: true,
  },
];

export const featuredProducts = products.filter((p) => p.featured);
