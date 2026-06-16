'use client';

export default function CommunityHomePage() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">Bem-vindo à AI Automation Society</h2>
      <p className="text-[#888888] mb-6">Esta é a página principal da comunidade. Em breve: feed de atividades, destaques e conteúdo exclusivo.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {['Post 1', 'Post 2', 'Post 3'].map((post) => (
          <div key={post} className="p-4 rounded-xl border border-[#1E1E1E] bg-[#111111]">
            <p className="text-sm text-[#888888]">Conteúdo da comunidade aqui...</p>
          </div>
        ))}
      </div>
    </div>
  );
}