import { Clock, MapPin, Truck } from 'lucide-react';
import { storeConfig } from '@/data/config';

const highlights = [
  {
    icon: Truck,
    title: 'Pedido fácil',
    text: 'Monte sua sacola no site e finalize pelo WhatsApp em segundos.',
  },
  {
    icon: Clock,
    title: 'Atendimento ágil',
    text: storeConfig.hours,
  },
  {
    icon: MapPin,
    title: 'Perto de você',
    text: storeConfig.address,
  },
];

export function AboutSection() {
  return (
    <section className="container-app py-16" id="sobre">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl uppercase tracking-wide text-brand-green">
          Sobre a adega
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-brand-charcoal/80">
          {storeConfig.about}
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {highlights.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-2xl border border-brand-green/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl uppercase tracking-wide text-brand-green">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/75">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
