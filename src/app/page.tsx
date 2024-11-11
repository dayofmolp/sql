// src/app/page.tsx

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to the SQL Legacy Game</h1>
      <a href="/dashboard" className="text-xl text-blue-500">
        Enter the Dashboard
      </a>
    </main>
  );
}
