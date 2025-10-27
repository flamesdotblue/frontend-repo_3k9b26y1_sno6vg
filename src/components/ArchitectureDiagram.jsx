import React from 'react';
import { Layers, Network, Shield } from 'lucide-react';

export default function ArchitectureDiagram() {
  return (
    <section id="diagram" className="bg-slate-950/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6 flex items-center gap-2 text-white">
          <Layers />
          <h2 className="text-2xl font-semibold sm:text-3xl">Architecture Overview</h2>
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 text-white">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <h3 className="mb-2 font-semibold">User Input</h3>
              <p className="text-sm text-white/80">MCQs + short text responses submitted from web UI.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <h3 className="mb-2 font-semibold">NLP Classification</h3>
              <p className="text-sm text-white/80">Transformer encoders (DistilBERT / RoBERTa) produce Big-Five or MBTI scores.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <h3 className="mb-2 font-semibold">Embedding & Similarity</h3>
              <p className="text-sm text-white/80">Sentence-transformers / OpenAI embeddings for nearest-neighbor search.</p>
            </div>
          </div>

          <div className="my-6 flex items-center justify-center">
            <svg width="560" height="80" viewBox="0 0 560 80" fill="none" className="max-w-full">
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
                </marker>
              </defs>
              <g stroke="currentColor" className="text-emerald-400">
                <line x1="20" y1="40" x2="180" y2="40" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="200" y1="40" x2="360" y2="40" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="380" y1="40" x2="540" y2="40" strokeWidth="2" markerEnd="url(#arrow)" />
              </g>
              <g className="fill-white text-white">
                <text x="10" y="28" fontSize="12">User</text>
                <text x="165" y="28" fontSize="12">NLP Classification</text>
                <text x="350" y="28" fontSize="12">Personality Scores</text>
                <text x="505" y="28" fontSize="12">LLM</text>
              </g>
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <h3 className="mb-2 font-semibold">Generative Explanation</h3>
              <p className="text-sm text-white/80">LLMs (GPT-4, Claude, Llama 2/Mistral) convert numeric scores to human-friendly reports.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <h3 className="mb-2 font-semibold">Security & Governance</h3>
              <p className="text-sm text-white/80 flex items-start gap-2"><Shield className="mt-0.5" size={16}/>PII handling, consent, rate-limiting, and audit logs.</p>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-white/10 bg-emerald-500/10 p-4 text-emerald-200">
            User → Input → NLP Classification → Personality Scores → LLM Explanation → Report Visualization
          </div>
        </div>
      </div>
    </section>
  );
}
