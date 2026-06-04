import { storeHours } from '@/data/config';

interface StoreHoursProps {
  className?: string;
  itemClassName?: string;
}

export function StoreHours({ className = '', itemClassName = '' }: StoreHoursProps) {
  return (
    <ul className={`space-y-1 ${className}`}>
      {storeHours.map(({ days, time }) => (
        <li key={days} className={itemClassName}>
          <span className="font-medium">{days}:</span> {time}
        </li>
      ))}
    </ul>
  );
}
