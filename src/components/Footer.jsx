import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60 py-8 text-white">
      <div className="mx-auto max-w-6xl px-6 text-sm text-white/60">
        <p>© {new Date().getFullYear()} MindMirror — Personality & Behavior Analysis System. All rights reserved.</p>
      </div>
    </footer>
  );
}
