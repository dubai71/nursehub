export default function CommunityPage() {
  const communities = [
    {
      id: '1',
      name: 'UTI Brasil',
      description: 'Comunidade para profissionais de UTI. Compartilhamento de protocolos, casos clínicos e conhecimento.',
      memberCount: 12450,
      category: 'UTI',
      avatar: '🏥',
    },
    {
      id: '2',
      name: 'Enfermagem Digital',
      description: 'Inovação e tecnologia na enfermagem. IA, automação e ferramentas digitais para sua rotina.',
      memberCount: 8920,
      category: 'IA & Tech',
      avatar: '🤖',
    },
    {
      id: '3',
      name: 'SAMU & APH',
      description: 'Emergência pré-hospitalar e atendimento pré-hospitalar. Compartilhe experiências e protocolos.',
      memberCount: 6780,
      category: 'APH',
      avatar: '🚑',
    },
    {
      id: '4',
      name: 'Centro Cirúrgico',
      description: 'Discussões sobreinstrumentação, procedimentos cirúrgicos e cuidados perioperatórios.',
      memberCount: 5430,
      category: 'Centro Cirúrgico',
      avatar: '🔪',
    },
    {
      id: '5',
      name: 'Enfermeiros Creators',
      description: 'Para enfermeiros que querem criar conteúdo, construir marca pessoal e monetizar conhecimento.',
      memberCount: 11200,
      category: 'Creator',
      avatar: '📱',
    },
    {
      id: '6',
      name: 'Residência e Concursos',
      description: 'Preparação para provas de residência e concursos públicos de enfermagem.',
      memberCount: 15600,
      category: 'Concursos',
      avatar: '📝',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Comunidades</h1>
        <p className="text-muted-foreground">Conecte-se com profissionais da área.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {communities.map((comm) => (
          <div key={comm.id} className="p-5 rounded-2xl border border-[#1E1E1E] bg-[#111111] hover:border-[#2a2a2a] hover:bg-[#111111]/80 cursor-pointer transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1E1E1E] flex items-center justify-center text-3xl shrink-0">
                {comm.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold mb-1 group-hover:text-[#10B981] transition-colors">{comm.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{comm.description}</p>
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#1E1E1E] text-muted-foreground">{comm.category}</span>
                  <span className="text-xs text-muted-foreground">{comm.memberCount.toLocaleString()} membros</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}