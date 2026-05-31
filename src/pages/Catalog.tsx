import { useMemo, useState } from 'react';
import { Search, PackageOpen } from 'lucide-react';
import { CategoryTabs } from '@/components/CategoryTabs';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import type { Category } from '@/types/product';

export function Catalog() {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query);
      return matchesCategory && matchesSearch && product.available;
    });
  }, [activeCategory, search]);

  return (
    <div className="pb-16">
      <div className="container-app pt-8">
        <h1 className="font-display text-4xl uppercase tracking-wide text-brand-green">
          Catálogo
        </h1>
        <p className="mt-2 text-brand-charcoal/70">
          Escolha seus produtos e adicione à sacola.
        </p>

        <div className="relative mt-6">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-charcoal/40" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar produto..."
            aria-label="Buscar produto"
            className="w-full rounded-full border border-brand-green/15 bg-white py-3 pl-12 pr-4 text-sm shadow-sm transition focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
          />
        </div>
      </div>

      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />

      <div className="container-app mt-8">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center py-20 text-center">
            <PackageOpen className="mb-4 h-16 w-16 text-brand-green/30" />
            <p className="font-medium text-brand-charcoal/70">
              Nenhum produto encontrado
            </p>
            <p className="mt-1 text-sm text-brand-charcoal/50">
              Tente outra busca ou categoria.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
