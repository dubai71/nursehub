export default function FerramentasPage() {
  const tools = [
    { id: 'nursepro', name: 'NursePro', icon: '💊', description: 'SaaS de automação para plantão', url: '#' },
    { id: 'calculadoras', name: 'Calculadoras', icon: '🔢', description: 'Gotejamento, IMC, FK, dose medicamentos', url: '#' },
    { id: 'flashcards', name: 'Flashcards', icon: '🗂️', description: 'Revisão espaçada para estudos', url: '#' },
    { id: 'protocolos', name: 'Protocolos', icon: '📋', description: 'Protocolos clínicos atualizados', url: '#' },
    { id: 'checklist', name: 'Checklists', icon: '✅', description: 'Checklists personalizáveis para plantão', url: '#' },
    { id: 'genesys', name: 'GENESYS', icon: '🧬', description: 'Visão IA de longo prazo', url: '#' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Ferramentas</h1>
        <p className="text-muted-foreground">Integrações nativas para sua rotina.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <a
            key={tool.id}
            href={tool.url}
            className="p-6 rounded-2xl border border-[#1E1E1E] bg-[#111111] hover:border-[#0F4C81] hover:bg-[#111111]/80 transition-all group block"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1E1E1E] flex items-center justify-center text-3xl group-hover:bg-[#0F4C81]/20 transition-colors">
                {tool.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:text-[#0F4C81] transition-colors">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}