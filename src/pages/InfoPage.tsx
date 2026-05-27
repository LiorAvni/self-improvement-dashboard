import { Card } from '../components/ui/Card';
import { infoSections } from '../data/info';

export function InfoPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-main">Research-Based Principles</h1>
        <p className="mt-2 max-w-3xl text-muted">Practical principles from the earlier lifestyle, fitness, nutrition, and safety planning. This page is intentionally simple so the plan stays usable.</p>
      </div>
      {infoSections.map((section) => (
        <section key={section.title} className="space-y-4">
          <h2 className="text-xl font-bold text-main">{section.title}</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {section.cards.map((card) => (
              <Card key={card.heading}>
                <h3 className="font-semibold text-main">{card.heading}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{card.body}</p>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
