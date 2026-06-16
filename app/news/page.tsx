export default function NewsPage() {
  const news = [
    {
      id: '1',
      title: 'ANS aprova novos procedimentos de cobertura mínima para planos de saúde',
      summary: 'A Agência Nacional de Saúde Suplementar aprovou lista atualizada de procedimentos obrigatórios...',
      source: 'Ministério da Saúde',
      imageUrl: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600',
      publishedAt: '2026-01-15',
      categories: ['Regulação'],
    },
    {
      id: '2',
      title: 'Hospital Albert Einstein implementa IA para triagem de pacientes',
      summary: 'Sistema de inteligência artificial auxilia médicos na priorização de casos na emergência...',
      source: 'Folha de S.Paulo',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
      publishedAt: '2026-01-14',
      categories: ['Tecnologia', 'IA'],
    },
    {
      id: '3',
      title: 'Nova resolução do COFEN sobre telemedicina entra em vigor',
      summary: 'Resolução autoriza formalmente a teleconsulta e telemonitoramento por enfermeiros...',
      source: 'COFEN',
      imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600',
      publishedAt: '2026-01-13',
      categories: ['Regulação'],
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">News</h1>
        <p className="text-muted-foreground">Ultimas novidades do setor de saúde.</p>
      </div>

      <div className="space-y-4">
        {news.map((item) => (
          <article key={item.id} className="flex gap-4 p-4 rounded-2xl border border-[#1E1E1E] bg-[#111111] hover:border-[#2a2a2a] transition-all cursor-pointer group">
            <img src={item.imageUrl} alt={item.title} className="w-32 h-24 rounded-xl object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-muted-foreground">{item.source}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{item.publishedAt}</span>
              </div>
              <h3 className="font-semibold mb-1 line-clamp-2 group-hover:text-[#10B981] transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{item.summary}</p>
              <div className="flex gap-2 mt-2">
                {item.categories.map((cat) => (
                  <span key={cat} className="text-xs px-2 py-0.5 rounded-full bg-[#1E1E1E] text-muted-foreground">{cat}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}