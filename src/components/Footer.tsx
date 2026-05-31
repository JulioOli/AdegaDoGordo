import { Instagram, MapPin, Clock, MessageCircle } from 'lucide-react';
import { storeConfig } from '@/data/config';

export function Footer() {
  const whatsappUrl = `https://wa.me/${storeConfig.whatsapp}`;

  return (
    <footer className="mt-auto bg-brand-green-dark text-white">
      <div className="container-app grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt={storeConfig.name}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-gold/50"
            />
            <h2 className="font-display text-2xl uppercase tracking-wider">
              {storeConfig.name}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-white/80">
            {storeConfig.slogan}
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h3 className="font-display text-lg uppercase tracking-wide text-brand-gold">
            Contato
          </h3>
          <p className="flex items-start gap-2 text-white/85">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
            {storeConfig.address}
          </p>
          <p className="flex items-start gap-2 text-white/85">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
            {storeConfig.hours}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/85 transition hover:text-brand-gold"
          >
            <MessageCircle className="h-4 w-4 text-brand-gold" />
            WhatsApp
          </a>
        </div>

        <div className="space-y-3 text-sm">
          <h3 className="font-display text-lg uppercase tracking-wide text-brand-gold">
            Redes
          </h3>
          <a
            href={storeConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/85 transition hover:text-brand-gold"
          >
            <Instagram className="h-4 w-4 text-brand-gold" />
            @adegadogordojunqueiropolis
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {storeConfig.name}. Protótipo para apresentação.
      </div>
    </footer>
  );
}
