import React, { useEffect, useRef } from 'react';
import QomponentWrapper from '../helpers/QomponentWrapper';

interface Props {
  sections: { id: string; label: string; component: React.ReactElement; embedKey?: string }[];
}

const Qomponents: React.FC<Props> = ({ sections }) => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleScrollTo = (id: string) => {
    const ref = sectionRefs.current[id];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const firstRef = sectionRefs.current[sections[0].id];
    if (!firstRef) return;
    firstRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [sections]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 sticky top-0 h-full p-6 hidden md:flex flex-col gap-4">
        <div className="text-2xl font-bold mb-2">Qomponents</div>
        <nav className="flex flex-col gap-2 overflow-y-auto h-[83vh]">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`text-left px-2 py-1 rounded hover:bg-gray-100 focus:bg-gray-100 transition`}
              onClick={() => handleScrollTo(section.id)}>
              {section.label}
            </button>
          ))}
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {sections.map(({ id, label, embedKey, component }) => (
          <div
            key={id}
            id={id}
            ref={(el) => {
              sectionRefs.current[id] = el;
            }}
            className="mb-6">
            <div className="min-h-[200px]">
              <QomponentWrapper embedKey={embedKey} component={component} label={label} />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Qomponents;
