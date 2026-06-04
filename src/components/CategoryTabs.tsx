import type { Category } from '@/types/product';
import { ALL_CATEGORIES, CATEGORY_LABELS } from '@/types/product';

interface CategoryTabsProps {
  active: Category | 'all';
  onChange: (category: Category | 'all') => void;
}

export function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  const tabs: { id: Category | 'all'; label: string }[] = [
    { id: 'all', label: 'Todos' },
    ...ALL_CATEGORIES.map((cat) => ({
      id: cat,
      label: CATEGORY_LABELS[cat],
    })),
  ];

  return (
    <div
      className="sticky top-16 z-30 -mx-4 border-b border-brand-green/10 bg-brand-cream/95 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6"
      role="tablist"
      aria-label="Categorias do catálogo"
    >
      <div className="container-app flex flex-wrap justify-center gap-2 pb-1">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(tab.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green ${
                isActive
                  ? 'bg-brand-green text-white shadow-sm'
                  : 'bg-white text-brand-charcoal/80 ring-1 ring-brand-green/15 hover:bg-brand-green/10 hover:text-brand-green'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
