export default function NurseLabPage() {
  const tools = [
    { id: 'carousel', name: 'Gerador de Carrossel', icon: '🎠', description: 'Crie carrosséis profissionais para Instagram em segundos' },
    { id: 'headline', name: 'Gerador de Headlines', icon: '✨', description: 'Headlines que captam atenção e geram cliques' },
    { id: 'hooks', name: 'Banco de Hooks', icon: '🪝', description: 'Biblioteca de hooks testados para conteúdo de saúde' },
    { id: 'calendar', name: 'Calendário de Conteúdo', icon: '📅', description: 'Planeje e agendeseu conteúdo com antecedência' },
    { id: 'analytics', name: 'Analytics', icon: '📊', description: 'Métricas e insights para seu conteúdo' },
    { id: 'ideas', name: 'Banco de Ideias', icon: '💡', description: 'Nunca mais sofra com блокировка criativa' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">NurseLab</h1>
        <p className="text-muted-foreground">Centro de IA para criar conteúdo para sua audiência.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <div key={tool.id} className="group p-6 rounded-2xl border border-[#1E1E1E] bg-[#111111] hover:border-[#10B981] hover:shadow-lg hover:shadow-[#10B981]/10 cursor-pointer transition-all">
            <div className="text-4xl mb-4">{tool.icon}</div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-[#10B981] transition-colors">{tool.name}</h3>
            <p className="text-sm text-muted-foreground">{tool.description}</p>
          </div>
        ))}
      </div>

      {/* Featured: AI Assistant */}
      <div className="mt-8 p-6 rounded-2xl border border-[#10B981]/30 bg-gradient-to-br from-[#10B981]/10 to-transparent">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 flex items-center justify-center text-xl">🤖</div>
          <div>
            <h3 className="font-semibold">Assistente IA NurseLab</h3>
            <p className="text-sm text-muted-foreground"> powered by GPT-4 + knowledgebase de enfermagem</p>
          </div>
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Ex: Crie um caption para post sobre cuidados paliativos..."
            className="flex-1 h-12 rounded-xl border border-[#1E1E1E] bg-[#111111] px-4 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#10B981]"
          />
          <button className="px-6 h-12 rounded-xl bg-[#10B981] text-white font-medium hover:bg-[#059669] transition-colors">
            Gerar
          </button>
        </div>
      </div>
    </div>
  );
}