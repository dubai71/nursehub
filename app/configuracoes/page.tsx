export default function ConfiguracoesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Configurações</h1>
        <p className="text-muted-foreground">Gerencie sua conta e preferências.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Nav */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {['Conta', 'Perfil', 'Notificações', 'Privacidade', 'Segurança'].map((item) => (
              <button
                key={item}
                className="w-full text-left px-4 py-3 rounded-xl text-sm hover:bg-[#111111] transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Account */}
          <div className="p-6 rounded-2xl border border-[#1E1E1E] bg-[#111111] space-y-4">
            <h2 className="text-lg font-semibold">Conta</h2>
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                <input type="email" defaultValue="arthur@nursehub.com" className="w-full h-11 rounded-xl border border-[#1E1E1E] bg-[#111111] px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#0F4C81]" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Senha</label>
                <input type="password" defaultValue="••••••••" className="w-full h-11 rounded-xl border border-[#1E1E1E] bg-[#111111] px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#0F4C81]" />
              </div>
            </div>
            <button className="px-6 py-2.5 rounded-xl bg-[#0F4C81] text-white font-medium hover:bg-[#1E6BB8] transition-colors">
              Salvar alterações
            </button>
          </div>

          {/* Notifications */}
          <div className="p-6 rounded-2xl border border-[#1E1E1E] bg-[#111111] space-y-4">
            <h2 className="text-lg font-semibold">Notificações</h2>
            {['Email', 'Push', 'Comunidade', 'News'].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <span>{item}</span>
                <button className="w-12 h-6 rounded-full bg-[#10B981] relative transition-colors">
                  <span className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}