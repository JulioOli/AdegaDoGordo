import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { ProductCard } from '@/components/ProductCard';
import { featuredProducts } from '@/data/products';

export function Home() {
  return (
    <>
      <Hero />
      <AboutSection />

      <section className="bg-white py-16">
        <div className="container-app">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-4xl uppercase tracking-wide text-brand-green">
                Destaques
              </h2>
              <p className="mt-2 text-brand-charcoal/70">
                Os favoritos dos clientes — peça agora mesmo.
              </p>
            </div>
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition hover:text-brand-green-dark"
            >
              Ver tudo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
