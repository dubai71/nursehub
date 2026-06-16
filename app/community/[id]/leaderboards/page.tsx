export default function LeaderboardsPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">Leaderboard</h2>
      <p className="text-[#888888] mb-6">Ranking dos membros mais ativos.</p>
      <div className="grid gap-4">
        {['#1 Ranking', '#2 Ranking', '#3 Ranking'].map((rank) => (
          <div key={rank} className="p-4 rounded-xl border border-[#1E1E1E] bg-[#111111]">
            <p className="text-sm text-[#888888]">{rank}</p>
          </div>
        ))}
      </div>
    </div>
  );
}