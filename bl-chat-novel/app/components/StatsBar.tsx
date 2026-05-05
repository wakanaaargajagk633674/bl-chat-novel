import type { GameStats } from '../lib/types';

interface Props {
  stats: GameStats;
}

export default function StatsBar({ stats }: Props) {
  return (
    <div className="px-4 pb-2 flex gap-3">
      <StatPill label="親密度" value={stats.affection} color="#e8a0b0" bg="#4a2a35" />
      <StatPill label="信頼度" value={stats.trust} color="#a0c8e8" bg="#1e3a50" />
      <StatPill label="自己開示" value={stats.disclosure} color="#a0e8c0" bg="#1e4035" />
    </div>
  );
}

function StatPill({
  label,
  value,
  color,
  bg,
}: {
  label: string;
  value: number;
  color: string;
  bg: string;
}) {
  return (
    <div className="flex-1">
      <div className="flex justify-between mb-0.5" style={{ fontSize: '10px' }}>
        <span style={{ color: '#6b6b8b' }}>{label}</span>
        <span style={{ color }}>{value}</span>
      </div>
      <div className="h-1 rounded-full" style={{ backgroundColor: bg }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
