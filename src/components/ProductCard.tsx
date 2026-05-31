import { Plus } from 'lucide-react';
import type { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/utils/currency';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-brand-green/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-brand-cream">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {!product.available && (
          <span className="absolute inset-0 flex items-center justify-center bg-brand-charcoal/60 text-sm font-semibold uppercase tracking-wide text-white">
            Indisponível
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg uppercase tracking-wide text-brand-green">
          {product.name}
        </h3>
        {product.description && (
          <p className="mt-1 line-clamp-2 text-sm text-brand-charcoal/70">
            {product.description}
          </p>
        )}

        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <span className="text-lg font-bold text-brand-gold">
            {formatCurrency(product.price)}
          </span>
          <button
            type="button"
            disabled={!product.available}
            onClick={() => addItem(product)}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-green-dark disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
          >
            <Plus className="h-4 w-4" />
            Adicionar
          </button>
        </div>
      </div>
    </article>
  );
}
