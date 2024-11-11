import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-4xl font-bold mb-10">SQL Legacy Game</div>
      <div className="flex space-x-4">
        <Link href="/characters">
          <a className="text-lg underline">Characters</a>
        </Link>
        <Link href="/quests">
          <a className="text-lg underline">Quests</a>
        </Link>
      </div>
    </main>
  );
}
