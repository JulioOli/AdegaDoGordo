import { Link } from 'react-router-dom';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { QuantityStepper } from '@/components/QuantityStepper';
import { formatCurrency } from '@/utils/currency';

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    subtotal,
    itemCount,
    updateQuantity,
    removeItem,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-50 bg-brand-charcoal/40 backdrop-blur-sm"
        aria-label="Fechar sacola"
        onClick={closeCart}
      />

      <aside
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-brand-cream shadow-2xl"
        aria-label="Sacola de compras"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-brand-green/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-brand-green" />
            <h2 className="font-display text-xl uppercase tracking-wide text-brand-green">
              Sua sacola
            </h2>
            {itemCount > 0 && (
              <span className="rounded-full bg-brand-gold px-2 py-0.5 text-xs font-bold text-brand-charcoal">
                {itemCount}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-brand-green/10"
            aria-label="Fechar sacola"
          >
            <X className="h-5 w-5 text-brand-charcoal" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <ShoppingBag className="mb-4 h-16 w-16 text-brand-green/30" />
              <p className="font-medium text-brand-charcoal/70">Sacola vazia</p>
              <p className="mt-1 text-sm text-brand-charcoal/50">
                Adicione itens do catálogo para começar seu pedido.
              </p>
              <Link
                to="/catalogo"
                onClick={closeCart}
                className="mt-6 rounded-full bg-brand-green px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-green-dark"
              >
                Ver catálogo
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.product.id}
                  className="flex gap-3 rounded-xl border border-brand-green/10 bg-white p-3"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-16 w-16 shrink-0 rounded-lg object-cover"
                  />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="truncate text-sm font-semibold text-brand-charcoal">
                        {item.product.name}
                      </h3>
                      <button
                        type="button"
                        onClick={() => removeItem(item.product.id)}
                        className="shrink-0 text-brand-charcoal/40 transition hover:text-red-500"
                        aria-label={`Remover ${item.product.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm font-bold text-brand-gold">
                      {formatCurrency(item.product.price * item.quantity)}
                    </p>
                    <div className="mt-2">
                      <QuantityStepper
                        size="sm"
                        quantity={item.quantity}
                        onDecrease={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        onIncrease={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-brand-green/10 bg-white px-5 py-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-brand-charcoal/70">Subtotal</span>
              <span className="text-xl font-bold text-brand-green">
                {formatCurrency(subtotal)}
              </span>
            </div>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="block w-full rounded-full bg-brand-gold py-3.5 text-center font-semibold text-brand-charcoal transition hover:bg-brand-gold/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              Finalizar pedido
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
