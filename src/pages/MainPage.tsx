const sections = [
  { id: 'portfolio', label: '포트폴리오', description: '작업물 모음' },
  { id: 'service', label: '서비스', description: '운영 중인 서비스' },
  { id: 'library', label: '라이브러리', description: '오픈소스 라이브러리' },
]

export default function MainPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-12">pokobox</h1>
      <ul className="flex flex-col gap-4">
        {sections.map((s) => (
          <li key={s.id} className="border border-border rounded-lg p-6 hover:bg-muted transition-colors cursor-pointer">
            <p className="text-xl font-semibold">{s.label}</p>
            <p className="text-sm text-muted-foreground mt-1">{s.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
