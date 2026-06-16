export default function CalendarPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">Calendário</h2>
      <p className="text-[#888888] mb-6">Eventos e lives da comunidade.</p>
      <div className="grid gap-4">
        {['Evento 1', 'Evento 2'].map((event) => (
          <div key={event} className="p-4 rounded-xl border border-[#1E1E1E] bg-[#111111]">
            <p className="text-sm text-[#888888]">{event}</p>
          </div>
        ))}
      </div>
    </div>
  );
}