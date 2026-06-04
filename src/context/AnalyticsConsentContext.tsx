import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  getStoredConsent,
  initAnalytics,
  isAnalyticsConfigured,
  setStoredConsent,
  trackPageView,
  type AnalyticsConsent,
} from '@/utils/analytics';

interface AnalyticsConsentContextValue {
  consent: AnalyticsConsent | null;
  analyticsEnabled: boolean;
  acceptAnalytics: () => void;
  declineAnalytics: () => void;
  showBanner: boolean;
}

const AnalyticsConsentContext = createContext<AnalyticsConsentContextValue | null>(
  null,
);

export function AnalyticsConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<AnalyticsConsent | null>(() =>
    getStoredConsent(),
  );

  const analyticsEnabled = isAnalyticsConfigured() && consent === 'granted';
  const showBanner = isAnalyticsConfigured() && consent === null;

  const acceptAnalytics = useCallback(() => {
    setStoredConsent('granted');
    setConsent('granted');
    initAnalytics();
    trackPageView(window.location.pathname + window.location.search);
  }, []);

  const declineAnalytics = useCallback(() => {
    setStoredConsent('denied');
    setConsent('denied');
  }, []);

  const value = useMemo(
    () => ({
      consent,
      analyticsEnabled,
      acceptAnalytics,
      declineAnalytics,
      showBanner,
    }),
    [consent, analyticsEnabled, acceptAnalytics, declineAnalytics, showBanner],
  );

  return (
    <AnalyticsConsentContext.Provider value={value}>
      {children}
    </AnalyticsConsentContext.Provider>
  );
}

export function useAnalyticsConsent(): AnalyticsConsentContextValue {
  const ctx = useContext(AnalyticsConsentContext);
  if (!ctx) {
    throw new Error('useAnalyticsConsent must be used within AnalyticsConsentProvider');
  }
  return ctx;
}
