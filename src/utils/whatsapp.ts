import type { CartItem, CheckoutFormData } from '@/types/product';
import { formatCurrency } from '@/utils/currency';

export function buildWhatsAppMessage(
  items: CartItem[],
  subtotal: number,
  form: CheckoutFormData,
): string {
  const lines = items.map(
    (item) =>
      `• ${item.quantity}x ${item.product.name} — ${formatCurrency(item.product.price * item.quantity)}`,
  );

  const deliveryLine = form.pickup
    ? 'Retirar no local'
    : form.address.trim() || 'Não informado';

  return [
    'Olá, Adega do Gordo! Gostaria de fazer um pedido:',
    '',
    ...lines,
    '',
    `Subtotal: ${formatCurrency(subtotal)}`,
    '',
    `Nome: ${form.name.trim()}`,
    `Endereço: ${deliveryLine}`,
    form.notes.trim() ? `Observações: ${form.notes.trim()}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}
