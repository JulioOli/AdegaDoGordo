/** ID do GA4 (formato G-XXXXXXXX). Defina em .env como VITE_GA_MEASUREMENT_ID */
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID ?? '';

const CONSENT_KEY = 'adega-analytics-consent';

export type AnalyticsConsent = 'granted' | 'denied';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function isAnalyticsConfigured(): boolean {
  return Boolean(GA_MEASUREMENT_ID && GA_MEASUREMENT_ID.startsWith('G-'));
}

export function getStoredConsent(): AnalyticsConsent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === 'granted' || value === 'denied') return value;
    return null;
  } catch {
    return null;
  }
}

export function setStoredConsent(consent: AnalyticsConsent): void {
  localStorage.setItem(CONSENT_KEY, consent);
}

export function initAnalytics(): void {
  if (!isAnalyticsConfigured() || window.gtag) return;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('consent', 'default', {
    analytics_storage: 'granted',
  });
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
    anonymize_ip: true,
  });
}

export function trackPageView(path: string, title?: string): void {
  if (!window.gtag || !isAnalyticsConfigured()) return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title ?? document.title,
  });
}

export function trackAddToCart(params: {
  itemId: string;
  itemName: string;
  price: number;
  quantity: number;
  category: string;
}): void {
  if (!window.gtag || !isAnalyticsConfigured()) return;
  window.gtag('event', 'add_to_cart', {
    currency: 'BRL',
    value: params.price * params.quantity,
    items: [
      {
        item_id: params.itemId,
        item_name: params.itemName,
        price: params.price,
        quantity: params.quantity,
        item_category: params.category,
      },
    ],
  });
}

export function trackBeginCheckout(params: {
  value: number;
  itemCount: number;
}): void {
  if (!window.gtag || !isAnalyticsConfigured()) return;
  window.gtag('event', 'begin_checkout', {
    currency: 'BRL',
    value: params.value,
    item_count: params.itemCount,
  });
}

export function trackWhatsAppClick(location: 'hero' | 'footer' | 'checkout'): void {
  if (!window.gtag || !isAnalyticsConfigured()) return;
  window.gtag('event', 'whatsapp_click', {
    click_location: location,
  });
}
