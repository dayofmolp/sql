export default function Dashboard() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">SQL Legacy Game Dashboard</h1>
      <div className="mt-4 space-y-4">
        <a href="/characters" className="text-xl text-blue-500">Characters</a>
        <br />
        <a href="/quests" className="text-xl text-blue-500">Quests</a>
      </div>
    </div>
  );
}
