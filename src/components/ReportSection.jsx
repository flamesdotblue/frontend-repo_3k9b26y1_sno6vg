import React from 'react';

export default function ReportSection({ id, title, children, subtitle }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-white/70">{subtitle}</p>
          )}
        </div>
        <div className="prose prose-invert prose-emerald max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}
