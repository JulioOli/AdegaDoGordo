import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { QuantityStepper } from '@/components/QuantityStepper';
import { formatCurrency } from '@/utils/currency';
import { buildWhatsAppMessage, buildWhatsAppUrl } from '@/utils/whatsapp';
import { storeConfig } from '@/data/config';
import type { CheckoutFormData } from '@/types/product';

const initialForm: CheckoutFormData = {
  name: '',
  address: '',
  pickup: false,
  notes: '',
};

export function Checkout() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const [form, setForm] = useState<CheckoutFormData>(initialForm);
  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (items.length === 0) {
      setError('Adicione itens à sacola antes de finalizar.');
      return;
    }

    if (!form.name.trim()) {
      setError('Informe seu nome para continuar.');
      return;
    }

    if (!form.pickup && !form.address.trim()) {
      setError('Informe o endereço ou marque retirada no local.');
      return;
    }

    const message = buildWhatsAppMessage(items, subtotal, form);
    const url = buildWhatsAppUrl(storeConfig.whatsapp, message);
    window.open(url, '_blank', 'noopener,noreferrer');
    clearCart();
    setForm(initialForm);
  }

  if (items.length === 0) {
    return (
      <div className="container-app flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        <ShoppingBag className="mb-4 h-16 w-16 text-brand-green/30" />
        <h1 className="font-display text-3xl uppercase tracking-wide text-brand-green">
          Sacola vazia
        </h1>
        <p className="mt-2 text-brand-charcoal/70">
          Adicione produtos do catálogo para montar seu pedido.
        </p>
        <Link
          to="/catalogo"
          className="mt-6 rounded-full bg-brand-green px-8 py-3 font-semibold text-white transition hover:bg-brand-green-dark"
        >
          Ir ao catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container-app py-10">
      <h1 className="font-display text-4xl uppercase tracking-wide text-brand-green">
        Finalizar pedido
      </h1>
      <p className="mt-2 text-brand-charcoal/70">
        Revise sua sacola e envie o pedido pelo WhatsApp.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <section aria-label="Itens da sacola">
          <h2 className="mb-4 font-display text-xl uppercase tracking-wide text-brand-green">
            Sua sacola
          </h2>
          <ul className="space-y-3">
            {items.map((item) => (
              <li
                key={item.product.id}
                className="flex items-center gap-4 rounded-xl border border-brand-green/10 bg-white p-4"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="h-14 w-14 rounded-lg object-cover"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-semibold">{item.product.name}</h3>
                  <p className="text-sm font-bold text-brand-gold">
                    {formatCurrency(item.product.price * item.quantity)}
                  </p>
                </div>
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
                <button
                  type="button"
                  onClick={() => removeItem(item.product.id)}
                  className="text-brand-charcoal/40 transition hover:text-red-500"
                  aria-label={`Remover ${item.product.name}`}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between rounded-xl bg-brand-green/5 px-4 py-3">
            <span className="font-medium text-brand-charcoal/70">Subtotal</span>
            <span className="text-2xl font-bold text-brand-green">
              {formatCurrency(subtotal)}
            </span>
          </div>
        </section>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="font-display text-xl uppercase tracking-wide text-brand-green">
            Seus dados
          </h2>

          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Nome *
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Seu nome completo"
              className="w-full rounded-xl border border-brand-green/15 bg-white px-4 py-3 text-sm transition focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              id="pickup"
              type="checkbox"
              checked={form.pickup}
              onChange={(e) => setForm({ ...form, pickup: e.target.checked })}
              className="h-4 w-4 rounded border-brand-green/30 text-brand-green focus:ring-brand-green"
            />
            <label htmlFor="pickup" className="text-sm font-medium">
              Retirar no local
            </label>
          </div>

          {!form.pickup && (
            <div>
              <label htmlFor="address" className="mb-1 block text-sm font-medium">
                Endereço de entrega *
              </label>
              <textarea
                id="address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                placeholder="Rua, número, bairro, complemento..."
                rows={3}
                className="w-full rounded-xl border border-brand-green/15 bg-white px-4 py-3 text-sm transition focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
              />
            </div>
          )}

          <div>
            <label htmlFor="notes" className="mb-1 block text-sm font-medium">
              Observações
            </label>
            <textarea
              id="notes"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Ex: trocar marca, pagamento em dinheiro..."
              rows={2}
              className="w-full rounded-xl border border-brand-green/15 bg-white px-4 py-3 text-sm transition focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
            />
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-green py-4 text-base font-semibold text-white transition hover:bg-brand-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
          >
            <MessageCircle className="h-5 w-5" />
            Enviar pedido pelo WhatsApp
          </button>

          <p className="text-center text-xs text-brand-charcoal/50">
            Você será redirecionado ao WhatsApp com a mensagem pronta.
          </p>
        </form>
      </div>
    </div>
  );
}
