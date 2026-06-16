export default function MapaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Mapa de Profissionais</h1>
        <p className="text-muted-foreground">Conecte-se com enfermeiros e técnicos de todo o Brasil.</p>
      </div>

      {/* Map Placeholder */}
      <div className="relative h-[500px] rounded-2xl border border-[#1E1E1E] bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-xl font-semibold mb-2">Mapa Mundial</h3>
            <p className="text-muted-foreground max-w-md">
              Visualize e conecte-se com profissionais de saúde de todo o Brasil. Clusterização automática, filtros por especialidade e muito mais.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {['UTI', 'Urgência', 'Centro Cirúrgico', 'IA & Tech', 'Creator'].map((f) => (
                <span key={f} className="px-3 py-1 rounded-full text-sm bg-[#1E1E1E] text-muted-foreground">{f}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Filters */}
        <div className="absolute top-4 left-4 p-4 rounded-xl border border-[#1E1E1E] bg-[#111111]/90 backdrop-blur-sm">
          <h4 className="text-sm font-medium mb-3">Filtros</h4>
          <div className="space-y-2">
            {['Urgência', 'UTI', 'APH', 'Centro Cirúrgico', 'Neonatal', 'IA'].map((f) => (
              <label key={f} className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" className="rounded border-[#1E1E1E] bg-[#111111]" />
                {f}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}