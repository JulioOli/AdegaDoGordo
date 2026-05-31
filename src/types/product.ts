export type Category =
  | 'cervejas'
  | 'destilados'
  | 'vinhos'
  | 'naoAlcoolicos'
  | 'petiscos';

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  category: Category;
  available: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutFormData {
  name: string;
  address: string;
  pickup: boolean;
  notes: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  cervejas: 'Cervejas',
  destilados: 'Destilados',
  vinhos: 'Vinhos',
  naoAlcoolicos: 'Sem álcool',
  petiscos: 'Petiscos',
};

export const ALL_CATEGORIES: Category[] = [
  'cervejas',
  'destilados',
  'vinhos',
  'naoAlcoolicos',
  'petiscos',
];
