import { Minus, Plus } from 'lucide-react';

interface QuantityStepperProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  size?: 'sm' | 'md';
}

export function QuantityStepper({
  quantity,
  onDecrease,
  onIncrease,
  size = 'md',
}: QuantityStepperProps) {
  const btnSize = size === 'sm' ? 'h-7 w-7' : 'h-9 w-9';
  const textSize = size === 'sm' ? 'text-sm' : 'text-base';

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onDecrease}
        aria-label="Diminuir quantidade"
        className={`${btnSize} flex items-center justify-center rounded-full border border-brand-green/30 bg-white text-brand-green transition hover:bg-brand-green hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green`}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span
        className={`${textSize} min-w-[1.5rem] text-center font-semibold tabular-nums`}
        aria-live="polite"
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label="Aumentar quantidade"
        className={`${btnSize} flex items-center justify-center rounded-full border border-brand-green/30 bg-white text-brand-green transition hover:bg-brand-green hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green`}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
