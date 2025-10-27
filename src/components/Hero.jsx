import React from 'react';
import { Brain, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Brain size={14} />
            <span>MindMirror — Personality & Behavior Analysis System</span>
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
            AI-powered insights into personality, behavior, and team fit
          </h1>
          <p className="mt-4 max-w-3xl text-base text-white/70 sm:text-lg">
            A smart test platform that analyzes MCQs and short answers to predict traits, explain results, and suggest roles — built with modern Transformers, LLMs, and transparent explainability.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#overview"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow hover:bg-white/90"
            >
              <Rocket size={16} /> Read the Technical Report
            </a>
            <a
              href="#diagram"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              View Architecture
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden>
        <div className="absolute inset-x-0 top-[-10%] h-[300px] bg-gradient-to-b from-emerald-400/10 to-transparent blur-2xl" />
      </div>
    </section>
  );
}
