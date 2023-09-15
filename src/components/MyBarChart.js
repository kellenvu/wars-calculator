import React from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from 'recharts';

function MyBarChart({ scores, totalSchools, mode }) {
  const data = mode === 'percentage' ? [
    { name: 'Category 1', proportion: scores[0] },
    { name: 'Category 2', proportion: scores[1] },
    { name: 'Category 3', proportion: scores[2] },
    { name: 'Category 4-7', proportion: scores[3] }
  ] : [
    { name: 'Category 1', proportion: (scores[0] / 100) * totalSchools },
    { name: 'Category 2', proportion: (scores[1] / 100) * totalSchools },
    { name: 'Category 3', proportion: (scores[2] / 100) * totalSchools },
    { name: 'Category 4-7', proportion: (scores[3] / 100) * totalSchools }
  ];

  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-primary').trim();

  const yAxisTickFormatter = mode === 'percentage' ? (tick) => `${tick}%` : (tick) => tick.toFixed(0);
  const yLabel = mode === 'percentage' ? 'Proportion' : 'Number';
  const yTicks = mode === 'percentage' ? undefined : [0, 10, 20, 30];

  return (
    <div className="text-center mb-4">
      <p className="mb-3">Your school list should include {totalSchools} schools with the following breakdown:</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ left: 15 }}>
          <XAxis dataKey="name" tickLine={false} />
          <YAxis
            domain={mode === 'percentage' ? [0, 100] : [0, 30]}
            tickFormatter={yAxisTickFormatter}
            ticks={yTicks}
            label={{
              value: yLabel,
              angle: -90,
              position: 'insideLeft',
              style: { textAnchor: 'middle' },
              offset: -3,
            }}
            style={{ overflow: 'visible' }}
          />
          <Tooltip
            content={({ payload }) => {
              if (!payload || !payload[0]) return null;
              const valueDisplay = mode === 'percentage' ? `${payload[0].value}%` : +parseFloat(payload[0].value.toFixed(2));
              return <div style={{ background: 'white', padding: '5px', border: '1px solid #ccc' }}>{valueDisplay}</div>;
            }}
          />
          <Bar dataKey="proportion" fill={primaryColor} radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MyBarChart;
