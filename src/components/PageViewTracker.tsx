import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalyticsConsent } from '@/context/AnalyticsConsentContext';
import { initAnalytics, trackPageView } from '@/utils/analytics';

const PAGE_TITLES: Record<string, string> = {
  '/': 'Início — Adega do Gordo',
  '/catalogo': 'Catálogo — Adega do Gordo',
  '/checkout': 'Finalizar pedido — Adega do Gordo',
};

export function PageViewTracker() {
  const { pathname } = useLocation();
  const { analyticsEnabled, consent } = useAnalyticsConsent();

  useEffect(() => {
    if (consent === 'granted') {
      initAnalytics();
    }
  }, [consent]);

  useEffect(() => {
    if (!analyticsEnabled) return;
    trackPageView(pathname, PAGE_TITLES[pathname]);
  }, [pathname, analyticsEnabled]);

  return null;
}
