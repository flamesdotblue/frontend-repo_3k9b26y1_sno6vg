import React from 'react';
import Hero from './components/Hero';
import ReportSection from './components/ReportSection';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import Footer from './components/Footer';
import DatasetTable from './components/DatasetTable';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />

      <main className="space-y-6">
        <ReportSection id="overview" title="1) Project Overview" subtitle="Real-world use, goals, and outcomes">
          <p>
            MindMirror is an AI-based Personality & Behavior Analysis System that converts MCQ and short-text responses into personality insights. It helps organizations, HR teams, schools, and individuals understand behavioral traits to inform hiring, team formation, coaching, and self-development.
          </p>
          <ul>
            <li>Companies & HR: shortlist candidates, detect culture add, design balanced teams.</li>
            <li>Students: understand learning styles, motivation, and collaboration tendencies.</li>
            <li>Individuals: gain self-knowledge, track growth, and receive actionable guidance.</li>
          </ul>
          <p>
            Goals: predict Big-Five or MBTI-style traits, generate readable reports, and recommend compatible roles/teams.
          </p>
        </ReportSection>

        <ReportSection id="tech-stack" title="2) Tech Stack" subtitle="Frontend, backend, AI layer, and external APIs">
          <ul>
            <li>Frontend: React or Next.js with Tailwind CSS for responsive, mobile-first design.</li>
            <li>Backend: Node.js with Supabase or Firebase for storage and authentication.</li>
            <li>AI Layer: Python with PyTorch, HuggingFace Transformers, and scikit-learn.</li>
            <li>APIs: OpenAI and HuggingFace inference endpoints for NLP and LLMs.</li>
          </ul>
        </ReportSection>

        <ReportSection id="ai-architecture" title="3) AI Architecture Overview" subtitle="Two AI modules: Classification and Generative Explanation">
          <h3>Module A — Classification</h3>
          <ul>
            <li>Task: analyze responses to predict personality dimensions (e.g., Big-Five: OCEAN).</li>
            <li>Type: text classification with Transformer encoders.</li>
            <li>Models: DistilBERT (fast), RoBERTa (high accuracy), sentence-transformers (embeddings).</li>
          </ul>
          <p>
            Process: tokenize text → Transformer encoder → classifier head → softmax over trait dimensions. Output can be numeric scores per trait or discrete labels (e.g., ENTP, ISFJ) derived from thresholds or mapping.
          </p>
          <p>
            Training data: Kaggle MBTI Personality Dataset, IPIP Big-Five, and optionally app-collected responses.
          </p>
          <h3 className="mt-6">Module B — Generative Explanation</h3>
          <ul>
            <li>Task: convert numeric scores into natural-language reports.</li>
            <li>Models: GPT-4 / GPT-3.5 (OpenAI), or open/local Llama 2 / Mistral / Claude equivalents.</li>
          </ul>
          <p>
            Input example: "Openness=0.9, Neuroticism=0.2". Output example: "You are creative, curious, and emotionally stable. You enjoy exploring new ideas." Safety scaffolding ensures neutrality and fairness.
          </p>
        </ReportSection>

        <ReportSection id="embedding" title="4) Embedding & Similarity Module" subtitle="Semantic search for similar users and archetypes">
          <p>
            We compute dense text embeddings using sentence-transformer models like all-MiniLM or all-MPNet, or use OpenAI embeddings. Similarity is computed via cosine distance and nearest-neighbor search to match users to peers, mentors, or archetypal team profiles.
          </p>
        </ReportSection>

        <ReportSection id="clustering" title="5) Clustering & Team Insights" subtitle="Structure groups and infer team behavior">
          <ul>
            <li>Goal: derive natural clusters such as Analytical, Empathic, Creative.</li>
            <li>Algorithms: k-means for fixed k; HDBSCAN with UMAP for density-based, shape-aware clustering.</li>
            <li>Input: numeric personality embeddings; Output: cluster labels + group behavior insights.</li>
          </ul>
        </ReportSection>

        <ReportSection id="explainability" title="6) Explainability & Transparency" subtitle="Make predictions interpretable and fair">
          <ul>
            <li>SHAP: highlights which answers most influenced each trait score.</li>
            <li>LLM-based explanation: concise reasoning snippets (e.g., "You scored high in empathy because your choices emphasize concern for others.").</li>
            <li>Bias checks: calibration, subgroup analysis, and content filtering to avoid sensitive inferences.</li>
          </ul>
        </ReportSection>

        <ReportSection id="datasets" title="7) Dataset Details" subtitle="Sources, descriptions, and preprocessing">
          <DatasetTable />
          <h4 className="mt-6">Preprocessing</h4>
          <ul>
            <li>Text cleaning: lowercasing, URL/user-handle removal, punctuation normalization.</li>
            <li>Tokenization: WordPiece/BPE via Transformers tokenizer with max length and truncation.</li>
            <li>Balancing: class weighting, focal loss, or oversampling to mitigate skewed labels.</li>
            <li>Splits: stratified 80/10/10 train/validation/test with user-level grouping to avoid leakage.</li>
          </ul>
        </ReportSection>

        <ReportSection id="training" title="8) Model Training & Evaluation" subtitle="Fine-tuning setup, optimization, and metrics">
          <ul>
            <li>Framework: HuggingFace Transformers (PyTorch).</li>
            <li>Loss: CrossEntropyLoss for classification; MSELoss for continuous trait regression.</li>
            <li>Optimizer: AdamW with linear warmup and cosine/linear decay scheduler.</li>
            <li>Metrics: accuracy, macro-F1; Pearson correlation and RMSE for regression tasks.</li>
            <li>Validation: stratified 80/10/10; early stopping on validation F1/correlation; k-fold optional.</li>
          </ul>
        </ReportSection>

        <ReportSection id="deployment" title="9) Deployment Flow" subtitle="Serving, APIs, and persistence">
          <ul>
            <li>Model hosting: FastAPI or Flask microservice for inference endpoints.</li>
            <li>Frontend: React/Next.js calls inference API with user responses.</li>
            <li>Response: predicted scores + generated explanation text.</li>
            <li>Storage: Supabase database for results, profiles, and analytics dashboard views.</li>
          </ul>
        </ReportSection>

        <ReportSection id="future" title="10) Future Scope" subtitle="Roadmap for capability and reach">
          <ul>
            <li>On-device inference using DistilBERT for privacy-first deployments.</li>
            <li>Multilingual personality detection with XLM-R and localized prompts.</li>
            <li>Emotion detection during input using multimodal signals.</li>
            <li>AI career recommendations driven by trait clusters and skills ontology.</li>
            <li>Integration with HR analytics dashboard for workforce insights.</li>
          </ul>
        </ReportSection>

        <ReportSection id="summary" title="11) Final Summary">
          <p>
            MindMirror combines modern NLP transformers and LLMs to analyze human behavior. It classifies personality traits using fine-tuned BERT-based models, explains results via GPT, and provides interpretable insights with SHAP — creating a transparent, AI-driven self-analysis platform.
          </p>
        </ReportSection>

        <ArchitectureDiagram />
      </main>

      <Footer />
    </div>
  );
}
