export default function ExplorePage() {
  const categories = [
    { name: 'Urgência', icon: '🚨', count: 156 },
    { name: 'UTI', icon: '🏥', count: 234 },
    { name: 'APH', icon: '🚑', count: 89 },
    { name: 'Centro Cirúrgico', icon: '🔪', count: 112 },
    { name: 'Neonatal', icon: '👶', count: 67 },
    { name: 'Saúde Mental', icon: '🧠', count: 98 },
    { name: 'IA & Tech', icon: '🤖', count: 312 },
    { name: 'Gestão', icon: '📊', count: 145 },
    { name: 'Empreendedorismo', icon: '💼', count: 203 },
    { name: 'Creator', icon: '📱', count: 178 },
    { name: 'Concursos', icon: '📝', count: 89 },
    { name: 'Eventos', icon: '📅', count: 45 },
  ];

  const creators = [
    { name: 'Arthur Moreira', specialty: 'IA & Automação', followers: 12800, avatar: '' },
    { name: 'Dra. Ana Oliveira', specialty: 'Urgência Pediátrica', followers: 8900, avatar: '' },
    { name: 'Carlos Santos', specialty: 'Gestão Hospitalar', followers: 5600, avatar: '' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Explorar</h1>
        <p className="text-muted-foreground">Descubra comunidades, creators, ferramentas e eventos.</p>
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar em todo o NurseHub..."
          className="w-full h-12 rounded-xl border border-[#1E1E1E] bg-[#111111] px-5 pl-12 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
        />
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Categories */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Categorias</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="group p-4 rounded-2xl border border-[#1E1E1E] bg-[#111111] hover:border-[#10B981] hover:bg-[#111111]/80 cursor-pointer transition-all">
              <div className="text-3xl mb-2">{cat.icon}</div>
              <h3 className="font-medium mb-1">{cat.name}</h3>
              <p className="text-sm text-muted-foreground">{cat.count} itens</p>
            </div>
          ))}
        </div>
      </section>

      {/* Creators */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Creators em destaque</h2>
          <button className="text-sm text-[#10B981] hover:underline">Ver todos</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {creators.map((creator) => (
            <div key={creator.name} className="p-4 rounded-2xl border border-[#1E1E1E] bg-[#111111]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0F4C81] to-[#10B981] flex items-center justify-center text-lg font-bold">
                  {creator.name[0]}
                </div>
                <div>
                  <h3 className="font-medium">{creator.name}</h3>
                  <p className="text-sm text-muted-foreground">{creator.specialty}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{creator.followers.toLocaleString()} seguidores</span>
                <button className="px-4 py-1.5 rounded-full text-sm bg-[#0F4C81] hover:bg-[#1E6BB8] transition-colors">
                  Seguir
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}