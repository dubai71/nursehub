export default function ClassroomPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">Classroom</h2>
      <p className="text-[#888888] mb-6">Cursos e aulas da comunidade.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {['Curso 1', 'Curso 2', 'Curso 3'].map((course) => (
          <div key={course} className="p-4 rounded-xl border border-[#1E1E1E] bg-[#111111]">
            <p className="text-sm text-[#888888]">{course}</p>
          </div>
        ))}
      </div>
    </div>
  );
}