export default function MembersPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">Membros</h2>
      <p className="text-[#888888] mb-6">Lista de membros da comunidade.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {['Membro 1', 'Membro 2', 'Membro 3'].map((member) => (
          <div key={member} className="p-4 rounded-xl border border-[#1E1E1E] bg-[#111111]">
            <p className="text-sm text-[#888888]">{member}</p>
          </div>
        ))}
      </div>
    </div>
  );
}