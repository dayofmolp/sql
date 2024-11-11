export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="mb-8">
        <h1 className="text-6xl font-extrabold mb-4">SQL Legacy Game</h1>
        <p className="text-lg max-w-xl text-center">
          Embark on a journey to master SQL and cloud computing skills in a world of legendary characters and epic quests.
        </p>
      </header>

      <section className="w-full max-w-4xl">
        <h2 className="text-4xl font-semibold mb-4">Characters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Character list will be dynamically added here */}
        </div>
      </section>

      <section className="w-full max-w-4xl mt-12">
        <h2 className="text-4xl font-semibold mb-4">Quests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Quest list will be dynamically added here */}
        </div>
      </section>
    </main>
  );
}
