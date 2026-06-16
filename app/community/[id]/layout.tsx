export default async function CommunityLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const community = {
    id,
    name: id === 'ai-automation-society' ? 'AI Automation Society' : 'Comunidade',
    description: 'Descrição da comunidade',
    members: 404100,
    online: 1600,
    admins: 16,
  };

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Comunity Header */}
      <div className="border-b border-[#1E1E1E] bg-[#111111]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-[#888888] mb-4 pt-4">
            <a href="/" className="hover:text-white">NurseHub</a>
            <span>/</span>
            <a href="/explore" className="hover:text-white">Explorar</a>
            <span>/</span>
            <span className="text-white">{community.name}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#0F4C81] to-[#10B981] flex items-center justify-center text-2xl">
                🏥
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{community.name}</h1>
                <p className="text-[#888888] text-sm">{community.description}</p>
              </div>
            </div>
            <button className="px-6 py-2.5 rounded-xl bg-[#10B981] text-white font-semibold hover:bg-emerald-600 transition-colors">
              Entrar
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-[#1E1E1E] bg-[#080808]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-6">
            {[
              { href: `/community/${params.id}`, label: 'Comunidade' },
              { href: `/community/${params.id}/classroom`, label: 'Classroom' },
              { href: `/community/${params.id}/calendar`, label: 'Calendário' },
              { href: `/community/${params.id}/members`, label: 'Membros' },
              { href: `/community/${params.id}/leaderboards`, label: 'Leaderboard' },
              { href: `/community/${params.id}/about`, label: 'Sobre' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 py-4 text-sm border-b-2 border-transparent text-[#888888] hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  );
}