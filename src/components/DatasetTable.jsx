import React from 'react';

export default function DatasetTable() {
  const rows = [
    {
      name: 'MBTI Kaggle',
      description: 'User posts labeled by MBTI types',
      use: 'Train classification model',
    },
    {
      name: 'IPIP Big-Five',
      description: 'Psychology survey dataset',
      use: 'Trait regression model',
    },
    {
      name: 'Essays Dataset',
      description: 'Essays with personality tags',
      use: 'Language behavior study',
    },
    {
      name: 'Custom Collected',
      description: 'App responses over time',
      use: 'Real-world fine-tuning',
    },
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-white/10">
      <table className="min-w-full divide-y divide-white/10">
        <thead className="bg-white/5">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">Dataset</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">Use</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-white/0">
          {rows.map((r) => (
            <tr key={r.name}>
              <td className="px-4 py-2 text-sm text-white/90">{r.name}</td>
              <td className="px-4 py-2 text-sm text-white/80">{r.description}</td>
              <td className="px-4 py-2 text-sm text-white/80">{r.use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
