export default function AdminPage() {
  const stats = [
    { label: 'Usuários', value: '12.450', change: '+234' },
    { label: 'Comunidades', value: '48', change: '+3' },
    { label: 'Cursos', value: '156', change: '+12' },
    { label: 'Posts', value: '89.230', change: '+1.2k' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin</h1>
        <p className="text-muted-foreground">Painel administrativo do NurseHub.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="p-5 rounded-2xl border border-[#1E1E1E] bg-[#111111]">
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-emerald-500">{stat.change} este mês</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="p-5 rounded-2xl border border-[#1E1E1E] bg-[#111111] text-left hover:border-[#0F4C81] transition-colors">
          <div className="text-2xl mb-2">👥</div>
          <h3 className="font-medium">Gerenciar Usuários</h3>
          <p className="text-sm text-muted-foreground">Ver, editar, banir usuários</p>
        </button>
        <button className="p-5 rounded-2xl border border-[#1E1E1E] bg-[#111111] text-left hover:border-[#10B981] transition-colors">
          <div className="text-2xl mb-2">📚</div>
          <h3 className="font-medium">Gerenciar Cursos</h3>
          <p className="text-sm text-muted-foreground">Aprovar, editar, remover cursos</p>
        </button>
        <button className="p-5 rounded-2xl border border-[#1E1E1E] bg-[#111111] text-left hover:border-[#10B981] transition-colors">
          <div className="text-2xl mb-2">📰</div>
          <h3 className="font-medium">Gerenciar News</h3>
          <p className="text-sm text-muted-foreground">Moderação de conteúdo de news</p>
        </button>
      </div>
    </div>
  );
}