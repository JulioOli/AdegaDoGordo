import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { storeConfig } from '@/data/config';

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/checkout', label: 'Pedido' },
];

export function Header() {
  const { itemCount, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-green/10 bg-brand-cream/95 backdrop-blur-md">
      <div className="container-app flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="/logo.jpeg"
            alt={storeConfig.name}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-brand-gold/60"
          />
          <span className="hidden font-display text-xl uppercase tracking-wider text-brand-green sm:block">
            {storeConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-brand-charcoal/80 transition hover:text-brand-green"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-white transition hover:bg-brand-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
            aria-label={`Abrir sacola${itemCount > 0 ? `, ${itemCount} itens` : ''}`}
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-gold px-1 text-xs font-bold text-brand-charcoal">
                {itemCount > 99 ? '99+' : itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-green/20 md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-brand-green" />
            ) : (
              <Menu className="h-5 w-5 text-brand-green" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-brand-green/10 bg-brand-cream px-4 py-3 md:hidden"
          aria-label="Menu mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-brand-charcoal transition hover:bg-brand-green/10 hover:text-brand-green"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
