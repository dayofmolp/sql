const characters = [
  { name: 'Fren', class: 'Bard/Magic Singer of Mischief', level: 25 },
  { name: 'Gall', class: 'Sword Master', level: 27 },
  // Add more characters here
];

export default function Characters() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Characters</h1>
      <ul>
        {characters.map((character, index) => (
          <li key={index} className="border-b py-2">
            <strong>{character.name}</strong> - {character.class} (Level {character.level})
          </li>
        ))}
      </ul>
    </div>
  );
}
