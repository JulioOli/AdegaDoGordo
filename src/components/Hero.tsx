import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { storeConfig } from '@/data/config';

export function Hero() {
  const whatsappUrl = `https://wa.me/${storeConfig.whatsapp}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-dark text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-gold blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-brand-gold blur-3xl" />
      </div>

      <div className="container-app relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 py-16 text-center md:flex-row md:text-left">
        <div className="flex shrink-0 flex-col items-center md:items-start">
          <img
            src="/logo.jpeg"
            alt={`Logo ${storeConfig.name}`}
            className="h-40 w-40 rounded-full object-cover shadow-2xl ring-4 ring-brand-gold/70 sm:h-52 sm:w-52"
          />
        </div>

        <div className="max-w-xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Junqueirópolis · SP
          </p>
          <h1 className="font-display text-5xl uppercase leading-tight tracking-wide sm:text-6xl">
            {storeConfig.name}
          </h1>
          <p className="text-lg leading-relaxed text-white/90">{storeConfig.slogan}</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Link
              to="/catalogo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-8 py-3.5 font-semibold text-brand-charcoal shadow-lg transition hover:scale-[1.02] hover:bg-brand-gold/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              Ver cardápio
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
