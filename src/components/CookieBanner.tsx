import { useAnalyticsConsent } from '@/context/AnalyticsConsentContext';

export function CookieBanner() {
  const { showBanner, acceptAnalytics, declineAnalytics } = useAnalyticsConsent();

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-green/15 bg-white p-4 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] sm:p-5"
    >
      <div className="container-app flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-brand-charcoal/80">
          Usamos cookies de análise (Google Analytics) para entender como o site é
          usado e melhorar a experiência. Nenhum dado de pedido é coletado aqui — o
          pedido continua pelo WhatsApp.
        </p>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={declineAnalytics}
            className="rounded-full border border-brand-green/25 px-5 py-2.5 text-sm font-medium text-brand-charcoal transition hover:bg-brand-green/5"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={acceptAnalytics}
            className="rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-green-dark"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
